import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Check, 
  Sparkles, 
  ArrowRight, 
  Building2, 
  QrCode, 
  Zap, 
  BellRing, 
  ShieldCheck, 
  Globe, 
  Shield, 
  Lock,
  Smartphone,
  CheckCircle2,
  Clock,
  Award
} from 'lucide-react';
import { GlobalSectionHeading } from '../common/GlobalSectionHeading';
import { Button } from '../common/Button';
import { PLANS } from '../../data/plans';

export const PricingSection = () => {
  const [billingCycle, setBillingCycle] = useState('monthly'); // 'monthly' | 'yearly'

  // Micro-visuals with subtle cream/beige textured container for each plan
  const planVisuals = {
    free: (
      <div className="relative w-12 h-12 rounded-xl bg-gradient-to-b from-[#FFFDF9] via-[#F7F2E7] to-[#EDE3D0] border border-[#E2D6BE] shadow-[inset_0_1px_1.5px_rgba(255,255,255,1),inset_0_-1px_2px_rgba(160,140,110,0.2),0_4px_10px_rgba(0,0,0,0.08)] flex items-center justify-center shrink-0 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-[0.08] pointer-events-none mix-blend-multiply"
          style={{
            backgroundImage: `radial-gradient(#7A6A4E 1px, transparent 1px), radial-gradient(#9C8766 1px, transparent 1px)`,
            backgroundSize: '5px 5px',
            backgroundPosition: '0 0, 2.5px 2.5px'
          }}
        />
        <div className="relative z-10 w-7 h-7 rounded-lg bg-gradient-to-tr from-[#1769D2] to-[#1688E8] flex items-center justify-center text-white shadow-xs">
          <Building2 className="w-4 h-4 drop-shadow-xs" />
        </div>
        <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full bg-[#10243E] border border-[#27B36A] flex items-center justify-center text-[#27B36A] z-20">
          <Check className="w-2.5 h-2.5 stroke-[3]" />
        </div>
      </div>
    ),
    starter: (
      <div className="relative w-12 h-12 rounded-xl bg-gradient-to-b from-[#FFFDF9] via-[#F7F2E7] to-[#EDE3D0] border border-[#E2D6BE] shadow-[inset_0_1px_1.5px_rgba(255,255,255,1),inset_0_-1px_2px_rgba(160,140,110,0.2),0_4px_10px_rgba(0,0,0,0.08)] flex items-center justify-center shrink-0 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-[0.08] pointer-events-none mix-blend-multiply"
          style={{
            backgroundImage: `radial-gradient(#7A6A4E 1px, transparent 1px), radial-gradient(#9C8766 1px, transparent 1px)`,
            backgroundSize: '5px 5px',
            backgroundPosition: '0 0, 2.5px 2.5px'
          }}
        />
        <div className="relative z-10 w-7 h-7 rounded-lg bg-gradient-to-tr from-[#1688E8] to-[#16A6A1] flex items-center justify-center text-white shadow-xs">
          <Zap className="w-4 h-4 fill-current drop-shadow-xs" />
        </div>
        <div className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-[#27B36A] text-white flex items-center justify-center z-20 shadow-xs">
          <BellRing className="w-2.5 h-2.5" />
        </div>
      </div>
    ),
    enterprise: (
      <div className="relative w-12 h-12 rounded-xl bg-gradient-to-b from-[#FFFDF9] via-[#F7F2E7] to-[#EDE3D0] border border-[#E2D6BE] shadow-[inset_0_1px_1.5px_rgba(255,255,255,1),inset_0_-1px_2px_rgba(160,140,110,0.2),0_4px_10px_rgba(0,0,0,0.08)] flex items-center justify-center shrink-0 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-[0.08] pointer-events-none mix-blend-multiply"
          style={{
            backgroundImage: `radial-gradient(#7A6A4E 1px, transparent 1px), radial-gradient(#9C8766 1px, transparent 1px)`,
            backgroundSize: '5px 5px',
            backgroundPosition: '0 0, 2.5px 2.5px'
          }}
        />
        <div className="relative z-10 w-7 h-7 rounded-lg bg-gradient-to-tr from-[#10243E] via-[#1769D2] to-[#1688E8] flex items-center justify-center text-white shadow-xs">
          <ShieldCheck className="w-4 h-4 drop-shadow-xs" />
        </div>
        <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full bg-[#10243E] border border-[#16A6A1] flex items-center justify-center text-[#16A6A1] z-20">
          <Globe className="w-2.5 h-2.5" />
        </div>
      </div>
    )
  };

  const pricingMetrics = [
    { label: 'Enterprises Onboarded', value: '150+', icon: Building2 },
    { label: 'Safe Visits Managed', value: '1M+', icon: CheckCircle2 },
    { label: 'Platform Uptime SLA', value: '99.9%', icon: Award },
    { label: 'Avg Check-In Speed', value: '< 3s', icon: Clock }
  ];

  return (
    <section 
      aria-label="VisitOS Pricing Plans"
      className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-[#FFFFFF] via-[#F1F7FD] to-[#E6F3FC] border-b border-[#DCE6EF] relative overflow-hidden"
    >
      {/* Ambient Lighting Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-tr from-[#1769D2]/10 via-[#16A6A1]/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <GlobalSectionHeading
            title="Plans Scaled to"
            gradientTitle="Your Workplace"
            subtitle="Start free with essential digital visitor check-ins, or scale to advanced geo-fencing, multi-zone security, and custom integrations as your organization grows."
            align="center"
            theme="light"
          />

          {/* Interactive Billing Cycle Toggle */}
          <div className="inline-flex items-center gap-1.5 p-1.5 rounded-2xl bg-white border border-[#DCE6EF] shadow-sm mt-6">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-4.5 py-1.5 rounded-xl text-xs sm:text-[13px] font-bold transition-all cursor-pointer ${
                billingCycle === 'monthly'
                  ? 'bg-[#1769D2] text-white shadow-xs'
                  : 'text-[#5F7185] hover:text-[#10243E]'
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-4.5 py-1.5 rounded-xl text-xs sm:text-[13px] font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                billingCycle === 'yearly'
                  ? 'bg-[#1769D2] text-white shadow-xs'
                  : 'text-[#5F7185] hover:text-[#10243E]'
              }`}
            >
              <span>Annual Billing</span>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-[#27B36A] text-white tracking-wide shadow-2xs">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* 3 Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 lg:gap-8 items-stretch pt-2">
          {PLANS.map((plan, idx) => {
            const price = billingCycle === 'yearly' ? plan.priceYearly : plan.priceMonthly;
            const isPopular = plan.isPopular;

            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className={`rounded-3xl p-6 sm:p-7.5 flex flex-col justify-between transition-all duration-300 relative ${
                  isPopular
                    ? 'bg-white border-2 border-[#1769D2] shadow-2xl md:-translate-y-3 ring-4 ring-[#1769D2]/10 z-20'
                    : 'bg-white/95 backdrop-blur-sm border border-[#DCE6EF] shadow-md hover:shadow-xl hover:border-[#1769D2]/40 z-10'
                }`}
              >
                {/* Most Popular Badge with VisitOS Brand Gradient */}
                {isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full brand-btn-gradient text-white text-[11px] font-black uppercase tracking-wider shadow-md flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Most Popular</span>
                  </div>
                )}

                <div>
                  {/* Top Metadata Row: Title, Badge, and Cream Textured Micro-Visual */}
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-2xl font-black text-[#10243E] font-sans tracking-tight">
                          {plan.name}
                        </h3>
                      </div>
                      <span className="inline-block text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-[#EDF6FC] text-[#1769D2] border border-[#DCE6EF] mt-1">
                        {plan.badge}
                      </span>
                    </div>

                    {/* Subtle Cream Textured Product Visual Container */}
                    {planVisuals[plan.id]}
                  </div>

                  {/* Plan Tagline */}
                  <p className="text-xs text-[#5F7185] min-h-[34px] leading-relaxed mb-5">
                    {plan.tagline}
                  </p>

                  {/* Price & Billing Period Box */}
                  <div className="mb-5 pb-5 border-b border-[#DCE6EF]">
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-4xl sm:text-[42px] font-black text-[#10243E] font-sans tracking-tight">
                        {price}
                      </span>
                      <span className="text-xs font-semibold text-[#5F7185]">
                        / {plan.id === 'free' ? 'free forever' : billingCycle === 'yearly' ? 'mo (billed annually)' : 'per month'}
                      </span>
                    </div>
                    <p className="text-[11px] font-bold text-[#1769D2] mt-1.5 flex items-center gap-1">
                      <span>{plan.limits.employees}</span>
                      <span>•</span>
                      <span>{plan.limits.visitors}</span>
                    </p>
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-2.5 mb-7 text-xs text-[#14263D]">
                    <p className="font-extrabold text-[10px] uppercase tracking-wider text-[#5F7185]">
                      Included Features:
                    </p>
                    {plan.features.slice(0, 6).map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2.5">
                        {feat.included ? (
                          <div className="w-4 h-4 rounded-full bg-[#EAF8F1] flex items-center justify-center shrink-0 text-[#27B36A]">
                            <Check className="w-3 h-3 stroke-[3]" />
                          </div>
                        ) : (
                          <span className="w-4 h-4 text-[#C4D6E5] shrink-0 text-center leading-none">—</span>
                        )}
                        <span className={`text-[12px] ${feat.included ? 'text-[#10243E] font-medium' : 'text-[#8EA2B4]'}`}>
                          {feat.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA Button */}
                <div>
                  <Button
                    to={`/register?plan=${plan.id}`}
                    variant={plan.buttonVariant}
                    className="w-full justify-center text-xs sm:text-sm font-bold py-3 shadow-md"
                  >
                    {plan.buttonText}
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Lower Metrics / Statistics Horizontal Strip (PART 5) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 sm:mt-14 max-w-5xl mx-auto bg-white/90 backdrop-blur-md rounded-2xl sm:rounded-full border border-[#DCE6EF] shadow-lg shadow-black/5 p-4 sm:py-4.5 sm:px-8"
        >
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-[#E5EDF4] text-center">
            {pricingMetrics.map((item, mIdx) => {
              const Icon = item.icon;
              return (
                <div key={mIdx} className={`flex flex-col items-center justify-center ${mIdx > 0 ? 'pt-3 sm:pt-0' : ''}`}>
                  <div className="flex items-center gap-1.5 text-2xl sm:text-[26px] font-black text-[#10243E] font-sans tracking-tight">
                    <Icon className="w-4.5 h-4.5 text-[#1769D2]" />
                    <span>{item.value}</span>
                  </div>
                  <span className="text-[11px] font-semibold text-[#5F7185] mt-0.5">
                    {item.label}
                  </span>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Bottom Link to Full Comparison Page */}
        <div className="mt-8 text-center">
          <Link
            to="/pricing"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-extrabold text-[#1769D2] hover:text-[#1688E8] transition-colors"
          >
            <span>View full feature comparison table & FAQs</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default PricingSection;
