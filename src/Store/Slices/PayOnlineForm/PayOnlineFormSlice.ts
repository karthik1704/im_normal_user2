import { createSlice } from "@reduxjs/toolkit";

import { IPayOnlineForm } from "../../../Common/Api/Form/Types/Form/Form";
import { postPayOnlineFormBuilder } from "./postPayOnlineForm";

export const initialState: IPayOnlineForm = {
  detail: {
    validation_errors: {
      email: [],
      firstName: [],
      lastName: [],
      phone: [],
      amount: [],
      address: [],
      course: [],
    },
  },
  request_states: {
    post: {
      pending: false,
      fulfilled: false,
      rejected: false,
      formId: undefined,
      error_description: "",
    },
  },
  error_description: "",
};

export const PayOnlineFormSlice = createSlice({
  name: "grievance_form",
  initialState,
  reducers: {
    update: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
    reset: (state) => {
      return {
        ...state,
        ...initialState,
      };
    },
    updateValidationErrors: (state, action) => {
      return {
        ...state,
        detail: {
          ...state.detail,
          validation_errors: {
            ...state.detail.validation_errors,
            ...action.payload,
          },
        },
      };
    },
    resetValidationErrors: (state) => {
      return {
        ...state,
        detail: {
          ...state.detail,
          validation_errors: {
            email: [],
            firstName: [],
            lastName: [],
            phone: [],
            amount: [],
            address: [],
            course: [],
          },
        },
      };
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
          },
        },
      };
    },
  },
  extraReducers: (builder) => {
    postPayOnlineFormBuilder(builder);
  },
});

export const {
  update,
  resetPostState,
  updateValidationErrors,
  resetValidationErrors,
  reset,
} = PayOnlineFormSlice.actions;

export * from "./postPayOnlineForm";

export default PayOnlineFormSlice.reducer;
