import React from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <Card className="container my-5" style={{ width: '21rem' }}>
                <Card.Body className="my-3">
                    <h2 className="text-center text-primary mt-2">Login</h2>
                    <Form className="my-5">
                        <Form.Group className="mb-3" id="email">
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" required />
                        </Form.Group>

                        <Form.Group className="mb-3" id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" required />
                            <p className="my-3">New user? <Link className="text-primary link" to="/register">Register</Link></p>
                        </Form.Group>

                        <Button className="w-100 mt-5" variant="primary" type="submit">
                            Login
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </div >
    );
};

export default Login;