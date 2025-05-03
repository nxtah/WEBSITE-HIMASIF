import React from 'react';

const LandingHomeBackground = () => {
  // Inline styles for the background
  const backgroundStyle = {
    backgroundColor: '#2873FF', // Solid blue background
    width: '100%',
    height: '100vh',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
    pointerEvents: 'none', // Allows clicks to pass through to elements below
  };

  return <div style={backgroundStyle}></div>;
};

export default LandingHomeBackground;
