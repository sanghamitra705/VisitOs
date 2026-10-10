import React from 'react';

// Accurate, crisp SVG icons for the persistent floating social bar
const EmailIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const InstagramIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const FacebookIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const LinkedInIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.63 1.63 0 1 0 0-3.26 1.63 1.63 0 0 0 0 3.26m1.4 9.74v-8.37H5.06v8.37h2.8z" />
  </svg>
);

const XIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export const GlobalAppBar = () => {
  const socialItems = [
    {
      name: 'Email',
      label: 'Send Email to VisitOS Support',
      href: 'mailto:contact@visitos.cloud',
      icon: EmailIcon,
      isExternal: false
    },
    {
      name: 'Instagram',
      label: 'Visit VisitOS on Instagram',
      href: 'https://instagram.com',
      icon: InstagramIcon,
      isExternal: true
    },
    {
      name: 'Facebook',
      label: 'Visit VisitOS on Facebook',
      href: 'https://facebook.com',
      icon: FacebookIcon,
      isExternal: true
    },
    {
      name: 'LinkedIn',
      label: 'Visit VisitOS on LinkedIn',
      href: 'https://linkedin.com',
      icon: LinkedInIcon,
      isExternal: true
    },
    {
      name: 'X',
      label: 'Visit VisitOS on X',
      href: 'https://x.com',
      icon: XIcon,
      isExternal: true
    }
  ];

  return (
    <aside 
      aria-label="VisitOS Social and Contact Links" 
      className="fixed z-[1000] select-none pointer-events-auto"
      style={{
        bottom: 'max(12px, env(safe-area-inset-bottom, 12px))',
        right: 'max(12px, env(safe-area-inset-right, 12px))'
      }}
    >
      {/* 
        Small, Compact Persistent Floating Social Bar
      */}
      <div 
        className="h-[30px] sm:h-[34px] px-2.5 sm:px-3 rounded-full flex items-center gap-1 sm:gap-1.5 border border-white/20 backdrop-blur-xs transition-all duration-200"
        style={{
          background: 'linear-gradient(100deg, #1039C5 0%, #0632B5 100%)',
          boxShadow: '0 4px 12px -2px rgba(16, 57, 197, 0.35)'
        }}
      >
        {socialItems.map((item, idx) => {
          const Icon = item.icon;
          return (
            <React.Fragment key={item.name}>
              <a
                href={item.href}
                {...(item.isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                aria-label={item.label}
                className="w-5 h-5 sm:w-5.5 sm:h-5.5 rounded-full flex items-center justify-center text-white/90 hover:text-white hover:bg-white/20 transition-all duration-200 cursor-pointer focus:outline-hidden focus:ring-1 focus:ring-white/80 transform hover:scale-110 active:scale-95"
              >
                <Icon className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
              </a>
              {idx < socialItems.length - 1 && (
                <div 
                  className="w-[1px] h-2.5 sm:h-3 bg-white/25 shrink-0" 
                  aria-hidden="true"
                />
              )}
            </React.Fragment>
          );
        })}
      </div>
    </aside>
  );
};

export default GlobalAppBar;
