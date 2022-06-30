import React from 'react'
import "./SignUp.css"
import Header from "./Header"
import {Row, Col, Container, Form, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";

function SignUp() {
  return (
    <div className='signup-body'>
        <Header/>
        <div className="sign-body">
        <Container className="signup-container">
            <Row>
                <Col md={3}>
                    <h2 class>Sign up</h2>
                </Col>
                <br/><br/><br/><br/>
            </Row>

            <Form>
                <Form.Group className="mb-3" controlId="signupName">
                    <Form.Label>User Name</Form.Label>
                    <Form.Control type="email" placeholder="Enter User Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="signupEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="signupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                    <Form.Text className="text-muted">
                        We'll never share your password with anyone else.
                    </Form.Text>
                </Form.Group>
              
              <Button variant="primary" type="submit">
                Sign up !!
              </Button>
            </Form>
            <br/>

        </Container>
        </div>
    </div>
  )
}

export default SignUp