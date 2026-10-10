import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

/**
 * AnimatedHeading component inspired by BeyondResume.io
 * Renders character-by-character staggered entrance animations with subtle upward reveal.
 * Accessible for screen readers via aria-label on the semantic heading tag and aria-hidden on animated spans.
 */
export const AnimatedHeading = ({
  text,
  segments,
  as: Component = 'h2',
  className = '',
  delay = 0,
  stagger = 0.025,
  once = true,
  children
}) => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }
    return false;
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handler = (e) => setPrefersReducedMotion(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  // Compute full plain text for accessibility aria-label
  let fullAriaText = text || '';
  if (segments && Array.isArray(segments)) {
    fullAriaText = segments.map((s) => (typeof s === 'string' ? s : s.text)).join(' ');
  } else if (typeof children === 'string') {
    fullAriaText = children;
  }

  // If reduced motion is preferred, render static semantic heading
  if (prefersReducedMotion) {
    return (
      <Component className={className}>
        {segments ? (
          segments.map((seg, sIdx) => {
            const segText = typeof seg === 'string' ? seg : seg.text;
            const segClass = typeof seg === 'object' ? seg.className : '';
            return (
              <span key={sIdx} className={segClass}>
                {segText}{' '}
              </span>
            );
          })
        ) : text ? (
          text
        ) : (
          children
        )}
      </Component>
    );
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      }
    }
  };

  const letterVariants = {
    hidden: {
      opacity: 0,
      y: 16,
      filter: 'blur(3px)',
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.45,
        ease: [0.22, 1, 0.36, 1], // Smooth refined ease-out curve
      }
    }
  };

  // Render individual words and characters
  const renderLetters = (chunkText, chunkClassName = '', keyPrefix = 'char') => {
    // Split by words to preserve whitespace and natural line breaking
    const words = chunkText.split(' ');

    return (
      <span className={chunkClassName}>
        {words.map((word, wIdx) => (
          <span key={`${keyPrefix}-w-${wIdx}`} className="inline-block whitespace-nowrap">
            {word.split('').map((char, cIdx) => (
              <motion.span
                key={`${keyPrefix}-w-${wIdx}-c-${cIdx}`}
                variants={letterVariants}
                className="inline-block"
              >
                {char}
              </motion.span>
            ))}
            {wIdx < words.length - 1 && (
              <span className="inline-block">&nbsp;</span>
            )}
          </span>
        ))}
      </span>
    );
  };

  return (
    <Component className={className} aria-label={fullAriaText}>
      <motion.span
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once, margin: '-50px' }}
        className="inline-block"
        aria-hidden="true"
      >
        {segments && Array.isArray(segments) ? (
          segments.map((segment, sIdx) => {
            const segText = typeof segment === 'string' ? segment : segment.text;
            const segClass = typeof segment === 'object' ? segment.className : '';
            const isBlockBreak = typeof segment === 'object' && segment.breakAfter;

            return (
              <React.Fragment key={`seg-${sIdx}`}>
                {renderLetters(segText, segClass, `seg-${sIdx}`)}
                {isBlockBreak && <br className="hidden sm:inline" />}
                {!isBlockBreak && sIdx < segments.length - 1 && <span>&nbsp;</span>}
              </React.Fragment>
            );
          })
        ) : text ? (
          renderLetters(text, '', 'txt')
        ) : (
          children
        )}
      </motion.span>
    </Component>
  );
};

export default AnimatedHeading;
