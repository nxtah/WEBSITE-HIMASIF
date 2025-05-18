import React, { useEffect, useRef } from 'react';
import { Container, Row, Col, Button, Card, Stack } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../css/pages/Home.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Set the document title
document.title = 'HIMASIF - Himpunan Mahasiswa Sistem Informasi';

// Program Kerja Images - Minimal data structure
const prokerImages = [
  { id: 1, url: 'https://picsum.photos/id/1/300/300', rot: -3 },
  { id: 2, url: 'https://picsum.photos/id/2/300/300', rot: 2 },
  { id: 3, url: 'https://picsum.photos/id/3/300/300', rot: -2 },
  { id: 4, url: 'https://picsum.photos/id/4/300/300', rot: 4 },
  { id: 5, url: 'https://picsum.photos/id/5/300/300', rot: -5 },
  { id: 6, url: 'https://picsum.photos/id/6/300/300', rot: 1 },
  { id: 7, url: 'https://picsum.photos/id/7/300/300', rot: -1 },
  { id: 8, url: 'https://picsum.photos/id/8/300/300', rot: 3 },
  { id: 9, url: 'https://picsum.photos/id/9/300/300', rot: -4 },
  { id: 10, url: 'https://picsum.photos/id/10/300/300', rot: 2 }
];

