import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../css/components/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <Container fluid className="h-100 d-flex flex-column">
        <Row className="footer-main flex-grow-1">
          {/* Footer Left - Slogan */}
          <Col lg={7} md={7} sm={12} xs={12} className="footer-left">
            <div className="footer-slogan-label">SLOGAN</div>
            <div className="footer-slogan">
              <div>WE MAKE</div>
              <div className="d-flex align-items-baseline">
                <span className="slogan-it me-3">IT</span>
                <span>HAPPEN</span>
              </div>
            </div>
            <div className="footer-horizontal-divider"></div>
            <div className="footer-number">360</div>
          </Col>

          {/* Divider - Only visible on md and larger screens */}
          <div className="footer-divider-col d-none d-md-flex ml-3">
            <div className="footer-divider-vertical"></div>
          </div>

          {/* Footer Right - Links */}
          <Col lg={4} md={4} sm={12} xs={12} className="footer-right">
            <div className="acara-label">ACARA MENDATANG</div>
            <div className="acara-box"></div>

            <div className="footer-links-container">
              <Row className="footer-links-row mx-0">
                <Col xs={6} className="px-0">
                  <div className="footer-link-item">
                    <Link to="/visi-misi" className="footer-link">
                      <span className="link-text">VISI & MISI</span>
                      <span className="link-arrow">↗</span>
                    </Link>
                  </div>
                </Col>
                <Col xs={6} className="px-0">
                  <div className="footer-link-item">
                    <Link to="/berita" className="footer-link">
                      <span className="link-text">BERITA</span>
                      <span className="link-arrow">↗</span>
                    </Link>
                  </div>
                </Col>
              </Row>

              <Row className="footer-links-row mx-0">
                <Col xs={6} className="px-0">
                  <div className="footer-link-item">
                    <Link to="/sejarah" className="footer-link">
                      <span className="link-text">SEJARAH</span>
                      <span className="link-arrow">↗</span>
                    </Link>
                  </div>
                </Col>
                <Col xs={6} className="px-0">
                  <div className="footer-link-item">
                    <Link to="/merch" className="footer-link">
                      <span className="link-text">MERCH</span>
                      <span className="link-arrow">↗</span>
                    </Link>
                  </div>
                </Col>
              </Row>

              <Row className="footer-links-row mx-0">
                <Col xs={6} className="px-0">
                  <div className="footer-link-item">
                    <Link to="/logo" className="footer-link">
                      <span className="link-text">LOGO</span>
                      <span className="link-arrow">↗</span>
                    </Link>
                  </div>
                </Col>
                <Col xs={6} className="px-0">
                  <div className="footer-link-item">
                    <Link to="/struktur" className="footer-link">
                      <span className="link-text">STRUKTUR</span>
                      <span className="link-arrow">↗</span>
                    </Link>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
