import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Sparkles } from 'lucide-react';
import { AnimatedHeading } from './AnimatedHeading';

export const PageHeader = ({
  badge,
  title,
  gradientWord,
  subtitle,
  breadcrumb = [],
  children,
  className = '',
  visual = null
}) => {
  const getSegments = () => {
    if (typeof title !== 'string') return null;

    if (gradientWord && title.includes(gradientWord)) {
      const parts = title.split(gradientWord);
      return [
        { text: parts[0], className: 'text-[#10243E]' },
        { text: gradientWord, className: 'bg-gradient-to-r from-[#1769D2] via-[#16A6A1] to-[#27B36A] bg-clip-text text-transparent' },
        { text: parts[1], className: 'text-[#10243E]' }
      ];
    }

    const words = title.trim().split(' ');
    if (words.length <= 1) {
      return [{ text: title, className: 'bg-gradient-to-r from-[#1769D2] via-[#16A6A1] to-[#27B36A] bg-clip-text text-transparent' }];
    }

    const splitIndex = Math.max(1, Math.ceil(words.length * 0.55));
    const firstPart = words.slice(0, splitIndex).join(' ');
    const secondPart = words.slice(splitIndex).join(' ');

    return [
      { text: firstPart, className: 'text-[#10243E]' },
      { text: secondPart, className: 'bg-gradient-to-r from-[#1769D2] via-[#16A6A1] to-[#27B36A] bg-clip-text text-transparent' }
    ];
  };

  const segments = getSegments();

  return (
    <section className={`relative pt-8 pb-14 sm:pb-16 overflow-visible border-b border-[#DCE6EF] bg-gradient-to-b from-[#EDF6FC] via-[#F3F9FD] to-[#EDF6FC] ${className}`}>
      {/* Ambient background glows */}
      <div className="absolute top-0 right-1/4 w-[450px] h-[450px] bg-[#1688E8]/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-4 left-10 w-[350px] h-[350px] bg-[#16A6A1]/6 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 pattern-dots opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Breadcrumb */}
        {breadcrumb.length > 0 && (
          <nav className="flex items-center gap-2 text-xs text-[#5F7185] mb-6 flex-wrap" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-[#10243E] transition-colors font-medium">
              Home
            </Link>
            {breadcrumb.map((item, idx) => (
              <React.Fragment key={idx}>
                <ChevronRight className="w-3.5 h-3.5 text-[#5F7185]/50" />
                {item.link ? (
                  <Link to={item.link} className="hover:text-[#10243E] transition-colors font-medium">
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-[#1769D2] font-semibold bg-[#1769D2]/10 px-2.5 py-0.5 rounded-full border border-[#1769D2]/20">
                    {item.label}
                  </span>
                )}
              </React.Fragment>
            ))}
          </nav>
        )}

        <div className={visual ? 'grid grid-cols-1 lg:grid-cols-12 gap-8 items-center' : ''}>
          <div className={visual ? 'lg:col-span-7' : 'max-w-4xl'}>
            {/* Main Brand Title with Dark Navy + Gradient Emphasis */}
            {segments ? (
              <AnimatedHeading
                as="h1"
                segments={segments}
                className="text-3xl sm:text-4xl md:text-5xl font-black text-[#10243E] tracking-tight leading-[1.15] font-sans"
                stagger={0.025}
              />
            ) : (
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#10243E] tracking-tight leading-[1.15] font-sans">
                {title}
              </h1>
            )}

            {/* Subtitle */}
            {subtitle && (
              <p className="mt-4 text-base sm:text-lg text-[#5F7185] leading-relaxed max-w-3xl">
                {subtitle}
              </p>
            )}

            {children && <div className="mt-6">{children}</div>}
          </div>

          {visual && (
            <div className="lg:col-span-5 relative">
              {visual}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
