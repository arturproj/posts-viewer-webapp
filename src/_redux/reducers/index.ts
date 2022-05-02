import { combineReducers } from "@reduxjs/toolkit";
import postsReducer from "./postsReducer";
import usersReducer from "./usersReducers";
const rootReducer = combineReducers({
  posts: postsReducer,
  users: usersReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
