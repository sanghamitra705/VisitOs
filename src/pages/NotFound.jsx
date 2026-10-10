import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, QrCode, ShieldAlert, Home, Search, HelpCircle } from 'lucide-react';
import { PageHeader } from '../components/common/PageHeader';
import { Button } from '../components/common/Button';

export const NotFound = () => {
  return (
    <div className="min-h-[80vh] bg-[#F3F9FD] flex flex-col justify-center items-center py-16 px-4 sm:px-6 lg:px-8 select-none">
      <div className="max-w-xl w-full text-center space-y-8">
        
        {/* Visual 404 Kiosk Scanner Card */}
        <div className="relative mx-auto w-48 h-48 sm:w-56 sm:h-56 bg-white rounded-3xl border border-[#DCE6EF] shadow-xl p-6 flex flex-col items-center justify-center overflow-hidden">
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#1769D2]/10 via-[#16A6A1]/10 to-transparent pointer-events-none" />
          
          {/* QR Error Mockup */}
          <div className="relative z-10 p-3.5 bg-[#EDF6FC] rounded-2xl border border-[#DCE6EF] text-[#1769D2]">
            <QrCode className="w-16 h-16 sm:w-20 sm:h-20 text-[#0B1F38]" />
            <div className="absolute -top-1.5 -right-1.5 w-6 h-6 rounded-full bg-[#10243E] border-2 border-white flex items-center justify-center text-[#1688E8] shadow-xs">
              <ShieldAlert className="w-3.5 h-3.5" />
            </div>
          </div>

          <span className="mt-3 text-[11px] font-bold text-[#5F7185] uppercase tracking-wider">
            Error 404 • Destination Not Found
          </span>
        </div>

        {/* Content & Narrative */}
        <div className="space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#EDF6FC] text-[#1769D2] border border-[#DCE6EF]">
            <Search className="w-3.5 h-3.5" />
            Invalid Access Portal
          </span>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#10243E] font-sans tracking-tight leading-tight">
            Looks like this visit took a wrong turn.
          </h1>

          <p className="text-sm sm:text-base text-[#5F7185] max-w-md mx-auto leading-relaxed">
            The page or visitor portal you requested doesn't exist, has been moved, or required access credentials that expired.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link
            to="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-bold text-white brand-btn-gradient shadow-lg shadow-[#1769D2]/25 hover:shadow-xl hover:-translate-y-0.5 transition-all"
          >
            <span>Back to VisitOS</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            to="/faq"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-[#10243E] bg-white border border-[#DCE6EF] hover:bg-[#EDF6FC] transition-all"
          >
            <HelpCircle className="w-4 h-4 text-[#5F7185]" />
            <span>Visit Help Center</span>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default NotFound;
