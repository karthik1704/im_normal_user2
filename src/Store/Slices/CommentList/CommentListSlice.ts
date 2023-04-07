import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICommentList } from "../../../Common/Api/CommentApi/Interfaces/Comment";
import { deleteCommentBuilder } from "./CommentDelete";
import { getCommentListBuilder } from "./CommentListGet";
import { patchCommentBuilder } from "./CommentPatch";
import { postCommentBuilder } from "./CommentPost";

export const initialState: ICommentList = {
    next: "", previous: "", results: [],
    validation_errors: undefined,
    error_description: undefined,
    request_states: {
        get: { pending: false, fulfilled: false, rejected: false, error_description: "", },
        post: { pending: false, fulfilled: false, rejected: false, error_description: "", },
        patch: { pending: false, fulfilled: false, rejected: false, error_description: "", },
        delete: { pending: false, fulfilled: false, rejected: false, error_description: "", },
    }
}

export const CommentListSlice = createSlice({
    name: "comment-list", initialState,
    reducers: {
        reset: (state) => { return { ...state, ...initialState, } },
        update: (state, action) => { return { ...state, ...action.payload, } },
        resetReqState: (state, action: PayloadAction<{
            get?: boolean, post?: boolean, patch?: boolean, _delete?: boolean, validation_errors?: boolean, error_description?: boolean
        }>) => {
            const {get, post, patch, validation_errors, error_description, _delete} = action.payload;
            if (get) state.request_states.get = initialState.request_states.get;
            if (post) state.request_states.post = initialState.request_states.post;
            if (patch) state.request_states.patch = initialState.request_states.patch;
            if (_delete) state.request_states.delete = initialState.request_states.delete;
            if (validation_errors) state.validation_errors = initialState.validation_errors;
            if (error_description) state.error_description = initialState.error_description;
            
            return state;
        },
        resetItemReqState: (state, action: PayloadAction<{
            index: number, validation_errors?: boolean, error_description?: boolean
        }>) => {
            const {index, validation_errors, error_description} = action.payload;
            if (validation_errors) state.results[index].validation_errors = initialState.validation_errors;
            if (error_description) state.results[index].error_description = initialState.error_description;
            
            return state;
        },
    },
    extraReducers: builder => {
        getCommentListBuilder(builder);
        patchCommentBuilder(builder);
        postCommentBuilder(builder);
        deleteCommentBuilder(builder);
    }
})

export const {
    update, reset, resetReqState, resetItemReqState
} = CommentListSlice.actions;

export * from "./CommentListGet";
export * from "./CommentPatch";
export * from "./CommentPost";
export * from "./CommentDelete";

export default CommentListSlice.reducer;
