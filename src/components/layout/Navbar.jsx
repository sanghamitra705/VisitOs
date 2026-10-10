import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  ArrowRight, 
  LogIn, 
  ChevronDown, 
  ChevronRight,
  Sparkles,
  Building2
} from 'lucide-react';
import { Logo } from '../common/Logo';
import { FEATURES_DATA } from '../../data/features';
import { SOLUTIONS_DATA } from '../../data/solutions';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  
  // Mobile accordion state
  const [mobileFeaturesOpen, setMobileFeaturesOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);

  const location = useLocation();
  const navRef = useRef(null);
  const featuresTimerRef = useRef(null);
  const solutionsTimerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setIsOpen(false);
    setFeaturesOpen(false);
    setSolutionsOpen(false);
    setMobileFeaturesOpen(false);
    setMobileSolutionsOpen(false);
  }, [location.pathname]);

  // Handle click outside & escape key
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setFeaturesOpen(false);
        setSolutionsOpen(false);
      }
    };
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setFeaturesOpen(false);
        setSolutionsOpen(false);
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
      if (featuresTimerRef.current) clearTimeout(featuresTimerRef.current);
      if (solutionsTimerRef.current) clearTimeout(solutionsTimerRef.current);
    };
  }, []);

  // Hover grace timer handlers
  const handleFeaturesEnter = () => {
    if (featuresTimerRef.current) clearTimeout(featuresTimerRef.current);
    if (solutionsTimerRef.current) clearTimeout(solutionsTimerRef.current);
    setSolutionsOpen(false);
    setFeaturesOpen(true);
  };

  const handleFeaturesLeave = () => {
    featuresTimerRef.current = setTimeout(() => {
      setFeaturesOpen(false);
    }, 250);
  };

  const handleSolutionsEnter = () => {
    if (solutionsTimerRef.current) clearTimeout(solutionsTimerRef.current);
    if (featuresTimerRef.current) clearTimeout(featuresTimerRef.current);
    setFeaturesOpen(false);
    setSolutionsOpen(true);
  };

  const handleSolutionsLeave = () => {
    solutionsTimerRef.current = setTimeout(() => {
      setSolutionsOpen(false);
    }, 250);
  };

  const toggleFeaturesClick = (e) => {
    e.stopPropagation();
    if (featuresTimerRef.current) clearTimeout(featuresTimerRef.current);
    setSolutionsOpen(false);
    setFeaturesOpen((prev) => !prev);
  };

  const toggleSolutionsClick = (e) => {
    e.stopPropagation();
    if (solutionsTimerRef.current) clearTimeout(solutionsTimerRef.current);
    setFeaturesOpen(false);
    setSolutionsOpen((prev) => !prev);
  };

  const isActive = (path) => {
    return location.pathname === path || location.pathname.startsWith(`${path}/`);
  };

  const isFeaturesActive = location.pathname.startsWith('/features');
  const isSolutionsActive = location.pathname.startsWith('/solutions');

  return (
    <header className="sticky top-2 sm:top-3 z-50 w-full px-2 sm:px-4 lg:px-6 transition-all duration-300" ref={navRef}>
      {/* Expanded, premium pill-shaped container spanning ~96% of desktop viewport */}
      <div 
        className={`w-[96%] max-w-[1560px] mx-auto rounded-full transition-all duration-300 box-border ${
          scrolled 
            ? 'shadow-2xl shadow-[#0B1F38]/25 scale-[0.995]' 
            : 'shadow-lg shadow-[#1769D2]/20'
        }`}
        style={{
          background: 'linear-gradient(110deg, #1769D2 0%, #1688E8 42%, #16A6A1 72%, #1AAA94 100%)',
          border: '1px solid rgba(255, 255, 255, 0.22)'
        }}
      >
        {/* Slim, elegant 60-66px height flex container */}
        <div className="h-[54px] sm:h-[60px] lg:h-[64px] xl:h-[66px] px-4 sm:px-5 lg:px-7 flex items-center justify-between box-border">
          {/* 1. Left: Official Logo */}
          <div className="flex items-center shrink-0">
            <Logo size="default" variant="light" />
          </div>

          {/* 2. Main Navigation Links: About | Features ▼ | Solutions ▼ | Pricing | Contact */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5" aria-label="Main Navigation">
            {/* About */}
            <Link
              to="/about"
              className={`px-3.5 py-2 text-xs xl:text-[14px] font-semibold rounded-full transition-all duration-200 relative ${
                isActive('/about')
                  ? 'text-white font-bold bg-white/20 shadow-xs'
                  : 'text-white/95 hover:text-white hover:bg-white/10'
              }`}
            >
              <span>About</span>
              {isActive('/about') && (
                <span className="absolute bottom-1 left-3.5 right-3.5 h-[2px] bg-white rounded-full" />
              )}
            </Link>

            {/* Features Dropdown Menu (8 Pages) */}
            <div 
              className="relative"
              onMouseEnter={handleFeaturesEnter}
              onMouseLeave={handleFeaturesLeave}
            >
              <button
                type="button"
                onClick={toggleFeaturesClick}
                className={`px-3.5 py-2 text-xs xl:text-[14px] font-semibold rounded-full transition-all duration-200 flex items-center gap-1 cursor-pointer select-none relative ${
                  isFeaturesActive || featuresOpen
                    ? 'text-white font-bold bg-white/20 shadow-xs'
                    : 'text-white/95 hover:text-white hover:bg-white/10'
                }`}
                aria-expanded={featuresOpen}
                aria-haspopup="true"
              >
                <span>Features</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${featuresOpen ? 'rotate-180 text-white' : 'text-white/80'}`} />
                {isFeaturesActive && (
                  <span className="absolute bottom-1 left-3.5 right-3.5 h-[2px] bg-white rounded-full" />
                )}
              </button>

              {/* 2-Column Features Dropdown Panel with Hover Bridge */}
              {featuresOpen && (
                <div 
                  className="absolute left-1/2 -translate-x-1/2 top-full pt-3 z-50"
                  onMouseEnter={handleFeaturesEnter}
                  onMouseLeave={handleFeaturesLeave}
                >
                  <div className="w-[600px] max-w-[calc(100vw-32px)] bg-white rounded-3xl shadow-2xl border border-[#DCE6EF] p-4 text-left text-[#14263D] animate-fadeIn">
                    <div className="flex items-center justify-between pb-3 mb-2 border-b border-[#DCE6EF] px-2">
                      <div className="flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-[#1769D2]" />
                        <span className="text-xs font-bold uppercase tracking-wider text-[#10243E]">
                          Platform Modules (8 Pages)
                        </span>
                      </div>
                      <Link 
                        to="/features" 
                        onClick={() => setFeaturesOpen(false)}
                        className="text-xs font-semibold text-[#1769D2] hover:underline"
                      >
                        Features Hub →
                      </Link>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      {FEATURES_DATA.map((feat) => {
                        const FeatIcon = feat.icon;
                        const active = location.pathname === feat.path;
                        return (
                          <Link
                            key={feat.id}
                            to={feat.path}
                            onClick={() => setFeaturesOpen(false)}
                            className={`p-2.5 rounded-2xl transition-all flex items-start gap-3 group ${
                              active 
                                ? 'bg-[#EDF6FC] border border-[#1769D2]/30' 
                                : 'hover:bg-[#F3F9FD] border border-transparent'
                            }`}
                          >
                            <div className="w-8 h-8 rounded-xl bg-[#EDF6FC] text-[#1769D2] flex items-center justify-center shrink-0 group-hover:bg-[#1769D2] group-hover:text-white transition-colors mt-0.5">
                              <FeatIcon className="w-4 h-4" />
                            </div>
                            <div className="space-y-0.5 min-w-0">
                              <h4 className="text-xs font-bold text-[#10243E] group-hover:text-[#1769D2] transition-colors truncate">
                                {feat.title}
                              </h4>
                              <p className="text-[11px] text-[#5F7185] line-clamp-1 leading-snug">
                                {feat.shortDesc}
                              </p>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Solutions Dropdown Menu (6 Sectors) */}
            <div 
              className="relative"
              onMouseEnter={handleSolutionsEnter}
              onMouseLeave={handleSolutionsLeave}
            >
              <button
                type="button"
                onClick={toggleSolutionsClick}
                className={`px-3.5 py-2 text-xs xl:text-[14px] font-semibold rounded-full transition-all duration-200 flex items-center gap-1 cursor-pointer select-none relative ${
                  isSolutionsActive || solutionsOpen
                    ? 'text-white font-bold bg-white/20 shadow-xs'
                    : 'text-white/95 hover:text-white hover:bg-white/10'
                }`}
                aria-expanded={solutionsOpen}
                aria-haspopup="true"
              >
                <span>Solutions</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${solutionsOpen ? 'rotate-180 text-white' : 'text-white/80'}`} />
                {isSolutionsActive && (
                  <span className="absolute bottom-1 left-3.5 right-3.5 h-[2px] bg-white rounded-full" />
                )}
              </button>

              {/* 2-Column Solutions Dropdown Panel with Hover Bridge */}
              {solutionsOpen && (
                <div 
                  className="absolute left-1/2 -translate-x-1/2 top-full pt-3 z-50"
                  onMouseEnter={handleSolutionsEnter}
                  onMouseLeave={handleSolutionsLeave}
                >
                  <div className="w-[560px] max-w-[calc(100vw-32px)] bg-white rounded-3xl shadow-2xl border border-[#DCE6EF] p-4 text-left text-[#14263D] animate-fadeIn">
                    <div className="flex items-center justify-between pb-3 mb-2 border-b border-[#DCE6EF] px-2">
                      <div className="flex items-center gap-2">
                        <Building2 className="w-4 h-4 text-[#16A6A1]" />
                        <span className="text-xs font-bold uppercase tracking-wider text-[#10243E]">
                          Industry Sectors (6 Verticals)
                        </span>
                      </div>
                      <Link 
                        to="/solutions" 
                        onClick={() => setSolutionsOpen(false)}
                        className="text-xs font-semibold text-[#16A6A1] hover:underline"
                      >
                        Solutions Hub →
                      </Link>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      {SOLUTIONS_DATA.map((sol) => {
                        const SolIcon = sol.icon;
                        const active = location.pathname === sol.path;
                        return (
                          <Link
                            key={sol.id}
                            to={sol.path}
                            onClick={() => setSolutionsOpen(false)}
                            className={`p-2.5 rounded-2xl transition-all flex items-start gap-3 group ${
                              active 
                                ? 'bg-[#EDF6FC] border border-[#16A6A1]/30' 
                                : 'hover:bg-[#F3F9FD] border border-transparent'
                            }`}
                          >
                            <div className="w-8 h-8 rounded-xl bg-[#EDF6FC] text-[#16A6A1] flex items-center justify-center shrink-0 group-hover:bg-[#16A6A1] group-hover:text-white transition-colors mt-0.5">
                              <SolIcon className="w-4 h-4" />
                            </div>
                            <div className="space-y-0.5 min-w-0">
                              <h4 className="text-xs font-bold text-[#10243E] group-hover:text-[#16A6A1] transition-colors truncate">
                                {sol.title}
                              </h4>
                              <p className="text-[11px] text-[#5F7185] line-clamp-1 leading-snug">
                                {sol.tagline}
                              </p>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Pricing */}
            <Link
              to="/pricing"
              className={`px-3 py-1.5 text-xs xl:text-[13.5px] font-semibold rounded-full transition-all duration-200 relative ${
                isActive('/pricing')
                  ? 'text-white font-bold bg-white/20 shadow-xs'
                  : 'text-white/95 hover:text-white hover:bg-white/10'
              }`}
            >
              <span>Pricing</span>
              {isActive('/pricing') && (
                <span className="absolute bottom-0.5 left-3.5 right-3.5 h-[2px] bg-white rounded-full" />
              )}
            </Link>

            {/* Contact */}
            <Link
              to="/contact"
              className={`px-3 py-1.5 text-xs xl:text-[13.5px] font-semibold rounded-full transition-all duration-200 relative ${
                isActive('/contact')
                  ? 'text-white font-bold bg-white/20 shadow-xs'
                  : 'text-white/95 hover:text-white hover:bg-white/10'
              }`}
            >
              <span>Contact</span>
              {isActive('/contact') && (
                <span className="absolute bottom-0.5 left-3.5 right-3.5 h-[2px] bg-white rounded-full" />
              )}
            </Link>
          </nav>

          {/* 3. Desktop Right CTAs: Login | Get Started */}
          <div className="hidden lg:flex items-center gap-2 shrink-0">
            {/* Login Button */}
            <Link
              to="/login"
              className="inline-flex items-center justify-center gap-1 px-3.5 py-1.5 text-xs xl:text-[13px] font-bold text-white bg-white/15 hover:bg-white hover:text-[#1AAA94] rounded-full border border-white/25 transition-all duration-200"
            >
              <LogIn className="w-3.5 h-3.5 text-white/90" />
              <span>Login</span>
            </Link>

            {/* Get Started Button */}
            <Link
              to="/register"
              className="inline-flex items-center justify-center gap-1 px-4.5 py-1.5 text-xs xl:text-[13px] font-bold text-[#10243E] bg-white hover:bg-[#EDF6FC] hover:text-[#1769D2] rounded-full shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Get Started</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#1AAA94]" />
            </Link>
          </div>

          {/* 4. Mobile Right Controls: Fast CTA + Hamburger Button */}
          <div className="flex lg:hidden items-center gap-1.5">
            <Link
              to="/register"
              className="px-3 py-1 text-xs font-bold text-[#10243E] bg-white rounded-full shadow-xs hover:bg-[#EDF6FC]"
            >
              Get Started
            </Link>
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="min-w-[36px] min-h-[36px] flex items-center justify-center rounded-full text-white hover:bg-white/15 focus:outline-hidden transition-colors cursor-pointer"
              aria-label="Toggle Navigation Menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-4.5 h-4.5" /> : <Menu className="w-4.5 h-4.5" />}
            </button>
          </div>
        </div>

        {/* Mobile Curved Navigation Drawer with Full Accordions */}
        {isOpen && (
          <div 
            className="lg:hidden px-4 pt-2 pb-5 border-t border-white/20 space-y-2 animate-fadeIn max-h-[82vh] overflow-y-auto rounded-b-3xl"
            style={{ 
              background: 'linear-gradient(110deg, #1769D2 0%, #1688E8 42%, #16A6A1 72%, #1AAA94 100%)' 
            }}
          >
            {/* About */}
            <Link
              to="/about"
              className={`flex items-center justify-between px-4 py-3 rounded-2xl text-sm font-medium transition-all ${
                isActive('/about') ? 'bg-white/20 text-white font-bold' : 'text-white/95 hover:bg-white/10'
              }`}
            >
              <span>About Us</span>
              <ChevronRight className="w-4 h-4 text-white/80" />
            </Link>

            {/* Mobile Features Accordion */}
            <div className="rounded-2xl overflow-hidden bg-black/10 border border-white/20">
              <button
                type="button"
                onClick={() => setMobileFeaturesOpen(!mobileFeaturesOpen)}
                className="w-full min-h-[44px] flex items-center justify-between px-4 py-3 text-sm font-bold text-white text-left cursor-pointer"
                aria-expanded={mobileFeaturesOpen}
              >
                <span>Features</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileFeaturesOpen ? 'rotate-180 text-white' : ''}`} />
              </button>
              {mobileFeaturesOpen && (
                <div className="px-3 pb-3 pt-1 space-y-1.5 bg-black/15">
                  <Link
                    to="/features"
                    className="flex items-center px-3 py-2 rounded-xl text-xs font-bold text-white bg-white/15"
                  >
                    ✦ All Features Overview
                  </Link>
                  <div className="border-t border-white/15 my-1" />
                  {FEATURES_DATA.map((feat) => (
                    <Link
                      key={feat.id}
                      to={feat.path}
                      className="flex items-center px-3 py-2 rounded-xl text-xs text-white/90 hover:text-white hover:bg-white/10 leading-snug"
                    >
                      • {feat.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Solutions Accordion */}
            <div className="rounded-2xl overflow-hidden bg-black/10 border border-white/20">
              <button
                type="button"
                onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
                className="w-full min-h-[44px] flex items-center justify-between px-4 py-3 text-sm font-bold text-white text-left cursor-pointer"
                aria-expanded={mobileSolutionsOpen}
              >
                <span>Solutions</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileSolutionsOpen ? 'rotate-180 text-white' : ''}`} />
              </button>
              {mobileSolutionsOpen && (
                <div className="px-3 pb-3 pt-1 space-y-1.5 bg-black/15">
                  <Link
                    to="/solutions"
                    className="flex items-center px-3 py-2 rounded-xl text-xs font-bold text-white bg-white/15"
                  >
                    ✦ All Solutions Overview
                  </Link>
                  <div className="border-t border-white/15 my-1" />
                  {SOLUTIONS_DATA.map((sol) => (
                    <Link
                      key={sol.id}
                      to={sol.path}
                      className="flex items-center px-3 py-2 rounded-xl text-xs text-white/90 hover:text-white hover:bg-white/10 leading-snug"
                    >
                      • {sol.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Pricing */}
            <Link
              to="/pricing"
              className={`flex items-center justify-between px-4 py-3 rounded-2xl text-sm font-medium transition-all ${
                isActive('/pricing') ? 'bg-white/20 text-white font-bold' : 'text-white/95 hover:bg-white/10'
              }`}
            >
              <span>Pricing Plans</span>
              <ChevronRight className="w-4 h-4 text-white/80" />
            </Link>

            {/* Contact */}
            <Link
              to="/contact"
              className={`flex items-center justify-between px-4 py-3 rounded-2xl text-sm font-medium transition-all ${
                isActive('/contact') ? 'bg-white/20 text-white font-bold' : 'text-white/95 hover:bg-white/10'
              }`}
            >
              <span>Contact Us</span>
              <ChevronRight className="w-4 h-4 text-white/80" />
            </Link>

            {/* Bottom Login & Get Started Buttons */}
            <div className="pt-3 mt-2 border-t border-white/20 grid grid-cols-2 gap-2">
              <Link
                to="/login"
                className="flex items-center justify-center gap-1.5 px-3 py-2.5 text-xs font-bold text-white bg-white/15 hover:bg-white hover:text-[#1AAA94] rounded-2xl transition-all border border-white/25"
              >
                <LogIn className="w-4 h-4" />
                <span>Login</span>
              </Link>
              <Link
                to="/register"
                className="flex items-center justify-center gap-1.5 px-3 py-2.5 text-xs font-bold text-[#10243E] bg-white hover:bg-[#EDF6FC] rounded-2xl shadow-xs transition-colors"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4 text-[#1AAA94]" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
