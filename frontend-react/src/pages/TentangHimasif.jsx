import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../css/pages/TentangHimasif.css';

const TentangHimasif = () => {
  // Sample data for team members
  const teamMembers = [
    {
      id: 1,
      name: 'Ahmad Fauzii',
      position: 'Ketua HIMASIF',
      image: 'https://picsum.photos/id/1001/300/300',
      social: {
        instagram: '#',
        linkedin: '#',
        twitter: '#'
      }
    },
    {
      id: 2,
      name: 'Siti Nurhaliza',
      position: 'Wakil Ketua',
      image: 'https://picsum.photos/id/1002/300/300',
      social: {
        instagram: '#',
        linkedin: '#',
        twitter: '#'
      }
    },
    {
      id: 3,
      name: 'Budi Santoso',
      position: 'Sekretaris',
      image: 'https://picsum.photos/id/1003/300/300',
      social: {
        instagram: '#',
        linkedin: '#',
        twitter: '#'
      }
    },
    {
      id: 4,
      name: 'Dewi Lestari',
      position: 'Bendahara',
      image: 'https://picsum.photos/id/1004/300/300',
      social: {
        instagram: '#',
        linkedin: '#',
        twitter: '#'
      }
    }
  ];

  // Sample data for timeline
  const timelineItems = [
    {
      id: 1,
      year: '2015',
      title: 'Pendirian HIMASIF',
      description: 'HIMASIF didirikan sebagai wadah aspirasi mahasiswa Sistem Informasi UPJ.'
    },
    {
      id: 2,
      year: '2017',
      title: 'Seminar Teknologi Pertama',
      description: 'Menyelenggarakan seminar teknologi pertama dengan tema "Future of Technology".'
    },
    {
      id: 3,
      year: '2019',
      title: 'Kerjasama dengan Industri',
      description: 'Menjalin kerjasama dengan berbagai perusahaan teknologi untuk program magang.'
    },
    {
      id: 4,
      year: '2021',
      title: 'Webinar Series',
      description: 'Mengadakan rangkaian webinar dengan berbagai topik teknologi informasi.'
    },
    {
      id: 5,
      year: '2023',
      title: 'Kompetisi Coding Nasional',
      description: 'Menyelenggarakan kompetisi coding tingkat nasional untuk mahasiswa.'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="about-hero">
        <Container>
          <Row className="justify-content-center text-center">
            <Col md={8}>
              <h1 className="about-hero-title">Tentang HIMASIF</h1>
              <p className="about-hero-subtitle">
                Mengenal lebih dekat Himpunan Mahasiswa Sistem Informasi UPJ
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* About Section */}
      <section className="about-section">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-4 mb-lg-0">
              <h2 className="about-title">Siapa Kami?</h2>
              <p className="about-text">
                HIMASIF (Himpunan Mahasiswa Sistem Informasi) adalah organisasi mahasiswa resmi
                di Program Studi Sistem Informasi Universitas Pembangunan Jaya. Kami didirikan
                untuk mewadahi aspirasi dan kegiatan mahasiswa Sistem Informasi.
              </p>
              <p className="about-text">
                Sebagai organisasi kemahasiswaan, HIMASIF berperan aktif dalam mengembangkan
                potensi mahasiswa baik dalam bidang akademik maupun non-akademik. Kami juga
                menjadi jembatan antara mahasiswa dengan pihak program studi dan universitas.
              </p>
              <p className="about-text">
                HIMASIF secara rutin menyelenggarakan berbagai kegiatan seperti seminar, workshop,
                kompetisi, dan kegiatan sosial yang bertujuan untuk meningkatkan kualitas dan
                kompetensi mahasiswa Sistem Informasi UPJ.
              </p>
            </Col>
            <Col lg={6}>
              <div className="about-image">
                <img 
                  src="https://picsum.photos/id/20/600/400" 
                  alt="HIMASIF" 
                  className="img-fluid"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Timeline Section */}
      <section className="timeline">
        <Container>
          <h2 className="text-center mb-5">Perjalanan Kami</h2>
          
          {timelineItems.map(item => (
            <div className="timeline-item" key={item.id}>
              <div className="timeline-content">
                <div className="timeline-year">{item.year}</div>
                <h3 className="timeline-title">{item.title}</h3>
                <p className="timeline-text">{item.description}</p>
              </div>
            </div>
          ))}
        </Container>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <Container>
          <h2 className="team-title">Pengurus HIMASIF</h2>
          <Row>
            {teamMembers.map(member => (
              <Col md={3} key={member.id}>
                <div className="team-card">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="team-image"
                  />
                  <h3 className="team-name">{member.name}</h3>
                  <p className="team-position">{member.position}</p>
                  <div className="team-social">
                    <a href={member.social.instagram}>
                      <i className="bi bi-instagram"></i>
                    </a>
                    <a href={member.social.linkedin}>
                      <i className="bi bi-linkedin"></i>
                    </a>
                    <a href={member.social.twitter}>
                      <i className="bi bi-twitter"></i>
                    </a>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Values Section */}
      <section className="about-section">
        <Container>
          <Row className="justify-content-center text-center mb-5">
            <Col md={8}>
              <h2 className="about-title">Nilai-Nilai Kami</h2>
              <p className="lead">
                HIMASIF berpegang pada nilai-nilai yang menjadi landasan dalam setiap kegiatan dan program kerja kami.
              </p>
            </Col>
          </Row>
          
          <Row>
            <Col md={4} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Body className="text-center">
                  <div className="display-4 text-primary mb-3">
                    <i className="bi bi-people"></i>
                  </div>
                  <Card.Title className="h4">Kebersamaan</Card.Title>
                  <Card.Text>
                    Kami menjunjung tinggi semangat kebersamaan dan kekeluargaan dalam setiap kegiatan.
                    Bersama-sama kita bisa mencapai lebih banyak hal.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            
            <Col md={4} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Body className="text-center">
                  <div className="display-4 text-primary mb-3">
                    <i className="bi bi-lightbulb"></i>
                  </div>
                  <Card.Title className="h4">Inovasi</Card.Title>
                  <Card.Text>
                    Kami selalu berusaha untuk berinovasi dan mengembangkan ide-ide baru
                    dalam setiap program kerja dan kegiatan.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            
            <Col md={4} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Body className="text-center">
                  <div className="display-4 text-primary mb-3">
                    <i className="bi bi-graph-up"></i>
                  </div>
                  <Card.Title className="h4">Profesionalisme</Card.Title>
                  <Card.Text>
                    Kami berkomitmen untuk bekerja secara profesional dan bertanggung jawab
                    dalam setiap tugas dan kegiatan.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default TentangHimasif;
