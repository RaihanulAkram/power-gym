import React from 'react';
import { Card, Form, Button } from 'react-bootstrap';

const Register = () => {
    return (
        <div>
            <Card className="container my-5 w-25">
                <Card.Body className="p-5">
                    <h1 className="mb-4 text-center text-primary">Register</h1>
                    <Form>
                        <Form.Group className="mb-3" id="email">
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" required />
                        </Form.Group>

                        <Form.Group className="mb-3" id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" required />
                        </Form.Group>

                        <Form.Group className="mb-3" id="password">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" required />
                        </Form.Group>

                        <Button className="w-100" variant="primary" type="submit">
                            Register
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Register;