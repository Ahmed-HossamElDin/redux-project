import React, { Component } from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import Navigationbar from "../components/Navigationbar";
import { handleReceiveQuestions } from "../actions/questions";
import QuestionNav from "../components/QuestionNav";
import { Card } from "react-bootstrap";
import AnsweredQuestions from "../components/AnsweredQuestions";
import UnansweredQuestions from "../components/UnansweredQuestions";
import { handleReceiveUsers } from "../actions/users";

let component = "";

export function getComponent(prop) {
  component = prop;
}

class HomePage extends Component {
  componentDidMount() {
    document.title = "Home";
    this.props.dispatch(handleReceiveQuestions());
    this.props.dispatch(handleReceiveUsers());
  }
  render() {
    return (
      <div>
        <Navigationbar />
        {this.props.Loading ? (
          <div>
            <h3
              style={{
                textAlign: "center",
                position: "absolute",
                top: "50%",
                width: "100%",
                color: "#1E90FF",
              }}
            >
              Loading{" "}
              <FontAwesomeIcon icon={faCircleNotch} spin color="DodgerBlue" />
            </h3>
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              paddingTop: "1rem",
              justifyContent: "center",
            }}
          >
            <Card style={{ width: "30rem" }}>
              <Card.Header>
                {" "}
                <QuestionNav />
              </Card.Header>
              <Card.Body>
                {component === "AnsweredQuestions" ? (
                  <AnsweredQuestions />
                ) : (
                  <UnansweredQuestions />
                )}
              </Card.Body>
            </Card>
          </div>
        )}
      </div>
    );
  }
}
function mapStateToProps({ questions, loadingBar }) {
  return { Loading: loadingBar.default === 0 ? false : true, questions };
}
export default connect(mapStateToProps)(HomePage);
