import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../css/pages/Home.css';

// Set the document title
document.title = 'HIMASIF - Himpunan Mahasiswa Sistem Informasi';

const Home = () => {
  return (
    <>
      {/* Landing Home Section */}
      <section id="landing-home" className="landing-home-section d-flex align-items-center">
        {/* Content container */}
        <Container fluid className="p-0">
          <Row className="justify-content-center m-0">
            <Col xs={12} className="text-center">
              <div className="landing-content">
                <h1 className="himasif-title">HIMASIF</h1>
                <p className="himasif-subtitle">HIMPUNAN MAHASISWA SISTEM INFORMASI</p>
              </div>
            </Col>
          </Row>

          {/* Copyright text at bottom */}
          <Row className="justify-content-center m-0 copyright-container">
            <Col xs={12} className="text-center">
              <div className="copyright-wrapper">
                <p className="copyright-text">© 2023 HIMASIF UPJ</p>
              </div>
            </Col>
          </Row>

          {/* Scroll indicator */}
          <Row className="justify-content-center m-0">
            <Col xs={12} className="text-center">
              <div className="scroll-indicator">
                <div className="scroll-arrow"></div>
                <p className="scroll-text">scroll</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Foto Home Section */}
      <section id="foto-home" className="foto-home-section d-flex align-items-center">
        <Container fluid>
          <Row className="justify-content-center m-0">
            <Col xs={12} md={10} className="text-center mb-5">
              <div className="section-header">
                <h2 className="section-title">Foto HIMASIF</h2>
                <p className="section-subtitle">Dokumentasi kegiatan dan momen berharga HIMASIF</p>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center mx-0">
            <Col xs={12} md={6} lg={4} className="mb-4">
              <Card className="foto-card h-100">
                <Card.Img variant="top" src="https://picsum.photos/id/30/600/400" />
                <Card.Body>
                  <Card.Title>Kegiatan HIMASIF</Card.Title>
                  <Card.Text>
                    Dokumentasi berbagai kegiatan yang telah dilaksanakan oleh HIMASIF.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={6} lg={4} className="mb-4">
              <Card className="foto-card h-100">
                <Card.Img variant="top" src="https://picsum.photos/id/31/600/400" />
                <Card.Body>
                  <Card.Title>Pengurus HIMASIF</Card.Title>
                  <Card.Text>
                    Foto bersama pengurus HIMASIF periode terbaru.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={6} lg={4} className="mb-4">
              <Card className="foto-card h-100">
                <Card.Img variant="top" src="https://picsum.photos/id/32/600/400" />
                <Card.Body>
                  <Card.Title>Acara HIMASIF</Card.Title>
                  <Card.Text>
                    Dokumentasi acara-acara yang diselenggarakan oleh HIMASIF.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Divider Home Section */}
      <section id="divider-home" className="divider-home-section d-flex align-items-center justify-content-center">
        <Container fluid className="p-0">
          <Row className="justify-content-center m-0">
            <Col xs={12} className="text-center">
              <div className="divider-content">
                <h2>HIMASIF UPJ</h2>
                <p>Bersama Membangun Masa Depan Teknologi</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Periode Home Section */}
      <section id="periode-home" className="periode-home-section d-flex align-items-center">
        <Container fluid>
          <Row className="justify-content-center m-0">
            <Col xs={12} md={10} lg={8} className="text-center mb-5">
              <div className="section-header">
                <h2 className="section-title">Periode Kepengurusan</h2>
                <p className="section-subtitle">Kepengurusan HIMASIF dari masa ke masa</p>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center mx-0">
            <Col xs={12} md={10} lg={8}>
              <div className="periode-timeline">
                <div className="periode-item">
                  <div className="periode-year">2023/2024</div>
                  <div className="periode-content">
                    <h3>Periode Transformasi Digital</h3>
                    <p>Fokus pada pengembangan teknologi dan inovasi digital untuk mahasiswa Sistem Informasi.</p>
                  </div>
                </div>
                <div className="periode-item">
                  <div className="periode-year">2022/2023</div>
                  <div className="periode-content">
                    <h3>Periode Kolaborasi Industri</h3>
                    <p>Menjalin kerjasama dengan berbagai industri teknologi untuk pengembangan mahasiswa.</p>
                  </div>
                </div>
                <div className="periode-item">
                  <div className="periode-year">2021/2022</div>
                  <div className="periode-content">
                    <h3>Periode Adaptasi New Normal</h3>
                    <p>Beradaptasi dengan situasi pandemi dan mengembangkan program-program daring.</p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Pengurus Home Section */}
      <section id="pengurus-home" className="pengurus-home-section d-flex align-items-center">
        <Container fluid>
          <Row className="justify-content-center m-0">
            <Col xs={12} md={10} lg={8} className="text-center mb-5">
              <div className="section-header">
                <h2 className="section-title">Pengurus HIMASIF</h2>
                <p className="section-subtitle">Kenali pengurus HIMASIF periode 2023/2024</p>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center mx-0">
            <Col xs={12} sm={6} md={4} className="mb-4">
              <Card className="pengurus-card text-center h-100">
                <Card.Img variant="top" src="https://picsum.photos/id/40/300/300" className="pengurus-img" />
                <Card.Body>
                  <Card.Title>Nama Ketua</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Ketua HIMASIF</Card.Subtitle>
                  <Card.Text>
                    "Bersama kita wujudkan HIMASIF yang inovatif dan berdaya saing."
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} sm={6} md={4} className="mb-4">
              <Card className="pengurus-card text-center h-100">
                <Card.Img variant="top" src="https://picsum.photos/id/41/300/300" className="pengurus-img" />
                <Card.Body>
                  <Card.Title>Nama Wakil Ketua</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Wakil Ketua HIMASIF</Card.Subtitle>
                  <Card.Text>
                    "Mari berkolaborasi untuk kemajuan HIMASIF dan mahasiswa Sistem Informasi."
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} sm={6} md={4} className="mb-4">
              <Card className="pengurus-card text-center h-100">
                <Card.Img variant="top" src="https://picsum.photos/id/42/300/300" className="pengurus-img" />
                <Card.Body>
                  <Card.Title>Nama Sekretaris</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Sekretaris HIMASIF</Card.Subtitle>
                  <Card.Text>
                    "Administrasi yang baik adalah kunci keberhasilan organisasi."
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row className="justify-content-center mx-0">
            <Col xs={12} className="text-center mt-4">
              <Button as={Link} to="/tentang-himasif" variant="outline-primary">
                Lihat Semua Pengurus
              </Button>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Sorotan Home Section */}
      <section id="sorotan-home" className="sorotan-home-section d-flex align-items-center">
        <Container fluid>
          <Row className="justify-content-center m-0">
            <Col xs={12} md={10} lg={8} className="text-center mb-5">
              <div className="section-header">
                <h2 className="section-title">Sorotan Kegiatan</h2>
                <p className="section-subtitle">Kegiatan-kegiatan unggulan HIMASIF</p>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center mx-0">
            <Col xs={12} sm={6} md={4} className="mb-4">
              <Card className="sorotan-card h-100">
                <Card.Img variant="top" src="https://picsum.photos/id/50/600/400" />
                <Card.Body>
                  <Card.Title>Seminar Teknologi</Card.Title>
                  <Card.Text>
                    Seminar teknologi terkini dengan pembicara dari industri teknologi terkemuka.
                  </Card.Text>
                </Card.Body>
                <Card.Footer className="bg-white border-0">
                  <Button as={Link} to="/berita" variant="outline-primary" size="sm">
                    Selengkapnya
                  </Button>
                </Card.Footer>
              </Card>
            </Col>
            <Col xs={12} sm={6} md={4} className="mb-4">
              <Card className="sorotan-card h-100">
                <Card.Img variant="top" src="https://picsum.photos/id/51/600/400" />
                <Card.Body>
                  <Card.Title>Workshop Programming</Card.Title>
                  <Card.Text>
                    Workshop pemrograman untuk meningkatkan keterampilan teknis mahasiswa.
                  </Card.Text>
                </Card.Body>
                <Card.Footer className="bg-white border-0">
                  <Button as={Link} to="/berita" variant="outline-primary" size="sm">
                    Selengkapnya
                  </Button>
                </Card.Footer>
              </Card>
            </Col>
            <Col xs={12} sm={6} md={4} className="mb-4">
              <Card className="sorotan-card h-100">
                <Card.Img variant="top" src="https://picsum.photos/id/52/600/400" />
                <Card.Body>
                  <Card.Title>Kunjungan Industri</Card.Title>
                  <Card.Text>
                    Kunjungan ke perusahaan teknologi untuk memperluas wawasan mahasiswa.
                  </Card.Text>
                </Card.Body>
                <Card.Footer className="bg-white border-0">
                  <Button as={Link} to="/berita" variant="outline-primary" size="sm">
                    Selengkapnya
                  </Button>
                </Card.Footer>
              </Card>
            </Col>
          </Row>
          <Row className="justify-content-center mx-0">
            <Col xs={12} className="text-center mt-4">
              <Button as={Link} to="/berita" variant="primary">
                Lihat Semua Kegiatan
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Home;
