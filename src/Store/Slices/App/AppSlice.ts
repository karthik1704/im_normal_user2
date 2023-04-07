import { createSlice } from '@reduxjs/toolkit';

export interface IApp {
    allPagePopupForm: {
        isHidden: boolean,
        isHiddenPermanent: boolean,
    }
}

export const initialState: IApp = {
    allPagePopupForm: {
        isHidden: false,
        isHiddenPermanent: false,
    }
}

export const AppSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        update: (state, action) => {
            return {
                ...state,
                ...action.payload,
            }
        },
        hideAllPagePopupForm: (state) => {
            state.allPagePopupForm.isHidden = true;
            return state;
        },
        hideAllPagePopupFormPermanently: (state) => {
            state.allPagePopupForm.isHiddenPermanent = true;
            return state;
        },
        unhideAllPagePopupForm: (state) => {
            state.allPagePopupForm.isHidden = false;
            state.allPagePopupForm.isHiddenPermanent = false;
            return state;
        },
    }
});

export const { 
    update, hideAllPagePopupForm, unhideAllPagePopupForm, hideAllPagePopupFormPermanently
} = AppSlice.actions;

export default AppSlice.reducer;