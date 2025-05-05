import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { Link, Outlet, useLocation } from 'react-router-dom';
import '../css/components/Layout.css';

const Layout = () => {
  const location = useLocation();
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Check if the current path matches the given path
  const isActive = (path) => {
    return location.pathname === path;
  };

  // Handle scroll event for back to top button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
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

      <main>
        <Outlet />
      </main>

      <footer className="footer">
        <Container>
          <div className="row">
            <div className="col-lg-4 mb-4">
              <h3 className="footer-title">HIMASIF UPJ</h3>
              <div className="footer-about">
                <p className="footer-text">
                  Himpunan Mahasiswa Sistem Informasi Universitas Pembangunan Jaya
                  adalah organisasi mahasiswa yang mewadahi aspirasi dan kegiatan
                  mahasiswa program studi Sistem Informasi.
                </p>
              </div>
              <div className="footer-social">
                <a href="#" className="social-link">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="#" className="social-link">
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="#" className="social-link">
                  <i className="bi bi-twitter"></i>
                </a>
                <a href="#" className="social-link">
                  <i className="bi bi-linkedin"></i>
                </a>
              </div>
            </div>

            <div className="col-lg-4 mb-4">
              <h3 className="footer-title">Quick Links</h3>
              <ul className="footer-links">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/tentang-himasif">Tentang HIMASIF</Link>
                </li>
                <li>
                  <Link to="/filosofi-logo">Filosofi Logo</Link>
                </li>
                <li>
                  <Link to="/visi-misi">Visi & Misi</Link>
                </li>
                <li>
                  <Link to="/merch">Merchandise</Link>
                </li>
                <li>
                  <Link to="/berita">Berita</Link>
                </li>
                <li>
                  <Link to="/galeri">Galeri</Link>
                </li>
              </ul>
            </div>

            <div className="col-lg-4 mb-4">
              <h3 className="footer-title">Kontak Kami</h3>
              <div className="footer-contact-item">
                <div className="contact-icon">
                  <i className="bi bi-geo-alt"></i>
                </div>
                <div className="contact-text">
                  Gedung Fakultas Teknologi dan Desain<br />
                  Universitas Pembangunan Jaya<br />
                  Jl. Cendrawasih Raya Blok B7/P<br />
                  Bintaro Jaya, Tangerang Selatan 15413
                </div>
              </div>
              <div className="footer-contact-item">
                <div className="contact-icon">
                  <i className="bi bi-envelope"></i>
                </div>
                <div className="contact-text">
                  himasif@upj.ac.id
                </div>
              </div>
              <div className="footer-contact-item">
                <div className="contact-icon">
                  <i className="bi bi-telephone"></i>
                </div>
                <div className="contact-text">
                  +62 21 7455555
                </div>
              </div>
            </div>
          </div>
        </Container>

        <div className="footer-bottom">
          <Container>
            <p className="copyright">
              &copy; {new Date().getFullYear()} HIMASIF UPJ. All rights reserved.
            </p>
          </Container>
        </div>
      </footer>

      {/* Back to Top Button */}
      <div
        className={`back-to-top ${showBackToTop ? 'visible' : ''}`}
        onClick={scrollToTop}
      >
        <i className="bi bi-arrow-up"></i>
      </div>
    </>
  );
};

export default Layout;
