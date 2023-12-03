import actionTypes from "../actionTypes";


// GET USERS
export const getUsersStart = (payload) => {
    return {
      type: actionTypes.GET_USERS_START,
      payload
    };
  };

  export const getUsersFail = (payload) => {
    return {
      type: actionTypes.GET_USERS_FAIL,
      payload
    };
  };

  export const getUsersSuccess = (payload) => {
    return {
      type: actionTypes.GET_USERS_SUCCESS,
      payload
    };
  };


  export const getUsersSaga = (payload) => {
    return {
      type: actionTypes.GET_USERS_SAGA,
      payload
    };
  };


  // POST USERS
  export const postUsersStart = () => {
    return {
      type: actionTypes.POST_USERS_START,
    };
  };

  export const postUsersFail = (payload) => {
    return {
      type: actionTypes.POST_USERS_FAIL,
      payload
    };
  };

  export const postUsersSuccess = (payload) => {
    return {
      type: actionTypes.POST_USERS_SUCCESS,
      payload
    };
  };


  export const postUsersSaga = (payload) => {
    return {
      type: actionTypes.POST_USERS_SAGA,
      payload
    };
  };