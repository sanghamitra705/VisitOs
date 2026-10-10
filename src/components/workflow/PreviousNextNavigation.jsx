import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Layers, Sparkles } from 'lucide-react';

export const PreviousNextNavigation = ({ workflow }) => {
  return (
    <section className="py-12 bg-white border-t border-[#DCE6EF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Wrapper */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#F8FAFD] via-white to-[#F0F7FD] border border-[#DCE6EF] shadow-sm">
          
          {/* Previous Step Button */}
          {workflow.prevRoute ? (
            <Link
              to={workflow.prevRoute}
              className="flex items-center gap-3.5 group text-left cursor-pointer p-2 rounded-2xl hover:bg-white transition-all duration-200"
            >
              <div className="w-11 h-11 rounded-2xl bg-white border border-[#DCE6EF] shadow-sm text-[#1769D2] flex items-center justify-center group-hover:border-[#1769D2] group-hover:bg-[#EDF6FC] transition-all shrink-0">
                <ArrowLeft className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#5F7185] block font-mono">
                  PREVIOUS STEP
                </span>
                <span className="text-sm font-extrabold text-[#10243E] font-sans group-hover:text-[#1769D2] transition-colors">
                  {workflow.prevTitle}
                </span>
              </div>
            </Link>
          ) : (
            <div className="hidden sm:block opacity-40 text-xs font-semibold text-slate-400 font-mono">
              ★ Step 01 • Journey Start
            </div>
          )}

          {/* Central All-Workflows Hub Link */}
          <Link
            to="/how-it-works"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold text-[#1769D2] bg-[#EDF6FC] hover:bg-[#1769D2] hover:text-white border border-[#1769D2]/20 transition-all duration-300 shadow-2xs"
          >
            <Layers className="w-3.5 h-3.5" />
            <span>All 7 Workflow Steps</span>
          </Link>

          {/* Next Step Button */}
          {workflow.nextRoute ? (
            <Link
              to={workflow.nextRoute}
              className="flex items-center gap-3.5 group text-right cursor-pointer p-2 rounded-2xl hover:bg-white transition-all duration-200"
            >
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#5F7185] block font-mono">
                  NEXT STEP
                </span>
                <span className="text-sm font-extrabold text-[#10243E] font-sans group-hover:text-[#1769D2] transition-colors">
                  {workflow.nextTitle}
                </span>
              </div>
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-[#1769D2] to-[#16A6A1] text-white flex items-center justify-center shadow-md shadow-[#1769D2]/20 group-hover:shadow-lg group-hover:scale-105 transition-all shrink-0">
                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ) : (
            <Link
              to="/register"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm text-white brand-btn-gradient shadow-md hover:shadow-lg transition-all"
            >
              <span>Get Started with VisitOS</span>
              <Sparkles className="w-4 h-4" />
            </Link>
          )}

        </div>

      </div>
    </section>
  );
};

export default PreviousNextNavigation;
