import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import useAuth from '../hooks/useAuth';
import "./Header.css"

const Header = () => {
    const { user, logout } = useAuth();
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
                            {!user?.email && <NavLink className="link text-center" to="/register">Login</NavLink>}
                            {!user?.email && <NavLink className="link outline text-center" to="/register">Register</NavLink>}
                            {
                                <span className="text-white pe-3">{user.displayName}</span>
                            }
                        </Nav>
                    </Navbar.Collapse>
                    {user?.email && <button onClick={logout} className="btn btn-light text-primary fw-bold">Log Out</button>}
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;