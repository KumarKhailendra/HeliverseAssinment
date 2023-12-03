import actionTypes from "../actionTypes";

const initialState = {
  isLoading: false,
  error: null,
  data: [],
};

const TeamsReducer = (state = initialState, action) => {

  switch (action.type) {
    // POST USERS
    case actionTypes.POST_TEAM_START:

      state = {
        ...state,
        error: null,
        isLoading: true,
      };
      break;

    case actionTypes.POST_TEAM_SUCCESS:

      state = { ...state, isLoading: false, data: [action?.payload.newTeam, ...state.data ]};
      break;
    case actionTypes.POST_TEAM_FAIL:

      state = { ...state, isLoading: false, error: action.payload };
      break;
      // get
    case actionTypes.GET_TEAM_START:
      state = {
        ...state,
        error: null,
        isLoading: true,
      };
      break;

    case actionTypes.GET_TEAM_SUCCESS:

      state = { ...state, isLoading: false, data: action.payload};
      break;
    case actionTypes.GET_TEAM_FAIL:

      state = { ...state, isLoading: false, error: action.payload };
      break;

      // GET TEAM MEMBER AND TEAM DEATIL
    case actionTypes.GET_TEAM_MEMBER_START:
      state = {
        ...state,
        error: null,
        isLoading: true,
      };
      break;

    case actionTypes.GET_TEAM_MEMBER_SUCCESS:

      state = { ...state, isLoading: false, data: action.payload};
      break;
    case actionTypes.GET_TEAM_MEMBER_FAIL:

      state = { ...state, isLoading: false, error: action.payload };
      break;

    default:
      state = { ...state };
      break;
  }
  return state;
};

export default TeamsReducer;
