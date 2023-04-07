import { createSlice } from "@reduxjs/toolkit";
import { IBlog } from "../../../Common/Api/BlogApi/Interfaces/Blog";
import { getBlogBuilder } from "./BlogGet";

export const initialState: IBlog = {
    active: false,
    content: "",
    poster: {
        username: "",
    },
    publish_date: "",
    tags: [],
    slug: "",
    title: "",
    title_image: { image: "", url: "", thumbnail_100: "", thumbnail_200: "", },
    url: "",
    id: null,

    validation_errors: {
        active: [], title: [], title_image: [], slug: [], content: [], publish_date: [], poster: [], url: [], tags: [],
    },

    request_states: {
        get: { pending: false, fulfilled: false, rejected: false, error_description: "", },
    }
}

export const BlogSlice = createSlice({
    name: "blog", initialState,
    reducers: {
        reset: (state) => { return { ...state, ...initialState, } },
        update: (state, action) => { return { ...state, ...action.payload, } },
        resetValidationErrors: (state) => {
            // redux toolkit uses immer internally
            state.validation_errors = initialState.validation_errors;
            return state;
        },
        updateValidationErrors: (state, action) => {
            return {
                ...state,
                validation_errors: {
                    ...state.validation_errors,
                    ...action.payload,
                }
            }
        },
        resetGetState: (state) => { state.request_states.get = initialState.request_states.get; },
    },
    extraReducers: builder => {
        getBlogBuilder(builder);
    }
})

export const {
    update, reset, resetGetState, resetValidationErrors, updateValidationErrors,
} = BlogSlice.actions;

export * from "./BlogGet";

export default BlogSlice.reducer;
