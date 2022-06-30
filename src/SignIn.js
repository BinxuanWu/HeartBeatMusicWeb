import "./SignIn.css"
import React from 'react'
import Header from "./Header"
import {Row, Col, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function SignIn() {
  return (
    <div>
        <Header/>
        <div className="body">
        <Container className="signin-container">
            <Row>
                <Col md="3">
                    <h2>Sign in</h2>
                </Col>
                
            </Row>

        </Container>
        </div>
    </div>
  )
}

export default SignIn