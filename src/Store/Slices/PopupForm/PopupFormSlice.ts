import { createSlice } from '@reduxjs/toolkit';

import { IPopupForm } from '../../../Common/Api/Form/Types/Form/Form';
import { postPopupFormBuilder } from './postPopupForm';

export const initialState: IPopupForm = {
    detail: {
        validation_errors: {
            email: [],
            name: [],
            phone: [],
        }
    },
    request_states: {
        post: {
            pending: false, fulfilled: false, rejected: false,
            error_description: "",
        },
    },
    error_description: "",
}

export const PopupFormSlice = createSlice({
    name: 'popup_form',
    initialState,
    reducers: {
        update: (state, action) => {
            return {
                ...state,
                ...action.payload,
            }
        },
        reset: (state) => {
            return {
                ...state,
                ...initialState,
            }
        },
        updateValidationErrors: (state, action) => {
            return {
                ...state,
                detail: {
                    ...state.detail,
                    validation_errors: {
                        ...state.detail.validation_errors,
                        ...action.payload,
                    }
                }
            }
        },
        resetValidationErrors: (state) => {
            return {
                ...state,
                detail: {
                    ...state.detail,
                    validation_errors: {
                        email: [],
                        name: [],
                        phone: [],
                    },
                }
            }
        },
        resetPostState: (state) => {
            return {
                ...state,
                request_states: {
                    ...state.request_states,
                    post: {
                        ...state.request_states.post,
                        pending: false,
                        fulfilled: false,
                        rejected: false,
                        error_description: "",
                    }
                },
            }
        },
    },
    extraReducers: builder => {
        postPopupFormBuilder(builder);
    }
});

export const { 
    update,resetPostState, updateValidationErrors,resetValidationErrors, reset
} = PopupFormSlice.actions;

export * from "./postPopupForm";

export default PopupFormSlice.reducer;