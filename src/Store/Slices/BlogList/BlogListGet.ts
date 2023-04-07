import { ActionReducerMapBuilder, createAsyncThunk } from "@reduxjs/toolkit";
import { getAsync } from "../../../Common/Api/CommonGet";
import { IBlogList, IBlogListErrorResponse, IBlogListRequest } from "../../../Common/Api/BlogApi/Interfaces/Blog";

export const getBlogList = createAsyncThunk
<IBlogList, IBlogListRequest, {rejectValue: IBlogListErrorResponse}>(
    "blog-list/get", async (req, thunkAPI) => {
        const blogResponse = await getAsync({url: req.url, cache: "default", credentials: "include"});
        
        if (blogResponse.responseStatus === 200) {
            return {
                ...blogResponse.responseJson
            } as IBlogList;
        }
        else {
            let err_msg = "";
            if (blogResponse.responseJson["detail"])
                err_msg = blogResponse.responseJson["detail"]
            else if (blogResponse.responseJson["message"])
                err_msg = blogResponse.responseJson["message"]
            let response = {
                error_description: err_msg,
            }
            return thunkAPI.rejectWithValue((response) as IBlogListErrorResponse)
        }
    }
)

export const getBlogListBuilder = (builder: ActionReducerMapBuilder<IBlogList>) => {
    builder.addCase(getBlogList.pending, (state, action) => {
        return {
            ...state,
            request_states: {
                ...state.request_states,
                get: {
                    ...state.request_states.get,
                    pending: true, fulfilled: false, rejected: false,
                    req_id: action.meta.arg.req_id,
                }
            },
        }
    })
    builder.addCase(getBlogList.fulfilled, (state, action) => {
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
    builder.addCase(getBlogList.rejected, (state, action) => {
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