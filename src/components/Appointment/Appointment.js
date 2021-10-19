import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import Header from '../Shared/Header/Header';
import './AppoinMent.css'
import img1 from '../../Images/post-four-768x800.jpg'

const Appointment = () => {
    return (
        <div className="appointment">
            <Header></Header>
            <div className="container pt-5">
                <Row className="shadow-lg g-0 align-items-center">
                    <Col md={5}>
                        <img src={img1} className="img-fluid " alt="" />
                    </Col>
                    <Col md={7} className="px-5">
                        <div className="text-center">
                            <h1 className="name">Make An Appoinment</h1>
                            <p className="detail">Make an Appointment
                                Contact us any suitable way and make an appointment with the doctor whose help you need!Visit us at the scheduled time.</p>
                        </div>
                        <Form>
                            <Row>

                                <Col xs={6}>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">

                                        <Form.Control type="email" placeholder="Enter email" />

                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicPassword">

                                        <Form.Control type="password" placeholder="Password" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicPassword">

                                        <Form.Control type="password" placeholder="Password" />
                                    </Form.Group>

                                </Col>
                                <Col xs={6}>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">

                                        <Form.Control type="email" placeholder="Enter email" />

                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicPassword">

                                        <Form.Control type="password" placeholder="Password" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicPassword">

                                        <Form.Control type="password" placeholder="Password" />
                                    </Form.Group>
                                </Col>
                                <button className="btn-custom-dark btn-custom" type="submit">Get a Free Quote</button>


                            </Row>
                        </Form>
                    </Col>
                </Row>
            </div >

        </div >
    );
};

export default Appointment;