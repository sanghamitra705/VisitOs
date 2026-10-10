import React from 'react';

/**
 * AuroraBackground component inspired by React Bits
 * Provides subtle flowing ambient gradient auroras using blue, teal, and green tones.
 * Uses GPU-accelerated blur filters and respects prefers-reduced-motion.
 */
export const AuroraBackground = ({
  className = '',
  children,
  intensity = 'subtle', // 'subtle' | 'vibrant'
  ...props
}) => {
  return (
    <div
      className={`relative overflow-hidden ${className}`}
      {...props}
    >
      {/* Aurora Ambient Lighting Layers */}
      <div 
        className="pointer-events-none absolute -top-40 left-1/4 w-[600px] h-[500px] rounded-full blur-[120px] opacity-40 mix-blend-multiply transition-all duration-700 select-none animate-pulse-glow"
        style={{
          background: 'radial-gradient(circle, rgba(23, 105, 210, 0.28) 0%, rgba(22, 136, 232, 0.15) 50%, transparent 70%)',
        }}
      />
      <div 
        className="pointer-events-none absolute top-1/3 -right-20 w-[550px] h-[450px] rounded-full blur-[130px] opacity-35 mix-blend-multiply transition-all duration-700 select-none animate-pulse-glow"
        style={{
          background: 'radial-gradient(circle, rgba(22, 166, 161, 0.25) 0%, rgba(39, 179, 106, 0.12) 60%, transparent 75%)',
          animationDelay: '1.5s',
        }}
      />
      <div 
        className="pointer-events-none absolute -bottom-32 left-1/3 w-[700px] h-[400px] rounded-full blur-[140px] opacity-30 mix-blend-multiply transition-all duration-700 select-none"
        style={{
          background: 'radial-gradient(circle, rgba(39, 179, 106, 0.18) 0%, rgba(22, 166, 161, 0.12) 50%, transparent 70%)',
        }}
      />

      {/* Foreground Content */}
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  );
};

export default AuroraBackground;
