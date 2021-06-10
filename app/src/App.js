import React, { Component, Fragment } from "react";
import Login from "./views/Login";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./views/HomePage";
import QuestionPage from "./views/QuestionPage";
import LeaderBoard from "./views/LeaderBoard";
import NewQuestion from "./views/NewQuestion";
import { connect } from "react-redux";
import { handleReceiveUsers } from "./actions/users";
import { handleReceiveQuestions } from "./actions/questions";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleReceiveQuestions());
    this.props.dispatch(handleReceiveUsers());
  }

  render() {
    return (
      <Fragment>
        {!this.props.authedUser ? (
          <Login />
        ) : (
          <Router>
            <div>
              <Route path="/" exact component={HomePage} />
              <Route path="/questions/:question_id" component={QuestionPage} />
              <Route path="/leaderboard" component={LeaderBoard} />{" "}
              <Route path="/add" component={NewQuestion} />
            </div>{" "}
          </Router>
        )}
      </Fragment>
    );
  }
}
function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  };
}
export default connect(mapStateToProps)(App);
