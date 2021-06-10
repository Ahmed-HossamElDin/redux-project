import React from 'react';
import {Nav, Navbar, Button} from 'react-bootstrap';
class Navigationbar extends React.Component {
    render() {
      return (
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <Nav.Link href="#link" inline>Link</Nav.Link>
              
            </Nav>
            <Navbar.Text>
              Signed in as: <a href="#login">Mark Otto</a>
            </Navbar.Text>
            <Button className="ml-2" size ="sm" variant="outline-danger">Sign out</Button>{' '}
          </Navbar.Collapse>
        </Navbar>
        );
    }
  }

  export default Navigationbar;