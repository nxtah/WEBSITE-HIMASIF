import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Form, Pagination } from 'react-bootstrap';
import '../css/pages/Berita.css';

const Berita = () => {
  // State for filters
  const [activeCategory, setActiveCategory] = useState('all');

  // Sample data for featured news
  const featuredNews = {
    id: 1,
    title: 'Seminar Teknologi AI dan Machine Learning 2024',
    date: '20 April 2024',
    author: 'Admin HIMASIF',
    category: 'Seminar',
    comments: 12,
    excerpt: 'HIMASIF UPJ dengan bangga mempersembahkan Seminar Teknologi AI dan Machine Learning 2024. Seminar ini akan membahas perkembangan terbaru dalam bidang AI dan Machine Learning serta implementasinya dalam berbagai industri. Seminar ini akan menghadirkan pembicara-pembicara ahli dari industri teknologi terkemuka.',
    image: 'https://picsum.photos/id/70/1200/600'
  };

  // Sample data for news
  const newsItems = [
    {
      id: 2,
      title: 'Workshop UI/UX Design untuk Pemula',
      date: '15 Maret 2024',
      author: 'Admin HIMASIF',
      category: 'Workshop',
      comments: 8,
      excerpt: 'Workshop mengenai dasar-dasar UI/UX Design untuk pemula yang diselenggarakan oleh HIMASIF bekerjasama dengan industri.',
      image: 'https://picsum.photos/id/71/600/400'
    },
    {
      id: 3,
      title: 'Kompetisi Coding Antar Mahasiswa',
      date: '10 Mei 2024',
      author: 'Admin HIMASIF',
      category: 'Kompetisi',
      comments: 5,
      excerpt: 'Kompetisi coding antar mahasiswa Sistem Informasi dengan hadiah menarik dan sertifikat.',
      image: 'https://picsum.photos/id/72/600/400'
    },
    {
      id: 4,
      title: 'Study Tour ke Startup Jakarta',
      date: '5 Juni 2024',
      author: 'Admin HIMASIF',
      category: 'Kegiatan',
      comments: 3,
      excerpt: 'Kunjungan ke beberapa startup teknologi di Jakarta untuk melihat langsung bagaimana perusahaan teknologi beroperasi.',
      image: 'https://picsum.photos/id/73/600/400'
    },
    {
      id: 5,
      title: 'Webinar Data Science dan Peluang Karir',
      date: '10 Februari 2024',
      author: 'Admin HIMASIF',
      category: 'Webinar',
      comments: 10,
      excerpt: 'Webinar tentang pengenalan Data Science dan peluang karir di bidang ini yang diselenggarakan secara online.',
      image: 'https://picsum.photos/id/74/600/400'
    },
    {
      id: 6,
      title: 'Workshop Mobile App Development dengan React Native',
      date: '12 April 2024',
      author: 'Admin HIMASIF',
      category: 'Workshop',
      comments: 6,
      excerpt: 'Workshop pengembangan aplikasi mobile dengan React Native yang akan diadakan di Lab Komputer UPJ.',
      image: 'https://picsum.photos/id/75/600/400'
    }
  ];

  // Sample data for popular posts
  const popularPosts = [
    {
      id: 1,
      title: 'Seminar Teknologi AI dan Machine Learning 2024',
      date: '20 April 2024',
      image: 'https://picsum.photos/id/70/600/400'
    },
    {
      id: 2,
      title: 'Workshop UI/UX Design untuk Pemula',
      date: '15 Maret 2024',
      image: 'https://picsum.photos/id/71/600/400'
    },
    {
      id: 5,
      title: 'Webinar Data Science dan Peluang Karir',
      date: '10 Februari 2024',
      image: 'https://picsum.photos/id/74/600/400'
    }
  ];

  // Sample data for categories
  const categories = [
    { name: 'Seminar', count: 5 },
    { name: 'Workshop', count: 8 },
    { name: 'Kompetisi', count: 3 },
    { name: 'Webinar', count: 6 },
    { name: 'Kegiatan', count: 4 }
  ];

  // Sample data for tags
  const tags = [
    'Teknologi', 'AI', 'Machine Learning', 'UI/UX', 'Coding', 
    'Data Science', 'Mobile App', 'React Native', 'Startup', 'Karir'
  ];

  // Filter news based on active category
  const filteredNews = activeCategory === 'all'
    ? newsItems
    : newsItems.filter(news => news.category === activeCategory);

  return (
    <>
      {/* Hero Section */}
      <section className="berita-hero">
        <Container>
          <Row className="justify-content-center text-center">
            <Col md={8}>
              <h1 className="berita-hero-title">Berita & Kegiatan</h1>
              <p className="berita-hero-subtitle">
                Informasi terbaru seputar kegiatan dan acara HIMASIF UPJ
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Berita Section */}
      <section className="berita-section">
        <Container>
          {/* Search Section */}
          <div className="search-section">
            <Form className="search-form">
              <Form.Control
                type="text"
                placeholder="Cari berita..."
                className="search-input"
              />
              <Button variant="primary" className="search-button">
                <i className="bi bi-search"></i>
              </Button>
            </Form>
          </div>

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
                className={`filter-btn ${activeCategory === 'Seminar' ? 'active' : ''}`}
                onClick={() => setActiveCategory('Seminar')}
              >
                Seminar
              </button>
              <button 
                className={`filter-btn ${activeCategory === 'Workshop' ? 'active' : ''}`}
                onClick={() => setActiveCategory('Workshop')}
              >
                Workshop
              </button>
              <button 
                className={`filter-btn ${activeCategory === 'Kompetisi' ? 'active' : ''}`}
                onClick={() => setActiveCategory('Kompetisi')}
              >
                Kompetisi
              </button>
              <button 
                className={`filter-btn ${activeCategory === 'Webinar' ? 'active' : ''}`}
                onClick={() => setActiveCategory('Webinar')}
              >
                Webinar
              </button>
              <button 
                className={`filter-btn ${activeCategory === 'Kegiatan' ? 'active' : ''}`}
                onClick={() => setActiveCategory('Kegiatan')}
              >
                Kegiatan
              </button>
            </div>
          </div>

          <Row>
            {/* Main Content */}
            <Col lg={8}>
              {/* Featured News */}
              <div className="featured-news">
                <Card className="featured-card">
                  <Card.Img 
                    src={featuredNews.image} 
                    alt={featuredNews.title} 
                    className="featured-image"
                  />
                  <Card.Body className="featured-body">
                    <div className="featured-category">{featuredNews.category}</div>
                    <h2 className="featured-title">{featuredNews.title}</h2>
                    <div className="featured-meta">
                      <span className="featured-author">
                        <i className="bi bi-person me-2"></i>
                        {featuredNews.author}
                      </span>
                      <span className="featured-date">
                        <i className="bi bi-calendar me-2"></i>
                        {featuredNews.date}
                      </span>
                      <span className="featured-comments">
                        <i className="bi bi-chat me-2"></i>
                        {featuredNews.comments} Komentar
                      </span>
                    </div>
                    <p className="featured-excerpt">{featuredNews.excerpt}</p>
                    <Button variant="primary" className="btn-read-more">
                      Baca Selengkapnya
                    </Button>
                  </Card.Body>
                </Card>
              </div>

              {/* News List */}
              {filteredNews.map(news => (
                <Card className="news-card mb-4" key={news.id}>
                  <div className="news-image-container">
                    <img 
                      src={news.image} 
                      alt={news.title} 
                      className="news-image"
                    />
                  </div>
                  <Card.Body className="news-body">
                    <div className="news-category">{news.category}</div>
                    <h3 className="news-title">{news.title}</h3>
                    <div className="news-meta">
                      <span className="news-author">
                        <i className="bi bi-person me-1"></i>
                        {news.author}
                      </span>
                      <span className="news-date">
                        <i className="bi bi-calendar me-1"></i>
                        {news.date}
                      </span>
                      <span className="news-comments">
                        <i className="bi bi-chat me-1"></i>
                        {news.comments} Komentar
                      </span>
                    </div>
                    <p className="news-excerpt">{news.excerpt}</p>
                    <Button variant="primary" size="sm" className="btn-read-more">
                      Baca Selengkapnya
                    </Button>
                  </Card.Body>
                </Card>
              ))}

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
            </Col>

            {/* Sidebar */}
            <Col lg={4}>
              {/* Popular Posts */}
              <div className="sidebar">
                <h3 className="sidebar-title">Populer</h3>
                {popularPosts.map(post => (
                  <div className="popular-post" key={post.id}>
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="popular-image"
                    />
                    <div className="popular-content">
                      <h4 className="popular-title">{post.title}</h4>
                      <div className="popular-date">
                        <i className="bi bi-calendar me-1"></i>
                        {post.date}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Categories */}
              <div className="sidebar">
                <h3 className="sidebar-title">Kategori</h3>
                <ul className="category-list">
                  {categories.map((category, index) => (
                    <li className="category-item" key={index}>
                      <a href="#" className="category-link">
                        {category.name}
                        <span className="category-count">{category.count}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tags */}
              <div className="sidebar">
                <h3 className="sidebar-title">Tag</h3>
                <div className="tag-cloud">
                  {tags.map((tag, index) => (
                    <a href="#" className="tag-link" key={index}>
                      {tag}
                    </a>
                  ))}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Berita;
