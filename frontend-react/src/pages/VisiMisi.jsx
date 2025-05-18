import React, { useRef, useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../css/pages/VisiMisi.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const VisiMisi = () => {
  const titleRef = useRef(null);
  const visiSectionRef = useRef(null);
  const visiTextRef = useRef(null);
  const visiBackgroundTextRef = useRef(null);
  const misiSectionRef = useRef(null);
  const misiItemsRef = useRef(null);
  const [dividerWidth, setDividerWidth] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Vision content text as a constant
  const visiContentText = "Menjadikan HIMASIF sebagai wadah yang kompeten, kreatif, dan profesional dalam memberikan pengalaman berorganisasi yang bermanfaat bagi anggota.";

  useEffect(() => {
    document.title = 'Visi & Misi - HIMASIF';

    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Function to update divider width based on title width
    const updateDividerWidth = () => {
      if (titleRef.current) {
        setDividerWidth(titleRef.current.offsetWidth);
      }
    };

    // Initial update after a small delay to ensure rendering is complete
    const timer = setTimeout(() => {
      updateDividerWidth();
    }, 100);

    // Update on window resize for responsiveness
    window.addEventListener('resize', updateDividerWidth);

    // Set up scroll animation for background color change
    if (visiSectionRef.current) {
      const visiSection = visiSectionRef.current;

      // Create a timeline for the color transition
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: visiSection,
          start: "top 40%",
          end: "top 20%",
          scrub: 0.5,
          // markers: true, // For debugging
          toggleActions: "play none none reverse"
        }
      });

      // Animate background color to white-blue
      tl.to(visiSection, {
        backgroundColor: "var(--white-blue)",
        duration: 0.5,
        ease: "power2.inOut"
      }, 0);

      // Animate text color
      tl.to('.visi-content-text', {
        color: "var(--blue-dark)",
        duration: 0.5,
        ease: "power2.inOut"
      }, 0);
    }

    // Add mouse move event for background text movement
    const handleMouseMove = (e) => {
      if (visiBackgroundTextRef.current) {
        const moveX = (e.clientX - window.innerWidth / 2) * 0.02;
        const moveY = (e.clientY - window.innerHeight / 2) * 0.02;

        gsap.to(visiBackgroundTextRef.current, {
          x: moveX,
          y: moveY,
          duration: 1,
          ease: "power2.out"
        });
      }
    };

    // Add letter-by-letter animation for visi text when scrolled into view
    if (visiTextRef.current && visiSectionRef.current) {
      // Use the constant text instead of reading from DOM
      const originalText = visiContentText;

      // Clear the container
      visiTextRef.current.innerHTML = '';

      // Create a wrapper for the text
      const textWrapper = document.createElement('div');
      textWrapper.style.display = 'inline-block';
      textWrapper.style.textAlign = 'center';
      textWrapper.style.width = '100%';

      // Split text into words and add spaces
      const words = originalText.split(' ');

      words.forEach((word, wordIndex) => {
        // Create a span for each word
        const wordSpan = document.createElement('span');
        wordSpan.style.display = 'inline-block';

        // Add each character of the word with its own span
        [...word].forEach(char => {
          const charSpan = document.createElement('span');
          charSpan.textContent = char;
          charSpan.style.opacity = 0;
          charSpan.style.display = 'inline-block';
          wordSpan.appendChild(charSpan);
        });

        // Add the word to the wrapper
        textWrapper.appendChild(wordSpan);

        // Add a space after each word (except the last one)
        if (wordIndex < words.length - 1) {
          const spaceSpan = document.createElement('span');
          spaceSpan.innerHTML = '&nbsp;';
          spaceSpan.style.display = 'inline-block';
          textWrapper.appendChild(spaceSpan);
        }
      });

      // Add the wrapper to the container
      visiTextRef.current.appendChild(textWrapper);

      // Create a timeline for the text animation
      const textTl = gsap.timeline({
        scrollTrigger: {
          trigger: visiSectionRef.current,
          start: "top 60%",
          toggleActions: "play none none none"
        }
      });

      // Select all character spans (not spaces)
      const chars = visiTextRef.current.querySelectorAll('span span:not(:empty)');

      // Animate each character with a delay
      textTl.to(chars, {
        opacity: 1,
        duration: 0.3,
        stagger: 0.02,
        ease: "power2.inOut"
      });
    }

    // Set up scroll animation for misi section
    if (misiSectionRef.current && misiItemsRef.current) {
      ScrollTrigger.create({
        trigger: misiSectionRef.current,
        start: "top top",
        end: "bottom bottom",
        pin: misiItemsRef.current,
        pinSpacing: true,
        anticipatePin: 1
      });
    }

    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup
    return () => {
      window.removeEventListener('resize', updateDividerWidth);
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(timer);

      // Kill all ScrollTrigger instances to prevent memory leaks
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
  const misiItems = [
    {
      id: 1,
      text: 'Menanamkan rasa cinta dan solidaritas terhadap Program Studi dan Himpunan Mahasiswa Sistem Informasi melalui penggunaan PDH HIMASIF setiap hari senin berdasarkan AD/ART'
    },
    {
      id: 2,
      text: 'Memfasilitasi dan mengembangkan skill serta pemahaman akademik civitas akademika HIMASIF melalui inovasi divisi Riset dan Pengembangan'
    },
    {
      id: 3,
      text: 'Menyediakan wadah untuk civitas akademika HIMASIF dapat memberikan kritik dan saran yang akan dikaji secara inklusif dan profesional'
    },
    {
      id: 4,
      text: 'Mengembangkan kolaborasi strategis untuk memperkuat eksistensi dan nama baik Program Studi dan Himpunan Mahasiswa Sistem Informasi'
    }
  ];

  return (
    <>
      <div className="visiMisi-sections-wrapper">
        {/* Landing Section */}
        <section className="landing-visiMisi">
          <Container fluid className="h-100 d-flex align-items-center justify-content-center">
            <Row className="w-100 justify-content-center">
              <Col xs={12} md={8} lg={6} className="text-center position-relative d-flex justify-content-center">
                <div className="landing-title">
                  <Row className="g-0">
                    <Col xs={12} className="p-0">
                      <div className="visi-text">VISI</div>
                    </Col>
                    <Col xs={12} className="p-0 mt-n5">
                      <div className="misi-text">MISI</div>
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
        <div className="visiMisi-overlap-card">
          <Container fluid className="p-0">
            <Row className="justify-content-center mx-0">
              <Col xs={12} md={12} lg={12} className="px-0">
                <div className="visiMisi-card-content rounded shadow">
                  <div className="visiMisi-title-container">
                    <h2 className="visiMisi-card-title" ref={titleRef}>FUNGSI VISI MISI DALAM ORGANISASI</h2>
                    <div className="visiMisi-title-divider" style={{ width: dividerWidth > 0 ? `${dividerWidth}px` : 'auto' }}>
                      <div className="visiMisi-divider-line"></div>
                      <div className="visiMisi-divider-diamond"></div>
                      <div className="visiMisi-divider-line"></div>
                    </div>
                  </div>
                  <Container fluid className="p-0">
                    <Row className="justify-content-center">
                      <Col xs={12} className="d-flex justify-content-center">
                        <div className="visiMisi-card-text">
                          <div className="text-line">
                            VISI MENETAPKAN ARAH STRATEGI <span className="visiMisi-text-highlight">DAN </span> TUJUAN
                          </div>
                          <div className="text-line">
                            JANGKA PANJANG ORGANISASI, SEMENTARA MISI
                          </div>
                          <div className="text-line">
                            <span className="visiMisi-text-highlight">merumuskan</span> LANGKAH-LANGKAH OPERASIONAL <span className="visiMisi-text-highlight">UNTUK</span>
                          </div>
                          <div className="text-line">
                            MEREALISASIKAN VISI TERSEBUT.
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </Container>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        {/* About Visi Section */}
        <section className="about-visi">
          <div className="visi-section-top d-flex align-items-center justify-content-center">
            {/* Empty section with only background */}
          </div>
          <div className="visi-section-bottom d-flex align-items-center justify-content-center" ref={visiSectionRef}>
            <div className="visi-bg-text" ref={el => visiBackgroundTextRef.current = el}>VISI</div>
            <Container fluid className="position-relative h-100">
              <Row className="h-100 align-items-center justify-content-center">
                <Col xs={12} className="d-flex align-items-center justify-content-center" style={{ minHeight: '80vh' }}>
                  <div className="visi-content-container mx-auto d-flex align-items-center justify-content-center">
                    <p className="visi-content-text" ref={el => visiTextRef.current = el}>
                    </p>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </section>
      </div>

      {/* About Misi Section */}
      <section className="about-misi" ref={misiSectionRef}>
        <Container fluid className="h-100">
          <Row className="h-100">
            <Col md={4} lg={3} className="misi-left-col">
              <h2 className="misi-title">MISI</h2>
            </Col>
            <Col md={8} lg={9} className="misi-right-col">
              <div className="misi-items-container" ref={misiItemsRef}>
                {misiItems.map(item => (
                  <div className="misi-item" key={item.id}>
                    <div className="misi-number">{item.id}</div>
                    <div className="misi-content">
                      <p className="misi-text">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default VisiMisi;
