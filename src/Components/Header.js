import React from 'react';
import "../Css/header.css"
import {Container, Nav, Navbar} from "react-bootstrap";
import {Link, useLocation} from "react-router-dom";

const Header = () => {

    const location = useLocation()
    const path = location.pathname

    return (
        <Navbar expand="md" fixed="top">
            <Container>
                <Navbar.Brand>Pinter<span style={{}}>Cat</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Item><Link to="/" className="nav-link">Все котики</Link></Nav.Item>
                        <Nav.Item><Link to="/favourites" className="nav-link">Любимые котики</Link></Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;