import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Form, Pagination } from 'react-bootstrap';
import '../css/pages/Merch.css';

const Merch = () => {
  // State for filters
  const [activeCategory, setActiveCategory] = useState('all');
  const [sortBy, setSortBy] = useState('newest');

  // Sample data for products
  const products = [
    {
      id: 1,
      name: 'Kaos HIMASIF',
      category: 'clothing',
      price: 120000,
      originalPrice: 150000,
      image: 'https://picsum.photos/id/60/600/400',
      isNew: true,
      isSale: true
    },
    {
      id: 2,
      name: 'Hoodie HIMASIF',
      category: 'clothing',
      price: 250000,
      originalPrice: null,
      image: 'https://picsum.photos/id/61/600/400',
      isNew: true,
      isSale: false
    },
    {
      id: 3,
      name: 'Topi HIMASIF',
      category: 'accessories',
      price: 80000,
      originalPrice: 100000,
      image: 'https://picsum.photos/id/62/600/400',
      isNew: false,
      isSale: true
    },
    {
      id: 4,
      name: 'Tumbler HIMASIF',
      category: 'accessories',
      price: 75000,
      originalPrice: null,
      image: 'https://picsum.photos/id/63/600/400',
      isNew: false,
      isSale: false
    },
    {
      id: 5,
      name: 'Stiker Pack HIMASIF',
      category: 'stationery',
      price: 15000,
      originalPrice: null,
      image: 'https://picsum.photos/id/64/600/400',
      isNew: false,
      isSale: false
    },
    {
      id: 6,
      name: 'Notebook HIMASIF',
      category: 'stationery',
      price: 35000,
      originalPrice: 45000,
      image: 'https://picsum.photos/id/65/600/400',
      isNew: false,
      isSale: true
    },
    {
      id: 7,
      name: 'Lanyard HIMASIF',
      category: 'accessories',
      price: 25000,
      originalPrice: null,
      image: 'https://picsum.photos/id/66/600/400',
      isNew: false,
      isSale: false
    },
    {
      id: 8,
      name: 'Totebag HIMASIF',
      category: 'accessories',
      price: 60000,
      originalPrice: 75000,
      image: 'https://picsum.photos/id/67/600/400',
      isNew: true,
      isSale: true
    }
  ];

  // Filter products based on active category
  const filteredProducts = activeCategory === 'all'
    ? products
    : products.filter(product => product.category === activeCategory);

  // Sort products based on sortBy
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-low') {
      return a.price - b.price;
    } else if (sortBy === 'price-high') {
      return b.price - a.price;
    } else if (sortBy === 'newest') {
      return b.id - a.id;
    }
    return 0;
  });

  // Format price to IDR
  const formatPrice = (price) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(price);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="merch-hero">
        <Container>
          <Row className="justify-content-center text-center">
            <Col md={8}>
              <h1 className="merch-hero-title">HIMASIF Merchandise</h1>
              <p className="merch-hero-subtitle">
                Dapatkan merchandise eksklusif HIMASIF UPJ
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Merch Section */}
      <section className="merch-section">
        <Container>
          <h2 className="merch-title">Produk Kami</h2>
          
          {/* Filter and Sort */}
          <Row className="mb-4">
            <Col md={8}>
              <div className="filter-section">
                <h3 className="filter-title">Filter Produk</h3>
                <div className="filter-group">
                  <button 
                    className={`filter-btn ${activeCategory === 'all' ? 'active' : ''}`}
                    onClick={() => setActiveCategory('all')}
                  >
                    Semua
                  </button>
                  <button 
                    className={`filter-btn ${activeCategory === 'clothing' ? 'active' : ''}`}
                    onClick={() => setActiveCategory('clothing')}
                  >
                    Pakaian
                  </button>
                  <button 
                    className={`filter-btn ${activeCategory === 'accessories' ? 'active' : ''}`}
                    onClick={() => setActiveCategory('accessories')}
                  >
                    Aksesoris
                  </button>
                  <button 
                    className={`filter-btn ${activeCategory === 'stationery' ? 'active' : ''}`}
                    onClick={() => setActiveCategory('stationery')}
                  >
                    Alat Tulis
                  </button>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div className="sort-section">
                <Form.Select 
                  className="sort-select"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option value="newest">Terbaru</option>
                  <option value="price-low">Harga: Rendah ke Tinggi</option>
                  <option value="price-high">Harga: Tinggi ke Rendah</option>
                </Form.Select>
              </div>
            </Col>
          </Row>
          
          {/* Products */}
          <Row>
            {sortedProducts.map(product => (
              <Col md={3} className="mb-4" key={product.id}>
                <Card className="product-card h-100">
                  <div className="product-image-container">
                    <Card.Img 
                      variant="top" 
                      src={product.image} 
                      className="product-image"
                    />
                    {product.isNew && (
                      <span className="product-badge badge-new">New</span>
                    )}
                    {product.isSale && (
                      <span className="product-badge badge-sale">Sale</span>
                    )}
                  </div>
                  <Card.Body className="product-body">
                    <Card.Title className="product-title">{product.name}</Card.Title>
                    <div className="product-category">{product.category === 'clothing' ? 'Pakaian' : product.category === 'accessories' ? 'Aksesoris' : 'Alat Tulis'}</div>
                    <div className="product-price">
                      <div className="current-price">{formatPrice(product.price)}</div>
                      {product.originalPrice && (
                        <div className="original-price">{formatPrice(product.originalPrice)}</div>
                      )}
                    </div>
                    <div className="product-actions">
                      <Button variant="primary" className="btn-add-cart">
                        <i className="bi bi-cart-plus me-2"></i>
                        Beli
                      </Button>
                      <Button variant="outline-primary" className="btn-details">
                        Detail
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          
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

      {/* CTA Section */}
      <section className="cta-section">
        <Container>
          <h2 className="cta-title">Ingin Merchandise Khusus?</h2>
          <p className="cta-text">
            Kami juga menerima pemesanan merchandise khusus untuk keperluan acara, komunitas,
            atau organisasi. Hubungi kami untuk informasi lebih lanjut.
          </p>
          <Button variant="primary" className="btn-cta">
            Hubungi Kami
          </Button>
        </Container>
      </section>
    </>
  );
};

export default Merch;
