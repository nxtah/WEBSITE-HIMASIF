import React, { useState, useRef, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import gsap from 'gsap';
import '../css/components/CustomButton.css';

/**
 * CustomButton component that provides consistent styling with customizable text
 * and animated icon on hover
 *
 * @param {Object} props - Component props
 * @param {string} props.text - Button text content
 * @param {string} props.to - Link destination (if button is a link)
 * @param {string} props.variant - Button variant (default: 'outline-primary')
 * @param {string} props.size - Button size (default: 'lg')
 * @param {string} props.className - Additional CSS classes
 * @param {function} props.onClick - Click handler function
 * @param {boolean} props.disabled - Whether the button is disabled
 * @param {boolean} props.isExternal - Whether the link is external (uses <a> instead of Link)
 * @param {string} props.type - Button type (default: 'button')
 * @param {boolean} props.hideIcon - Whether to hide the arrow icon (default: false)
 * @returns {React.Component} - Rendered component
 */
const CustomButton = ({
  text,
  to,
  variant = 'outline-primary',
  size = 'lg',
  className = '',
  onClick,
  disabled = false,
  isExternal = false,
  type = 'button',
  hideIcon = false,
  ...props
}) => {
  // State to track hover
  const [isHovered, setIsHovered] = useState(false);

  // Base button classes
  const buttonClasses = `custom-button ${className}`;

  // Refs for GSAP animations
  const arrowRef = useRef(null);
  const circleRef = useRef(null);

  // GSAP animation effect
  useEffect(() => {
    if (!arrowRef.current || !circleRef.current) return;

    // Create a single timeline instance that we'll reuse
    const tl = gsap.timeline({
      defaults: {
        duration: 0.25,
        ease: "power1.out" // Smoother easing function
      }
    });

    // Clear any existing animations
    tl.clear();

    if (isHovered) {
      // Animate both elements simultaneously with exact same timing
      tl.to([
        arrowRef.current, // Arrow element
        circleRef.current // Circle element
      ], {
        x: (i) => i === 0 ? 2 : 2, // 2px for both to maintain alignment
        scale: (i) => i === 0 ? 1 : 0.9, // No scale for arrow, 0.9 for circle
        transformOrigin: (i) => i === 0 ? "center" : "center",
        stagger: 0 // Ensure they start at exactly the same time
      }, 0);
    } else {
      // Reset both elements simultaneously
      tl.to([
        arrowRef.current, // Arrow element
        circleRef.current // Circle element
      ], {
        x: 0,
        scale: (i) => i === 0 ? 1 : 1, // No scale change for arrow, reset to 1 for circle
        transformOrigin: "center center",
        stagger: 0 // Ensure they start at exactly the same time
      }, 0);
    }
  }, [isHovered]);

  // Button content with animated icon
  const buttonContent = (
    <>
      <span className="button-text">{text}</span>
      {!hideIcon && (
        <span className="button-icon-container">
          <svg
            width="36"
            height="24"
            viewBox="0 0 36 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="button-icon"
          >
            <g ref={arrowRef} className="icon-arrow">
              <line
                x1="2"
                y1="12"
                x2="20"
                y2="12"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <polyline
                points="16,8 20,12 16,16"
                stroke="currentColor"
                strokeWidth="1.5"
                fill="none"
              />
            </g>
            <circle
              ref={circleRef}
              cx="20"
              cy="12"
              r="9"
              stroke="currentColor"
              strokeWidth="1.2"
              fill="none"
              className="icon-circle"
            />
          </svg>
        </span>
      )}
    </>
  );

  // Event handlers for hover state
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  // If there's a 'to' prop, render as a link
  if (to) {
    // For external links, use <a> tag
    if (isExternal) {
      return (
        <Button
          as="a"
          href={to}
          target="_blank"
          rel="noopener noreferrer"
          variant={variant}
          size={size}
          className={buttonClasses}
          disabled={disabled}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          {...props}
        >
          {buttonContent}
        </Button>
      );
    }

    // For internal links, use React Router's Link
    return (
      <Button
        as={Link}
        to={to}
        variant={variant}
        size={size}
        className={buttonClasses}
        disabled={disabled}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...props}
      >
        {buttonContent}
      </Button>
    );
  }

  // Otherwise, render as a regular button
  return (
    <Button
      variant={variant}
      size={size}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
      type={type}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {buttonContent}
    </Button>
  );
};

CustomButton.propTypes = {
  text: PropTypes.string.isRequired,
  to: PropTypes.string,
  variant: PropTypes.string,
  size: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  isExternal: PropTypes.bool,
  type: PropTypes.string,
  hideIcon: PropTypes.bool,
};

export default CustomButton;
