import { ActionReducerMapBuilder, createAsyncThunk } from "@reduxjs/toolkit";
import { deleteAsync } from "../../../Common/Api/CommonDelete";
import { ICourseList, ICourseDeleteRequest, ICourseDeleteErrorResponse, ICourseDeleteResponse } from "../../../Common/Api/CourseApi/Interfaces/Course";

export const deleteCourse = createAsyncThunk
<ICourseDeleteResponse, ICourseDeleteRequest, {rejectValue: ICourseDeleteErrorResponse}>(
    "course-courses-list/delete", async (courseData, thunkAPI) => {
        const {url, idInIndex} = courseData;
        const courseResponse = await deleteAsync({url: url, credentials: 'include', cache: 'no-cache'});

        if (courseResponse.responseStatus === 204) {
            return {idInIndex: idInIndex};
        }
        // else if error in deletion
        let err_msg = "";
        if (courseResponse.responseJson["detail"])
            err_msg = courseResponse.responseJson["detail"]
        else if (courseResponse.responseJson["message"])
            err_msg = courseResponse.responseJson["message"]
        let response = {
            error_description: err_msg,
            idInIndex: idInIndex,
        } as ICourseDeleteErrorResponse;
        return thunkAPI.rejectWithValue(response)
    }
)

export const deleteCourseBuilder = (builder: ActionReducerMapBuilder<ICourseList>) => {
    builder.addCase(deleteCourse.pending, (state) => {
        state.request_states.delete = { pending: true, fulfilled: false, rejected: false };
        return state;
    })
    builder.addCase(deleteCourse.fulfilled, (state, action) => {
        state.results = state.results.filter((d, i)=> i !== action.payload.idInIndex);
        state.request_states.delete = { pending: false, fulfilled: true, rejected: false };
        return state;
    })
    builder.addCase(deleteCourse.rejected, (state, action) => {
        if (action.payload) {
            state.results[action.payload.idInIndex].error_description = action.payload.error_description;
        }
        state.request_states.delete = { pending: false, fulfilled: false, rejected: true };
        return state;
    })
}