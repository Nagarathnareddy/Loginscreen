import React from 'react'
import { useState } from 'react';
import logo from './reg.png'
import { Row,Col,Form,InputGroup,Button } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export default function register() {
   
    function FormExample() {
        const [validated, setValidated] = useState(false);
      
        const handleSubmit = (event) => {
          const form = event.currentTarget;
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
      
          setValidated(true);
        };
      
        return (
            
            
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group as={Col} md="4" controlId="validationCustom01">
                <Form.Label>First name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="First name"
                  
                 
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationCustom02">
                <Form.Label>Last name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Last name"
                 
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              
            </Row>
            <Row className="mb-3">
              
            <Form.Group as={Col} md="4" className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Control.Feedback type="invalid">
              Please enter correct email id
            </Form.Control.Feedback>
    <Form.Text className="text-muted">
      We'll never share your email with anyone else
    </Form.Text>
  </Form.Group>
  <Form.Group as={Col} md="4" className="mb-3" controlId="formBasicEmail">
    <Form.Label>Phone Number</Form.Label>
    <Form.Control type="tel" placeholder="Enter Phone Number" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
       required />
       
    <Form.Text className="text-muted">
      We'll never share your email with anyone else
    </Form.Text>
  </Form.Group>
            </Row>
            <Row>
            <Form.Group as={Col} md="4"  className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group as={Col} md="4"  className="mb-3" controlId="formBasicPassword">
    <Form.Label>Confirm Password</Form.Label>
    <Form.Control type="password" placeholder="Confirm Password" />
  </Form.Group>
  </Row>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Yes,I want to receive Lottery Display emails" />
  </Form.Group>
            <Form.Group className="mb-3">
              <Form.Check
                required
                label="I agree to all the Term,Privacy Policy and Fees"
                feedback="You must agree before submitting."
                feedbackType="invalid"
              />
            </Form.Group>

            <Button type="submit">Create Account</Button>
            <br/><br/>
            <p>Already have an account?<Link to={"./login"}>Login</Link></p>
          </Form>
          
        );
       
      }
     
      
    return (
        <div className="bgfor2">
        <Row>
             <Col>
            <img className="img" src={logo}/>
             </Col>
        <Col className="reg">
        <h1>Register</h1><br/><br/><br/>
            <h3>Manage all your lottery efficiently</h3>
            <p>Let's get you all set up so you can verify your personal account and begin setting up your profile.</p>
            <FormExample />
        </Col>
        
      </Row>
      </div>
       
    )
}
