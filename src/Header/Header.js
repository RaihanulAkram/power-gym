import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import "./Header.css"

const Header = () => {
    return (
        <div>
            <Navbar bg="primary" expand="lg">
                <Container className="text-center">
                    <Navbar.Brand className="text-white">
                        <NavLink className="link" to="/home">PowerGym</NavLink>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto text-center">
                            <NavLink className="link text-center" to="/home">Home</NavLink>
                            <NavLink className="link text-center" to="/about">About</NavLink>
                            <NavLink className="link text-center" to="/services">Services</NavLink>
                            <NavLink className="link text-center" to="/contact">Contact</NavLink>
                            <NavLink className="link text-center" to="/login">Login</NavLink>
                            <NavLink className="link outline text-center" to="/register">Register</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                    <button className="btn btn-light">Log Out</button>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;