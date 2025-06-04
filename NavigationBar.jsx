import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

const NavigationBar = () => {
  return (
    <Navbar
      expand="lg"
      style={{
        backgroundColor: "	#FA6695", // Bright pink
        padding: "1rem 1.5rem",
        fontFamily: "'Segoe UI', cursive",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
      }}
    >
 
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src="https://www.blossomsflorals.com/public/frontend/img/logo/logo.png"
            alt="Bloosm Logo"
            height="40"
            style={{ marginRight: "10px" }}
          />
        </Navbar.Brand>
      
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" style={linkStyle}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/products" style={linkStyle}>
              Products
            </Nav.Link>
            <Nav.Link as={Link} to="/cart" style={linkStyle}>
              Cart
            </Nav.Link>
            <Nav.Link as={Link} to="/about" style={linkStyle}>
              About
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

const linkStyle = {
  color: "white",
  fontSize: "1.1rem",
  marginLeft: "1.5rem",
  textDecoration: "none",
};

export default NavigationBar;



