import React from 'react';
import {Card, Button, Form} from 'react-bootstrap';

class LoginCard extends React.Component {
    render(){
        return(
            <Card className="mx-auto mt-5" style={{ width: '18rem' }} size = "lg">
            <Card.Body>
              <Card.Title>Login</Card.Title>
              <Card.Text>
                Select user to continue
              </Card.Text>
              <Form.Control as="select">
                <option>Default select</option>
            </Form.Control>
              <Button className="m-3" variant="primary">Login</Button>
            </Card.Body>
          </Card>
        );
    }
}

export default LoginCard;