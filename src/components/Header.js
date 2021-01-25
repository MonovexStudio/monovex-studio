import React, {Component} from 'react';
import "../css/Header.css";
import {Container, Nav, Navbar} from 'react-bootstrap';
import logo from "../mono.png"
import {Link} from "react-scroll";

export default class Header extends Component {
    render() {
        return (
            <Navbar collapseOnSelect sticky="top" expand="md" variant="light" className="nav-bar">
                <Container className="nav-bar-container">
                    <Navbar.Brand href="/">
                        <img
                            src={logo}
                            className="d-inline-block align-top nav-logo"
                            alt="Logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle className="toggle" aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse>
                        <Nav className="nav-links">
                            <Link className="header-nav-menu">Меню</Link>
                            <Link className="header-nav-link">Портфоліо</Link>
                            <Link className="header-nav-link">Про нас</Link>
                            <Link className="header-nav-link ml">Розробка</Link>
                            <Link className="header-nav-link">Контакти</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}
