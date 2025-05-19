import React, { useEffect, useRef } from 'react';
import { Container, Row, Col, Card, Stack } from 'react-bootstrap';
import '../css/pages/Home.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CustomButton from '../components/CustomButton';

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

// Periode description text
const periodeDescription = "HIMASIF adalah organisasi mahasiswa yang mewadahi aspirasi, pengembangan keilmuan, dan kreativitas mahasiswa Sistem Informasi dalam bidang teknologi, manajemen, dan komunitas akademik.";

// Divider text content
const dividerText = "SIF360 HIMASIF SIF360 HIMASIF SIF360 HIMASIF";

// Divider animation settings
const dividerAnimationSettings = {
  duration: 20,
  repeat: -1,
  ease: "linear",
  paused: false
};

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

    // Get the text rows
    const textRows = dividerRef.current.querySelectorAll('.divider-text-row');

    // Clone text elements to ensure continuous scrolling
    textRows.forEach(row => {
      const textElement = row.querySelector('.divider-text');

      // Clone the text multiple times to ensure it fills the screen
      for (let i = 0; i < 3; i++) {
        const clone = textElement.cloneNode(true);
        row.appendChild(clone);
      }
    });

    // Create GSAP animations for each row
    const animations = [];

    textRows.forEach((row, index) => {
      // Determine direction based on row index
      const direction = index === 1 ? 1 : -1; // Row 2 moves left to right, others right to left

      // Get all text elements in this row
      const textElements = row.querySelectorAll('.divider-text');

      // Create animation for this row
      const animation = gsap.to(textElements, {
        xPercent: direction * 100,
        duration: dividerAnimationSettings.duration,
        repeat: dividerAnimationSettings.repeat,
        ease: dividerAnimationSettings.ease,
        stagger: {
          each: 0.5,
          repeat: -1
        }
      });

      animations.push(animation);
    });

    // Cleanup function
    return () => {
      animations.forEach(animation => {
        animation.kill();
      });
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
                  <Col xs={12}>
                    <div className="subtitle-container d-flex justify-content-center align-items-center">
                      <p className="himasif-subtitle text-center mb-0 px-3">
                        HIMPUNAN MAHASISWA SISTEM INFORMASI
                      </p>
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
      <section id="periode-home" className="periode-home-section vh-100 d-flex align-items-end">
        <Container fluid className="h-100 p-0">
          <Row className="h-100 g-0">
            <Col lg={6} className="periode-content-col d-flex flex-column justify-content-end align-items-start">
              <div className="periode-content-wrapper p-4 p-md-5 pb-5 mb-4 text-start">
                <div className="periode-title-wrapper mb-n5">
                  <h2 className="periode-title fw-bold mb-n5">HIMASIF</h2>
                  <div className="periode-year-container mt-n5 position-relative" style={{ top: "-3.5rem" }}>
                    <p className="periode-year mb-0">
                      <span className="periode-text">periode</span>
                      <span className="year-text"> 2025</span>
                    </p>
                  </div>
                </div>

                <div className="periode-description-wrapper mt-n5 position-relative" style={{ top: "-2rem" }}>
                  <p className="periode-description">
                    {periodeDescription}
                  </p>
                  <div className="mt-4 ps-0">
                    <CustomButton
                      text="Selengkapnya"
                      to="/tentang-himasif"
                      variant="outline-primary"
                      size="lg"
                      className="ms-0 ps-0"
                    />
                  </div>
                </div>
              </div>
            </Col>

            <Col lg={6} className="periode-image-col p-0 h-100">
              <div
                className="periode-image h-100"
                style={{
                  backgroundImage: 'url(https://picsum.photos/id/20/1200/1600)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="periode-image-overlay"></div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Divider Home Section */}
      <section id="divider-home" ref={dividerRef} className="divider-home-section vh-100 d-flex align-items-center justify-content-center">
        <div className="divider-text-container">
          <div className="divider-text-row">
            <div className="divider-text divider-text-1">{dividerText}</div>
          </div>
          <div className="divider-text-row">
            <div className="divider-text divider-text-2">{dividerText}</div>
          </div>
          <div className="divider-text-row">
            <div className="divider-text divider-text-3">{dividerText}</div>
          </div>
        </div>
      </section>

      {/* Pengurus Home Section */}
      <section id="pengurus-home" className="pengurus-home-section vh-100 d-flex align-items-center justify-content-center">
        <Container fluid>
          <Row className="justify-content-center m-0">
            <Col xs={12} className="text-center">
              <div className="pengurus-title-container mb-0 mb-md-2">
                <h2 className="pengurus-title mb-0">
                  <span className="total-text d-block">TOTAL</span>
                  <span className="pengurus-text d-block">PENGURUS</span>
                </h2>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center mx-0 mt-0 mt-md-2">
            <Col xs={11} lg={8} className="px-0">
              <Row className="justify-content-between mx-0 position-relative">
                <Col xs={12} md={4} className="text-center mb-4 mb-md-0 position-relative">
                  <div className="pengurus-stat">
                    <h3 className="stat-number">42</h3>
                    <p className="stat-desc">pengurus</p>
                  </div>
                  <div className="d-none d-md-block position-absolute top-50 end-0 translate-middle-y border-end border-primary" style={{ height: '70%', opacity: 0.3 }}></div>
                </Col>
                <Col xs={12} md={4} className="text-center mb-4 mb-md-0 position-relative">
                  <div className="pengurus-stat">
                    <h3 className="stat-number">9</h3>
                    <p className="stat-desc">divisi</p>
                  </div>
                  <div className="d-none d-md-block position-absolute top-50 end-0 translate-middle-y border-end border-primary" style={{ height: '70%', opacity: 0.3 }}></div>
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