const Home = () => {
  const dividerRef = useRef(null);
  const prokerTextRef = useRef(null);
  const prokerImagesRef = useRef(null);

  // Register ScrollTrigger plugin
  gsap.registerPlugin(ScrollTrigger);

  // Proker section animation
  useEffect(() => {
    if (!prokerTextRef.current || !prokerImagesRef.current) return;

    // Get the text element
    const textElement = prokerTextRef.current.querySelector('.proker-content-wrapper');

    // Calculate the section height to ensure text reaches the bottom
    const sectionHeight = document.querySelector("#proker-home").offsetHeight;

    // Make the text follow the scroll all the way to the bottom of the section
    gsap.fromTo(
      textElement,
      { top: "15vh" }, // Start position (from CSS)
      {
        top: sectionHeight - textElement.offsetHeight - 50, // End at the bottom of the section with some padding
        ease: "none",
        scrollTrigger: {
          trigger: "#proker-home",
          start: "top top",
          end: "bottom bottom",
          scrub: true, // Exact scroll following
        }
      }
    );

    // Get all image columns for animations
    const imageColumns = prokerImagesRef.current.querySelectorAll('.proker-image-col');

    // Calculate positions to ensure images don't stack
    // Create a grid system to prevent overlap
    const gridCells = [];
    const gridSize = 40; // vh units - size of each grid cell
    const gridColumns = 4; // Number of columns in our grid

    // Create a grid of available positions
    for (let row = 0; row < 7; row++) { // 7 rows to cover 280vh
      for (let col = 0; col < gridColumns; col++) {
        gridCells.push({
          row: row,
          col: col,
          taken: false
        });
      }
    }

    // Shuffle the grid cells for random assignment
    const shuffledGrid = [...gridCells].sort(() => Math.random() - 0.5);

    // Assign positions to each image
    imageColumns.forEach((col, index) => {
      // Get a grid cell that's not taken yet
      const gridCell = shuffledGrid[index % shuffledGrid.length];
      gridCell.taken = true;

      // Calculate position based on grid
      const verticalPosition = gridCell.row * gridSize;
      const horizontalBase = (gridCell.col / gridColumns) * 100; // Convert to percentage

      // Add some randomness within the cell
      const verticalOffset = (Math.random() * 15) - 5; // Small random vertical adjustment
      const horizontalOffset = (Math.random() * 15) - 5; // Small random horizontal adjustment

      // Generate random values for styling
      const randomScale = 0.7 + (Math.random() * 0.6); // Scale between 0.7 and 1.3
      const randomRotation = Math.random() * 20 - 10; // Rotation between -10 and 10 degrees

      // Apply random rotation directly to the element
      col.style.transform = `rotate(${randomRotation}deg)`;

      // Determine if this image should overlap with text (only for bottom rows)
      const isOverText = gridCell.row >= 5 && Math.random() > 0.6; // Only bottom rows can overlap text

      // Calculate final position with grid + small random offset
      const finalVerticalPosition = verticalPosition + verticalOffset;
      const finalHorizontalPosition = horizontalBase + horizontalOffset;

      // Set initial state - start below their final position
      gsap.set(col, {
        y: (finalVerticalPosition + 200) + 'vh', // Start well below final position
        left: finalHorizontalPosition + '%', // Set horizontal position as percentage
        opacity: 0,
        scale: randomScale
      });

      // Determine z-index based on whether it should overlap text
      if (isOverText) {
        // Position to overlap with text (which is at the bottom)
        col.style.zIndex = "35"; // Higher than text
      } else {
        // Random z-index for non-overlapping images
        col.style.zIndex = Math.floor(Math.random() * 10) + 5;
      }

      // Create individual animation for each image with different timing
      gsap.to(col, {
        y: finalVerticalPosition + 'vh', // Final position based on grid
        opacity: 1,
        ease: "power1.out",
        scrollTrigger: {
          trigger: "#proker-home",
          start: "top 90%",
          end: "bottom center",
          scrub: 0.8 + (Math.random() * 0.4), // Slightly random scrub between 0.8 and 1.2
        }
      });
    });

    return () => {
      // Clean up ScrollTrigger instances
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

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
        <Container fluid className="p-0">
          <Row className="justify-content-center m-0">
            <Col xs={12} className="text-center">
              <div className="landing-content pt-0 mt-n5">
                <Row className="justify-content-center">
                  <Col xs={12}>
                    <h1 className="himasif-title mb-1 text-center">HIMASIF</h1>
                  </Col>
                </Row>
                <Row className="justify-content-center">
                  <Col xs={12} className="overflow-hidden">
                    <div className="subtitle-container">
                      <div className="himasif-subtitle text-center w-100">
                        <span className="d-inline-block px-1 px-md-2 px-lg-3">HIMPUNAN</span>
                        <span className="d-inline-block px-1 px-md-2 px-lg-3">MAHASISWA</span>
                        <span className="d-inline-block px-1 px-md-2 px-lg-3 sistem-text">sistem</span>
                        <span className="d-inline-block px-1 px-md-2 px-lg-3">INFORMASI</span>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>

          {/* Bottom row with copyright, scroll, and website official text */}
          <Row className="bottom-row-landing m-0">
            {/* Copyright text at left */}
            <Col xs="auto" className="p-0 d-none d-sm-block">
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
            <Col xs="auto" className="p-0 d-none d-sm-block">
              <div className="website-official-wrapper">
                <p className="website-official-text">WEBSITE RESMI HIMASIF UPJ</p>
              </div>
            </Col>

            {/* Mobile version of copyright and website text (only visible on xs screens) */}
            <Col xs={12} className="p-0 d-block d-sm-none text-center mt-2">
              <div className="copyright-wrapper mx-auto">
                <p className="copyright-text">© 2023 HIMASIF UPJ</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Foto Home Section */}
      <section id="foto-home" className="foto-home-section full-screen-section">
        <div className="foto-fullscreen-bg"></div>
      </section>

      {/* Proker Home Section */}
      <section id="proker-home" className="proker-home-section full-screen-section">
        <div className="proker-parallax-container">
          <div className="proker-text-container" ref={prokerTextRef}>
            <Container fluid className="h-100">
              <Row className="h-100">
                <Col xs={12} className="h-100 position-relative">
                  {/* This will be controlled by GSAP for sticky effect */}
                  <div className="proker-content-wrapper ms-4 ms-md-5">
                    <div className="d-flex align-items-start position-relative">
                      <span className="proker-number">20</span>
                      <div className="d-flex flex-column">
                        <span className="plus-sign">+</span>
                        <p className="proker-title">Program<br />Kerja</p>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
          <div className="proker-images-container" ref={prokerImagesRef}>
            <Container fluid>
              <Row className="proker-images-row">
                {prokerImages.map(img => (
                  <Col key={img.id} xs={6} md={4} lg={3} className="proker-image-col">
                    <div
                      className="proker-image"
                      style={{
                        backgroundImage: `url(${img.url})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        transform: `rotate(${img.rot}deg)`
                      }}
                    ></div>
                  </Col>
                ))}
              </Row>
            </Container>
          </div>
        </div>
      </section>

      {/* Periode Home Section */}
      <section id="periode-home" className="periode-home-section vh-100">
        <Container fluid>
          <Row className="justify-content-center align-items-center h-100">
            {/* Desktop and Tablet Layout */}
            <Col xs={12} lg={6} className="periode-left-col text-center text-lg-start mb-4 mb-lg-0 d-none d-md-flex">
              <div className="periode-title-wrapper">
                <h2 className="periode-title fw-bold d-block">HIMASIF</h2>
                <div className="periode-year-container">
                  <p className="periode-year mb-0">
                    <span className="periode-text">periode</span>
                    <span className="year-text"> 2025</span>
                  </p>
                </div>
              </div>
            </Col>
            <Col xs={12} lg={6} className="periode-right-col d-none d-md-flex">
              <div className="periode-description-wrapper">
                <p className="periode-description">
                  HIMASIF adalah organisasi mahasiswa yang mewadahi aspirasi, pengembangan keilmuan, dan kreativitas mahasiswa Sistem Informasi dalam bidang teknologi, manajemen, dan komunitas akademik.
                </p>
                <div className="mt-3">
                  <Button as={Link} to="/tentang-himasif" variant="outline-primary" size="lg">
                    Selengkapnya
                  </Button>
                </div>
              </div>
            </Col>

            {/* Mobile Layout */}
            <Col xs={12} className="d-flex d-md-none flex-column align-items-center justify-content-center">
              <div className="periode-title-wrapper text-center mb-4">
                <h2 className="periode-title fw-bold d-block">HIMASIF</h2>
                <div className="periode-year-container">
                  <p className="periode-year mb-0">
                    <span className="periode-text">periode</span>
                    <span className="year-text"> 2025</span>
                  </p>
                </div>
              </div>
              <div className="periode-description-wrapper text-center">
                <p className="periode-description">
                  HIMASIF adalah organisasi mahasiswa yang mewadahi aspirasi, pengembangan keilmuan, dan kreativitas mahasiswa Sistem Informasi dalam bidang teknologi, manajemen, dan komunitas akademik.
                </p>
                <div className="mt-4 text-center">
                  <Button as={Link} to="/tentang-himasif" variant="outline-primary" size="lg">
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
      <section id="pengurus-home" className="pengurus-home-section vh-100 d-flex align-items-center justify-content-center">
        <Container fluid>
          <Row className="justify-content-center m-0">
            <Col xs={12} className="text-center">
              <div className="pengurus-title-container mb-0">
                <h2 className="pengurus-title mb-0">
                  <span className="total-text d-block">total</span>
                  <span className="pengurus-text d-block">PENGURUS</span>
                </h2>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center mx-0 mt-0">
            <Col xs={10} lg={7} className="px-0">
              <Row className="justify-content-between mx-0">
                <Col xs={12} md={4} className="text-center mb-3 mb-md-0">
                  <div className="pengurus-stat">
                    <h3 className="stat-number">42</h3>
                    <p className="stat-desc">pengurus</p>
                  </div>
                </Col>
                <Col xs={12} md={4} className="text-center mb-3 mb-md-0">
                  <div className="pengurus-stat">
                    <h3 className="stat-number">9</h3>
                    <p className="stat-desc">divisi</p>
                  </div>
                </Col>
                <Col xs={12} md={4} className="text-center">
                  <div className="pengurus-stat">
                    <h3 className="stat-number">22</h3>
                    <p className="stat-desc">program kerja</p>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Sorotan Home Section */}
      <section id="sorotan-home" className="sorotan-home-section vh-100 d-flex align-items-center justify-content-center">
        <Container fluid className="h-100 d-flex flex-column justify-content-center px-2 pb-4">
          <Row className="justify-content-center mb-3 mx-0">
            <Col xs={11.5} sm={11.5} md={11.8} lg={11.8} xl={11.8} className="px-0">
              <Row className="mx-0">
                <Col xs={12} md={4} className="d-flex align-items-start px-1">
                  <div className="sorotan-title-container w-100">
                    <h2 className="sorotan-title mb-0">
                      <div className="d-flex align-items-baseline">
                        <span>SOROTAN</span>
                        <span className="yang-text ml-2">yang</span>
                      </div>
                      <span className="d-block">BISA KAMU</span>
                      <span className="d-block">KUNJUNGI</span>
                    </h2>
                  </div>
                </Col>
                <Col xs={12} md={8} className="mt-4 mt-md-0 px-1">
                  <div className="large-box">
                    {/* Large highlight box */}
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="justify-content-center mx-0 mb-3">
            <Col xs={11.5} sm={11.5} md={11.8} lg={11.8} xl={11.8} className="px-0">
              <Row className="mx-0">
                <Col xs={12} md={4} className="mb-4 mb-md-0 px-1">
                  <div className="medium-box">
                    {/* Medium highlight box 1 */}
                  </div>
                </Col>
                <Col xs={12} md={4} className="mb-4 mb-md-0 px-1">
                  <div className="medium-box">
                    {/* Medium highlight box 2 */}
                  </div>
                </Col>
                <Col xs={12} md={4} className="px-1">
                  <div className="large-box">
                    {/* Large highlight box */}
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Home;
