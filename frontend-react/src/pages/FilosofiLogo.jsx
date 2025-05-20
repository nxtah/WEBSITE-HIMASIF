import React, { useRef, useEffect, useState } from 'react';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import '../css/pages/FilosofiLogo.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import logoHimasif from '../assets/images/logo-himasif.png';

const FilosofiLogo = () => {
  const titleRef = useRef(null);
  const logoSectionRef = useRef(null);
  const logoBackgroundTextRef = useRef(null);
  const [dividerWidth, setDividerWidth] = useState(0);

  // Single card text content with styled words
  const cardTextContent = (
    <>
      SEBAGAI IDENTITAS VISUAL <span className="filosofiLogo-text-highlight">yang</span> MEMBEDAKAN,
      MEMPERKUAT CITRA, <span className="filosofiLogo-text-highlight">dan</span> MEMBANGUN
      KEPERCAYAAN PUBLIK <span className="filosofiLogo-text-highlight">terhadap</span> ORGANISASI
    </>
  );

  useEffect(() => {
    document.title = 'Filosofi Logo - HIMASIF';

    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Function to update divider width based on title width
    const updateDividerWidth = () => {
      if (titleRef.current) {
        // Make the divider 60% of the title width
        setDividerWidth(titleRef.current.offsetWidth * 0.6);
      }
    };

    // Initial update after a small delay to ensure rendering is complete
    const timer = setTimeout(() => {
      updateDividerWidth();
    }, 100);

    // Update on window resize for responsiveness
    window.addEventListener('resize', updateDividerWidth);

    // Cleanup
    return () => {
      window.removeEventListener('resize', updateDividerWidth);
      clearTimeout(timer);

      // Kill all ScrollTrigger instances to prevent memory leaks
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <>
      <div className="filosofiLogo-sections-wrapper">
        {/* Landing Section */}
        <section className="landing-filosofiLogo">
          <Container fluid className="h-100">
            <Row className="h-100 align-items-center">
              <Col xs={10} md={8} lg={6} className="mx-auto">
                <div className="landing-title-container">
                  <div className="position-relative">
                    <Row className="mb-0">
                      <Col xs={12} className="d-flex align-items-center">
                        <div className="filosofi-wrapper d-flex align-items-center">
                          <div className="filosofi-text pe-2">FILOSOFI</div>
                          <div className="logo-image-container ps-2">
                            <Image src={logoHimasif} alt="HIMASIF Logo" className="himasif-logo" fluid />
                          </div>
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={12}>
                        <div className="logo-text">LOGO</div>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Overlap Card */}
        <div className="filosofiLogo-overlap-card">
          <Container fluid className="p-0">
            <Row className="justify-content-center mx-0">
              <Col xs={12} md={12} lg={12} className="px-0">
                <div className="filosofiLogo-card-content rounded shadow">
                  <div className="filosofiLogo-title-container">
                    <h2 className="filosofiLogo-card-title" ref={titleRef}>FUNGSI LOGO DALAM ORGANISASI</h2>
                    <div className="filosofiLogo-title-divider" style={{ width: dividerWidth > 0 ? `${dividerWidth}px` : 'auto' }}>
                      <div className="filosofiLogo-divider-line"></div>
                      <div className="filosofiLogo-divider-diamond"></div>
                      <div className="filosofiLogo-divider-line"></div>
                    </div>
                  </div>
                  <Container fluid className="p-0">
                    <Row className="justify-content-center">
                      <Col xs={12} className="d-flex justify-content-center">
                        <div className="filosofiLogo-card-text">
                          <p>{cardTextContent}</p>
                        </div>
                      </Col>
                    </Row>
                  </Container>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        {/* FilosofiLogo Content Section */}
        <section className="about-filosofiLogo">
          <div className="filosofiLogo-section-top d-flex align-items-center justify-content-center">
            {/* Empty section with only background */}
          </div>
          <div className="filosofiLogo-section-bottom d-flex align-items-center justify-content-center" ref={logoSectionRef}>
            <div className="filosofiLogo-bg-text" ref={el => logoBackgroundTextRef.current = el}>LOGO</div>
            <Container fluid className="position-relative h-100">
              <Row className="h-100 align-items-center justify-content-center">
                <Col xs={12} className="d-flex align-items-center justify-content-center" style={{ minHeight: '80vh' }}>
                  <div className="filosofiLogo-content-container mx-auto d-flex align-items-center justify-content-center">
                    {/* Empty content */}
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </section>
      </div>
    </>
  );
};

export default FilosofiLogo;
