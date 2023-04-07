import { createSlice } from '@reduxjs/toolkit';

import { IFeedbackForm } from '../../../Common/Api/Form/Types/Form/Form';
import { postFeedbackFormBuilder } from './postFeedbackForm';

export const initialState: IFeedbackForm = {
    detail: {
        validation_errors: {
            email: [],
            name: [],
            parent_name: [],
            phone: [],
            remarks:[],
          
            course: [],
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

export const FeedbackFormSlice = createSlice({
    name: 'grievance_form',
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
                        parent_name: [],
                        phone: [],
                        course:[],
                      
                        remarks: [],
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
        postFeedbackFormBuilder(builder);
    }
});

export const { 
    update,resetPostState, updateValidationErrors,resetValidationErrors, reset
} = FeedbackFormSlice.actions;

export * from "./postFeedbackForm";

export default FeedbackFormSlice.reducer;