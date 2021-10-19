import React from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import useAuth from '../hooks/useAuth';

const Register = () => {
    const { handleRegister, handleEmailChange, handlePasswordChange, error, toggleLogin, isLogin, handleResetPassword, handleNameChange, signInUsingGoogle } = useAuth();
    return (
        <div>
            <Card className="container my-5" style={{ width: '21rem' }}>
                <Card.Body className="my-3 w-100">
                    <h2 className="text-center text-primary mt-2">{isLogin ? 'Login' : 'Register'}</h2>
                    <Form onSubmit={handleRegister} className="my-5">
                        {!isLogin && <Form.Group className="mb-3" id="name">
                            <Form.Label>Your Name</Form.Label>
                            <Form.Control onBlur={handleNameChange} type="name" placeholder="Enter Your Name" required />
                        </Form.Group>}

                        <Form.Group className="mb-3" id="email">
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control onBlur={handleEmailChange} type="email" placeholder="Enter email" required />
                        </Form.Group>

                        <Form.Group className="mb-3" id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control onBlur={handlePasswordChange} type="password" placeholder="Password" required />
                            <small className="text-secondary">Note: Password must contains 8 characters length, 2 letters in Upper Case, 1 Special Character (!@#$&*), 2 numerals (0-9), 3 letters in Lower Case</small>
                        </Form.Group>

                        <div className="form-check my-3">
                            <input onChange={toggleLogin} className="form-check-input" type="checkbox" id="gridCheck1" />
                            <label className="form-check-label" htmlFor="gridCheck1">
                                Already Registerd?
                            </label>
                        </div>

                        <div className="text-danger fw-bold">{error}</div>

                        {/* <p>Already an user? <Link className="link text-primary" to="/login">Login</Link></p> */}

                        <Button className="w-100" variant="primary" type="submit">
                            {isLogin ? 'Login' : 'Register'}
                        </Button>
                        <Button type="submit" onClick={handleResetPassword} className="btn btn-dark w-100 mt-3 text-white"><i className="fas fa-key text-white pe-3"></i> Reset Password</Button>
                        <Button onClick={signInUsingGoogle} className="w-100 mt-1" variant="danger" type="submit">
                            <i className="fab fa-google text-white pe-3"></i> Google Sign In
                        </Button>

                    </Form>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Register;