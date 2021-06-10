import React from 'react';
import {Nav, Navbar, Button, Dropdown, Image} from 'react-bootstrap';
import { connect } from 'react-redux'
import { Redirect } from "react-router-dom";
import { HiOutlineLogout } from "react-icons/hi";

class Navigationbar extends React.Component {

    componentDidMount() {
      this.forceUpdate();
    }
 
    render() {
      return (
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">Would-you-rather</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">New question</Nav.Link>
              <Nav.Link href="#link" inline>Leaderboard</Nav.Link>
            </Nav>
            <div className="ml-auto">
            <Dropdown>
              {this.props.users[this.props.authedUser] ? (
                <Dropdown.Toggle
                  variant="light"
                  id="dropdown-basic"
                >
                  <Image
                    style={{
                      width: "2rem",
                      pointerEvents: "none",
                    }}
                    size="xs"
                    src={this.props.users[this.props.authedUser].avatarURL}
                    roundedCircle
                  />{" "}
                  {this.props.users[this.props.authedUser].name}
                </Dropdown.Toggle>
              ) : (
                  <Button>Login</Button>
              )}
              <Dropdown.Menu>
                <Dropdown.Item href="/">
                  <HiOutlineLogout />
                  {""} Logout
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          </Navbar.Collapse>
        </Navbar>
        );
    }
  }

function mapStateToProps({ users, authedUser }) {
  return { users, authedUser };
}
export default connect(mapStateToProps)(Navigationbar);