import { ActionReducerMapBuilder, createAsyncThunk } from "@reduxjs/toolkit";
import { getAsync } from "../../../Common/Api/CommonGet";
import { ICommentList, ICommentListErrorResponse, ICommentListRequest } from "../../../Common/Api/CommentApi/Interfaces/Comment";
import { COMMENT_URL } from "../../../Common/Globals";

export const getCommentList = createAsyncThunk
<ICommentList, ICommentListRequest | undefined, {rejectValue: ICommentListErrorResponse}>(
    "comment-list/get", async (req, thunkAPI) => {
        const commentResponse = await getAsync({url: (req)?req.url:COMMENT_URL["URL"], cache: "default", credentials: "include"});
        
        if (commentResponse.responseStatus === 200) {
            return {
                ...commentResponse.responseJson
            } as ICommentList;
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
            return thunkAPI.rejectWithValue((response) as ICommentListErrorResponse)
        }
    }
)

export const getCommentListBuilder = (builder: ActionReducerMapBuilder<ICommentList>) => {
    builder.addCase(getCommentList.pending, (state) => {
        return {
            ...state,
            request_states: {
                ...state.request_states,
                get: {
                    ...state.request_states.get,
                    pending: true, fulfilled: false, rejected: false,
                }
            },
        }
    })
    builder.addCase(getCommentList.fulfilled, (state, action) => {
        return {
            ...state,
            ...action.payload,
            // append to the existing list to reduce network usage
            results: [ ...state.results, ...action.payload.results ],
            request_states: {
                ...state.request_states,
                get: {
                    ...state.request_states.get,
                    pending: false, fulfilled: true, rejected: false,
                }
            },
        };
    })
    builder.addCase(getCommentList.rejected, (state, action) => {
        return {
            ...state,
            request_states: {
                ...state.request_states,
                get: {
                    ...state.request_states.get,
                    pending: false, fulfilled: false, rejected: true,
                    error_description: action.payload?.error_description,
                }
            },
        };
    })
}