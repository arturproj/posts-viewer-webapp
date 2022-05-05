import fetchActions from "./typesActions";

export const toggleUsersRequest = () => ({
  type: fetchActions.FETCH_USER_REQUEST,
});

export const successFetchUsers = (users: []) => ({
  type: fetchActions.FETCH_USER_SUCCESS,
  payload: {
    users,
  },
});

export const failureFetchUsers = (error: string) => ({
  type: fetchActions.FETCH_USER_FAILURE,
  payload: {
    error,
  },
});
