import React from 'react';
import { Link } from 'react-router-dom';

export const Button = ({
  children,
  variant = 'primary', // 'primary' | 'secondary' | 'outline' | 'white' | 'dark' | 'ghost'
  size = 'md', // 'sm' | 'md' | 'lg' | 'small' | 'medium' | 'large'
  to,
  href,
  onClick,
  className = '',
  disabled = false,
  type = 'button',
  icon: Icon,
  iconPosition = 'right',
  ...props
}) => {
  // Base Pill-shaped SaaS Button Styles
  const baseStyles = 'inline-flex items-center justify-center font-bold rounded-full transition-all duration-300 cursor-pointer select-none focus:outline-hidden focus:ring-2 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed transform active:scale-95 text-center leading-none';

  // Normalize size names
  const normalizedSize = size === 'small' ? 'sm' : size === 'large' ? 'lg' : size === 'medium' ? 'md' : size;

  const sizeStyles = {
    sm: 'px-4 py-2 text-xs gap-1.5',
    md: 'px-6 py-3 text-xs sm:text-sm gap-2',
    lg: 'px-8 py-3.5 sm:py-4 text-sm sm:text-base gap-2.5',
  };

  // Button Variants with Blue-Green Gradient and Smooth White Hover Transition
  const variantStyles = {
    primary: 'text-white border border-transparent shadow-md hover:shadow-xl hover:bg-white hover:text-[#1769D2] hover:border-[#1769D2]/30 focus:ring-[#1769D2] brand-btn-gradient',
    secondary: 'bg-[#EDF6FC] hover:bg-white text-[#10243E] hover:text-[#1769D2] border border-[#DCE6EF] hover:border-[#1769D2]/40 shadow-xs hover:shadow-md focus:ring-[#1769D2]',
    outline: 'bg-white hover:bg-white text-[#10243E] hover:text-[#1769D2] border border-[#DCE6EF] hover:border-[#1769D2]/40 shadow-xs hover:shadow-md focus:ring-[#1769D2]',
    white: 'bg-white hover:bg-[#F3F9FD] text-[#10243E] hover:text-[#1769D2] border border-white/40 shadow-md hover:shadow-lg focus:ring-white',
    dark: 'bg-[#10243E] hover:bg-white text-white hover:text-[#10243E] border border-transparent hover:border-[#10243E]/30 shadow-md focus:ring-[#10243E]',
    ghost: 'bg-transparent hover:bg-[#EDF6FC] text-[#10243E] hover:text-[#1769D2] focus:ring-[#1769D2]',
    teal: 'bg-[#16A6A1] hover:bg-white text-white hover:text-[#16A6A1] border border-transparent hover:border-[#16A6A1]/30 shadow-md focus:ring-[#16A6A1]',
    security: 'bg-[#27B36A] hover:bg-white text-white hover:text-[#27B36A] border border-transparent hover:border-[#27B36A]/30 shadow-md focus:ring-[#27B36A]'
  };

  const combinedClass = `${baseStyles} ${sizeStyles[normalizedSize] || sizeStyles.md} ${variantStyles[variant] || variantStyles.primary} ${className}`;

  const iconElement = Icon ? (
    <Icon className={`${normalizedSize === 'sm' ? 'w-3.5 h-3.5' : normalizedSize === 'lg' ? 'w-5 h-5' : 'w-4 h-4'} shrink-0 transition-transform group-hover:translate-x-0.5`} />
  ) : null;

  if (to) {
    return (
      <Link to={to} className={`group ${combinedClass}`} {...props}>
        {iconPosition === 'left' && iconElement}
        <span>{children}</span>
        {iconPosition === 'right' && iconElement}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={`group ${combinedClass}`} {...props}>
        {iconPosition === 'left' && iconElement}
        <span>{children}</span>
        {iconPosition === 'right' && iconElement}
      </a>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`group ${combinedClass}`}
      {...props}
    >
      {iconPosition === 'left' && iconElement}
      <span>{children}</span>
      {iconPosition === 'right' && iconElement}
    </button>
  );
};
