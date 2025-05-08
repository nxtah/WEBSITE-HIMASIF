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
          <Col md={6} className="footer-left">
            <div className="footer-slogan-label">SLOGAN</div>
            <div className="footer-slogan">
              <div className="slogan-we">WE</div>
              <div className="slogan-make">MAKE</div>
              <div className="slogan-happen">
                <span className="slogan-it">//</span>
                <span>HAPPEN</span>
              </div>
            </div>
          </Col>

          {/* Divider */}
          <div className="footer-divider-col">
            <div className="footer-divider-vertical"></div>
          </div>

          {/* Footer Right - Links */}
          <Col md={5} className="footer-right">
            <div className="acara-label">ACARA MENDATANG</div>
            <div className="acara-box"></div>

            <div className="footer-links-container">
              <div className="footer-links-row">
                <div className="footer-link-item">
                  <Link to="/visi-misi" className="footer-link">
                    <span className="link-text">VISI & MISI</span>
                    <span className="link-arrow">↗</span>
                  </Link>
                </div>
                <div className="footer-link-item">
                  <Link to="/berita" className="footer-link">
                    <span className="link-text">BERITA</span>
                    <span className="link-arrow">↗</span>
                  </Link>
                </div>
              </div>

              <div className="footer-links-row">
                <div className="footer-link-item">
                  <Link to="/sejarah" className="footer-link">
                    <span className="link-text">SEJARAH</span>
                    <span className="link-arrow">↗</span>
                  </Link>
                </div>
                <div className="footer-link-item">
                  <Link to="/merch" className="footer-link">
                    <span className="link-text">MERCH</span>
                    <span className="link-arrow">↗</span>
                  </Link>
                </div>
              </div>

              <div className="footer-links-row">
                <div className="footer-link-item">
                  <Link to="/logo" className="footer-link">
                    <span className="link-text">LOGO</span>
                    <span className="link-arrow">↗</span>
                  </Link>
                </div>
                <div className="footer-link-item">
                  <Link to="/struktur" className="footer-link">
                    <span className="link-text">STRUKTUR</span>
                    <span className="link-arrow">↗</span>
                  </Link>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Footer Number */}
      <div className="footer-number">360</div>
    </footer>
  );
};

export default Footer;
