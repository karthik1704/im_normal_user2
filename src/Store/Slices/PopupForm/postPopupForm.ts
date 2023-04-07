import { ActionReducerMapBuilder, createAsyncThunk } from "@reduxjs/toolkit";
import { postPopupFormAsync } from "../../../Common/Api/Form/Popup/Popup";
import { IPopupForm, IPopupFormErrorResponse, IPopupFormRequest } from "../../../Common/Api/Form/Types/Form/Form";

export const postPopupForm = createAsyncThunk
<{}, IPopupFormRequest, {rejectValue: IPopupFormErrorResponse}>(
    "popup_form/post", async (popupFormData, thunkAPI) => {
        const popupFormResponse = await postPopupFormAsync(popupFormData);

        //200: ok response
        if (popupFormResponse.responseStatus !== 200) {   
            let err_msg = "";
            if (await popupFormResponse.responseJson["detail"])
                err_msg = await popupFormResponse.responseJson["detail"]
            else if (await popupFormResponse.responseJson["message"])
                err_msg = await popupFormResponse.responseJson["message"]

            //400: bad request (probably validation error)
            if (popupFormResponse.responseStatus === 400) {
                let response = {
                    detail: {
                        validation_errors: {
                            ...popupFormResponse.responseJson
                        }
                    }
                }
                return thunkAPI.rejectWithValue((response) as IPopupFormErrorResponse)
            }
            let response = {
                error_description: err_msg,
            }
            return thunkAPI.rejectWithValue((response) as IPopupFormErrorResponse)
        }
        return {};
    }
)

export const postPopupFormBuilder = (builder: ActionReducerMapBuilder<IPopupForm>) => {
    builder.addCase(postPopupForm.pending, (state) => {
        return {
            ...state,
            request_states: {
                ...state.request_states,
                post: {
                    ...state.request_states.post,
                    pending: true,
                    fulfilled: false,
                    rejected: false,
                }
            },
        }
    })
    builder.addCase(postPopupForm.fulfilled, (state) => {
        return {
            ...state,
            request_states: {
                ...state.request_states,
                post: {
                    ...state.request_states.post,
                    pending: false,
                    fulfilled: true,
                    rejected: false,
                }
            },
        };
    })
    builder.addCase(postPopupForm.rejected, (state, action) => {
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
                    error_description: action.payload!.error_description,
                    pending: false,
                    fulfilled: false,
                    rejected: true,
                }
            },
        };
    })
}