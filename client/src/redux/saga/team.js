import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import actionTypes from "../actionTypes";
import { CreateTeamFail, CreateTeamSuccess, getTeamFail, getTeamMemberFail, getTeamMemberSuccess, getTeamSuccess } from "../action/team";

function* onGetTeamsMember(action) {
  const { payload } = action;

  try {
    const response = yield axios.get(`/api/team/${payload}`);


    yield put(getTeamMemberSuccess(response?.data?.data));
  } catch (error) {

    yield put(getTeamMemberFail(error.response));
  }
}

function* onGetTeams(action) {
  const { payload } = action;

  try {
    const response = yield axios.get("/api/team", {
      params: {
        page: payload
      },
    });


    yield put(getTeamSuccess(response?.data || []));
  } catch (error) {

    yield put(getTeamFail(error.response));
  }
}


function* onPostTeams(action) {
    const { payload } = action;

  try {
    
    const response = yield axios.post("/api/team", {
        teamname: payload.teamname,
        Description: payload.Description,
        members: payload.members
    });




    yield put(CreateTeamSuccess(response?.data));
  } catch (error) {



    yield put(CreateTeamFail(error.response?.data));
  }
}

function* TeamSaga() {
  yield takeLatest(actionTypes.POST_TEAM_START, onPostTeams);
  yield takeLatest(actionTypes.GET_TEAM_START, onGetTeams);
  yield takeLatest(actionTypes.GET_TEAM_MEMBER_START, onGetTeamsMember);
}

export default TeamSaga;
