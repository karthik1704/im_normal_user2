import { ActionReducerMapBuilder, createAsyncThunk } from "@reduxjs/toolkit";
import { getAsync } from "../../../Common/Api/CommonGet";
import { ICourseList, ICourseListErrorResponse, ICourseListRequest } from "../../../Common/Api/CourseApi/Interfaces/Course";
import { COURSE_URL } from "../../../Common/Globals";

export const getCourseList = createAsyncThunk
<ICourseList, ICourseListRequest | undefined, {rejectValue: ICourseListErrorResponse}>(
    "course-list/get", async (req, thunkAPI) => {
        const courseResponse = await getAsync({url: (req)?req.url:COURSE_URL["URL"], cache: "default", credentials: "include"});
        
        if (courseResponse.responseStatus === 200) {
            return {
                ...courseResponse.responseJson
            } as ICourseList;
        }
        else {
            let err_msg = "";
            if (courseResponse.responseJson["detail"])
                err_msg = courseResponse.responseJson["detail"]
            else if (courseResponse.responseJson["message"])
                err_msg = courseResponse.responseJson["message"]
            let response = {
                error_description: err_msg,
            }
            return thunkAPI.rejectWithValue((response) as ICourseListErrorResponse)
        }
    }
)

export const getCourseListBuilder = (builder: ActionReducerMapBuilder<ICourseList>) => {
    builder.addCase(getCourseList.pending, (state) => {
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
    builder.addCase(getCourseList.fulfilled, (state, action) => {
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
    builder.addCase(getCourseList.rejected, (state, action) => {
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