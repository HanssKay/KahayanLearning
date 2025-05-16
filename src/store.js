import { configureStore } from "@reduxjs/toolkit";
import forumReducer from "./features/forum/forumSlice";
import authReducer from "./features/auth/authSlice";
import materiReducer from "./features/materi/materiSlice";

const store = configureStore({
    reducer: {
        forum: forumReducer,
        auth: authReducer,
        materi: materiReducer
    },
});

export default store;
