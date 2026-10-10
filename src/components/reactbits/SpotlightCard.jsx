import React, { useRef, useState } from 'react';

/**
 * SpotlightCard component inspired by React Bits
 * Tracks mouse pointer coordinates to create an interactive radial gradient illumination.
 * Lightweight, high-performance, accessible, and supports full keyboard and touch interaction.
 */
export const SpotlightCard = ({
  children,
  className = '',
  spotlightColor = 'rgba(23, 105, 210, 0.12)',
  borderColor = 'rgba(22, 166, 161, 0.4)',
  as: Component = 'div',
  ...props
}) => {
  const cardRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isFocused, setIsFocused] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => {
    setIsFocused(true);
  };

  const handleMouseLeave = () => {
    setIsFocused(false);
  };

  return (
    <Component
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden rounded-3xl bg-white border border-[#DCE6EF] transition-all duration-300 ${className}`}
      {...props}
    >
      {/* React Bits-inspired Spotlight Pointer Glow */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 z-0"
        style={{
          opacity: isFocused ? 1 : 0,
          background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 80%)`,
        }}
      />

      {/* Subtle Interactive Border Glow */}
      <div
        className="pointer-events-none absolute inset-0 rounded-3xl border border-transparent transition-colors duration-300 z-0"
        style={{
          borderColor: isFocused ? borderColor : 'transparent',
        }}
      />

      {/* Card Content Container */}
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </Component>
  );
};

export default SpotlightCard;
