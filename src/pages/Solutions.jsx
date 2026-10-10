import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Building2, 
  Cpu, 
  Layers, 
  GraduationCap, 
  Stethoscope, 
  Factory, 
  CheckCircle2, 
  AlertCircle, 
  ArrowRight, 
  ExternalLink,
  ShieldCheck,
  TrendingUp,
  Sparkles
} from 'lucide-react';
import { PageHeader } from '../components/common/PageHeader';
import { CTASection } from '../components/common/CTASection';
import { Button } from '../components/common/Button';
import { SolutionCard } from '../components/common/SolutionCard';
import { SolutionsEditorialGrid } from '../components/solutions/SolutionsEditorialGrid';
import { SOLUTIONS_DATA } from '../data/solutions';

export const Solutions = () => {
  const [selectedSolution, setSelectedSolution] = useState(SOLUTIONS_DATA[0].id);

  const activeSolution = SOLUTIONS_DATA.find((s) => s.id === selectedSolution) || SOLUTIONS_DATA[0];
  const Icon = activeSolution.icon;

  return (
    <div className="bg-[#F3F9FD] min-h-screen text-[#14263D] selection:bg-[#1769D2] selection:text-white font-sans">
      {/* 1. Page Header */}
      <PageHeader
        title="Tailored Visitor Management Workflows for Every Workplace"
        subtitle="From single corporate suites to multi-tenant business parks, hospital campuses, and industrial complexes, VisitOS adapts to your perimeter rules."
        breadcrumb={[{ label: 'Solutions' }]}
      />

      {/* 2. Solutions Curated Architectural & Environmental Grid */}
      <section className="py-16 sm:py-24 relative overflow-hidden border-b border-[#DCE6EF]">
        {/* Ambient atmosphere */}
        <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-[#1769D2]/8 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-10 w-[500px] h-[500px] bg-[#16A6A1]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-[#10243E] tracking-tight leading-[1.2]">
              Industry-Specific{' '}
              <span className="bg-gradient-to-r from-[#1769D2] via-[#16A6A1] to-[#27B36A] bg-clip-text text-transparent">
                Workplace Solutions
              </span>
            </h2>
            <p className="text-base sm:text-lg text-[#5F7185] font-medium">
              Purpose-built modules engineered for the specific compliance, security, and visitor flow demands of your industry.
            </p>
          </div>

          {/* EDITORIAL SOLUTIONS ARCHITECTURE GRID */}
          <SolutionsEditorialGrid />
        </div>
      </section>

      {/* 3. Interactive Sector Deep-Dive & Comparison */}
      <section className="py-16 sm:py-24 bg-white border-b border-[#DCE6EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <h3 className="text-2xl sm:text-3xl lg:text-[38px] font-black tracking-tight font-sans leading-[1.2] text-[#10243E]">
              Interactive Sector{' '}
              <span className="bg-gradient-to-r from-[#1769D2] via-[#16A6A1] to-[#27B36A] bg-clip-text text-transparent">
                Workflow Explorer
              </span>
            </h3>
            <p className="text-sm sm:text-base text-[#5F7185] leading-relaxed max-w-2xl mx-auto">
              Select an industry below to examine the exact challenges solved and operational benefits delivered.
            </p>
          </div>

          {/* Industry Tabs Bar */}
          <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-8">
            {SOLUTIONS_DATA.map((sol) => {
              const TabIcon = sol.icon;
              const isActive = sol.id === selectedSolution;
              return (
                <button
                  key={sol.id}
                  onClick={() => setSelectedSolution(sol.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer shadow-2xs ${
                    isActive
                      ? 'bg-[#10243E] text-white shadow-md'
                      : 'bg-[#F3F9FD] text-[#5F7185] hover:text-[#10243E] hover:bg-[#EDF6FC] border border-[#DCE6EF]'
                  }`}
                >
                  <TabIcon className="w-4 h-4" />
                  <span>{sol.title}</span>
                </button>
              );
            })}
          </div>

          {/* Active Solution Deep-Dive Box */}
          <motion.div
            key={activeSolution.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-[#F3F9FD] rounded-3xl p-8 sm:p-12 border border-[#DCE6EF] shadow-md text-left"
          >
            {/* Top Header */}
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-8 border-b border-[#DCE6EF]">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-2xl bg-[#10243E] text-white flex items-center justify-center shrink-0 shadow-xs">
                  <Icon className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="text-2xl sm:text-3xl font-black text-[#10243E] font-sans tracking-tight leading-tight">
                    {activeSolution.title}
                  </h4>
                  <p className="mt-2 text-sm text-[#5F7185] max-w-2xl leading-relaxed">
                    {activeSolution.tagline}
                  </p>
                </div>
              </div>

              <Button
                to={activeSolution.path}
                variant="primary"
                size="medium"
                icon={ArrowRight}
                className="shrink-0"
              >
                View Full Solution Page
              </Button>
            </div>

            {/* Challenges vs Solutions Columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
              {/* Challenges */}
              <div className="bg-white rounded-2xl p-6 sm:p-7 border border-[#DCE6EF] shadow-xs space-y-4">
                <div className="flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-amber-500" />
                  <h5 className="text-lg font-bold text-[#10243E] font-sans">
                    Industry Pain Points
                  </h5>
                </div>
                <div className="space-y-3">
                  {activeSolution.challenges.map((c, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#5F7185] leading-relaxed">
                      <span className="text-red-500 font-bold shrink-0 mt-0.5">✕</span>
                      <span>{c}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Solutions */}
              <div className="bg-white rounded-2xl p-6 sm:p-7 border border-[#1769D2]/30 ring-2 ring-[#1769D2]/10 shadow-xs space-y-4">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-[#1769D2]" />
                  <h5 className="text-lg font-bold text-[#10243E] font-sans">
                    VisitOS Capabilities
                  </h5>
                </div>
                <div className="space-y-3">
                  {activeSolution.solutions.map((s, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#14263D] leading-relaxed font-medium">
                      <CheckCircle2 className="w-4 h-4 text-[#27B36A] shrink-0 mt-0.5" />
                      <span>{s}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Metric Banner */}
            {activeSolution.metric && (
              <div className="mt-8 bg-gradient-to-r from-[#10243E] to-[#1769D2] rounded-2xl p-6 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                    <TrendingUp className="w-5 h-5 text-[#5EEAD4]" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider font-mono text-[#5EEAD4]">
                      Proven Workplace Impact
                    </span>
                    <h6 className="text-lg font-black tracking-tight">{activeSolution.metric}</h6>
                  </div>
                </div>

                <Link
                  to={activeSolution.path}
                  className="text-xs font-bold bg-white text-[#10243E] px-4 py-2.5 rounded-xl hover:bg-[#EDF6FC] transition-all flex items-center gap-1.5 shadow-sm"
                >
                  <span>Explore Blueprint</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* 4. Bottom CTA */}
      <CTASection />
    </div>
  );
};

export default Solutions;
