import axios from "axios";
import { IUser } from "../../models/IUser";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { successFetchUsers, failureFetchUsers } from "../actions/usersActions";

const getUsers = () => axios.get("https://jsonplaceholder.typicode.com/users");

export function* fetchUsersSaga() {
  try {
    const { data } = yield call(getUsers);
    yield put(successFetchUsers(data));
  } catch (e: any) {
    yield put(failureFetchUsers(e.message));
  }
}

export default { fetchUsersSaga };
