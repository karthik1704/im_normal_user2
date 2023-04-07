import { ActionReducerMapBuilder, createAsyncThunk } from "@reduxjs/toolkit";
import { deleteAsync } from "../../../Common/Api/CommonDelete";
import { ICommentList, ICommentDeleteRequest, ICommentDeleteErrorResponse, ICommentDeleteResponse } from "../../../Common/Api/CommentApi/Interfaces/Comment";

export const deleteComment = createAsyncThunk
<ICommentDeleteResponse, ICommentDeleteRequest, {rejectValue: ICommentDeleteErrorResponse}>(
    "comment-comments-list/delete", async (commentData, thunkAPI) => {
        const {url, idInIndex} = commentData;
        const commentResponse = await deleteAsync({url: url, credentials: 'include', cache: 'no-cache'});

        if (commentResponse.responseStatus === 204) {
            return {idInIndex: idInIndex};
        }
        // else if error in deletion
        let err_msg = "";
        if (commentResponse.responseJson["detail"])
            err_msg = commentResponse.responseJson["detail"]
        else if (commentResponse.responseJson["message"])
            err_msg = commentResponse.responseJson["message"]
        let response = {
            error_description: err_msg,
            idInIndex: idInIndex,
        } as ICommentDeleteErrorResponse;
        return thunkAPI.rejectWithValue(response)
    }
)

export const deleteCommentBuilder = (builder: ActionReducerMapBuilder<ICommentList>) => {
    builder.addCase(deleteComment.pending, (state) => {
        state.request_states.delete = { pending: true, fulfilled: false, rejected: false };
        return state;
    })
    builder.addCase(deleteComment.fulfilled, (state, action) => {
        state.results = state.results.filter((d, i)=> i !== action.payload.idInIndex);
        state.request_states.delete = { pending: false, fulfilled: true, rejected: false };
        return state;
    })
    builder.addCase(deleteComment.rejected, (state, action) => {
        if (action.payload) {
            state.results[action.payload.idInIndex].error_description = action.payload.error_description;
        }
        state.request_states.delete = { pending: false, fulfilled: false, rejected: true };
        return state;
    })
}