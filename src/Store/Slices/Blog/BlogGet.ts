import { ActionReducerMapBuilder, createAsyncThunk } from "@reduxjs/toolkit";
import { getAsync } from "../../../Common/Api/CommonGet";
import { IBlog, IBlogData, IBlogErrorResponse, IBlogRequest } from "../../../Common/Api/BlogApi/Interfaces/Blog";

export const getBlog = createAsyncThunk
<IBlogData, IBlogRequest, {rejectValue: IBlogErrorResponse}>(
    "blog/get", async (req, thunkAPI) => {
        const blogResponse = await getAsync({url: req.url, cache: "default", credentials: "include"});

        if (blogResponse.responseStatus === 200) {
            return {
                ...blogResponse.responseJson
            } as IBlogData;
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
            return thunkAPI.rejectWithValue((response) as IBlogErrorResponse)
        }
    }
)

export const getBlogBuilder = (builder: ActionReducerMapBuilder<IBlog>) => {
    builder.addCase(getBlog.pending, (state) => {
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
    builder.addCase(getBlog.fulfilled, (state, action) => {
        return {
            ...state,
            ...action.payload,
            request_states: {
                ...state.request_states,
                get: {
                    ...state.request_states.get,
                    pending: false, fulfilled: true, rejected: false,
                }
            },
        };
    })
    builder.addCase(getBlog.rejected, (state, action) => {
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