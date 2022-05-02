import { all, takeLatest } from "redux-saga/effects";

import { fetchUsersSaga } from "./UsersSagas";

function* rootSagas() {
  yield all([takeLatest("FETCH_POST_REQUEST", fetchUsersSaga)]);
}

export default rootSagas;
