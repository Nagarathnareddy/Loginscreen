import React, { Component } from 'react'
import { InputGroup } from 'react-bootstrap';
import { Form,FormGroup,Col,Row ,Button,Container} from 'react-bootstrap';

export default class forgot extends Component {
handleSubmit = e =>
{
 e.preventDefault();
}



    render() {
        return (
            <div className="for">
                <Container fluid >
  <Row>
    <Col>
    <h1 className="h1">Forgot password?</h1><br/>
               <h3 className="h3">Create New Password</h3>
               <p className="p">Your new password must be different from previous used passwords.</p>
               <Form.Group as={Col} md="2"  controlId="formBasicPassword">
    <Form.Label className="pass">Password</Form.Label>
    <Form.Control type="password" placeholder="Password" className="ph1" />
  </Form.Group>
  <Form.Group as={Col} md="2"   controlId="formBasicPassword">
    <Form.Label className="conpass">Confirm Password</Form.Label>
    <Form.Control type="password" placeholder="Password" className="ph2" />
  </Form.Group>
       <br/>        
  <Button as={Col} md="2" variant="primary" className="resetbutton" onClick = {this.handleSubmit}>Reset Password</Button>{' '}
    </Col>
  </Row>
</Container>
           
            </div>
        )
    }
}

