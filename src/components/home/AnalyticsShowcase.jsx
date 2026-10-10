import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  Clock, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight,
  Sparkles
} from 'lucide-react';

export const AnalyticsShowcase = () => {
  const metricChips = [
    { label: 'Visitors', value: '+22%' },
    { label: 'Check-ins', value: '+31%' },
    { label: 'Traffic', value: '+58%' },
    { label: 'Activity', value: '+29%' }
  ];

  const secondaryKpis = [
    { label: 'Total Visitors', value: '1,248', sub: '+18.4% vs last week', icon: Users, color: '#1769D2' },
    { label: 'Peak Hour', value: '10:00 AM', sub: '94 check-ins/hr', icon: Clock, color: '#16A6A1' },
    { label: 'Active Visitors', value: '42', sub: 'Currently on premises', icon: TrendingUp, color: '#27B36A' },
    { label: 'Compliance', value: '98.6%', sub: 'SOC 2 & NDA Verified', icon: ShieldCheck, color: '#1769D2' }
  ];

  const bars = [
    { height: '35%', isPeak: false },
    { height: '48%', isPeak: false },
    { height: '62%', isPeak: false },
    { height: '94%', isPeak: true, label: "Week's Boost" },
    { height: '52%', isPeak: false },
    { height: '70%', isPeak: false },
    { height: '42%', isPeak: false }
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#FFFFFF] relative overflow-hidden border-b border-[#DCE6EF]">
      {/* Background Soft Organic Curves */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#16A6A1]/4 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#1769D2]/4 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EDF6FC] border border-[#1769D2]/20 mb-3.5">
            <span className="w-2 h-2 rounded-full bg-[#27B36A]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#1769D2]">
              DATA-DRIVEN INSIGHTS
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-[#10243E] tracking-tight leading-tight font-sans">
            See Your Workplace. Understand Every Visit.
          </h2>
          <p className="mt-3.5 text-base text-[#5F7185] max-w-2xl mx-auto leading-relaxed">
            Turn visitor activity into actionable workplace insights with real-time analytics, traffic patterns and compliance visibility.
          </p>
        </div>

        {/* Main Grid: Reference 3 Analytics Card (Left/Center) + Secondary Telemetry KPIs (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Main Visual: Reference 3 Analytics Card Composition */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex justify-center"
          >
            <div className="w-full max-w-md bg-white rounded-[32px] p-6 sm:p-8 border border-[#DCE6EF] shadow-xl hover:shadow-2xl transition-all duration-300">
              
              {/* TOP: Metric Chips (Matching Reference 3) */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-8">
                {metricChips.map((chip, idx) => (
                  <div 
                    key={idx}
                    className="bg-[#F8FAFC] border border-[#E8EEF5] px-2.5 py-2 rounded-xl text-center flex items-center justify-center gap-1.5"
                  >
                    <span className="text-[11px] font-medium text-[#5F7185]">{chip.label}</span>
                    <span className="text-[10px] text-[#DCE6EF]">|</span>
                    <span className="text-[11px] font-bold text-[#27B36A]">{chip.value}</span>
                  </div>
                ))}
              </div>

              {/* MIDDLE: Vertical Bar Chart with Highlighted Gradient Bar & Reference Line */}
              <div className="relative h-64 w-full bg-[#F3F9FD]/50 rounded-2xl p-4 border border-[#E8EEF5] flex flex-col justify-end mb-6 overflow-hidden">
                
                {/* Horizontal Dashed Reference Line */}
                <div className="absolute top-16 left-0 right-0 z-10 flex flex-col items-center">
                  <span className="text-[9px] font-bold text-[#5F7185] tracking-wider mb-1 bg-white/90 px-2 py-0.5 rounded-full border border-[#DCE6EF] shadow-2xs">
                    Week's Boost
                  </span>
                  <div className="w-full border-b border-dashed border-[#16A6A1]/40" />
                </div>

                {/* Bars Container */}
                <div className="flex items-end justify-between gap-3 h-full px-2 z-0">
                  {bars.map((bar, idx) => (
                    <div key={idx} className="flex-1 flex flex-col items-center justify-end h-full">
                      {bar.isPeak ? (
                        <div className="w-full h-full flex flex-col justify-end items-center relative">
                          {/* Glowing circular node at top of peak bar */}
                          <div className="w-3.5 h-3.5 rounded-full bg-white shadow-md border-2 border-[#27B36A] z-20 mb-[-6px] animate-pulse" />
                          <div 
                            style={{ height: bar.height }}
                            className="w-full rounded-t-xl bg-gradient-to-t from-[#1769D2] via-[#16A6A1] to-[#27B36A] shadow-lg shadow-[#27B36A]/20 transition-all duration-500"
                          />
                        </div>
                      ) : (
                        <div 
                          style={{ height: bar.height }}
                          className="w-full rounded-t-lg bg-[#16A6A1]/15 hover:bg-[#16A6A1]/25 transition-all duration-300"
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* BOTTOM: Typography and Description (Matching Reference 3) */}
              <div className="text-left pt-2">
                <h3 className="text-xl sm:text-2xl font-bold text-[#10243E] font-sans">
                  Advanced Analytics
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-[#5F7185] leading-relaxed">
                  Understand user patterns to improve flow, retention, and experience clarity across every facility.
                </p>
              </div>

            </div>
          </motion.div>

          {/* Right Column: Secondary Telemetry Metrics & Action Panel */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5 space-y-4 text-left"
          >
            <div className="mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#1769D2] block mb-1">
                ENTERPRISE TELEMETRY
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#10243E] tracking-tight font-sans">
                Real-Time Workplace Visibility
              </h3>
              <p className="text-sm text-[#5F7185] mt-2 leading-relaxed">
                Connect your security turnstiles, parking gates, and reception kiosks into a unified real-time compliance feed.
              </p>
            </div>

            {/* 4 Secondary KPI Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {secondaryKpis.map((kpi, idx) => {
                const IconComp = kpi.icon;
                return (
                  <div 
                    key={idx}
                    className="p-4 rounded-2xl bg-[#F8FAFC] border border-[#DCE6EF] hover:border-[#1769D2]/30 hover:bg-white transition-all shadow-2xs"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[11px] font-bold text-[#5F7185] uppercase tracking-wider">
                        {kpi.label}
                      </span>
                      <div className="w-6 h-6 rounded-lg bg-white shadow-2xs flex items-center justify-center" style={{ color: kpi.color }}>
                        <IconComp className="w-3.5 h-3.5" />
                      </div>
                    </div>
                    <div className="text-2xl font-black text-[#10243E] font-sans">
                      {kpi.value}
                    </div>
                    <p className="text-[11px] text-[#27B36A] font-semibold mt-0.5">
                      {kpi.sub}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Link
                to="/features/analytics-dashboard"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold text-white rounded-full shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 brand-btn-gradient"
              >
                <span>Explore Analytics & Reporting</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
