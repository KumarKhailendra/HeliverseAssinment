import { combineReducers } from "redux";
import UserReducer from "./user";
import TeamsReducer from "./teams";

const rootReducer =  combineReducers({
   user:UserReducer,
   teams: TeamsReducer
  })

  export default rootReducer

