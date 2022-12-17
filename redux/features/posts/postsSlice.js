import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    title: "What is the best way to manage state in React!",
    content:
      "I'm looking for an individual to perform email outreach. Templates will be provided, so its largely a data entry role. You must be able to set up an email and send emails in accordance with the procedures provided.Thank you",
  },
  {
    id: "2",
    title: "What is the best way to manage state in React!",
    content:
      "I'm looking for an individual to perform email outreach. Templates will be provided, so its largely a data entry role. You must be able to set up an email and send emails in accordance with the procedures provided.Thank you",
  },
  {
    id: "3",
    title: "What is the best way to manage state in React!",
    content:
      "I'm looking for an individual to perform email outreach. Templates will be provided, so its largely a data entry role. You must be able to set up an email and send emails in accordance with the procedures provided.Thank you",
  },
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded(state, action) {
      state.push(action.payload);
    },
    prepare(title, content, userId) {
      return {
        payload: {
          id: nanoid(),
          title,
          content,
          user: userId,
        },
      };
    },
    postUpdated(state, action) {
      const { id, title, content } = action.payload;
      const existingPost = state.find((post) => post.id === id);
      if (existingPost) {
        existingPost.title = title;
        existingPost.content = content;
      }
    },
  },
});

export const { postAdded, postUpdated } = postsSlice.actions;

export default postsSlice.reducer;
