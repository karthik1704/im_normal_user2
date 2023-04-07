import { createSlice } from "@reduxjs/toolkit";
import { IBlogList } from "../../../Common/Api/BlogApi/Interfaces/Blog";
import { getBlogListBuilder } from "./BlogListGet";

export const initialState: IBlogList = {
    next: "", previous: "", results: [],
    request_states: {
        get: { pending: false, fulfilled: false, rejected: false, error_description: "", req_id: "" },
    }
}

export const BlogListSlice = createSlice({
    name: "blog-list", initialState,
    reducers: {
        reset: (state) => { return { ...state, ...initialState, } },
        update: (state, action) => { return { ...state, ...action.payload, } },
        resetGetState: (state) => { state.request_states.get = initialState.request_states.get; },
    },
    extraReducers: builder => {
        getBlogListBuilder(builder);
    }
})

export const {
    update, reset, resetGetState,
} = BlogListSlice.actions;

export * from "./BlogListGet";

export default BlogListSlice.reducer;
