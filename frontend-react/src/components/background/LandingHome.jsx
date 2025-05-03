import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const LandingHomeBackground = () => {
  // Refs for the container and interactive elements
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const mainBlobRef = useRef(null);

  // State for mouse position
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Background styles
  const backgroundStyle = {
    backgroundColor: '#2873FF', // Solid blue background
    width: '100%',
    height: '100vh',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 0, // Changed from -1 to 0 to ensure it's visible but behind content
    overflow: 'hidden',
  };

  // Canvas container styles
  const canvasContainerStyle = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    pointerEvents: 'none',
  };

  // Main blob styles
  const mainBlobStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '400px',
    height: '400px',
    borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
    background: 'linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.05) 100%)',
    boxShadow: '0 0 80px rgba(255, 255, 255, 0.15)',
    pointerEvents: 'none',
    zIndex: 1,
  };

  // Add keyframes for animations
  useEffect(() => {
    // Create stylesheet for keyframes
    const styleSheet = document.createElement('style');
    styleSheet.textContent = `
      @keyframes float {
        0% { transform: translate(-50%, -50%) translateY(0) rotate(0deg); }
        25% { transform: translate(-50%, -50%) translateY(-15px) rotate(5deg); }
        50% { transform: translate(-50%, -50%) translateY(0) rotate(0deg); }
        75% { transform: translate(-50%, -50%) translateY(15px) rotate(-5deg); }
        100% { transform: translate(-50%, -50%) translateY(0) rotate(0deg); }
      }

      @keyframes pulse {
        0% { transform: scale(1); opacity: 0.8; }
        50% { transform: scale(1.05); opacity: 1; }
        100% { transform: scale(1); opacity: 0.8; }
      }

      @keyframes rotate {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
    `;
    document.head.appendChild(styleSheet);

    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);

  // Initialize canvas and create 3D abstract elements
  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;

    const canvas = canvasRef.current;
    const container = containerRef.current;
    const ctx = canvas.getContext('2d');

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = container.clientWidth;
      canvas.height = container.clientHeight;
    };

    // Call once to initialize
    setCanvasSize();

    // Update on resize
    window.addEventListener('resize', setCanvasSize);

    // Particles array
    const particles = [];
    const particleCount = 100;

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 3 + 1,
        color: `rgba(255, 255, 255, ${Math.random() * 0.3 + 0.1})`,
        speedX: Math.random() * 0.5 - 0.25,
        speedY: Math.random() * 0.5 - 0.25,
        originalX: Math.random() * canvas.width,
        originalY: Math.random() * canvas.height,
      });
    }

    // Connection lines
    const drawConnections = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(255, 255, 255, ${0.1 * (1 - distance / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach(particle => {
        // Apply mouse influence
        const dx = mousePosition.x - particle.x;
        const dy = mousePosition.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 200) {
          const force = (200 - distance) / 2000;
          particle.x -= dx * force;
          particle.y -= dy * force;
        }

        // Move particles
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Boundary check with bounce
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.speedX = -particle.speedX;
        }

        if (particle.y < 0 || particle.y > canvas.height) {
          particle.speedY = -particle.speedY;
        }

        // Gradually return to original position
        particle.x += (particle.originalX - particle.x) * 0.01;
        particle.y += (particle.originalY - particle.y) * 0.01;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
      });

      // Draw connections
      drawConnections();

      requestAnimationFrame(animate);
    };

    // Start animation
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', setCanvasSize);
    };
  }, [mousePosition]);

  // Handle mouse movement for interactive elements
  useEffect(() => {
    if (!containerRef.current || !mainBlobRef.current) return;

    const container = containerRef.current;
    const mainBlob = mainBlobRef.current;

    // Variables for animation
    let rotation = 0;
    let scale = 1;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    // Mouse move handler
    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Update mouse position for particles
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });

      // Calculate distance from center
      targetX = (e.clientX - centerX) * 0.1;
      targetY = (e.clientY - centerY) * 0.1;

      // Calculate distance for scale effect
      const distance = Math.sqrt(
        Math.pow(e.clientX - centerX, 2) +
        Math.pow(e.clientY - centerY, 2)
      );

      // Update scale based on distance
      scale = gsap.utils.clamp(0.9, 1.1, 1 - distance / 2000);
    };

    // Animate the main blob
    const animateMainBlob = () => {
      // Smooth movement
      currentX += (targetX - currentX) * 0.1;
      currentY += (targetY - currentY) * 0.1;

      // Apply transformations
      gsap.set(mainBlob, {
        x: currentX,
        y: currentY,
        scale: scale,
        rotation: rotation,
      });

      // Slow rotation
      rotation += 0.05;

      requestAnimationFrame(animateMainBlob);
    };

    // Start animation
    animateMainBlob();

    // Morph the blob shape
    const morphBlob = () => {
      // Generate random border radius values
      const radius1 = gsap.utils.random(30, 70);
      const radius2 = gsap.utils.random(30, 70);
      const radius3 = gsap.utils.random(30, 70);
      const radius4 = gsap.utils.random(30, 70);

      // Animate to new shape
      gsap.to(mainBlob, {
        borderRadius: `${radius1}% ${100-radius1}% ${radius3}% ${100-radius3}% / ${radius2}% ${radius4}% ${100-radius4}% ${100-radius2}%`,
        duration: gsap.utils.random(5, 10),
        ease: 'sine.inOut',
        onComplete: morphBlob
      });
    };

    // Start morphing
    morphBlob();

    // Add event listener
    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      gsap.killTweensOf(mainBlob);
    };
  }, []);

  // Create secondary blobs
  const secondaryBlobs = Array.from({ length: 5 }, (_, i) => ({
    id: i,
    size: 150 + i * 30,
    delay: i * 2,
    duration: 20 + i * 5,
    opacity: 0.1 - i * 0.01,
  }));

  return (
    <div style={backgroundStyle} ref={containerRef}>
      {/* Canvas for particles and connections */}
      <div style={canvasContainerStyle}>
        <canvas ref={canvasRef} style={{ width: '100%', height: '100%' }}></canvas>
      </div>

      {/* Secondary blobs */}
      {secondaryBlobs.map(blob => (
        <div
          key={blob.id}
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: `${blob.size}px`,
            height: `${blob.size}px`,
            borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
            background: `rgba(255, 255, 255, ${blob.opacity})`,
            boxShadow: '0 0 50px rgba(255, 255, 255, 0.1)',
            transform: 'translate(-50%, -50%)',
            animation: `rotate ${blob.duration}s infinite linear, pulse 8s infinite ease-in-out`,
            animationDelay: `${blob.delay}s`,
            pointerEvents: 'none',
            zIndex: 0,
          }}
        />
      ))}

      {/* Main interactive blob */}
      <div style={mainBlobStyle} ref={mainBlobRef}></div>
    </div>
  );
};

export default LandingHomeBackground;
