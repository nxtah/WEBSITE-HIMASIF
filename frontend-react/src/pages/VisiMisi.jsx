import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../css/pages/VisiMisi.css';

const VisiMisi = () => {
  // Sample data for misi
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

  // Sample data for tujuan
  const tujuanItems = [
    {
      id: 1,
      icon: 'bi-mortarboard',
      text: 'Meningkatkan prestasi akademik mahasiswa Sistem Informasi UPJ.'
    },
    {
      id: 2,
      icon: 'bi-people',
      text: 'Membangun jaringan yang luas dengan berbagai pihak baik internal maupun eksternal.'
    },
    {
      id: 3,
      icon: 'bi-trophy',
      text: 'Meningkatkan partisipasi dan prestasi mahasiswa dalam berbagai kompetisi.'
    },
    {
      id: 4,
      icon: 'bi-briefcase',
      text: 'Mempersiapkan mahasiswa untuk siap bersaing di dunia kerja.'
    },
    {
      id: 5,
      icon: 'bi-graph-up',
      text: 'Mengembangkan jiwa kepemimpinan dan kewirausahaan mahasiswa.'
    },
    {
      id: 6,
      icon: 'bi-heart',
      text: 'Menumbuhkan kepedulian sosial dan kontribusi positif kepada masyarakat.'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="visimisi-hero">
        <Container>
          <Row className="justify-content-center text-center">
            <Col md={8}>
              <h1 className="visimisi-hero-title">Visi & Misi HIMASIF</h1>
              <p className="visimisi-hero-subtitle">
                Arah dan tujuan Himpunan Mahasiswa Sistem Informasi UPJ
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Visi Section */}
      <section className="visi-section">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <h2 className="visi-title">Visi</h2>
              <p className="visi-text">
                "Menjadikan HIMASIF sebagai wadah pengembangan potensi mahasiswa Sistem Informasi
                yang profesional, inovatif, dan berdaya saing tinggi dalam bidang teknologi informasi."
              </p>
              <img 
                src="https://picsum.photos/id/50/600/400" 
                alt="Visi HIMASIF" 
                className="visi-image img-fluid rounded shadow"
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Misi Section */}
      <section className="misi-section">
        <Container>
          <h2 className="misi-title">Misi</h2>
          
          {misiItems.map(item => (
            <div className="misi-item" key={item.id}>
              <div className="misi-number">{item.id}</div>
              <div className="misi-content">
                <p className="misi-text">{item.text}</p>
              </div>
            </div>
          ))}
        </Container>
      </section>

      {/* Tujuan Section */}
      <section className="tujuan-section">
        <Container>
          <h2 className="tujuan-title">Tujuan</h2>
          
          <Row>
            {tujuanItems.map(item => (
              <Col md={4} className="mb-4" key={item.id}>
                <div className="tujuan-card h-100">
                  <div className="tujuan-icon">
                    <i className={`bi ${item.icon}`}></i>
                  </div>
                  <p className="tujuan-text">{item.text}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Quote Section */}
      <section className="quote-section">
        <Container>
          <Row className="justify-content-center">
            <Col md={8}>
              <p className="quote-text">
                "Bersama HIMASIF, kita kembangkan potensi, raih prestasi, dan berikan kontribusi
                untuk kemajuan teknologi informasi Indonesia."
              </p>
              <p className="quote-author">- Pengurus HIMASIF UPJ</p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Commitment Section */}
      <section className="about-section">
        <Container>
          <Row className="justify-content-center text-center mb-5">
            <Col md={8}>
              <h2 className="about-title">Komitmen Kami</h2>
              <p className="lead">
                HIMASIF berkomitmen untuk memberikan yang terbaik bagi seluruh mahasiswa Sistem Informasi UPJ.
              </p>
            </Col>
          </Row>
          
          <Row>
            <Col md={6} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <h3 className="h4 mb-3">Pengembangan Akademik</h3>
                  <p>
                    Kami berkomitmen untuk mendukung pengembangan akademik mahasiswa melalui
                    berbagai kegiatan seperti workshop, seminar, dan pelatihan yang relevan
                    dengan bidang Sistem Informasi.
                  </p>
                  <p>
                    Kami juga memfasilitasi kegiatan belajar bersama dan diskusi untuk
                    membantu mahasiswa dalam memahami materi perkuliahan.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            
            <Col md={6} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <h3 className="h4 mb-3">Pengembangan Soft Skill</h3>
                  <p>
                    Kami berkomitmen untuk membantu mahasiswa mengembangkan soft skill
                    yang dibutuhkan di dunia kerja, seperti kepemimpinan, komunikasi,
                    kerja tim, dan manajemen waktu.
                  </p>
                  <p>
                    Melalui berbagai kegiatan organisasi, mahasiswa dapat belajar dan
                    mengembangkan soft skill yang akan bermanfaat untuk karir mereka di masa depan.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            
            <Col md={6} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <h3 className="h4 mb-3">Jaringan dan Kerjasama</h3>
                  <p>
                    Kami berkomitmen untuk membangun jaringan dan kerjasama dengan
                    berbagai pihak, baik internal maupun eksternal, untuk membuka
                    peluang bagi mahasiswa Sistem Informasi.
                  </p>
                  <p>
                    Kerjasama dengan perusahaan teknologi, komunitas IT, dan alumni
                    akan memberikan manfaat bagi mahasiswa dalam bentuk magang,
                    lowongan kerja, dan mentoring.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            
            <Col md={6} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <h3 className="h4 mb-3">Kontribusi Sosial</h3>
                  <p>
                    Kami berkomitmen untuk memberikan kontribusi positif kepada
                    masyarakat melalui berbagai kegiatan sosial dan pengabdian masyarakat.
                  </p>
                  <p>
                    Dengan memanfaatkan pengetahuan dan keterampilan di bidang teknologi
                    informasi, kami berusaha untuk membantu masyarakat dalam menghadapi
                    era digital.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default VisiMisi;
