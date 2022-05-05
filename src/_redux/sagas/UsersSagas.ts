import axios from "axios";
import { IUser } from "../../models/IUser";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { successFetchUsers, failureFetchUsers } from "../actions/usersActions";
import { isToday } from "../../helpers";

const getUsers = () => axios.get("https://jsonplaceholder.typicode.com/users");

export function* fetchUsersSaga() {
  const users: string | null = localStorage.getItem("users");
  const savedUsers: string | null = localStorage.getItem("savedUsers");
  if (users && isToday(savedUsers)) {
    successFetchUsers(JSON.parse(users));
  } else {
    try {
      const { data } = yield call(getUsers);
      yield put(successFetchUsers(data));
      localStorage.setItem("users", JSON.stringify(data));
      localStorage.setItem("savedUsers", Date.now().toString());
    } catch (e: any) {
      yield put(failureFetchUsers(e.message));
    }
  }
}

export default { fetchUsersSaga };
