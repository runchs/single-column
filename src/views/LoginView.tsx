import React from "react";
import { useNavigate } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import Logo from '../assets/artworks/logoLeft.jpg';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const LoginView: React.FC = () => {

  const navigate = useNavigate();

  return (
    <Row className="gx-0 h-100">
      <Col xs={7} className="bg-logo d-flex align-items-center"><img src={Logo} alt="logo" className="w-100" /></Col>
      <Col xs={5} className="d-flex align-items-center justify-content-center">
        <div className="login-form fw-bold w-100 p-5">
          <div className="fs-1 mb-5">
            Sign in
          </div>
          <div className="m-5">
            <Row className="d-flex align-items-center mb-3 gx-0">
              <Col xs={3} className="text-start"><Form.Label htmlFor="username" className="mb-0">Username</Form.Label></Col>
              <Col xs={9}><Form.Control
                type="text"
                id="username"
                className="w-100 box-shadow-none"
              /></Col>
            </Row>
            <Row className="d-flex align-items-center mb-3 gx-0">
              <Col xs={3} className="text-start"><Form.Label htmlFor="password" className="mb-0">Password</Form.Label></Col>
              <Col xs={9}><Form.Control
                type="password"
                id="password"
                className="w-100 box-shadow-none"
              /></Col>
            </Row>
          </div>
          <div className="text-start mx-5">
            <Button variant="primary" onClick={() => navigate("/information")}>Sign in</Button>
          </div>
        </div>

      </Col>
    </Row>
  );
};

export default LoginView;
