import React from 'react'
import Navigationbar from './Navigationbar'
import {Card, Button, Form, Dropdown, Image} from 'react-bootstrap'
import {handleSetAuthedUser} from '../actions/authedUser'
import {handleReceiveUsers} from '../actions/users' 
import { connect } from "react-redux"


class LoginCard extends React.Component {
  state = { name: "", id: "" };
  changeValue(text, id) {
    this.setState({ name: text, id: id });
  }
  componentDidMount() {
    document.title = "Login";
    this.props.dispatch(handleReceiveUsers());
  }
    render(){
        return(
            
            <Card className="mx-auto mt-5" style={{ width: '18rem' }} size = "lg">
            <Card.Body>
              <Card.Title>Login</Card.Title>
              <Card.Text>
                Select user to continue
              </Card.Text>
              <Form>
                  <Form.Group controlId="loginForm">
                    <Dropdown>
                      <Dropdown.Toggle variant="light" block>
                        {this.state.name ? this.state.name : "Login in As"}
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        {Object.keys(this.props.users).map((user) => {
                          return (
                            <div
                              key={this.props.users[user].id}
                              style={{ display: "block" }}
                            >
                              <Dropdown.Item
                                onClick={(e) =>
                                  this.changeValue(
                                    e.target.textContent,
                                    this.props.users[user].id
                                  )
                                }
                              >
                                <Image
                                  style={{
                                    width: "2rem",
                                    pointerEvents: "none",
                                  }}
                                  size="xs"
                                  src={this.props.users[user].avatarURL}
                                  roundedCircle
                                />
                                {"  "}
                                {this.props.users[user].name}
                              </Dropdown.Item>
                            </div>
                          );
                        })}
                      </Dropdown.Menu>
                    </Dropdown>
                  </Form.Group>{" "}
                  <Button
                    size="lg"
                    variant="primary"
                    type="submit"
                    disabled={this.state.name === ""}
                    onClick={() => {
                      this.props.dispatch(handleSetAuthedUser(this.state.id));
                    }}
                    block
                  >
                    Login
                  </Button>
                </Form>
            </Card.Body>
          </Card>
        );
    }
}

function mapStateToProps({ users }) {
  return {
    users,
  };
}

export default connect(mapStateToProps)(LoginCard);