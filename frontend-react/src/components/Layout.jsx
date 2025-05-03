import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import MainNavbar from './Navbar';
import Footer from './Footer';
import PageTitle from './PageTitle';
import '../css/components/Layout.css';

const Layout = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Handle scroll event for back to top button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <PageTitle />
      <MainNavbar />

      <main>
        <Outlet />
      </main>

      <Footer />

      {/* Back to Top Button */}
      <div
        className={`back-to-top ${showBackToTop ? 'visible' : ''}`}
        onClick={scrollToTop}
      >
        <i className="bi bi-arrow-up"></i>
      </div>
    </>
  );
};

export default Layout;
