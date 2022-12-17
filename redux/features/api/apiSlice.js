import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",

  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com" }),

  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => "/posts",
    }),

    getPost: builder.query({
      query: (postId) => `/posts/${postId}`,
    }),

    addNewPost: builder.mutation({
      query: (initialPost) => ({
        url: "/posts/add",
        method: "POST",
        body: initialPost,
      }),
    }),
  }),
});

// Export the auto-generated hook for the `getPosts` query endpoint
export const { useGetPostsQuery, useGetPostQuery, useAddNewPostMutation } =
  apiSlice;
