import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./features/api/apiSlice";
import { setupListeners } from '@reduxjs/toolkit/query'
import postsReducer from "./features/posts/postsSlice";
import usersReducer from "./features/users/usersSlice";


export const store =  configureStore({
  reducer: {
    posts: postsReducer,
    users: usersReducer,
    [apiSlice.reducerPath]: apiSlice.reducerPath,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

setupListeners(store.dispatch)
