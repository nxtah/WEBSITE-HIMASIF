import React from 'react';
import { Container, Row, Col, Card, Button, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../css/pages/Home.css';

const Home = () => {
  // Sample data for carousel
  const carouselItems = [
    {
      id: 1,
      image: 'https://picsum.photos/id/1/1200/400',
      title: 'Selamat Datang di HIMASIF UPJ',
      description: 'Himpunan Mahasiswa Sistem Informasi Universitas Pembangunan Jaya',
      buttonText: 'Tentang Kami',
      buttonLink: '/tentang-himasif'
    },
    {
      id: 2,
      image: 'https://picsum.photos/id/2/1200/400',
      title: 'Bergabunglah dengan Kegiatan Kami',
      description: 'Berbagai kegiatan menarik untuk mengembangkan potensi mahasiswa',
      buttonText: 'Lihat Kegiatan',
      buttonLink: '/berita'
    },
    {
      id: 3,
      image: 'https://picsum.photos/id/3/1200/400',
      title: 'HIMASIF Merchandise',
      description: 'Dapatkan merchandise eksklusif HIMASIF',
      buttonText: 'Beli Sekarang',
      buttonLink: '/merch'
    }
  ];

  // Sample data for news
  const newsItems = [
    {
      id: 1,
      title: 'Workshop UI/UX Design untuk Pemula',
      date: '15 Maret 2024',
      category: 'Workshop',
      description: 'Workshop mengenai dasar-dasar UI/UX Design untuk pemula yang diselenggarakan oleh HIMASIF bekerjasama dengan industri.',
      image: 'https://picsum.photos/id/20/600/400'
    },
    {
      id: 2,
      title: 'Seminar Teknologi AI dan Machine Learning',
      date: '20 April 2024',
      category: 'Seminar',
      description: 'Seminar tentang perkembangan teknologi AI dan implementasinya dalam berbagai bidang industri.',
      image: 'https://picsum.photos/id/21/600/400'
    },
    {
      id: 3,
      title: 'Kompetisi Coding Antar Mahasiswa',
      date: '10 Mei 2024',
      category: 'Kompetisi',
      description: 'Kompetisi coding antar mahasiswa Sistem Informasi dengan hadiah menarik dan sertifikat.',
      image: 'https://picsum.photos/id/22/600/400'
    }
  ];

  // Sample data for upcoming events
  const upcomingEvents = [
    {
      id: 1,
      title: 'Webinar Data Science',
      date: { day: '25', month: 'Mar' },
      time: '13:00 - 15:00 WIB',
      location: 'Online via Zoom',
      description: 'Webinar tentang pengenalan Data Science dan peluang karir di bidang ini.'
    },
    {
      id: 2,
      title: 'Study Tour ke Startup',
      date: { day: '05', month: 'Apr' },
      time: '09:00 - 16:00 WIB',
      location: 'Jakarta Selatan',
      description: 'Kunjungan ke beberapa startup teknologi di Jakarta.'
    },
    {
      id: 3,
      title: 'Workshop Mobile App Development',
      date: { day: '12', month: 'Apr' },
      time: '09:00 - 15:00 WIB',
      location: 'Lab Komputer UPJ',
      description: 'Workshop pengembangan aplikasi mobile dengan React Native.'
    }
  ];

  // Sample data for gallery
  const galleryItems = [
    { id: 1, image: 'https://picsum.photos/id/30/600/400', title: 'Seminar Teknologi 2023' },
    { id: 2, image: 'https://picsum.photos/id/31/600/400', title: 'Workshop Programming' },
    { id: 3, image: 'https://picsum.photos/id/32/600/400', title: 'Kunjungan Industri' },
    { id: 4, image: 'https://picsum.photos/id/33/600/400', title: 'Kompetisi Coding' },
    { id: 5, image: 'https://picsum.photos/id/34/600/400', title: 'Gathering HIMASIF' },
    { id: 6, image: 'https://picsum.photos/id/35/600/400', title: 'Webinar Series' }
  ];

  return (
    <>
      {/* Hero Carousel */}
      <Carousel className="mb-5">
        {carouselItems.map(item => (
          <Carousel.Item key={item.id}>
            <img
              className="d-block w-100"
              src={item.image}
              alt={item.title}
            />
            <Carousel.Caption>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <Button
                as={Link}
                to={item.buttonLink}
                variant="primary"
                size="lg"
              >
                {item.buttonText}
              </Button>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>

      {/* About Section */}
      <section className="hero-section">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-4 mb-lg-0">
              <h2 className="hero-title">Tentang HIMASIF</h2>
              <p className="hero-subtitle">
                Himpunan Mahasiswa Sistem Informasi Universitas Pembangunan Jaya
              </p>
              <p className="mb-4">
                HIMASIF adalah organisasi mahasiswa yang mewadahi aspirasi dan kegiatan mahasiswa
                program studi Sistem Informasi di Universitas Pembangunan Jaya. Kami berkomitmen untuk
                mengembangkan potensi mahasiswa dalam bidang akademik maupun non-akademik.
              </p>
              <Button
                as={Link}
                to="/tentang-himasif"
                variant="primary"
                size="lg"
              >
                Pelajari Lebih Lanjut
              </Button>
            </Col>
            <Col lg={6}>
              <img
                src="https://picsum.photos/id/10/600/400"
                alt="HIMASIF"
                className="img-fluid rounded shadow"
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* News Section */}
      <section className="featured-section">
        <Container>
          <h2 className="section-title">Berita Terbaru</h2>
          <Row>
            {newsItems.map(news => (
              <Col md={4} className="mb-4" key={news.id}>
                <Card className="news-card h-100 shadow-sm">
                  <Card.Img variant="top" src={news.image} />
                  <Card.Body>
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span className="badge bg-primary">{news.category}</span>
                      <small className="news-date">{news.date}</small>
                    </div>
                    <Card.Title>{news.title}</Card.Title>
                    <Card.Text>{news.description}</Card.Text>
                  </Card.Body>
                  <Card.Footer className="bg-white border-0">
                    <Button
                      as={Link}
                      to="/berita"
                      variant="outline-primary"
                    >
                      Baca Selengkapnya
                    </Button>
                  </Card.Footer>
                </Card>
              </Col>
            ))}
          </Row>
          <div className="text-center mt-4">
            <Button
              as={Link}
              to="/berita"
              variant="primary"
            >
              Lihat Semua Berita
            </Button>
          </div>
        </Container>
      </section>

      {/* Upcoming Events */}
      <section className="featured-section bg-light py-5">
        <Container>
          <h2 className="section-title">Kegiatan Mendatang</h2>
          <Row>
            {upcomingEvents.map(event => (
              <Col md={4} className="mb-4" key={event.id}>
                <Card className="event-card h-100 shadow-sm">
                  <Card.Body className="d-flex">
                    <div className="event-date me-3">
                      <div className="event-day">{event.date.day}</div>
                      <div className="event-month">{event.date.month}</div>
                    </div>
                    <div>
                      <Card.Title>{event.title}</Card.Title>
                      <Card.Text className="mb-1">
                        <i className="bi bi-clock me-2"></i>{event.time}
                      </Card.Text>
                      <Card.Text className="mb-3">
                        <i className="bi bi-geo-alt me-2"></i>{event.location}
                      </Card.Text>
                      <Card.Text>{event.description}</Card.Text>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Gallery Preview */}
      <section className="gallery-preview">
        <Container>
          <h2 className="section-title">Galeri Kegiatan</h2>
          <Row>
            {galleryItems.map(item => (
              <Col md={4} lg={4} key={item.id}>
                <div className="gallery-item">
                  <img src={item.image} alt={item.title} />
                  <div className="overlay">
                    <h5>{item.title}</h5>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
          <div className="text-center mt-4">
            <Button
              as={Link}
              to="/galeri"
              variant="primary"
            >
              Lihat Semua Galeri
            </Button>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <Container>
          <h2 className="cta-title">Bergabung dengan HIMASIF</h2>
          <p className="cta-text">
            Jadilah bagian dari keluarga HIMASIF dan kembangkan potensimu bersama kami.
            Dapatkan berbagai pengalaman berharga dan jaringan yang luas.
          </p>
          <Button
            as={Link}
            to="/tentang-himasif"
            variant="light"
            size="lg"
            className="btn-cta"
          >
            Pelajari Lebih Lanjut
          </Button>
        </Container>
      </section>
    </>
  );
};

export default Home;
