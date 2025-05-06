import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../css/components/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <Container fluid>
        <Row className="footer-main">
          {/* Footer Left - Slogan */}
          <Col md={5} className="footer-left">
            <div className="footer-slogan">
              <div className="slogan-line">MAKE</div>
              <div className="slogan-line">IT</div>
              <div className="slogan-line">HAPPEN</div>
            </div>
          </Col>

          {/* Divider */}
          <Col md={1} className="footer-divider-col">
            <div className="footer-divider-vertical"></div>
            <div className="footer-divider-horizontal"></div>
          </Col>

          {/* Footer Right - Links */}
          <Col md={6} className="footer-right">
            <Row>
              <Col xs={6}>
                <div className="footer-links-column">
                  <div className="footer-link-item">
                    <Link to="/" className="footer-link">
                      <span className="link-text">Home</span>
                      <span className="link-arrow">↗</span>
                    </Link>
                  </div>
                  <div className="footer-link-item">
                    <Link to="/tentang-himasif" className="footer-link">
                      <span className="link-text">Tentang HIMASIF</span>
                      <span className="link-arrow">↗</span>
                    </Link>
                  </div>
                  <div className="footer-link-item">
                    <Link to="/filosofi-logo" className="footer-link">
                      <span className="link-text">Filosofi Logo</span>
                      <span className="link-arrow">↗</span>
                    </Link>
                  </div>
                  <div className="footer-link-item">
                    <Link to="/visi-misi" className="footer-link">
                      <span className="link-text">Visi & Misi</span>
                      <span className="link-arrow">↗</span>
                    </Link>
                  </div>
                </div>
              </Col>
              <Col xs={6}>
                <div className="footer-links-column">
                  <div className="footer-link-item">
                    <Link to="/galeri" className="footer-link">
                      <span className="link-text">Galeri</span>
                      <span className="link-arrow">↗</span>
                    </Link>
                  </div>
                  <div className="footer-link-item">
                    <Link to="/merch" className="footer-link">
                      <span className="link-text">Merchandise</span>
                      <span className="link-arrow">↗</span>
                    </Link>
                  </div>
                  <div className="footer-link-item">
                    <Link to="/berita" className="footer-link">
                      <span className="link-text">Berita</span>
                      <span className="link-arrow">↗</span>
                    </Link>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>

      {/* Footer Number */}
      <div className="footer-number">360</div>
    </footer>
  );
};

export default Footer;
