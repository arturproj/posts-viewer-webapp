import axios from "axios";
import { IPost } from "../../models/IPost";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { successFetchPosts, failureFetchPosts } from "../actions/postsActions";
import { isToday } from "../../helpers";

const getPosts = () => axios.get("https://jsonplaceholder.typicode.com/posts");

export function* fetchPostsSaga() {
  const posts: string | null = localStorage.getItem("posts");
  const savedPosts: string | null = localStorage.getItem("savedUsers");
  if (posts && isToday(savedPosts)) {
    successFetchPosts(JSON.parse(posts));
  } else {
    try {
      const { data } = yield call(getPosts);
      yield put(successFetchPosts(data));
      localStorage.setItem("posts", JSON.stringify(data));
      localStorage.setItem("savedPosts", Date.now().toString());
    } catch (e: any) {
      yield put(failureFetchPosts(e.message));
    }
  }
}

export default { fetchPostsSaga };
