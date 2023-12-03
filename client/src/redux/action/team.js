import actionTypes from "../actionTypes";
// POST USERS
export const CreateTeamAction = (payload) => {
    return {
      type: actionTypes.POST_TEAM_START,
      payload
    };
  };

export const CreateTeamSuccess = (payload) => {
    return {
      type: actionTypes.POST_TEAM_SUCCESS,
      payload
    };
  };

export const CreateTeamFail = (payload) => {
    return {
      type: actionTypes.POST_TEAM_FAIL,
      payload
    };
  };

  // Get
export const getTeamAction = (payload) => {
    return {
      type: actionTypes.GET_TEAM_START,
      payload
    };
  };

export const getTeamSuccess = (payload) => {
    return {
      type: actionTypes.GET_TEAM_SUCCESS,
      payload
    };
  };

export const getTeamFail = (payload) => {
    return {
      type: actionTypes.GET_TEAM_FAIL,
      payload
    };
  };

export const getTeamMemberAction = (payload) => {
    return {
      type: actionTypes.GET_TEAM_MEMBER_START,
      payload
    };
  };

export const getTeamMemberSuccess = (payload) => {
    return {
      type: actionTypes.GET_TEAM_MEMBER_SUCCESS,
      payload
    };
  };

export const getTeamMemberFail = (payload) => {
    return {
      type: actionTypes.GET_TEAM_MEMBER_FAIL,
      payload
    };
  };

