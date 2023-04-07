import { ActionReducerMapBuilder, createAsyncThunk } from "@reduxjs/toolkit";
import { postCourseAsyc } from "../../../Common/Api/CourseApi/CourseApi";
import { ICourseErrorResponse, ICourseData, ICourseList, ICoursePostData } from "../../../Common/Api/CourseApi/Interfaces/Course";

export const postCourse = createAsyncThunk
<ICourseData, ICoursePostData, {rejectValue: ICourseErrorResponse}>(
    "course-courses-list/post", async (courseData, thunkAPI) => {
        const {...data} = courseData;
        const courseResponse = await postCourseAsyc(data);

        if (courseResponse.responseStatus === 201) {
            return {
                ...courseResponse.responseJson,
                ...data, // store the submitted data directly, since only success msg is received from api
            } as ICourseData;
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
            }
            return thunkAPI.rejectWithValue((response) as ICourseErrorResponse)
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
            return thunkAPI.rejectWithValue((response) as ICourseErrorResponse)
        }
    }
)

export const postCourseBuilder = (builder: ActionReducerMapBuilder<ICourseList>) => {
    builder.addCase(postCourse.pending, (state) => {
        state.request_states.post = { pending: true, fulfilled: false, rejected: false };
        return state;
    })
    builder.addCase(postCourse.fulfilled, (state, action) => {
        state.results.unshift(action.payload);
        state.request_states.post = { pending: false, fulfilled: true, rejected: false };
        return state;
    })
    builder.addCase(postCourse.rejected, (state, action) => {
        if (action.payload) {
            state.validation_errors = action.payload.validation_errors;
            state.error_description = action.payload.error_description;
        }
        state.request_states.post = { pending: false, fulfilled: false, rejected: true };
        return state;
    })
}