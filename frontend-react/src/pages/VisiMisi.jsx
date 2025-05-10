import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../css/pages/VisiMisi.css';

const VisiMisi = () => {
  const misiItems = [
    {
      id: 1,
      text: 'Mengembangkan kemampuan akademik dan non-akademik mahasiswa Sistem Informasi melalui berbagai kegiatan yang mendukung.'
    },
    {
      id: 2,
      text: 'Memfasilitasi kegiatan yang mendukung pengembangan soft skill dan hard skill mahasiswa Sistem Informasi.'
    },
    {
      id: 3,
      text: 'Menjalin kerjasama dengan berbagai pihak untuk meningkatkan kualitas dan daya saing mahasiswa Sistem Informasi.'
    },
    {
      id: 4,
      text: 'Menjadi wadah aspirasi mahasiswa Sistem Informasi dan menjembatani komunikasi dengan pihak program studi dan universitas.'
    },
    {
      id: 5,
      text: 'Menyelenggarakan kegiatan yang bermanfaat bagi mahasiswa Sistem Informasi dan masyarakat luas.'
    }
  ];

  return (
    <>
      {/* Landing Section */}
      <section className="landing-visiMisi">
        <Container fluid className="h-100 d-flex align-items-center justify-content-center">
          <Row className="w-100 justify-content-center">
            <Col xs={12} className="text-center position-relative d-flex justify-content-center">
              <div className="landing-title">
                <div className="visi-text">VISI</div>
                <div className="misi-text">MISI</div>
              </div>
              <div className="ampersand-container">
                <div className="ampersand">&</div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* About Visi Section */}
      <section className="about-visi">
        <Container fluid className="h-100">
          <Row className="h-100 align-items-center">
            <Col md={6} className="visi-left">
              <div className="visi-content">
                <h2 className="visi-title">Visi</h2>
                <div className="visi-description">
                  <p>
                    "Menjadikan HIMASIF sebagai wadah pengembangan potensi mahasiswa Sistem Informasi
                    yang profesional, inovatif, dan berdaya saing tinggi dalam bidang teknologi informasi."
                  </p>
                </div>
              </div>
            </Col>
            <Col md={6} className="visi-right">
              <div className="visi-image-container">
                <img
                  src="https://picsum.photos/id/50/600/400"
                  alt="Visi HIMASIF"
                  className="visi-image img-fluid"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Divider Section */}
      <section className="divider-visiMisi">
        <Container fluid className="h-100 d-flex align-items-center justify-content-center">
          <div className="divider-content text-center">
            <h2 className="divider-title">Bersama HIMASIF</h2>
            <p className="divider-subtitle">
              Kita kembangkan potensi, raih prestasi, dan berikan kontribusi
              untuk kemajuan teknologi informasi Indonesia.
            </p>
          </div>
        </Container>
      </section>

      {/* About Misi Section */}
      <section className="about-misi">
        <Container fluid className="h-100">
          <Row className="justify-content-center">
            <Col md={10} lg={8}>
              <h2 className="misi-title">Misi</h2>

              <div className="misi-items">
                {misiItems.map(item => (
                  <div className="misi-item" key={item.id}>
                    <div className="misi-number">{item.id}</div>
                    <div className="misi-content">
                      <p className="misi-text">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default VisiMisi;
