import actionTypes from "../actionTypes";

const initialState = {
  isLoading: false,
  error: null,
  users: null,
  TotalPages: null,
  totalDomain: null,

  post_isLoading: false,
  post_error: null,
  post_data: null,
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    // GET USERS
    case actionTypes.GET_USERS_START:
      state = {
        ...state,
        error: null,
        users: null,
        isLoading: true,
      };
      break;
    case actionTypes.GET_USERS_SUCCESS:
      state = { ...state, isLoading: false, users: action.payload.data, TotalPages: action.payload.TotalPages, totalDomain: action.payload.totalDomain };
      break;
    case actionTypes.GET_USERS_FAIL:
      state = { ...state, isLoading: false, error: action.payload };
      break;

    // POST USERS

    case actionTypes.POST_USERS_START:
      state = {
        ...state,
        post_error: null,
        post_data: null,
        post_isLoading: true,
      };
      break;
    case actionTypes.POST_USERS_SUCCESS:
      state = { ...state, post_isLoading: false, post_data: action.payload };
      break;
    case actionTypes.POST_USERS_FAIL:
      state = { ...state, post_isLoading: false, post_error: action.payload };
      break;

    default:
      state = { ...state };
      break;
  }
  return state;
};

export default UserReducer;
