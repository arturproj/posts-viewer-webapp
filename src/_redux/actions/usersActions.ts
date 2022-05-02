import fetchActions from "./typesActions";

export const toggleActionRequest = () => ({
  type: fetchActions.FETCH_POST_REQUEST,
});

export const successFetchUsers = (users: []) => ({
  type: fetchActions.FETCH_POST_SUCCESS,
  payload: {
    users,
  },
});

export const failureFetchUsers = (error: string) => ({
  type: fetchActions.FETCH_POST_FAILURE,
  payload: {
    error,
  },
});
