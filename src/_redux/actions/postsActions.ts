import fetchActions from "./typesActions";

export const togglePostsRequest = () => ({
  type: fetchActions.FETCH_POST_REQUEST,
});

export const successFetchPosts = (posts: []) => ({
  type: fetchActions.FETCH_POST_SUCCESS,
  payload: {
    posts,
  },
});

export const failureFetchPosts = (error: string) => ({
  type: fetchActions.FETCH_POST_FAILURE,
  payload: {
    error,
  },
});
