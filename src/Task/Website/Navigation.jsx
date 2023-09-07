import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

export default class Navigation extends React.Component {
  render() {
    return (
      <Navbar expand="lg" className="Navbar bg-primary" variant="dark" fixed="top">
        <Container>
          <Navbar.Brand href="#" className="Brand">
            Portal Berita
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#About">About</Nav.Link>
              <Nav.Link href="#Contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
