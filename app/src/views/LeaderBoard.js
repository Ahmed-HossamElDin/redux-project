import React, { Component } from "react";
import { connect } from "react-redux";
import Navigationbar from "../components/Navigationbar";
import User from "../components/User";
import { GiTrophyCup } from "react-icons/gi";

class LeaderBoard extends Component {
  render() {
    return (
      <div>
        <Navigationbar />
        <h1
          style={{
            fontFamily: "Century Gothic,Lucida Sans",
            textAlign: "center",
          }}
        >
          Leader Board
          <GiTrophyCup />
        </h1>{" "}
        {this.props.sorted.map((user) => {
          return (
            <User
              key={this.props.users[user].id}
              user={this.props.users[user]}
              index={this.props.sorted.indexOf(user)}
            />
          );
        })}
        {console.log(this.props.sorted)}
      </div>
    );
  }
}
function mapStateToProps({ users }) {
  return {
    sorted: Object.keys(users)
      .sort(
        (a, b) =>
          Object.keys(users[a].answers).length +
          users[a].questions.length -
          (Object.keys(users[b].answers).length + users[b].questions.length)
      )
      .reverse(),
    users,
  };
}
export default connect(mapStateToProps)(LeaderBoard);
