import React from 'react';
import { Sparkles } from 'lucide-react';
import { AnimatedHeading } from './AnimatedHeading';

export const GlobalSectionHeading = ({
  eyebrow,
  eyebrowIcon: EyebrowIcon = Sparkles,
  title,
  gradientTitle,
  subtitle,
  centered = false,
  theme = 'light', // 'light' | 'dark'
  className = '',
  align = 'left' // 'left' | 'center'
}) => {
  const isCentered = centered || align === 'center';
  const isDark = theme === 'dark';

  const getSegments = () => {
    if (gradientTitle) {
      return [
        { text: title, className: isDark ? 'text-white' : 'text-[#10243E]' },
        { text: gradientTitle, className: 'bg-gradient-to-r from-[#1769D2] via-[#16A6A1] to-[#27B36A] bg-clip-text text-transparent' }
      ];
    }

    if (typeof title === 'string') {
      const words = title.trim().split(' ');
      if (words.length <= 1) {
        return [{ text: title, className: 'bg-gradient-to-r from-[#1769D2] via-[#16A6A1] to-[#27B36A] bg-clip-text text-transparent' }];
      }

      const splitIndex = Math.max(1, Math.ceil(words.length * 0.6));
      const firstPart = words.slice(0, splitIndex).join(' ');
      const secondPart = words.slice(splitIndex).join(' ');

      return [
        { text: firstPart, className: isDark ? 'text-white' : 'text-[#10243E]' },
        { text: secondPart, className: 'bg-gradient-to-r from-[#1769D2] via-[#16A6A1] to-[#27B36A] bg-clip-text text-transparent' }
      ];
    }

    return null;
  };

  const segments = getSegments();

  return (
    <div className={`max-w-3xl ${isCentered ? 'mx-auto text-center' : 'text-left'} ${className}`}>
      {/* Main Heading with Staggered Character Animation */}
      {segments ? (
        <AnimatedHeading
          as="h2"
          segments={segments}
          className="text-2xl sm:text-3xl lg:text-[38px] font-black tracking-tight font-sans leading-[1.2]"
          stagger={0.02}
        />
      ) : (
        <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-black tracking-tight font-sans leading-[1.2]">
          {title}
        </h2>
      )}

      {/* Supporting Subtitle */}
      {subtitle && (
        <p 
          className={`mt-3 text-sm sm:text-base leading-relaxed font-medium ${
            isDark ? 'text-slate-300 max-w-2xl' : 'text-[#5F7185] max-w-2xl'
          } ${isCentered ? 'mx-auto' : ''}`}
        >
          {subtitle}
        </p>
      )}

      {/* Subtle Decorative Brand Accent Bar */}
      <div 
        className={`mt-4 h-1 w-12 rounded-full bg-gradient-to-r from-[#1769D2] via-[#16A6A1] to-[#27B36A] ${
          isCentered ? 'mx-auto' : ''
        }`} 
      />
    </div>
  );
};

export default GlobalSectionHeading;
