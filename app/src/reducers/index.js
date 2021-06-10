import { combineReducers } from "redux";
import users from "./users";
import authedUser from "./authedUser";
import questions from "./questions";
import { connect } from "react-redux";
import { handleReceiveUsers } from "../actions/users";
import { handleReceiveQuestions } from "../actions/questions";


import { loadingBarReducer } from "react-redux-loading";
export default combineReducers({
  users,
  authedUser,
  questions,
  loadingBar: loadingBarReducer,
});
