import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Pagination } from 'react-bootstrap';
import '../css/pages/Galeri.css';

const Galeri = () => {
  // State for filters
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightboxActive, setLightboxActive] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  // Sample data for gallery items
  const galleryItems = [
    {
      id: 1,
      title: 'Seminar Teknologi 2023',
      category: 'seminar',
      image: 'https://picsum.photos/id/80/600/400',
      date: '15 November 2023'
    },
    {
      id: 2,
      title: 'Workshop Programming',
      category: 'workshop',
      image: 'https://picsum.photos/id/81/600/400',
      date: '20 Desember 2023'
    },
    {
      id: 3,
      title: 'Kunjungan Industri',
      category: 'kunjungan',
      image: 'https://picsum.photos/id/82/600/400',
      date: '10 Januari 2024'
    },
    {
      id: 4,
      title: 'Kompetisi Coding',
      category: 'kompetisi',
      image: 'https://picsum.photos/id/83/600/400',
      date: '5 Februari 2024'
    },
    {
      id: 5,
      title: 'Gathering HIMASIF',
      category: 'gathering',
      image: 'https://picsum.photos/id/84/600/400',
      date: '25 Februari 2024'
    },
    {
      id: 6,
      title: 'Webinar Series',
      category: 'webinar',
      image: 'https://picsum.photos/id/85/600/400',
      date: '15 Maret 2024'
    },
    {
      id: 7,
      title: 'Workshop UI/UX Design',
      category: 'workshop',
      image: 'https://picsum.photos/id/86/600/400',
      date: '20 Maret 2024'
    },
    {
      id: 8,
      title: 'Seminar AI dan Machine Learning',
      category: 'seminar',
      image: 'https://picsum.photos/id/87/600/400',
      date: '10 April 2024'
    },
    {
      id: 9,
      title: 'Kegiatan Sosial',
      category: 'sosial',
      image: 'https://picsum.photos/id/88/600/400',
      date: '25 April 2024'
    }
  ];

  // Sample data for albums
  const albums = [
    {
      id: 1,
      name: 'Seminar Teknologi 2023',
      date: 'November 2023',
      count: 25,
      description: 'Dokumentasi kegiatan Seminar Teknologi yang diselenggarakan oleh HIMASIF pada November 2023.',
      image: 'https://picsum.photos/id/90/600/400'
    },
    {
      id: 2,
      name: 'Workshop Programming',
      date: 'Desember 2023',
      count: 18,
      description: 'Dokumentasi kegiatan Workshop Programming yang diselenggarakan oleh HIMASIF pada Desember 2023.',
      image: 'https://picsum.photos/id/91/600/400'
    },
    {
      id: 3,
      name: 'Kunjungan Industri',
      date: 'Januari 2024',
      count: 30,
      description: 'Dokumentasi kegiatan Kunjungan Industri ke beberapa perusahaan teknologi di Jakarta.',
      image: 'https://picsum.photos/id/92/600/400'
    }
  ];

  // Filter gallery items based on active category
  const filteredGallery = activeCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  // Open lightbox
  const openLightbox = (item) => {
    setCurrentImage(item);
    setLightboxActive(true);
  };

  // Close lightbox
  const closeLightbox = () => {
    setLightboxActive(false);
    setCurrentImage(null);
  };

  // Navigate to previous image
  const prevImage = () => {
    const currentIndex = galleryItems.findIndex(item => item.id === currentImage.id);
    const prevIndex = currentIndex === 0 ? galleryItems.length - 1 : currentIndex - 1;
    setCurrentImage(galleryItems[prevIndex]);
  };

  // Navigate to next image
  const nextImage = () => {
    const currentIndex = galleryItems.findIndex(item => item.id === currentImage.id);
    const nextIndex = currentIndex === galleryItems.length - 1 ? 0 : currentIndex + 1;
    setCurrentImage(galleryItems[nextIndex]);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="galeri-hero">
        <Container>
          <Row className="justify-content-center text-center">
            <Col md={8}>
              <h1 className="galeri-hero-title">Galeri HIMASIF</h1>
              <p className="galeri-hero-subtitle">
                Dokumentasi kegiatan dan acara HIMASIF UPJ
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Gallery Section */}
      <section className="galeri-section">
        <Container>
          <h2 className="galeri-title">Galeri Foto</h2>
          
          {/* Filter Section */}
          <div className="filter-section">
            <h3 className="filter-title">Filter Kategori</h3>
            <div className="filter-group">
              <button 
                className={`filter-btn ${activeCategory === 'all' ? 'active' : ''}`}
                onClick={() => setActiveCategory('all')}
              >
                Semua
              </button>
              <button 
                className={`filter-btn ${activeCategory === 'seminar' ? 'active' : ''}`}
                onClick={() => setActiveCategory('seminar')}
              >
                Seminar
              </button>
              <button 
                className={`filter-btn ${activeCategory === 'workshop' ? 'active' : ''}`}
                onClick={() => setActiveCategory('workshop')}
              >
                Workshop
              </button>
              <button 
                className={`filter-btn ${activeCategory === 'kompetisi' ? 'active' : ''}`}
                onClick={() => setActiveCategory('kompetisi')}
              >
                Kompetisi
              </button>
              <button 
                className={`filter-btn ${activeCategory === 'gathering' ? 'active' : ''}`}
                onClick={() => setActiveCategory('gathering')}
              >
                Gathering
              </button>
              <button 
                className={`filter-btn ${activeCategory === 'kunjungan' ? 'active' : ''}`}
                onClick={() => setActiveCategory('kunjungan')}
              >
                Kunjungan
              </button>
            </div>
          </div>
          
          {/* Gallery Grid */}
          <div className="gallery-grid">
            {filteredGallery.map(item => (
              <div 
                className="gallery-item" 
                key={item.id}
                onClick={() => openLightbox(item)}
              >
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="gallery-image"
                />
                <div className="gallery-overlay">
                  <div className="gallery-icon">
                    <i className="bi bi-zoom-in"></i>
                  </div>
                  <h3 className="gallery-title">{item.title}</h3>
                  <span className="gallery-category">{item.category}</span>
                </div>
              </div>
            ))}
          </div>
          
          {/* Pagination */}
          <div className="pagination-section">
            <Pagination>
              <Pagination.Prev />
              <Pagination.Item active>{1}</Pagination.Item>
              <Pagination.Item>{2}</Pagination.Item>
              <Pagination.Item>{3}</Pagination.Item>
              <Pagination.Next />
            </Pagination>
          </div>
        </Container>
      </section>

      {/* Album Section */}
      <section className="album-section">
        <Container>
          <h2 className="album-title">Album Kegiatan</h2>
          
          <Row>
            {albums.map(album => (
              <Col md={4} className="mb-4" key={album.id}>
                <Card className="album-card h-100">
                  <div className="album-image-container">
                    <Card.Img 
                      variant="top" 
                      src={album.image} 
                      className="album-image"
                    />
                    <span className="album-count">
                      <i className="bi bi-images me-1"></i>
                      {album.count} Foto
                    </span>
                  </div>
                  <Card.Body className="album-body">
                    <Card.Title className="album-name">{album.name}</Card.Title>
                    <div className="album-date">
                      <i className="bi bi-calendar me-2"></i>
                      {album.date}
                    </div>
                    <Card.Text className="album-description">
                      {album.description}
                    </Card.Text>
                    <Button variant="primary" className="btn-view-album">
                      Lihat Album
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Lightbox */}
      <div className={`lightbox ${lightboxActive ? 'active' : ''}`}>
        <div className="lightbox-content">
          {currentImage && (
            <>
              <img 
                src={currentImage.image} 
                alt={currentImage.title} 
                className="lightbox-image"
              />
              <div className="lightbox-close" onClick={closeLightbox}>
                <i className="bi bi-x-lg"></i>
              </div>
              <div className="lightbox-caption">
                <h4>{currentImage.title}</h4>
                <p>{currentImage.date}</p>
              </div>
              <div className="lightbox-nav">
                <div className="lightbox-prev" onClick={prevImage}>
                  <i className="bi bi-chevron-left"></i>
                </div>
                <div className="lightbox-next" onClick={nextImage}>
                  <i className="bi bi-chevron-right"></i>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Galeri;
