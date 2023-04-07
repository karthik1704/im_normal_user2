import { ActionReducerMapBuilder, createAsyncThunk } from "@reduxjs/toolkit";
import { postRequestFormAsync } from "../../../Common/Api/Form/Request/Request";
import { IRequestForm, IRequestFormErrorResponse, IRequestFormRequest } from "../../../Common/Api/Form/Types/Form/Form";

export const postRequestForm = createAsyncThunk
<{}, IRequestFormRequest, {rejectValue: IRequestFormErrorResponse}>(
    "request_form/post", async (requestFormData, thunkAPI) => {
        const {formId, ...data} = requestFormData;
        const requestFormResponse = await postRequestFormAsync(data);

        //200: ok response
        if (requestFormResponse.responseStatus !== 200) {   
            let err_msg = "";
            if (await requestFormResponse.responseJson["detail"])
                err_msg = await requestFormResponse.responseJson["detail"]
            else if (await requestFormResponse.responseJson["message"])
                err_msg = await requestFormResponse.responseJson["message"]

            //400: bad request (probably validation error)
            if (requestFormResponse.responseStatus === 400) {
                let response = {
                    detail: {
                        validation_errors: {
                            ...requestFormResponse.responseJson,
                        }
                    },
                };
                return thunkAPI.rejectWithValue((response) as IRequestFormErrorResponse)
            }
            let response = {
                error_description: err_msg,
            }
            return thunkAPI.rejectWithValue((response) as IRequestFormErrorResponse)
        }
        return {formId: formId};
    }
)

export const postRequestFormBuilder = (builder: ActionReducerMapBuilder<IRequestForm>) => {
    builder.addCase(postRequestForm.pending, (state, {meta}) => {
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
    builder.addCase(postRequestForm.fulfilled, (state, action) => {
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
    builder.addCase(postRequestForm.rejected, (state, action) => {
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