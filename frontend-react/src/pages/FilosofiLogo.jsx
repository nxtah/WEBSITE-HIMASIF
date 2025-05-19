import React, { useRef, useEffect, useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../css/pages/FilosofiLogo.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const FilosofiLogo = () => {
  const titleRef = useRef(null);
  const logoSectionRef = useRef(null);
  const logoBackgroundTextRef = useRef(null);
  const [dividerWidth, setDividerWidth] = useState(0);

  // Card text content as a constant with JSX structure
  const cardTextContent = [
    {
      id: 1,
      content: (
        <>
          LOGO MENCERMINKAN <span className="filosofiLogo-text-highlight">identitas </span> DAN
        </>
      )
    },
    {
      id: 2,
      content: "NILAI-NILAI YANG DIANUT OLEH"
    },
    {
      id: 3,
      content: (
        <>
          <span className="filosofiLogo-text-highlight">himpunan</span> MAHASISWA SISTEM INFORMASI
        </>
      )
    }
  ];

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
          <Container fluid className="h-100 d-flex align-items-center justify-content-center">
            <Row className="w-100 justify-content-center">
              <Col xs={12} md={8} lg={6} className="text-center position-relative d-flex justify-content-center">
                <div className="landing-title">
                  <Row className="g-0">
                    <Col xs={12} className="p-0">
                      <div className="filosofi-text">FILOSOFI</div>
                    </Col>
                    <Col xs={12} className="p-0 mt-n5">
                      <div className="logo-text">LOGO</div>
                    </Col>
                  </Row>
                </div>
                <div className="ampersand-container">
                  <div className="ampersand">&</div>
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
                    <h2 className="filosofiLogo-card-title" ref={titleRef}>MAKNA LOGO HIMASIF</h2>
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
                          {cardTextContent.map(item => (
                            <div className="text-line" key={item.id}>
                              {item.content}
                            </div>
                          ))}
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
