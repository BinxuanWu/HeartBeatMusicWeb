import "./SignIn.css"
import React from 'react'
import Header from "./Header"
import {Row, Col, Container, Form, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";

function SignIn() {
  return (
    <div>
        <Header/>
        <div className="sign-body">
        <Container className="signin-container">
            <Row>
                <Col md={3}>
                    <h2 class>Sign in</h2>
                </Col>
                <br/><br/><br/><br/>
            </Row>

            <Form>
                <Form.Group className="mb-3" controlId="signinEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="input" placeholder="Enter user name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="signinPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                    <Form.Text className="text-muted">
                        We'll never share your password with anyone else.
                    </Form.Text>
                </Form.Group>
              
            <Link class="signinBtn" to="/HeartBeatMusicWeb" style={{textDecoration:'none'}}>
              <Button variant="primary" type="submit">
                Sign in !!
              </Button>
            </Link>  
            </Form>
            <br/>

            <Link className ="signup" to="/signup" style={{textDecoration:'none'}}>
                <a class="signup-hint">Not have a Account? Sign up now!</a>
            </Link>

        </Container>
        </div>
    </div>
  )
}

export default SignIn