import { all, fork } from "redux-saga/effects";
import UserSaga from "./user";
import TeamSaga from "./team";



export default function* rootSaga() {
  yield all([fork(UserSaga), fork(TeamSaga)]);
}