import { createSlice } from '@reduxjs/toolkit';

import { IRequestForm } from '../../../Common/Api/Form/Types/Form/Form';
import { postRequestFormBuilder } from './postRequestForm';

export const initialState: IRequestForm = {
    detail: {
        validation_errors: {
            email: [],
            name: [],
            phone: [],
            // program: [],
            // course: [],
            location: [],
        }
    },
    request_states: {
        post: {
            pending: false, fulfilled: false, rejected: false, formId: undefined,
            error_description: "",
        },
    },
    error_description: "",
}

export const RequestFormSlice = createSlice({
    name: 'request_form',
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
                        // program: [],
                        // course: [],
                        location: [],
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
        postRequestFormBuilder(builder);
    }
});

export const { 
    update,resetPostState, updateValidationErrors,resetValidationErrors, reset
} = RequestFormSlice.actions;

export * from "./postRequestForm";

export default RequestFormSlice.reducer;