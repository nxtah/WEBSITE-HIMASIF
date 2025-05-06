import React, { useEffect, useRef } from 'react';
import { Container, Row, Col, Button, Card, Stack } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../css/pages/Home.css';

// Set the document title
document.title = 'HIMASIF - Himpunan Mahasiswa Sistem Informasi';

const Home = () => {
  const dividerRef = useRef(null);

  useEffect(() => {
    if (!dividerRef.current) return;

    // Get the text elements and clone them to ensure continuous text
    const textRows = dividerRef.current.querySelectorAll('.divider-text-row');

    textRows.forEach(row => {
      const textElement = row.querySelector('.divider-text');

      // Clone the text multiple times to ensure it fills the screen
      for (let i = 0; i < 3; i++) {
        const clone = textElement.cloneNode(true);
        row.appendChild(clone);
      }
    });

    // All text elements have been cloned

    // Animation variables
    let animationFrameId;
    let baseSpeed = 0.05; // Base speed for animation (reduced for smoother movement)
    let currentSpeed = baseSpeed;
    let lastScrollTop = 0;
    let scrollSpeed = 0;
    let lastTimestamp = 0;

    // Set initial positions to be centered and ready to move
    const rowWidths = [];
    const positions = [];

    textRows.forEach((row, rowIndex) => {
      // Calculate total width of all text elements in this row
      const rowTexts = row.querySelectorAll('.divider-text');
      let totalWidth = 0;

      rowTexts.forEach(text => {
        totalWidth += text.offsetWidth;
      });

      rowWidths[rowIndex] = totalWidth;

      // Set initial position (centered)
      const direction = rowIndex === 1 ? 1 : -1; // Row 2 moves left to right, others right to left
      const initialOffset = direction === 1 ? -25 : 0; // Offset to start movement
      positions[rowIndex] = initialOffset;

      // Apply initial position to all texts in this row
      rowTexts.forEach(text => {
        text.style.transform = `translateX(${initialOffset}%)`;
      });
    });

    // Handle scroll events to adjust animation speed
    let scrollTimeoutId = null;
    let scrollSamples = [];
    const MAX_SAMPLES = 5; // Number of samples to average for smoother transitions

    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollDelta = scrollTop - lastScrollTop;

      // Add current sample to the array
      scrollSamples.push(scrollDelta);

      // Keep only the most recent samples
      if (scrollSamples.length > MAX_SAMPLES) {
        scrollSamples.shift();
      }

      // Calculate average scroll delta for smoother transitions
      const avgScrollDelta = scrollSamples.reduce((sum, delta) => sum + delta, 0) / scrollSamples.length;

      // Calculate scroll speed with smoothing
      scrollSpeed = avgScrollDelta * 0.02; // Reduced factor for even smoother transitions

      // Apply additional smoothing for downward scrolling
      if (scrollDelta > 0) { // Downward scroll
        scrollSpeed *= 0.8; // Reduce effect of downward scrolling for smoother experience
      }

      // Update last scroll position
      lastScrollTop = scrollTop;

      // Clear previous timeout and set a new one
      if (scrollTimeoutId) {
        clearTimeout(scrollTimeoutId);
      }

      // Gradually reset scroll speed after scrolling stops
      scrollTimeoutId = setTimeout(() => {
        scrollSamples = [];
      }, 200);
    };

    // Animation function
    const animate = (timestamp) => {
      // Calculate delta time for smoother animation
      if (!lastTimestamp) lastTimestamp = timestamp;
      const deltaTime = timestamp - lastTimestamp;
      lastTimestamp = timestamp;

      // Normalize speed based on frame rate (60fps as baseline)
      const frameRateFactor = deltaTime / 16.67; // 16.67ms is roughly 60fps

      // Gradually return to base speed when not scrolling
      if (Math.abs(scrollSpeed) > 0.005) {
        // Apply easing function for smoother transitions
        const easingFactor = 0.99; // Higher value = smoother transition
        currentSpeed = baseSpeed + scrollSpeed;
        scrollSpeed *= easingFactor; // Very slow decay for ultra-smooth transitions
      } else {
        currentSpeed = baseSpeed;
        scrollSpeed = 0;
      }

      // Ensure minimum and maximum speed (reduced max speed)
      currentSpeed = Math.max(0.03, Math.min(0.3, currentSpeed));

      // Apply frame rate normalization
      const normalizedSpeed = currentSpeed * frameRateFactor;

      // Update positions for each row
      textRows.forEach((row, rowIndex) => {
        const direction = rowIndex === 1 ? 1 : -1; // Row 2 moves left to right, others right to left
        const rowTexts = row.querySelectorAll('.divider-text');

        // Update position with normalized speed for consistent movement
        positions[rowIndex] += direction * normalizedSpeed;

        // Reset position when needed to create infinite loop

        // If text has moved too far, reset position (adjusted for slower movement)
        if (direction === -1 && positions[rowIndex] < -30) {
          // For right to left movement
          positions[rowIndex] = 0;
        } else if (direction === 1 && positions[rowIndex] > 15) {
          // For left to right movement
          positions[rowIndex] = -15;
        }

        // Apply position to all texts in this row
        rowTexts.forEach(text => {
          text.style.transform = `translateX(${positions[rowIndex]}%)`;
        });
      });

      // Continue animation
      animationFrameId = requestAnimationFrame(animate);
    };

    // Start animation and scroll listener
    window.addEventListener('scroll', handleScroll);
    requestAnimationFrame(animate);

    // Cleanup function
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeoutId) {
        clearTimeout(scrollTimeoutId);
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      {/* Landing Home Section */}
      <section id="landing-home" className="landing-home-section full-screen-section d-flex align-items-center">
        {/* Content container */}
        <Container fluid className="p-0">
          <Row className="justify-content-center m-0">
            <Col xs={12} className="text-center">
              <div className="landing-content pt-0 mt-n5">
                <h1 className="himasif-title mb-1">HIMASIF</h1>
                <p className="himasif-subtitle text-center"><span>HIMPUNAN</span> <span>MAHASISWA</span> <span className="sistem-text">SISTEM</span> <span>INFORMASI</span></p>
              </div>
            </Col>
          </Row>

          {/* Bottom row with copyright, scroll, and website official text */}
          <Row className="bottom-row-landing m-0">
            {/* Copyright text at left */}
            <Col xs="auto" className="p-0">
              <div className="copyright-wrapper">
                <p className="copyright-text">© 2023 HIMASIF UPJ</p>
              </div>
            </Col>

            {/* Scroll indicator at center */}
            <Col xs="auto" className="p-0 mx-auto">
              <div className="scroll-indicator">
                <div className="scroll-arrow"></div>
              </div>
            </Col>

            {/* Website official text at right */}
            <Col xs="auto" className="p-0">
              <div className="website-official-wrapper">
                <p className="website-official-text">WEBSITE RESMI HIMASIF UPJ</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Foto Home Section */}
      <section id="foto-home" className="foto-home-section full-screen-section">
        <div className="foto-fullscreen-bg"></div>
      </section>

      {/* Periode Home Section */}
      <section id="periode-home" className="periode-home-section vh-100">
        <Container fluid>
          <Row className="justify-content-center align-items-center h-100">
            <Col xs={12} lg={6} className="periode-left-col text-center text-lg-start mb-4 mb-lg-0">
              <div className="periode-title-wrapper">
                <h2 className="periode-title fw-bold">HIMASIF</h2>
                <p className="periode-year"><span style={{fontSize: "0.5em", letterSpacing: "-0.03em"}}>periode</span><span style={{fontFamily: "'Black', sans-serif"}}> 2025</span></p>
              </div>
            </Col>
            <Col xs={12} lg={6} className="periode-right-col">
              <div className="periode-description-wrapper">
                <p className="periode-description">
                  HIMASIF adalah organisasi mahasiswa yang mewadahi aspirasi, pengembangan keilmuan, dan kreativitas mahasiswa Sistem Informasi dalam bidang teknologi, manajemen, dan komunitas akademik.
                </p>
                <div className="mt-3">
                  <Button as={Link} to="/tentang-himasif" variant="outline-light" size="lg">
                    Selengkapnya
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Divider Home Section */}
      <section id="divider-home" ref={dividerRef} className="divider-home-section vh-100 d-flex align-items-center justify-content-center">
        <div className="divider-text-container">
          <div className="divider-text-row">
            <div className="divider-text divider-text-1">SIF360 HIMASIF SIF360 HIMASIF SIF360 HIMASIF</div>
          </div>
          <div className="divider-text-row">
            <div className="divider-text divider-text-2">SIF360 HIMASIF SIF360 HIMASIF SIF360 HIMASIF</div>
          </div>
          <div className="divider-text-row">
            <div className="divider-text divider-text-3">SIF360 HIMASIF SIF360 HIMASIF SIF360 HIMASIF</div>
          </div>
        </div>
      </section>

      {/* Pengurus Home Section */}
      <section id="pengurus-home" className="pengurus-home-section full-screen-section d-flex align-items-center">
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
      </div>

      {/* Sorotan Home Section */}
      <section id="sorotan-home" className="sorotan-home-section full-screen-section d-flex align-items-center">
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
      </div>
    </>
  );
};

export default Home;
