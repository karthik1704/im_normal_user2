import { createSlice } from '@reduxjs/toolkit';

import { IGrievanceForm } from '../../../Common/Api/Form/Types/Form/Form';
import { postGrievanceFormBuilder } from './postGrievanceForm';

export const initialState: IGrievanceForm = {
    detail: {
        validation_errors: {
            email: [],
            name: [],
            parent_name: [],
            phone: [],
            message:[],
          
            nature_of_grievance: [],
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

export const GrievanceFormSlice = createSlice({
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
                        message:[],
                      
                        nature_of_grievance: [],
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
        postGrievanceFormBuilder(builder);
    }
});

export const { 
    update,resetPostState, updateValidationErrors,resetValidationErrors, reset
} = GrievanceFormSlice.actions;

export * from "./postGrievanceForm";

export default GrievanceFormSlice.reducer;