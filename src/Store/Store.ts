import { configureStore } from '@reduxjs/toolkit';
import AppSlice from "./Slices/App/AppSlice";
import PopupFormSlice from './Slices/PopupForm/PopupFormSlice';
import RequestFormSlice from './Slices/RequestForm/RequestFormSlice';
import GrievanceFormSlice from './Slices/GrievanceForm/GrievanceFormSlice';
import FeedbackFormSlice from './Slices/FeedbackForm/FeedbackFormSlice';
import PayOnlineFormSlice from './Slices/PayOnlineForm/PayOnlineFormSlice';
import CourseListSlice from './Slices/CourseList/CourseListSlice';
import ProgramListSlice from './Slices/ProgramList/ProgramListSlice';
import blogReducer from "./Slices/Blog/BlogSlice";
import blogListReducer from "./Slices/BlogList/BlogListSlice";
import commentListReducer from "./Slices/CommentList/CommentListSlice";

export default configureStore({
    reducer: {
        app: AppSlice,
        popupForm: PopupFormSlice,
        requestForm: RequestFormSlice,
        grievanceForm: GrievanceFormSlice,
        feedbackForm: FeedbackFormSlice,
        payOnlineForm: PayOnlineFormSlice,
        courseList: CourseListSlice,
        programList: ProgramListSlice,
        blog: blogReducer,
        blogList: blogListReducer,
        commentList: commentListReducer,
    },
    devTools: true,
});