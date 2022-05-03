import { all, takeLatest } from "redux-saga/effects";

import { fetchUsersSaga } from "./UsersSagas";

function* rootSagas() {
  yield all([takeLatest("FETCH_USER_REQUEST", fetchUsersSaga)]);
}

export default rootSagas;
