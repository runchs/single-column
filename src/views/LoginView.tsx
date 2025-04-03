import React from "react";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import Logo from '../assets/artworks/logoLeft.jpg';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';

const LoginView: React.FC = () => {

  const navigate = useNavigate();

  function AlertDismissibleExample() {
    const [show, setShow] = useState(true);
  
    if (show) {
      return (
        <Alert variant="danger" className="text-start fw-light mb-4">
          <div >The username or password you entered is incorrect.</div>
        </Alert>
      );
    }
    return <Button onClick={() => setShow(true)}>Show Alert</Button>;
  }

  return (
    <Row className="gx-0 h-100 login-view-container ">
      <Col xs={7} className="logo-wrp d-flex align-items-center"><img src={Logo} alt="logo" /></Col>
      <Col xs={5} className="d-flex align-items-center justify-content-center">
        <div className="fw-bold w-75 form-wrp">
          <div className="fs-1 mb-5">
            Sign in
          </div>
          <div>
            {AlertDismissibleExample()}
          </div>
          <div>
            <Row className="d-flex align-items-center mb-3 gx-0">
              <Col xs={3} className="text-start label-wrp"><Form.Label htmlFor="username" className="mb-0">Username</Form.Label></Col>
              <Col xs={9}><Form.Control
                type="text"
                id="username"
                className="w-100"
              /></Col>
            </Row>
            <Row className="d-flex align-items-center mb-3 gx-0">
              <Col xs={3} className="text-start label-wrp"><Form.Label htmlFor="password" className="mb-0">Password</Form.Label></Col>
              <Col xs={9}><Form.Control
                type="password"
                id="password"
                className="w-100"
              /></Col>
            </Row>
            <div className="text-start mt-5">
              <Button variant="primary" onClick={() => navigate("/information")}>Sign in</Button>
            </div>
          </div>

        </div>

      </Col>
    </Row>
  );
};

export default LoginView;
