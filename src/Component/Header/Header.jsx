import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" className="navbar-custom">
        <Navbar.Brand as={Link} to="/" className="ms-4">Contect</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="">
            <Nav.Link as={Link} to="/" className="nav-link-custom">Home</Nav.Link>
            <Nav.Link as={Link} to="/create" className="nav-link-custom">+</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
};

export default Header;
