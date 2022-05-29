import React from 'react';
import "../Css/header.css"
import {Container, Nav, Navbar} from "react-bootstrap";
import {Link, NavLink, useLocation} from "react-router-dom";

const Header = () => {
    const activeClassName = 'nav-link nav-link-active'

    return (
        <Navbar expand="md" fixed="top">
            <Container>
                <Navbar.Brand>Pinter<span style={{}}>Cat</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Item><NavLink to="/" className={({ isActive }) =>
                            isActive ? activeClassName : "nav-link"
                        }>Все котики</NavLink></Nav.Item>
                        <Nav.Item><NavLink to="/favourites" className={({ isActive }) =>
                            isActive ? activeClassName : "nav-link"
                        }>Любимые котики</NavLink></Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;