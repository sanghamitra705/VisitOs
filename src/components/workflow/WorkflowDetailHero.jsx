import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, CheckCircle2, Shield } from 'lucide-react';
import { GlobalSectionHeading } from '../common/GlobalSectionHeading';

export const WorkflowDetailHero = ({ workflow }) => {
  const Icon = workflow.icon;

  return (
    <section className="relative pt-28 pb-18 sm:pt-32 sm:pb-22 lg:pt-36 lg:pb-24 bg-gradient-to-b from-[#0B1F38] via-[#10243E] to-[#081A2F] text-white overflow-hidden">
      {/* Background Lighting Elements */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[350px] bg-gradient-to-br from-[#1769D2]/20 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[500px] h-[400px] bg-gradient-to-tl from-[#16A6A1]/15 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Navigation Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-slate-400 mb-8 font-medium">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <span>/</span>
          <Link to="/how-it-works" className="hover:text-white transition-colors">How It Works</Link>
          <span>/</span>
          <span className="text-[#16A6A1] font-bold">Step {workflow.step} • {workflow.title}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Narrative */}
          <div className="lg:col-span-7 text-left space-y-6">
            <GlobalSectionHeading
              eyebrow={workflow.heroEyebrow}
              eyebrowIcon={Sparkles}
              title={workflow.heroHeadline}
              subtitle={workflow.heroSubheadline}
              theme="dark"
            />

            {/* Quick Metrics & Highlights */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/15 flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-[#1769D2] flex items-center justify-center text-white font-bold text-sm">
                  {workflow.step}
                </div>
                <div>
                  <div className="text-xs font-bold text-white">{workflow.metric}</div>
                  <div className="text-[11px] text-slate-300">{workflow.metricLabel}</div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/15 flex items-center gap-2 text-xs font-semibold text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-[#27B36A] shrink-0" />
                <span>Enterprise SOC 2 & GDPR Ready</span>
              </div>
            </div>

            {/* Action CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                to={workflow.nextRoute || '/register'}
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-bold text-sm text-white brand-btn-gradient shadow-lg shadow-[#1769D2]/25 hover:shadow-xl hover:scale-102 transition-all cursor-pointer"
              >
                <span>{workflow.ctaText}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to="/how-it-works"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm text-slate-200 bg-white/10 hover:bg-white/20 border border-white/20 transition-all cursor-pointer"
              >
                <span>View 7-Step Full Journey</span>
              </Link>
            </div>
          </div>

          {/* Right Product Showcase Hero Visual */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
              className="relative w-full max-w-md p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-white/15 to-white/5 backdrop-blur-xl border border-white/20 shadow-2xl overflow-hidden"
            >
              {/* Corner Ambient Glow */}
              <div 
                className="absolute top-0 right-0 w-48 h-48 rounded-full blur-2xl pointer-events-none opacity-40"
                style={{ backgroundColor: workflow.accentColor }}
              />

              {/* Step Card Visual Hero Header */}
              <div className="flex items-center justify-between pb-6 border-b border-white/15">
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${workflow.gradient} flex items-center justify-center text-white shadow-md`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#16A6A1] block font-mono">
                      STEP {workflow.step} OF 07
                    </span>
                    <h3 className="text-base font-extrabold text-white font-sans">
                      {workflow.title}
                    </h3>
                  </div>
                </div>

                <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white/15 text-white/90 border border-white/20">
                  {workflow.role}
                </span>
              </div>

              {/* Workflow Core Description */}
              <div className="py-6 space-y-4">
                <p className="text-sm text-slate-200 leading-relaxed font-medium">
                  {workflow.shortDesc}
                </p>

                <div className="p-4 rounded-2xl bg-black/25 border border-white/10 space-y-2">
                  <div className="flex items-center justify-between text-xs font-bold text-white">
                    <span>Workflow Automation Status</span>
                    <span className="text-[#27B36A] flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-[#27B36A] animate-pulse" /> Active
                    </span>
                  </div>
                  <div className="w-full bg-white/15 h-1.5 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-[#1769D2] via-[#16A6A1] to-[#27B36A] rounded-full"
                      style={{ width: `${(workflow.stepNumber / 7) * 100}%` }}
                    />
                  </div>
                  <div className="flex items-center justify-between text-[10px] text-slate-400 font-mono pt-1">
                    <span>Stage {workflow.stepNumber} of 7</span>
                    <span>{Math.round((workflow.stepNumber / 7) * 100)}% Journey Complete</span>
                  </div>
                </div>
              </div>

            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default WorkflowDetailHero;
