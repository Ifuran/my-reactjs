import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <Navbar expand="lg" className="Navbar bg-dark" variant="dark" fixed="top">
        <Container>
          <Link to="/" className="navbar-brand fw-bold">
            Portal Berita
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="nav-links">
              <Link to="projects" className="nav-link link-light text-decoration-none">
                Projects
              </Link>
              <Link to="about" className="nav-link link-light text-decoration-none">
                About
              </Link>
              <Link to="contact" className="nav-link link-light text-decoration-none">
                Contact
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
