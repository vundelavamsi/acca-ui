import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import './index.css';

const Header = () => {
  return (
    <Navbar className="header" expand="lg">
      <Navbar.Brand href="#home">
        <img src="path/to/logo.png" alt="Logo" className="logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto nav-links">
          <Nav.Link href="#link1" className="nav-link">Link 1</Nav.Link>
          <Nav.Link href="#link2" className="nav-link">Link 2</Nav.Link>
          <Nav.Link href="#link3" className="nav-link">Link 3</Nav.Link>
          <Nav.Link href="#link4" className="nav-link">Link 4</Nav.Link>
        </Nav>
        <div className="login-signup">
          <Button variant="primary">Login</Button>
          <Button variant="primary">Signup</Button>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;