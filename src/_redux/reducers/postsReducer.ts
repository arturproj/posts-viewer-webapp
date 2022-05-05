import Actions from "../actions/typesActions";

type PostsState = {
  pending: boolean;
  posts: [];
  error?: any;
};

type PostsActions = {
  type: any;
  payload?: any;
};

const initialState: PostsState = {
  pending: false,
  posts: [],
  error: null,
};

export default (state = initialState, action: PostsActions) => {
  switch (action.type) {
    case Actions.FETCH_POST_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case Actions.FETCH_POST_SUCCESS:
      return {
        ...state,
        posts: action.payload.posts,
        pending: false,
      };
    case Actions.FETCH_POST_FAILURE:
      return {
        ...state,
        posts: [],
        pending: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
};
