
import { Link } from "react-router-dom";

import { Navbar as RBNavbar, Container, Nav, NavDropdown } from 'react-bootstrap';

export default function Navbar() {
  return (
    <RBNavbar 
        expand="md" 
        data-bs-theme="dark" 
        className="bg-dark rounded-3 shadow-sm mx-4 mt-4" 
        style={{ '--bs-bg-opacity': 0.95 }} 
    >
      <Container fluid className="px-3">
        <RBNavbar.Brand as={Link} to="/" className="text-xl md:text-2xl font-bold">
          <span className="text-white">The Canadian </span>
          <span className="text-danger">Academy</span>
        </RBNavbar.Brand>
        <RBNavbar.Toggle aria-controls="responsive-navbar-nav" />
        <RBNavbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto gap-3 text-base font-medium">
            <Nav.Link as={Link} to="/" className="text-danger border-bottom border-danger pb-1">
              Home
            </Nav.Link>   
            {/* About Us Link */}
            <Nav.Link as={Link} to="/AboutUs" className="text-secondary hover:text-danger">
              About Us
            </Nav.Link>
            {/* Courses Link */}
            <Nav.Link as={Link} to="/Courses" className="text-secondary hover:text-danger">
              Courses
            </Nav.Link>
            {/* English For Kids Link */}
            <Nav.Link as={Link} to="/HelpCenter" className="text-secondary hover:text-danger">
              Help Center
            </Nav.Link>
            {/* Contact Us Link */}
            <Nav.Link as={Link} to="/ContactUs" className="text-secondary hover:text-danger">
              Contact Us
            </Nav.Link>
            <Nav.Link as={Link} to="/Inroll" className="text-secondary hover:text-danger">
              Inroll
            </Nav.Link>
          </Nav>
        </RBNavbar.Collapse>
      </Container>
    </RBNavbar>
  );
}