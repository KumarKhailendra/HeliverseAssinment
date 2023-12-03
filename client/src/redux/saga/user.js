import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import {
  getUsersFail,
  getUsersStart,
  getUsersSuccess,
  postUsersFail,
  postUsersStart,
  postUsersSuccess,
} from "../action/user";
import actionTypes from "../actionTypes";

function* onGetUsers(action) {
  const { payload } = action;


  yield put(getUsersStart());

  try {
    const response = yield axios.get("https://heliverseassinment.onrender.com/api/users", {
      params: {
        page: payload.page,
        limit: payload.limit,
        name: payload.name,
        gender: payload.gender,
        domain: payload.domain,
        available: payload.available
      },
    });


    yield put(getUsersSuccess(response?.data || []));
  } catch (error) {

    yield put(getUsersFail(error.response));
  }
}

function* onPostUsers() {
  yield put(postUsersStart());

  try {
    const response = yield axios.post("https://heliverseassinment.onrender.com/api/users");


    yield put(postUsersSuccess(response?.data?.data || "succesfully done"));
  } catch (error) {

    yield put(postUsersFail(error.response?.data));
  }
}

function* UserSaga() {
  yield takeLatest(actionTypes.GET_USERS_SAGA, onGetUsers);
  yield takeLatest(actionTypes.POST_USERS_SAGA, onPostUsers);
}

export default UserSaga;
