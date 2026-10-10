import React from 'react';
import { motion } from 'framer-motion';
import kioskImg from '../../assets/footer1.png';

export const KioskSticker = ({ className = '', imgHeightClass = 'h-[500px] lg:h-[550px] xl:h-[620px] 2xl:h-[670px]' }) => {
  return (
    <div className={`relative flex flex-col items-center lg:items-end justify-end select-none ${className}`}>
      {/* Subtle Radial Teal Ambient Glow Behind Kiosk (#19A997) */}
      <div 
        className="absolute -inset-10 pointer-events-none -z-10 opacity-70"
        style={{
          background: 'radial-gradient(circle at 65% 55%, rgba(25, 169, 151, 0.22) 0%, rgba(56, 199, 181, 0.12) 40%, transparent 70%)',
          filter: 'blur(36px)'
        }}
      />

      {/* Main Exact Kiosk Sticker Visual with Subtle Floating Motion */}
      <motion.div
        animate={{
          y: [0, -6, 0],
          rotate: [-0.15, 0.15, -0.15],
        }}
        transition={{
          duration: 5.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative z-10 flex items-end justify-center lg:justify-end"
      >
        {/* Exact Approved VisitOS Kiosk Sticker Asset */}
        <img
          src={kioskImg}
          alt="VisitOS Smart Check-in Kiosk"
          className={`w-auto ${imgHeightClass} object-contain drop-shadow-[0_24px_50px_rgba(0,0,0,0.18)] transition-all duration-300`}
          style={{
            maxWidth: '100%',
          }}
          loading="lazy"
        />
      </motion.div>

      {/* Dynamic Ground Shadow Underneath Kiosk Base */}
      <motion.div
        animate={{
          scale: [1, 0.94, 1],
          opacity: [0.35, 0.20, 0.35],
        }}
        transition={{
          duration: 5.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="w-52 sm:w-72 h-4 rounded-full bg-black/55 blur-md -mt-3 z-0 pointer-events-none"
      />
    </div>
  );
};

export default KioskSticker;



