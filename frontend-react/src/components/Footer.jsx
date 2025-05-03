import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../css/components/Footer.css';

const Footer = () => {
  return (
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
  );
};

export default Footer;
