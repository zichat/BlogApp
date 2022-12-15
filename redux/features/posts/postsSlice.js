import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    title: "What is the best way to manage state in React",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipishskk elit, sed doeiusmod tempor.!",
  },
  {
    id: "2",
    title: "What is the best way to manage state in React",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipishskk elit, sed doeiusmod tempor.",
  },
  {
    id: "3",
    title: "What is the best way to manage state in React",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipishskk elit, sed doeiusmod tempor.",
  },
  {
    id: "4",
    title: "What is the best way to manage state in React",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipishskk elit, sed doeiusmod tempor.",
  },
  {
    id: "5",
    title: "What is the best way to manage state in React",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipishskk elit, sed doeiusmod tempor.",
  },
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
});

export default postsSlice.reducer;
