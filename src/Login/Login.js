import React from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import useAuth from '../hooks/useAuth';

const Login = () => {
    const { error, handleEmailChange, handlePasswordChange, handleResetPassword, signInUsingGoogle, processLogin } = useAuth();
    return (
        <div>
            <Card className="container my-5" style={{ width: '21rem' }}>
                <Card.Body className="my-3 w-100">
                    <h2 className="text-center text-primary mt-2">Login</h2>
                    <Form onSubmit={processLogin} className="my-5">
                        <Form.Group className="mb-3" id="email">
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control onBlur={handleEmailChange} type="email" placeholder="Enter email" required />
                        </Form.Group>

                        <Form.Group className="mb-3" id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control onBlur={handlePasswordChange} type="password" placeholder="Password" required />
                            <small className="text-secondary">Note: Password must contains 8 characters length, 2 letters in Upper Case, 1 Special Character (!@#$&*), 2 numerals (0-9), 3 letters in Lower Case</small>
                        </Form.Group>

                        <div className="text-danger fw-bold">{error}</div>

                        {/* <p>Already an user? <Link className="link text-primary" to="/login">Login</Link></p> */}

                        <Button className="w-100" variant="primary" type="submit">
                            Login
                        </Button>
                        <Button type="submit" onClick={handleResetPassword} className="btn btn-warning w-100 mt-3 text-white"><i className="fas fa-key text-white pe-3"></i> Reset Password</Button>
                        <Button onClick={signInUsingGoogle} className="w-100 mt-1" variant="danger" type="submit">
                            <i className="fab fa-google text-white pe-3"></i> Google Sign In
                        </Button>

                    </Form>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Login;