import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  Clock, 
  Send, 
  CheckCircle2, 
  Building2, 
  Headphones,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  Check,
  QrCode,
  Smartphone,
  Shield,
  MessageSquare,
  Lock,
  Users
} from 'lucide-react';
import { CTASection } from '../components/common/CTASection';
import { Button } from '../components/common/Button';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: 'Platform Demo & Information',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [touched, setTouched] = useState({});

  const handleBlur = (field) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const trustHighlights = [
    {
      title: 'Secure Visitor Data',
      desc: 'TLS 1.3 encrypted logs & strict tenant workspace isolation.',
      icon: Lock,
    },
    {
      title: 'Real-Time Visibility',
      desc: 'Sub-200ms host arrival alerts across SMS, email & Slack.',
      icon: Sparkles,
    },
    {
      title: 'Touchless QR Check-In',
      desc: 'Sub-15 second mobile registration with zero app downloads.',
      icon: QrCode,
    },
    {
      title: 'Enterprise Scalability',
      desc: 'Architected for single lobbies to multi-tenant campuses.',
      icon: Building2,
    },
  ];

  return (
    <div className="bg-[#FCFBF4] min-h-screen text-[#14263D] selection:bg-[#1769D2] selection:text-white font-sans">
      
      {/* ============================================================ */}
      {/* 1. HERO SECTION: TWO-SIDED EDITORIAL CONVERSATION ANCHOR     */}
      {/* ============================================================ */}
      <section className="pt-28 pb-16 sm:pt-32 sm:pb-20 relative overflow-hidden border-b border-[#DCE6EF]">
        {/* Subtle Ambient Glow */}
        <div className="absolute top-1/4 left-1/4 w-[450px] h-[450px] bg-[#1769D2]/6 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-[#16A6A1]/8 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left: Typography & Conversation Scope */}
            <div className="lg:col-span-6 space-y-5 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EDF6FC] border border-[#DCE6EF] text-[10.5px] font-mono font-bold text-[#1769D2]">
                <span className="w-2 h-2 rounded-full bg-[#27B36A] animate-ping" />
                <span>LET'S CONNECT</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-black text-[#10243E] tracking-tight leading-[1.15] font-sans">
                Let's Build a <br />
                <span className="bg-gradient-to-r from-[#1769D2] via-[#16A6A1] to-[#27B36A] bg-clip-text text-transparent">
                  Safer Visitor Experience.
                </span>
              </h1>

              <p className="text-sm sm:text-base text-[#5F7185] leading-relaxed max-w-xl font-medium">
                Have questions about modernizing your front-desk reception, configuring multi-tenant gatehouses, or deploying touchless QR passes? Our workplace specialists are ready to help.
              </p>

              {/* Inquiry Pillars */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3 bg-white rounded-2xl border border-[#DCE6EF] shadow-2xs">
                  <span className="text-[10px] font-mono font-bold text-[#1769D2] block">01 • DEMOS</span>
                  <p className="text-xs font-bold text-[#10243E] mt-0.5">Live Guided Product Walkthrough</p>
                </div>
                <div className="p-3 bg-white rounded-2xl border border-[#DCE6EF] shadow-2xs">
                  <span className="text-[10px] font-mono font-bold text-[#16A6A1] block">02 • ENTERPRISE</span>
                  <p className="text-xs font-bold text-[#10243E] mt-0.5">Multi-Branch Licensing &amp; Setup</p>
                </div>
              </div>
            </div>

            {/* Right: Realistic Corporate Reception Visual */}
            <div className="lg:col-span-6">
              <div className="relative rounded-[28px] sm:rounded-[32px] overflow-hidden border border-[#DCE6EF] bg-[#0B1F38] shadow-2xl group aspect-[16/11]">
                <img
                  src="/assets/hero-reception-clean-3yF-nt3O.jpg"
                  alt="Modern corporate reception with verified touchless check-in"
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F38]/90 via-[#0B1F38]/30 to-transparent" />

                {/* Floating Micro Status Badge */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/40 text-xs font-bold text-[#10243E] flex items-center gap-2 shadow-lg">
                  <ShieldCheck className="w-4 h-4 text-[#27B36A]" />
                  <span>Workplace Advisory Desk</span>
                </div>

                {/* Bottom Visual Context Tag */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#0B1F38]/85 backdrop-blur-md p-3.5 rounded-2xl border border-white/20 text-left text-white space-y-0.5">
                  <span className="text-[9px] font-mono font-bold text-[#5EEAD4] uppercase tracking-wider block">
                    GLOBAL DEPLOYMENT &amp; ONBOARDING
                  </span>
                  <p className="text-xs font-medium text-[#D8E7EF]">
                    Helping modern offices, tech hubs, and campuses secure their perimeters.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 2. MAIN SECTION: PREMIUM FORM + EDITORIAL INFO ROW           */}
      {/* ============================================================ */}
      <section className="py-16 sm:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            
            {/* Contact Form (7 cols) */}
            <div className="lg:col-span-7 bg-gradient-to-br from-[#FFFFFF] via-[#F8FCFF] to-[#F2FAF7] rounded-[28px] sm:rounded-[32px] p-7 sm:p-10 border border-[#DCE6EF] shadow-xl text-left">
              <div className="mb-6 space-y-1.5">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#1769D2]">
                  START A CONVERSATION
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-[#10243E] tracking-tight font-sans">
                  Tell Us What You Need
                </h2>
                <p className="text-xs sm:text-sm text-[#5F7185] font-medium">
                  Fill in your details below and our workplace specialists will respond in under 24 hours.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 sm:p-10 bg-[#27B36A]/10 border border-[#27B36A]/30 rounded-3xl text-center space-y-3">
                  <div className="w-14 h-14 mx-auto rounded-2xl bg-[#27B36A] text-white flex items-center justify-center shadow-md">
                    <Check className="w-8 h-8 stroke-[3]" />
                  </div>
                  <h3 className="text-xl font-black text-[#10243E] font-sans">
                    Thanks — Your Message Has Been Received!
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5F7185] max-w-md mx-auto leading-relaxed">
                    We have received your inquiry for <strong>{formData.company || 'your organization'}</strong>. A workplace specialist will reach out to you shortly at <strong>{formData.email}</strong>.
                  </p>
                  <div className="pt-2">
                    <Button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: '',
                          email: '',
                          company: '',
                          phone: '',
                          subject: 'Platform Demo & Information',
                          message: '',
                        });
                      }}
                      size="small"
                      variant="primary"
                    >
                      Send Another Inquiry
                    </Button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#10243E] mb-1.5">
                        Full Name <span className="text-[#1769D2]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        onBlur={() => handleBlur('name')}
                        placeholder="e.g. Jordan Reed"
                        className="w-full px-4 py-3 rounded-xl border border-[#DCE6EF] bg-white text-xs font-medium text-[#10243E] placeholder-[#94A3B8] focus:outline-hidden focus:ring-2 focus:ring-[#16A6A1] focus:border-transparent transition-all shadow-2xs"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#10243E] mb-1.5">
                        Work Email <span className="text-[#1769D2]">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        onBlur={() => handleBlur('email')}
                        placeholder="jordan@company.com"
                        className="w-full px-4 py-3 rounded-xl border border-[#DCE6EF] bg-white text-xs font-medium text-[#10243E] placeholder-[#94A3B8] focus:outline-hidden focus:ring-2 focus:ring-[#16A6A1] focus:border-transparent transition-all shadow-2xs"
                      />
                    </div>
                  </div>

                  {/* Company & Phone Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#10243E] mb-1.5">
                        Organization / Company
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. Acme Technologies"
                        className="w-full px-4 py-3 rounded-xl border border-[#DCE6EF] bg-white text-xs font-medium text-[#10243E] placeholder-[#94A3B8] focus:outline-hidden focus:ring-2 focus:ring-[#16A6A1] focus:border-transparent transition-all shadow-2xs"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#10243E] mb-1.5">
                        Phone Number (Optional)
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 (555) 000-0000"
                        className="w-full px-4 py-3 rounded-xl border border-[#DCE6EF] bg-white text-xs font-medium text-[#10243E] placeholder-[#94A3B8] focus:outline-hidden focus:ring-2 focus:ring-[#16A6A1] focus:border-transparent transition-all shadow-2xs"
                      />
                    </div>
                  </div>

                  {/* Subject Selection */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#10243E] mb-1.5">
                      What can we help with?
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#DCE6EF] bg-white text-xs font-medium text-[#10243E] focus:outline-hidden focus:ring-2 focus:ring-[#16A6A1] focus:border-transparent transition-all shadow-2xs cursor-pointer"
                    >
                      <option>Platform Demo &amp; Information</option>
                      <option>Enterprise Multi-Branch Licensing</option>
                      <option>Security &amp; SOC 2 Compliance Inquiry</option>
                      <option>Custom Hardware &amp; Kiosk Integration</option>
                      <option>Partnership or Reseller Inquiry</option>
                    </select>
                  </div>

                  {/* Message Details */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#10243E] mb-1.5">
                      Message Details <span className="text-[#1769D2]">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your expected visitor volume, facility setup, or security requirements..."
                      className="w-full px-4 py-3 rounded-xl border border-[#DCE6EF] bg-white text-xs font-medium text-[#10243E] placeholder-[#94A3B8] focus:outline-hidden focus:ring-2 focus:ring-[#16A6A1] focus:border-transparent transition-all shadow-2xs"
                    />
                  </div>

                  {/* Action & Privacy Row */}
                  <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <span className="text-[11px] text-[#5F7185] flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-[#27B36A] shrink-0" />
                      Strict privacy: We never share or sell your details.
                    </span>

                    <button
                      type="submit"
                      disabled={loading}
                      className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-xs font-bold text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer disabled:opacity-50 min-h-[44px]"
                      style={{
                        background: 'linear-gradient(90deg, #1769D2 0%, #16A6A1 100%)'
                      }}
                    >
                      {loading ? (
                        <span>Sending message...</span>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Right: Editorial Information & Journey Visual (5 cols) */}
            <div className="lg:col-span-5 space-y-6 text-left">
              
              {/* Editorial Channels Box */}
              <div className="bg-white rounded-[28px] p-6 sm:p-8 border border-[#DCE6EF] shadow-md space-y-5">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#1769D2] block pb-2 border-b border-[#DCE6EF]">
                  DIRECT CHANNELS
                </span>

                {/* Email Item */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#EDF6FC] text-[#1769D2] flex items-center justify-center shrink-0 shadow-2xs">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#10243E]">Direct Inquiries</h4>
                    <p className="text-xs sm:text-sm font-semibold text-[#1769D2] mt-0.5">contact@visitos.cloud</p>
                    <p className="text-[10px] text-[#5F7185]">Standard response: &lt; 24 business hours</p>
                  </div>
                </div>

                {/* Security Advisory */}
                <div className="flex items-start gap-3.5 pt-3 border-t border-slate-100">
                  <div className="w-10 h-10 rounded-xl bg-[#EDF6FC] text-[#16A6A1] flex items-center justify-center shrink-0 shadow-2xs">
                    <Headphones className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#10243E]">Enterprise Security Advisory</h4>
                    <p className="text-xs sm:text-sm font-semibold text-[#16A6A1] mt-0.5">security@visitos.cloud</p>
                    <p className="text-[10px] text-[#5F7185]">Available Mon–Fri 9:00 AM – 6:00 PM EST</p>
                  </div>
                </div>

                {/* Trial Setup */}
                <div className="flex items-start gap-3.5 pt-3 border-t border-slate-100">
                  <div className="w-10 h-10 rounded-xl bg-[#EDF6FC] text-[#27B36A] flex items-center justify-center shrink-0 shadow-2xs">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#10243E]">Onboarding Assistance</h4>
                    <p className="text-xs sm:text-sm font-semibold text-[#10243E] mt-0.5">1-on-1 Workspace Setup</p>
                    <p className="text-[10px] text-[#5F7185]">Complimentary with every organization trial</p>
                  </div>
                </div>
              </div>

              {/* Journey Visual: Scan -> Verify -> Host -> Secure */}
              <div className="bg-[#0B1F38] text-white rounded-[28px] p-6 sm:p-7 border border-white/15 shadow-xl space-y-3">
                <span className="text-[9px] font-mono font-bold text-[#5EEAD4] uppercase tracking-wider block">
                  THE VISITOS ARRIVAL FLOW
                </span>
                
                <div className="grid grid-cols-4 gap-1.5 pt-1 text-center">
                  <div className="bg-white/10 p-2 rounded-xl border border-white/10">
                    <QrCode className="w-4 h-4 text-[#5EEAD4] mx-auto mb-1" />
                    <span className="text-[8px] font-mono text-white block">01. SCAN</span>
                  </div>
                  <div className="bg-white/10 p-2 rounded-xl border border-white/10">
                    <Smartphone className="w-4 h-4 text-[#38BDF8] mx-auto mb-1" />
                    <span className="text-[8px] font-mono text-white block">02. REGISTER</span>
                  </div>
                  <div className="bg-white/10 p-2 rounded-xl border border-white/10">
                    <Users className="w-4 h-4 text-[#27B36A] mx-auto mb-1" />
                    <span className="text-[8px] font-mono text-white block">03. APPROVE</span>
                  </div>
                  <div className="bg-white/10 p-2 rounded-xl border border-white/10">
                    <ShieldCheck className="w-4 h-4 text-[#5EEAD4] mx-auto mb-1" />
                    <span className="text-[8px] font-mono text-white block">04. ENTER</span>
                  </div>
                </div>
                
                <p className="text-[11px] text-[#D8E7EF] leading-relaxed pt-1">
                  100% paperless visitor flow deployed across executive lobbies, tech parks, and commercial towers.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 3. TRUST SECTION: SUBTLE OPERATIONAL PILLARS                 */}
      {/* ============================================================ */}
      <section className="py-16 sm:py-20 bg-white border-y border-[#DCE6EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <h3 className="text-2xl sm:text-3xl font-black text-[#10243E] tracking-tight font-sans">
              Have a Question About{' '}
              <span className="bg-gradient-to-r from-[#1769D2] via-[#16A6A1] to-[#27B36A] bg-clip-text text-transparent">
                VisitOS?
              </span>
            </h3>
            <p className="text-xs sm:text-sm text-[#5F7185]">
              Engineered to meet the physical perimeter and data privacy demands of modern organizations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {trustHighlights.map((t, idx) => {
              const Icon = t.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#F3F9FD] rounded-2xl p-5 sm:p-6 border border-[#DCE6EF] space-y-2 shadow-2xs hover:shadow-md hover:bg-white transition-all duration-300"
                >
                  <div className="w-9 h-9 rounded-xl bg-white text-[#1769D2] flex items-center justify-center border border-[#DCE6EF] shadow-2xs">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-bold text-[#10243E]">{t.title}</h4>
                  <p className="text-xs text-[#5F7185] leading-relaxed">{t.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 4. FINAL CTA SECTION                                         */}
      {/* ============================================================ */}
      <CTASection />

    </div>
  );
};

export default Contact;
