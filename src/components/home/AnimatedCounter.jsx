import React, { useEffect, useState, useRef, useCallback } from 'react';

/**
 * AnimatedCounter
 * Smoothly interpolates from 0 to target value when entering viewport.
 * Handles integers (150+), millions (1M+), and percentages (99.9%).
 */
export const AnimatedCounter = ({ targetValue, duration = 1800 }) => {
  const [displayValue, setDisplayValue] = useState('0');
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef(null);

  const startCounting = useCallback(() => {
    const startTime = performance.now();

    const isDecimal = targetValue.includes('.');
    const hasPlus = targetValue.includes('+');
    const hasPercent = targetValue.includes('%');
    const hasM = targetValue.includes('M');

    // Extract numerical value
    const numericTarget = parseFloat(targetValue.replace(/[^0-9.]/g, ''));

    const updateCounter = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Smooth easeOutExpo curve
      const easeOut = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const currentNumeric = easeOut * numericTarget;

      let formatted = '';
      if (hasM) {
        if (progress < 1) {
          // Show realistic progressive values (e.g. 0 -> 0.2M -> 0.8M -> 1M+)
          const mValue = (easeOut * numericTarget).toFixed(1);
          formatted = (mValue === '0.0' ? '0' : mValue) + 'M';
        } else {
          formatted = targetValue;
        }
      } else if (isDecimal) {
        formatted = currentNumeric.toFixed(1) + (hasPercent ? '%' : '');
      } else {
        formatted = Math.round(currentNumeric).toString() + (hasPlus ? '+' : '');
      }

      setDisplayValue(formatted);

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        setDisplayValue(targetValue);
      }
    };

    requestAnimationFrame(updateCounter);
  }, [targetValue, duration]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          startCounting();
        }
      },
      { threshold: 0.15 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated, startCounting]);

  return (
    <span ref={elementRef} className="inline-block font-sans font-black tracking-tight leading-none select-none">
      {displayValue}
    </span>
  );
};

export default AnimatedCounter;
