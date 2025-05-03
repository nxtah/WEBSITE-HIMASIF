import React from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import '../css/components/Navbar.css';

const MainNavbar = () => {
  const location = useLocation();

  // Check if the current path matches the given path
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="navbar-himasif">
      <Container>
        <Navbar.Brand as={Link} to="/">HIMASIF</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              as={Link}
              to="/"
              className={isActive('/') ? 'active' : ''}
            >
              Home
            </Nav.Link>

            <NavDropdown title="Tentang Kami" id="basic-nav-dropdown">
              <NavDropdown.Item
                as={Link}
                to="/tentang-himasif"
                className={isActive('/tentang-himasif') ? 'active' : ''}
              >
                Tentang HIMASIF
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/filosofi-logo"
                className={isActive('/filosofi-logo') ? 'active' : ''}
              >
                Filosofi Logo
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/visi-misi"
                className={isActive('/visi-misi') ? 'active' : ''}
              >
                Visi & Misi
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link
              as={Link}
              to="/merch"
              className={isActive('/merch') ? 'active' : ''}
            >
              Merchandise
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/berita"
              className={isActive('/berita') ? 'active' : ''}
            >
              Berita
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/galeri"
              className={isActive('/galeri') ? 'active' : ''}
            >
              Galeri
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MainNavbar;
