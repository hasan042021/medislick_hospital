import { Col, Form, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import bg from '../../Images/col-bgimage-4.jpg'
import React from 'react';
import './Login.css'

const Login = () => {
    return (
        <div>
            <div className="d-flex justify-content-center align-items-center py-5" style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh', backgroundRepeat: 'no-repeat' }}>
                <div className="shadow-lg form-login" >

                    <Row className="bg-white justify-content-center flex-column flex-md-row">
                        <Col xs={12} md={6} className="p-5">
                            <Form className="my-4 px-3">
                                <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                                    <Form.Control type="email" placeholder="Email" />
                                </Form.Group>
                                <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                                <Form.Group as={Row} className="mb-3">
                                    <button type="submit" className="btn-custom btn-custom-info" >Login</button>
                                </Form.Group>
                            </Form>
                            <div class="separator">
                                <div class="separator-content">
                                    <span>or</span>
                                </div>
                            </div>
                            <div className="text-center pb-4 p-4 ">
                                <button className="btn-custom-outline-info">
                                    <div className="d-flex justify-content-center align-items-center">
                                        <div><i class="fab fa-google border"></i></div>
                                        <div>Continue With Google</div>
                                    </div>
                                </button>
                            </div>


                        </Col>
                        <Col xs={12} md={6} className="fl-bg-gradient text-center">

                            <div className="p-4">
                                <h1 className="pt-4">Don't have an account?</h1>
                                <h1>Sign Up and Get <br />
                                    The best Medical Service
                                </h1>
                                <div className="text-center">
                                    <NavLink to="/signup" className="text-decoration-none "><button className="btn-custom btn-custom-white">Sign Up</button></NavLink>
                                </div>
                            </div>
                        </Col>
                    </Row>

                </div>
            </div>
        </div>
    );
};

export default Login;