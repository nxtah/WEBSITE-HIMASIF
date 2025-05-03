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
    <Navbar expand="lg" className="navbar-himasif" variant="dark">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {/* Left side navigation */}
          <Nav className="me-auto">
            <NavDropdown
              title="TENTANG"
              id="tentang-dropdown"
              className={isActive('/tentang-himasif') || isActive('/filosofi-logo') || isActive('/visi-misi') ? 'active' : ''}
            >
              <NavDropdown.Item
                as={Link}
                to="/tentang-himasif"
                className={isActive('/tentang-himasif') ? 'active' : ''}
              >
                TENTANG HIMASIF
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/filosofi-logo"
                className={isActive('/filosofi-logo') ? 'active' : ''}
              >
                FILOSOFI LOGO
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/visi-misi"
                className={isActive('/visi-misi') ? 'active' : ''}
              >
                VISI & MISI
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link
              as={Link}
              to="/struktur"
              className={isActive('/struktur') ? 'active' : ''}
            >
              STRUKTUR
            </Nav.Link>
          </Nav>

          {/* Center logo */}
          <Navbar.Brand as={Link} to="/" className="mx-auto">
            <img
              src="/src/assets/images/logo-himasif.png"
              alt="HIMASIF Logo"
              className="navbar-logo"
            />
          </Navbar.Brand>

          {/* Right side navigation */}
          <Nav className="ms-auto">
            <Nav.Link
              as={Link}
              to="/galeri"
              className={isActive('/galeri') ? 'active' : ''}
            >
              GALERI
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/merch"
              className={isActive('/merch') ? 'active' : ''}
            >
              MERCH
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/berita"
              className={isActive('/berita') ? 'active' : ''}
            >
              BERITA
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MainNavbar;
