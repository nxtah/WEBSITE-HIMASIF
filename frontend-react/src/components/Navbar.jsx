import React, { useState, useEffect, useRef } from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import '../css/components/Navbar.css';

// Custom NavLink component with letter animation
const NavLinkWithHoverAnimation = ({ to, children, isActive }) => {
  const [displayText, setDisplayText] = useState(children);
  const [isAnimating, setIsAnimating] = useState(false);
  const linkRef = useRef(null);
  const animationTimeoutRef = useRef(null);
  const originalText = useRef(children.toString());

  // Function to create animated spans for each letter
  const createAnimatedText = () => {
    const text = originalText.current;
    return (
      <span className="letter-container">
        {text.split('').map((letter, index) => (
          <span
            key={`${letter}-${index}`}
            className="animated-letter"
            style={{
              display: 'inline-block',
              animationDelay: `${index * 30}ms`,
              animationDuration: '0.3s',
              position: 'relative',
              animationFillMode: 'both'
            }}
            data-index={index}
          >
            {letter}
          </span>
        ))}
      </span>
    );
  };

  const handleMouseEnter = () => {
    if (isAnimating) return;

    setIsAnimating(true);

    // Add animation class to trigger the animation
    const letters = linkRef.current.querySelectorAll('.animated-letter');
    letters.forEach(letter => {
      letter.classList.add('letter-up-animation');
    });

    // After all letters have animated up, add the down animation
    const lastIndex = letters.length - 1;
    const totalDelay = lastIndex * 30 + 300; // Last letter delay + animation duration

    animationTimeoutRef.current = setTimeout(() => {
      letters.forEach(letter => {
        letter.classList.remove('letter-up-animation');
        letter.classList.add('letter-down-animation');
      });

      // After all animations complete, reset
      setTimeout(() => {
        letters.forEach(letter => {
          letter.classList.remove('letter-down-animation');
        });
        setIsAnimating(false);
      }, lastIndex * 30 + 300);

    }, totalDelay);
  };

  // Clean up any pending animations on unmount
  useEffect(() => {
    return () => {
      if (animationTimeoutRef.current) {
        clearTimeout(animationTimeoutRef.current);
      }
    };
  }, []);

  // Update original text if children changes
  useEffect(() => {
    originalText.current = children.toString();
    setDisplayText(createAnimatedText());
  }, [children]);

  return (
    <Nav.Link
      as={Link}
      to={to}
      className={isActive ? 'active nav-link-animated' : 'nav-link-animated'}
      ref={linkRef}
      onMouseEnter={handleMouseEnter}
    >
      {displayText}
    </Nav.Link>
  );
};

// Custom NavDropdown.Item with letter animation
const DropdownItemWithHoverAnimation = ({ to, children, isActive }) => {
  const [displayText, setDisplayText] = useState(children);
  const [isAnimating, setIsAnimating] = useState(false);
  const itemRef = useRef(null);
  const animationTimeoutRef = useRef(null);
  const originalText = useRef(children.toString());

  // Function to create animated spans for each letter
  const createAnimatedText = () => {
    const text = originalText.current;
    return (
      <span className="letter-container">
        {text.split('').map((letter, index) => (
          <span
            key={`${letter}-${index}`}
            className="animated-letter"
            style={{
              display: 'inline-block',
              animationDelay: `${index * 30}ms`,
              animationDuration: '0.3s',
              position: 'relative',
              animationFillMode: 'both'
            }}
            data-index={index}
          >
            {letter}
          </span>
        ))}
      </span>
    );
  };

  const handleMouseEnter = () => {
    if (isAnimating) return;

    setIsAnimating(true);

    // Add animation class to trigger the animation
    const letters = itemRef.current.querySelectorAll('.animated-letter');
    letters.forEach(letter => {
      letter.classList.add('letter-up-animation');
    });

    // After all letters have animated up, add the down animation
    const lastIndex = letters.length - 1;
    const totalDelay = lastIndex * 30 + 300; // Last letter delay + animation duration

    animationTimeoutRef.current = setTimeout(() => {
      letters.forEach(letter => {
        letter.classList.remove('letter-up-animation');
        letter.classList.add('letter-down-animation');
      });

      // After all animations complete, reset
      setTimeout(() => {
        letters.forEach(letter => {
          letter.classList.remove('letter-down-animation');
        });
        setIsAnimating(false);
      }, lastIndex * 30 + 300);

    }, totalDelay);
  };

  // Clean up any pending animations on unmount
  useEffect(() => {
    return () => {
      if (animationTimeoutRef.current) {
        clearTimeout(animationTimeoutRef.current);
      }
    };
  }, []);

  // Update original text if children changes
  useEffect(() => {
    originalText.current = children.toString();
    setDisplayText(createAnimatedText());
  }, [children]);

  return (
    <NavDropdown.Item
      as={Link}
      to={to}
      className={isActive ? 'active dropdown-item-animated' : 'dropdown-item-animated'}
      ref={itemRef}
      onMouseEnter={handleMouseEnter}
    >
      {displayText}
    </NavDropdown.Item>
  );
};

