import React from 'react';
import { Container, Nav, Navbar, Stack } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import "./Header.css"

const Header = () => {
    return (
        <div>
            <Navbar bg="primary" expand="lg">
                <Container fluid>
                    <Navbar.Brand className="text-white ms-5"><NavLink className="link" to="/home">PowerGym</NavLink></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="ms-auto px-5 my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Stack direction="horizontal" gap={3}>
                                <NavLink className="link" to="/home">Home</NavLink>
                                <NavLink className="link" to="/about">About</NavLink>
                                <NavLink className="link" to="/services">Services</NavLink>
                                <NavLink className="link" to="/contact">Contact</NavLink>
                                <NavLink className="link" to="/login">Login</NavLink>
                                <NavLink className="link outline" to="/register">Register</NavLink>
                            </Stack>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;