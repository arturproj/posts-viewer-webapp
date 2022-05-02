import Actions from "../actions/typesActions";

type UsersState = {
  pending: boolean;
  users: [];
  error?: any;
};

type UsersActions = {
  type: any;
  payload?: any;
};

const initialState: UsersState = {
  pending: false,
  users: [],
  error: null,
};

export default (state = initialState, action: UsersActions) => {
  switch (action.type) {
    case Actions.FETCH_POST_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case Actions.FETCH_POST_SUCCESS:
      return {
        ...state,
        users: action.payload.users,
        pending: false,
      };
    case Actions.FETCH_POST_FAILURE:
      return {
        ...state,
        users: [],
        pending: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
};
