import { ActionReducerMapBuilder, createAsyncThunk } from "@reduxjs/toolkit";
import { postPayOnlineFormAsync } from "../../../Common/Api/Form/PayOnline/PayOnline";
import { IPayOnlineForm, IPayOnlineFormErrorResponse, IPayOnlineFormRequest } from "../../../Common/Api/Form/Types/Form/Form";

export const postPayOnlineForm = createAsyncThunk
<{}, IPayOnlineFormRequest, {rejectValue: IPayOnlineFormErrorResponse}>(
    "request_form/post", async (PayOnlineFormData, thunkAPI) => {
        const {formId, ...data} = PayOnlineFormData;
        const PayOnlineFormResponse = await postPayOnlineFormAsync(data);

        //200: ok response
        if (PayOnlineFormResponse.responseStatus !== 200) {   
            let err_msg = "";
            if (await PayOnlineFormResponse.responseJson["detail"])
                err_msg = await PayOnlineFormResponse.responseJson["detail"]
            else if (await PayOnlineFormResponse.responseJson["message"])
                err_msg = await PayOnlineFormResponse.responseJson["message"]

            //400: bad request (probably validation error)
            if (PayOnlineFormResponse.responseStatus === 400) {
                let response = {
                    detail: {
                        validation_errors: {
                            ...PayOnlineFormResponse.responseJson,
                        }
                    },
                };
                return thunkAPI.rejectWithValue((response) as IPayOnlineFormErrorResponse)
            }
            let response = {
                error_description: err_msg,
            }
            return thunkAPI.rejectWithValue((response) as IPayOnlineFormErrorResponse)
        }
        return {formId: formId};
    }
)

export const postPayOnlineFormBuilder = (builder: ActionReducerMapBuilder<IPayOnlineForm>) => {
    builder.addCase(postPayOnlineForm.pending, (state, {meta}) => {
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
    builder.addCase(postPayOnlineForm.fulfilled, (state, action) => {
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
    builder.addCase(postPayOnlineForm.rejected, (state, action) => {
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