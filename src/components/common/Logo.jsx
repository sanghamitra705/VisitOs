import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export const Logo = ({ 
  size = 'default', // 'small' | 'default' | 'large'
  variant = 'light', // 'light' (for gradient navbar/dark footer) | 'dark' (for white bg)
  className = '', 
}) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogoClick = (e) => {
    e.preventDefault();
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 50);
    }
  };

  const iconSizes = {
    small: 'w-8 h-8 sm:w-9 sm:h-9',
    default: 'w-10 h-10 sm:w-11 sm:h-11',
    large: 'w-12 h-12 sm:w-14 sm:h-14',
  };

  const textSizes = {
    small: 'text-lg sm:text-xl',
    default: 'text-xl sm:text-2xl',
    large: 'text-2xl sm:text-3xl',
  };

  return (
    <button
      type="button"
      onClick={handleLogoClick}
      aria-label="VisitOS Home - Scroll to top"
      className={`inline-flex flex-row items-center gap-2.5 sm:gap-3 group cursor-pointer focus:outline-hidden select-none transition-all duration-300 transform hover:scale-[1.03] active:scale-95 text-left bg-transparent ${className}`}
    >
      {/* Official VisitOS Brand Shield Icon with Transparent Background & Tight Crisp ViewBox */}
      <div className={`${iconSizes[size] || iconSizes.default} relative flex items-center justify-center shrink-0 drop-shadow-sm group-hover:drop-shadow-md transition-all`}>
        <svg 
          viewBox="80 35 335 360" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          className="w-full h-full object-contain"
        >
          <defs>
            {/* Primary Brand Gradient */}
            <linearGradient id="vShieldGrad" x1="120" y1="50" x2="380" y2="350" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#10243E" />
              <stop offset="25%" stopColor="#1769D2" />
              <stop offset="60%" stopColor="#16A6A1" />
              <stop offset="100%" stopColor="#27B36A" />
            </linearGradient>

            {/* Bottom Swoosh Arc Gradient */}
            <linearGradient id="vSwooshGrad" x1="90" y1="260" x2="410" y2="360" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#1769D2" />
              <stop offset="40%" stopColor="#1688E8" />
              <stop offset="70%" stopColor="#16A6A1" />
              <stop offset="100%" stopColor="#27B36A" />
            </linearGradient>

            {/* Inside Open Door Gradient */}
            <linearGradient id="vDoorGrad" x1="160" y1="100" x2="230" y2="280" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#1769D2" />
              <stop offset="100%" stopColor="#0B1F38" />
            </linearGradient>

            {/* QR Scanner Code Gradient */}
            <linearGradient id="vQrGrad" x1="260" y1="110" x2="345" y2="210" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#1769D2" />
              <stop offset="50%" stopColor="#16A6A1" />
              <stop offset="100%" stopColor="#27B36A" />
            </linearGradient>

            {/* Visitor Avatar Silhouette Gradient */}
            <linearGradient id="vAvatarGrad" x1="200" y1="190" x2="300" y2="290" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#1769D2" />
              <stop offset="100%" stopColor="#10243E" />
            </linearGradient>
          </defs>

          {/* Shield Outline with Crisp White Interior */}
          <path 
            d="M250 45 L380 92 V198 C380 278 320 338 250 358 C180 338 120 278 120 198 V92 Z" 
            stroke="url(#vShieldGrad)" 
            strokeWidth="20" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            fill="#FFFFFF" 
          />

          {/* Outer Bottom Crescent Swoosh Arc */}
          <path 
            d="M 92 235 C 88 325, 158 388, 250 388 C 342 388, 412 325, 408 235 C 408 318, 332 372, 250 372 C 168 372, 92 318, 92 235 Z" 
            fill="url(#vSwooshGrad)" 
          />

          {/* Left: Open Security Door in Perspective */}
          <g transform="translate(160, 110)">
            <path d="M0 0 H35 V155 H0" stroke="#1769D2" strokeWidth="8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M35 0 L10 22 V133 L35 155 Z" fill="url(#vDoorGrad)" stroke="#1769D2" strokeWidth="5" strokeLinejoin="round" />
            <circle cx="18" cy="78" r="5" fill="#FFFFFF" />
          </g>

          {/* Right: QR Code Scanner Pattern */}
          <g transform="translate(265, 120)">
            <path d="M-6 12 V-6 H12" stroke="url(#vQrGrad)" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            <path d="M72 12 V-6 H54" stroke="url(#vQrGrad)" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            <path d="M-6 54 V72 H12" stroke="url(#vQrGrad)" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            <path d="M72 54 V72 H54" stroke="url(#vQrGrad)" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" />

            <rect x="4" y="4" width="22" height="22" rx="4" fill="none" stroke="#1769D2" strokeWidth="5" />
            <rect x="9.5" y="9.5" width="11" height="11" rx="2" fill="#1769D2" />

            <rect x="40" y="4" width="22" height="22" rx="4" fill="none" stroke="#1769D2" strokeWidth="5" />
            <rect x="45.5" y="9.5" width="11" height="11" rx="2" fill="#1769D2" />

            <rect x="4" y="40" width="22" height="22" rx="4" fill="none" stroke="#1769D2" strokeWidth="5" />
            <rect x="9.5" y="45.5" width="11" height="11" rx="2" fill="#1769D2" />

            <rect x="40" y="40" width="9" height="9" rx="2" fill="#16A6A1" />
            <rect x="53" y="40" width="9" height="9" rx="2" fill="#1769D2" />
            <rect x="40" y="53" width="9" height="9" rx="2" fill="#27B36A" />
            <rect x="53" y="53" width="9" height="9" rx="2" fill="#1688E8" />
          </g>

          {/* Center-Bottom: Visitor Head & Torso Silhouette */}
          <g transform="translate(250, 240)">
            <circle cx="0" cy="-45" r="27" fill="url(#vAvatarGrad)" />
            <path d="M-48 50 C-48 4, -32 -14, 0 -14 C 32 -14, 48 4, 48 50 Z" fill="url(#vAvatarGrad)" />
          </g>

          {/* Top-Right: Verified Green Circle Checkmark Badge */}
          <g transform="translate(352, 85)">
            <circle cx="0" cy="0" r="32" fill="#27B36A" stroke="#FFFFFF" strokeWidth="8" />
            <path d="M-14 0 L-3 11 L15 -9" stroke="#FFFFFF" strokeWidth="7.5" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </svg>
      </div>

      {/* Brand Name VisitOS Immediately to Right on Same Horizontal Line */}
      <div className="flex items-center tracking-tight font-sans font-black leading-none">
        <span className={`${textSizes[size] || textSizes.default} font-black tracking-tight flex items-center drop-shadow-xs`}>
          <span className={variant === 'light' ? 'text-white font-black' : 'text-[#10243E] font-black'}>
            Visit
          </span>
          <span className={variant === 'light' ? 'text-[#A7F3D0] ml-0.5 font-black' : 'text-transparent bg-clip-text bg-gradient-to-r from-[#1769D2] via-[#16A6A1] to-[#27B36A] ml-0.5 font-black'}>
            OS
          </span>
        </span>
      </div>
    </button>
  );
};