// Custom NavDropdown component that opens on hover
const HoverableNavDropdown = ({ title, id, children }) => {
  const [show, setShow] = useState(false);
  const dropdownRef = useRef(null);
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setShow(true);
  };

  const handleMouseLeave = () => {
    // Add a small delay before closing the dropdown
    timeoutRef.current = setTimeout(() => {
      setShow(false);
    }, 150); // 150ms delay gives user time to move to dropdown
  };

  // Clean up timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div
      className="hoverable-dropdown-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={dropdownRef}
    >
      <NavDropdown
        title={title}
        id={id}
        show={show}
        className="custom-dropdown"
      >
        {children}
      </NavDropdown>
    </div>
  );
};

const MainNavbar = () => {
  const location = useLocation();

  // Check if the current path matches the given path
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <Navbar expand="lg" className="navbar-himasif" variant="dark">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {/* Left side navigation */}
          <Nav className="me-auto">
            <HoverableNavDropdown
              title={
                <span className={isActive('/tentang-himasif') || isActive('/filosofi-logo') || isActive('/visi-misi') ? 'active' : ''}>
                  TENTANG
                </span>
              }
              id="tentang-dropdown"
            >
              <DropdownItemWithHoverAnimation
                to="/tentang-himasif"
                isActive={isActive('/tentang-himasif')}
              >
                TENTANG HIMASIF
              </DropdownItemWithHoverAnimation>
              <DropdownItemWithHoverAnimation
                to="/filosofi-logo"
                isActive={isActive('/filosofi-logo')}
              >
                FILOSOFI LOGO
              </DropdownItemWithHoverAnimation>
              <DropdownItemWithHoverAnimation
                to="/visi-misi"
                isActive={isActive('/visi-misi')}
              >
                VISI & MISI
              </DropdownItemWithHoverAnimation>
            </HoverableNavDropdown>

            <NavLinkWithHoverAnimation
              to="/struktur"
              isActive={isActive('/struktur')}
            >
              STRUKTUR
            </NavLinkWithHoverAnimation>
          </Nav>

          {/* Center logo */}
          <Navbar.Brand as={Link} to="/" className="mx-auto">
            <img
              src="/src/assets/images/logo-himasif.png"
              alt="HIMASIF Logo"
              className="navbar-logo"
            />
          </Navbar.Brand>

          {/* Right side navigation */}
          <Nav className="ms-auto">
            <NavLinkWithHoverAnimation
              to="/galeri"
              isActive={isActive('/galeri')}
            >
              GALERI
            </NavLinkWithHoverAnimation>

            <NavLinkWithHoverAnimation
              to="/merch"
              isActive={isActive('/merch')}
            >
              MERCH
            </NavLinkWithHoverAnimation>

            <NavLinkWithHoverAnimation
              to="/berita"
              isActive={isActive('/berita')}
            >
              BERITA
            </NavLinkWithHoverAnimation>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MainNavbar;
