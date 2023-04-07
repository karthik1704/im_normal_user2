import { ActionReducerMapBuilder, createAsyncThunk } from "@reduxjs/toolkit";
import { patchCommentAsyc } from "../../../Common/Api/CommentApi/CommentApi";
import { ICommentInListErrorResponse, ICommentInListResponse, ICommentList, ICommentPatchRequest } from "../../../Common/Api/CommentApi/Interfaces/Comment";

export const patchComment = createAsyncThunk
<ICommentInListResponse, ICommentPatchRequest, {rejectValue: ICommentInListErrorResponse}>(
    "comment-comments-list/patch", async (commentData, thunkAPI) => {
        const {url, idInState, ...data} = commentData;
        const commentResponse = await patchCommentAsyc(data, url);

        if (commentResponse.responseStatus === 200) {
            return {
                ...commentResponse.responseJson,
                idInState: idInState,
            } as ICommentInListResponse;
        }
        // else if error in input
        else if (commentResponse.responseStatus === 400) {
            let err_msg = "";
            if (commentResponse.responseJson["detail"])
                err_msg = commentResponse.responseJson["detail"]
            else if (commentResponse.responseJson["message"])
                err_msg = commentResponse.responseJson["message"]
            let response = {
                validation_errors: {
                    ...commentResponse.responseJson,
                },
                error_description: err_msg,
                idInState: idInState,
            }
            return thunkAPI.rejectWithValue((response) as ICommentInListErrorResponse)
        }
        else {
            let err_msg = "";
            if (commentResponse.responseJson["detail"])
                err_msg = commentResponse.responseJson["detail"]
            else if (commentResponse.responseJson["message"])
                err_msg = commentResponse.responseJson["message"]
            let response = {
                error_description: err_msg,
                idInState: idInState,
            }
            return thunkAPI.rejectWithValue((response) as ICommentInListErrorResponse)
        }
    }
)

export const patchCommentBuilder = (builder: ActionReducerMapBuilder<ICommentList>) => {
    builder.addCase(patchComment.pending, (state) => {
        state.request_states.patch = { pending: true, fulfilled: false, rejected: false };
        return state;
    })
    builder.addCase(patchComment.fulfilled, (state, action) => {
        const {idInState, ...payload} = action.payload;
        state.results[idInState] = {
            ...state.results[idInState],
            ...payload
        }
        state.request_states.patch = { pending: false, fulfilled: true, rejected: false };
        return state;
    })
    builder.addCase(patchComment.rejected, (state, action) => {
        if (action.payload) {
            const {idInState, ...payload} = action.payload;
            state.results[idInState].validation_errors = payload.validation_errors;
            state.results[idInState].error_description = payload.error_description;
        }
        state.request_states.patch = { pending: false, fulfilled: false, rejected: true };
        return state;
    })
}