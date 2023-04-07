import { ActionReducerMapBuilder, createAsyncThunk } from "@reduxjs/toolkit";
import { patchCourseAsyc } from "../../../Common/Api/CourseApi/CourseApi";
import { ICourseInListErrorResponse, ICourseInListResponse, ICourseList, ICoursePatchRequest } from "../../../Common/Api/CourseApi/Interfaces/Course";

export const patchCourse = createAsyncThunk
<ICourseInListResponse, ICoursePatchRequest, {rejectValue: ICourseInListErrorResponse}>(
    "course-courses-list/patch", async (courseData, thunkAPI) => {
        const {url, idInState, ...data} = courseData;
        const courseResponse = await patchCourseAsyc(data, url);

        if (courseResponse.responseStatus === 200) {
            return {
                ...courseResponse.responseJson,
                idInState: idInState,
            } as ICourseInListResponse;
        }
        // else if error in input
        else if (courseResponse.responseStatus === 400) {
            let err_msg = "";
            if (courseResponse.responseJson["detail"])
                err_msg = courseResponse.responseJson["detail"]
            else if (courseResponse.responseJson["message"])
                err_msg = courseResponse.responseJson["message"]
            let response = {
                validation_errors: {
                    ...courseResponse.responseJson,
                },
                error_description: err_msg,
                idInState: idInState,
            }
            return thunkAPI.rejectWithValue((response) as ICourseInListErrorResponse)
        }
        else {
            let err_msg = "";
            if (courseResponse.responseJson["detail"])
                err_msg = courseResponse.responseJson["detail"]
            else if (courseResponse.responseJson["message"])
                err_msg = courseResponse.responseJson["message"]
            let response = {
                error_description: err_msg,
                idInState: idInState,
            }
            return thunkAPI.rejectWithValue((response) as ICourseInListErrorResponse)
        }
    }
)

export const patchCourseBuilder = (builder: ActionReducerMapBuilder<ICourseList>) => {
    builder.addCase(patchCourse.pending, (state) => {
        state.request_states.patch = { pending: true, fulfilled: false, rejected: false };
        return state;
    })
    builder.addCase(patchCourse.fulfilled, (state, action) => {
        const {idInState, ...payload} = action.payload;
        state.results[idInState] = {
            ...state.results[idInState],
            ...payload
        }
        state.request_states.patch = { pending: false, fulfilled: true, rejected: false };
        return state;
    })
    builder.addCase(patchCourse.rejected, (state, action) => {
        if (action.payload) {
            const {idInState, ...payload} = action.payload;
            state.results[idInState].validation_errors = payload.validation_errors;
            state.results[idInState].error_description = payload.error_description;
        }
        state.request_states.patch = { pending: false, fulfilled: false, rejected: true };
        return state;
    })
}