import { ActionReducerMapBuilder, createAsyncThunk } from "@reduxjs/toolkit";
import { postCommentAsyc } from "../../../Common/Api/CommentApi/CommentApi";
import { ICommentErrorResponse, ICommentData, ICommentList, ICommentPostData } from "../../../Common/Api/CommentApi/Interfaces/Comment";

export const postComment = createAsyncThunk
<ICommentData, ICommentPostData, {rejectValue: ICommentErrorResponse}>(
    "comment-comments-list/post", async (commentData, thunkAPI) => {
        const {...data} = commentData;
        const commentResponse = await postCommentAsyc(data);

        if (commentResponse.responseStatus === 201) {
            return {
                ...commentResponse.responseJson,
                ...data, // store the submitted data directly, since only success msg is received from api
            } as ICommentData;
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
            }
            return thunkAPI.rejectWithValue((response) as ICommentErrorResponse)
        }
        else {
            let err_msg = "";
            if (commentResponse.responseJson["detail"])
                err_msg = commentResponse.responseJson["detail"]
            else if (commentResponse.responseJson["message"])
                err_msg = commentResponse.responseJson["message"]
            let response = {
                error_description: err_msg,
            }
            return thunkAPI.rejectWithValue((response) as ICommentErrorResponse)
        }
    }
)

export const postCommentBuilder = (builder: ActionReducerMapBuilder<ICommentList>) => {
    builder.addCase(postComment.pending, (state) => {
        state.request_states.post = { pending: true, fulfilled: false, rejected: false };
        return state;
    })
    builder.addCase(postComment.fulfilled, (state, action) => {
        state.results.unshift(action.payload);
        state.request_states.post = { pending: false, fulfilled: true, rejected: false };
        return state;
    })
    builder.addCase(postComment.rejected, (state, action) => {
        if (action.payload) {
            state.validation_errors = action.payload.validation_errors;
            state.error_description = action.payload.error_description;
        }
        state.request_states.post = { pending: false, fulfilled: false, rejected: true };
        return state;
    })
}