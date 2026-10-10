import React, { useState } from 'react';
import { 
  Check, 
  Sparkles, 
  Info,
  ChevronDown,
  Building2,
  Zap,
  ShieldCheck,
  Globe,
  BellRing,
  X
} from 'lucide-react';
import { PageHeader } from '../components/common/PageHeader';
import { CTASection } from '../components/common/CTASection';
import { Button } from '../components/common/Button';
import { GlobalSectionHeading } from '../components/common/GlobalSectionHeading';
import { PLANS, COMPARISON_CATEGORIES } from '../data/plans';
import { FAQ_DATA } from '../data/faq';

export const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState('monthly'); // 'monthly' | 'yearly'
  const [openFaq, setOpenFaq] = useState(0);

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

  const pricingFaqs = FAQ_DATA.filter((f) => f.category === 'Pricing' || f.category === 'Account Management');

  return (
    <div className="bg-[#F3F9FD] min-h-screen">
      <PageHeader
        badge="Transparent Pricing"
        title="Simple, Scalable Plans for Every Organization"
        subtitle="Start free with essential digital visitor check-ins, or scale to advanced geo-fencing, multi-zone security, and custom integrations."
        breadcrumb={[{ label: 'Pricing' }]}
      >
        {/* Billing Cycle Switcher */}
        <div className="flex items-center justify-center lg:justify-start gap-3 mt-4">
          <div className="bg-white p-1 rounded-2xl border border-[#DCE6EF] flex items-center gap-1 shadow-xs">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-4 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                billingCycle === 'monthly'
                  ? 'bg-[#1769D2] text-white shadow-xs'
                  : 'text-[#5F7185] hover:text-[#10243E]'
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-4 py-1.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
                billingCycle === 'yearly'
                  ? 'bg-[#1769D2] text-white shadow-xs'
                  : 'text-[#5F7185] hover:text-[#10243E]'
              }`}
            >
              <span>Annual Billing</span>
              <span className="px-1.5 py-0.5 rounded text-[10px] bg-[#27B36A] text-white font-bold">
                Save 20%
              </span>
            </button>
          </div>
        </div>
      </PageHeader>

      {/* Pricing Disclaimer Alert */}
      <section className="bg-[#EDF6FC] border-b border-[#DCE6EF] py-3 text-center px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 text-xs text-[#5F7185]">
          <Info className="w-4 h-4 text-[#1769D2] shrink-0" />
          <span>
            <strong>Commercial Pricing Note:</strong> Standard tier rates are shown below. Enterprise and multi-location custom contracts are tailored upon request.
          </span>
        </div>
      </section>

      {/* Pricing Cards Grid */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {PLANS.map((plan) => {
              const price = billingCycle === 'yearly' ? plan.priceYearly : plan.priceMonthly;
              return (
                <div
                  key={plan.id}
                  className={`br-card-interactive rounded-3xl p-8 flex flex-col justify-between transition-all ${
                    plan.isPopular
                      ? 'bg-white border-2 border-[#1769D2] shadow-xl relative scale-100 md:-translate-y-2'
                      : 'bg-white border border-[#DCE6EF] shadow-xs'
                  }`}
                >
                  {plan.isPopular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-0.5 rounded-full bg-[#1769D2] text-white text-[11px] font-bold uppercase tracking-wider shadow-sm flex items-center gap-1 z-20">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Recommended Choice</span>
                    </div>
                  )}

                  <div className="relative z-10">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-2xl font-bold text-[#10243E] font-sans">
                          {plan.name}
                        </h3>
                        <span className="inline-block text-xs font-semibold px-2.5 py-1 rounded-full bg-[#EDF6FC] text-[#5F7185] mt-1">
                          {plan.badge}
                        </span>
                      </div>
                      {planVisuals[plan.id]}
                    </div>

                    <p className="text-xs text-[#5F7185] mb-6 min-h-[36px]">
                      {plan.tagline}
                    </p>

                    {/* Price */}
                    <div className="mb-6 pb-6 border-b border-[#DCE6EF]">
                      <div className="flex items-baseline gap-1">
                        <span className="text-4xl sm:text-5xl font-extrabold text-[#10243E] font-sans">
                          {price}
                        </span>
                        <span className="text-xs text-[#5F7185]">
                          {plan.priceMonthly === '$0' ? '/ forever' : `/ month ${billingCycle === 'yearly' ? '(billed annually)' : ''}`}
                        </span>
                      </div>
                      <div className="mt-3 space-y-1 text-xs text-[#5F7185] bg-[#F3F9FD] p-3 rounded-2xl border border-[#DCE6EF]">
                        <p><strong>Capacity:</strong> {plan.limits.employees}</p>
                        <p><strong>Traffic:</strong> {plan.limits.visitors}</p>
                        <p><strong>Retention:</strong> {plan.limits.retention}</p>
                      </div>
                    </div>

                    {/* Features Checklist */}
                    <div className="space-y-3 mb-8 text-xs text-[#14263D]">
                      <p className="font-bold text-[10px] uppercase tracking-wider text-[#5F7185]">
                        Included Features:
                      </p>
                      {plan.features.map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-2.5">
                          {feat.included ? (
                            <Check className="w-4 h-4 text-[#27B36A] shrink-0 mt-0.5" />
                          ) : (
                            <X className="w-4 h-4 text-[#DCE6EF] shrink-0 mt-0.5" />
                          )}
                          <span className={feat.included ? 'text-[#14263D]' : 'text-[#5F7185]/60 line-through'}>
                            {feat.name}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Support SLA */}
                    <div className="mb-8 p-3 rounded-2xl bg-[#EDF6FC] border border-[#DCE6EF] text-xs">
                      <p className="text-[10px] font-bold uppercase text-[#1769D2] tracking-wider mb-0.5">Support Level</p>
                      <p className="text-[#14263D] font-medium">{plan.supportLevel}</p>
                    </div>
                  </div>

                  <div className="relative z-10">
                    <Button
                      to={`/register?plan=${plan.id}`}
                      variant={plan.buttonVariant}
                      className="w-full justify-center"
                    >
                      {plan.buttonText}
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Full Comparison Matrix */}
      <section className="py-16 bg-white border-t border-[#DCE6EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <GlobalSectionHeading
              eyebrow="DETAILED MATRIX"
              title="Compare Plan"
              gradientTitle="Capabilities"
              subtitle="A line-by-line review of modules, enterprise safeguards, and limits."
              centered={true}
              theme="light"
            />
          </div>

          <div className="overflow-x-auto border border-[#DCE6EF] rounded-3xl shadow-xs">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="bg-[#10243E] text-white">
                  <th className="p-4 font-bold uppercase tracking-wider w-2/5">Feature Module</th>
                  <th className="p-4 font-bold uppercase tracking-wider text-center w-1/5">Free</th>
                  <th className="p-4 font-bold uppercase tracking-wider text-center w-1/5 bg-[#1769D2] text-white">Starter</th>
                  <th className="p-4 font-bold uppercase tracking-wider text-center w-1/5">Enterprise</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#DCE6EF]">
                {COMPARISON_CATEGORIES.map((cat, cIdx) => (
                  <React.Fragment key={cIdx}>
                    <tr className="bg-[#EDF6FC]">
                      <td colSpan={4} className="p-3.5 font-bold text-[#10243E] uppercase tracking-wider text-xs font-sans">
                        {cat.category}
                      </td>
                    </tr>
                    {cat.features.map((item, iIdx) => (
                      <tr key={iIdx} className="hover:bg-[#F3F9FD] transition-colors">
                        <td className="p-4 font-medium text-[#14263D]">{item.name}</td>
                        <td className="p-4 text-center text-[#5F7185]">{item.free}</td>
                        <td className="p-4 text-center font-bold text-[#1769D2] bg-[#EDF6FC]/50">{item.starter}</td>
                        <td className="p-4 text-center text-[#10243E] font-semibold">{item.enterprise}</td>
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Pricing FAQs */}
      <section className="py-16 bg-[#F3F9FD] border-t border-[#DCE6EF]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <GlobalSectionHeading
              eyebrow="PRICING FAQS"
              title="Frequently Asked"
              gradientTitle="Billing Questions"
              subtitle="Everything you need to know about subscriptions, invoices, and payment policies."
              centered={true}
              theme="light"
            />
          </div>

          <div className="space-y-3">
            {pricingFaqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-[#DCE6EF] bg-white overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full text-left p-5 flex items-center justify-between gap-4 font-semibold text-[#10243E] text-sm sm:text-base focus:outline-none cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown className={`w-5 h-5 text-[#5F7185] shrink-0 transition-transform ${isOpen ? 'rotate-180 text-[#1769D2]' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="p-5 pt-0 text-xs sm:text-sm text-[#5F7185] leading-relaxed border-t border-[#DCE6EF]/60">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
};
