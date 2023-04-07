import { ActionReducerMapBuilder, createAsyncThunk } from "@reduxjs/toolkit";
import { postGrievanceFormAsync } from "../../../Common/Api/Form/Grievance/Grievance";
import { IGrievanceForm, IGrievanceFormErrorResponse, IGrievanceFormRequest } from "../../../Common/Api/Form/Types/Form/Form";

export const postGrievanceForm = createAsyncThunk
<{}, IGrievanceFormRequest, {rejectValue: IGrievanceFormErrorResponse}>(
    "request_form/post", async (GrievanceFormData, thunkAPI) => {
        const {formId, ...data} = GrievanceFormData;
        const GrievanceFormResponse = await postGrievanceFormAsync(data);

        //200: ok response
        if (GrievanceFormResponse.responseStatus !== 200) {   
            let err_msg = "";
            if (await GrievanceFormResponse.responseJson["detail"])
                err_msg = await GrievanceFormResponse.responseJson["detail"]
            else if (await GrievanceFormResponse.responseJson["message"])
                err_msg = await GrievanceFormResponse.responseJson["message"]

            //400: bad request (probably validation error)
            if (GrievanceFormResponse.responseStatus === 400) {
                let response = {
                    detail: {
                        validation_errors: {
                            ...GrievanceFormResponse.responseJson,
                        }
                    },
                };
                return thunkAPI.rejectWithValue((response) as IGrievanceFormErrorResponse)
            }
            let response = {
                error_description: err_msg,
            }
            return thunkAPI.rejectWithValue((response) as IGrievanceFormErrorResponse)
        }
        return {formId: formId};
    }
)

export const postGrievanceFormBuilder = (builder: ActionReducerMapBuilder<IGrievanceForm>) => {
    builder.addCase(postGrievanceForm.pending, (state, {meta}) => {
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
    builder.addCase(postGrievanceForm.fulfilled, (state, action) => {
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
    builder.addCase(postGrievanceForm.rejected, (state, action) => {
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