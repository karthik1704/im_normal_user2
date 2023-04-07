import { ActionReducerMapBuilder, createAsyncThunk } from "@reduxjs/toolkit";
import { postFeedbackFormAsync } from "../../../Common/Api/Form/Feedback/Feedback";
import { IFeedbackForm, IFeedbackFormErrorResponse, IFeedbackFormRequest } from "../../../Common/Api/Form/Types/Form/Form";

export const postFeedbackForm = createAsyncThunk
<{}, IFeedbackFormRequest, {rejectValue: IFeedbackFormErrorResponse}>(
    "request_form/post", async (FeedbackFormData, thunkAPI) => {
        const {formId, ...data} = FeedbackFormData;
        const FeedbackFormResponse = await postFeedbackFormAsync(data);

        //200: ok response
        if (FeedbackFormResponse.responseStatus !== 200) {   
            let err_msg = "";
            if (await FeedbackFormResponse.responseJson["detail"])
                err_msg = await FeedbackFormResponse.responseJson["detail"]
            else if (await FeedbackFormResponse.responseJson["message"])
                err_msg = await FeedbackFormResponse.responseJson["message"]

            //400: bad request (probably validation error)
            if (FeedbackFormResponse.responseStatus === 400) {
                let response = {
                    detail: {
                        validation_errors: {
                            ...FeedbackFormResponse.responseJson,
                        }
                    },
                };
                return thunkAPI.rejectWithValue((response) as IFeedbackFormErrorResponse)
            }
            let response = {
                error_description: err_msg,
            }
            return thunkAPI.rejectWithValue((response) as IFeedbackFormErrorResponse)
        }
        return {formId: formId};
    }
)

export const postFeedbackFormBuilder = (builder: ActionReducerMapBuilder<IFeedbackForm>) => {
    builder.addCase(postFeedbackForm.pending, (state, {meta}) => {
        return {
            ...state,
            request_states: {
                ...state.request_states,
                post: {
                    ...state.request_states.post,
                    pending: true,
                    fulfilled: false,
                    rejected: false,
                    formId: meta.arg.formId,
                }
            },
        }
    })
    builder.addCase(postFeedbackForm.fulfilled, (state, action) => {
        return {
            ...state,
            request_states: {
                ...state.request_states,
                post: {
                    ...state.request_states.post,
                    pending: false,
                    fulfilled: true,
                    rejected: false,
                    formId: action.meta.arg.formId,
                }
            },
        };
    })
    builder.addCase(postFeedbackForm.rejected, (state, action) => {
        console.log(action)
        return {
            ...state,
            detail: {
                ...state.detail,
                ...action.payload?.detail,
                validation_errors: {
                    ...state.detail.validation_errors,
                    ...action.payload?.detail?.validation_errors
                },
            },
            request_states: {
                ...state.request_states,
                post: {
                    ...state.request_states.post,
                    error_description: action.payload?.error_description,
                    pending: false,
                    fulfilled: false,
                    rejected: true,
                    formId: action.meta.arg.formId,
                }
            },
        };
    })
}