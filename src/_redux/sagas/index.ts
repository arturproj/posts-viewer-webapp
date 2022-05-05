import { all, takeLatest } from "redux-saga/effects";

import { fetchUsersSaga } from "./UsersSagas";
import { fetchPostsSaga } from "./PostsSagas";

function* rootSagas() {
  yield all([
    takeLatest("FETCH_USER_REQUEST", fetchUsersSaga),
    takeLatest("FETCH_POST_REQUEST", fetchPostsSaga),
  ]);
}

export default rootSagas;
