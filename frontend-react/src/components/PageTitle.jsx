import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Map of routes to page titles
const routeTitles = {
  '/': 'Home',
  '/tentang-himasif': 'Tentang HIMASIF',
  '/filosofi-logo': 'Filosofi Logo',
  '/visi-misi': 'Visi & Misi',
  '/merch': 'Merchandise',
  '/berita': 'Berita',
  '/galeri': 'Galeri',
};

const PageTitle = () => {
  const location = useLocation();
  
  useEffect(() => {
    // Get the title for the current path or use a default
    const pageTitle = routeTitles[location.pathname] || 'Page Not Found';
    
    // Set the document title with the format: "Page Name - HIMASIF"
    document.title = `${pageTitle} - HIMASIF`;
    
    // Clean up function (optional)
    return () => {
      document.title = 'HIMASIF';
    };
  }, [location.pathname]);
  
  // This component doesn't render anything
  return null;
};

export default PageTitle;
