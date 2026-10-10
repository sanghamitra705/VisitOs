import React from 'react';
import { Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import slide1Img from '../../assets/slide-1-features.png';

export const WhyVisitOSSection = () => {
  const valuePoints = [
    {
      num: '01',
      title: 'Faster Check-Ins',
      desc: 'Streamline visitor registration and reduce unnecessary waiting at reception.',
      link: '/features/qr-visitor-registration'
    },
    {
      num: '02',
      title: 'Controlled Access',
      desc: 'Connect verification, approval and visitor access into one structured workflow.',
      link: '/features/employee-approval-workflows'
    },
    {
      num: '03',
      title: 'Real-Time Visibility',
      desc: 'Keep teams informed throughout the visitor process.',
      link: '/features/real-time-notifications'
    }
  ];

  return (
    <section 
      aria-label="A Smarter Way to Manage Every Visitor"
      className="py-16 sm:py-20 lg:py-24 bg-[#F3F9FD] border-b border-[#DCE7F2] relative overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-gradient-to-tr from-[#1769D2]/06 via-[#16A6A1]/06 to-transparent rounded-full blur-3xl pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ONE Large Premium Navy Container Card around the entire section */}
        <div 
          style={{
            background: 'linear-gradient(135deg, #102B46 0%, #153653 60%, #10243E 100%)',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            boxShadow: '0 25px 70px rgba(16, 43, 70, 0.16)'
          }}
          className="rounded-[28px] sm:rounded-[36px] p-6 sm:p-10 lg:p-14 relative overflow-hidden text-white"
        >
          {/* Subtle Ambient Interior Glows */}
          <div 
            aria-hidden="true" 
            className="absolute -top-24 -right-24 w-80 h-80 bg-[#1769D2]/20 rounded-full blur-3xl pointer-events-none" 
          />
          <div 
            aria-hidden="true" 
            className="absolute -bottom-24 -left-24 w-80 h-80 bg-[#16A6A1]/15 rounded-full blur-3xl pointer-events-none" 
          />

          {/* 2-Column Split: Left Content & Editorial Rows (~45%) | Right Integrated Product Visual (~55%) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10">
            
            {/* LEFT COLUMN: Heading + Paragraph + 3 Value Points (lg:col-span-5) */}
            <div className="lg:col-span-5 space-y-5 text-left">
              
              {/* Heading */}
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black tracking-tight text-white font-sans leading-[1.14]">
                A Smarter Way to{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1769D2] via-[#16A6A1] to-[#27B36A]">
                  Manage Every Visitor
                </span>
              </h2>

              {/* Supporting Paragraph */}
              <p className="text-base sm:text-lg lg:text-[18px] text-white/80 leading-[1.7] font-normal">
                VisitOS brings visitor registration, check-in, host approval, digital visitor passes, notifications, and visitor records into one connected workplace experience.
              </p>

              {/* Mobile Visual Placement (Rendered on mobile between paragraph and points) */}
              <div className="block lg:hidden my-6">
                <div className="relative rounded-2xl bg-white/[0.04] p-3 sm:p-4 border border-white/[0.08] shadow-inner">
                  <img
                    src={slide1Img}
                    alt="VisitOS Modern Visitor Management Terminal and Mobile Pass Preview"
                    className="w-full h-auto max-h-[300px] object-contain drop-shadow-md rounded-lg"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* 3 Value Points as Clean Editorial Rows with Thin Dividers (NOT Separate Cards) */}
              <div className="pt-2 divide-y divide-white/12 border-t border-white/12">
                {valuePoints.map((item) => (
                  <div key={item.num} className="py-4.5 first:pt-4 last:pb-1 group">
                    <div className="flex items-start gap-4">
                      <span className="text-xs sm:text-[13px] font-mono font-bold text-[#1AAA94] bg-white/10 border border-white/15 px-2 py-0.5 rounded shrink-0 mt-0.5 shadow-xs">
                        {item.num}
                      </span>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <h3 className="text-base sm:text-lg font-bold text-white font-sans group-hover:text-[#1AAA94] transition-colors">
                            {item.title}
                          </h3>
                          <Link 
                            to={item.link} 
                            className="opacity-0 group-hover:opacity-100 transition-opacity text-xs font-bold text-[#1688E8] hover:text-[#1AAA94] flex items-center gap-1 shrink-0"
                          >
                            <span>Learn more</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                        </div>
                        <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-normal">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </div>

            {/* RIGHT COLUMN: Large Integrated VisitOS Product Visual (~55%, lg:col-span-7) */}
            <div className="hidden lg:block lg:col-span-7">
              <div className="relative">
                
                {/* Soft Radial Ambient Glow */}
                <div 
                  aria-hidden="true" 
                  className="absolute inset-0 bg-gradient-to-tr from-[#1769D2]/25 via-[#16A6A1]/20 to-transparent rounded-3xl blur-2xl pointer-events-none" 
                />

                {/* Dark Translucent Product Frame */}
                <div className="relative rounded-[26px] bg-white/[0.04] p-4 sm:p-6 border border-white/[0.08] shadow-2xl backdrop-blur-xs">
                  
                  {/* Top Frame Header Bar */}
                  <div className="flex items-center justify-between pb-3.5 mb-3.5 border-b border-white/10">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#27B36A] animate-pulse shadow-[0_0_6px_#27B36A]" />
                      <span className="text-xs font-bold text-white font-sans tracking-wide">
                        VisitOS Front-Desk Console & Pass Sync
                      </span>
                    </div>
                    <span className="text-[10.5px] font-mono font-bold text-[#1AAA94] bg-white/10 px-2.5 py-0.5 rounded-full border border-white/15">
                      Active Portal
                    </span>
                  </div>

                  {/* Artwork Container */}
                  <div className="rounded-xl bg-[#10243E]/60 p-3 sm:p-4 border border-white/5 flex items-center justify-center overflow-hidden">
                    <img
                      src={slide1Img}
                      alt="VisitOS Modern Visitor Management Terminal and Mobile Pass Preview"
                      className="w-full max-h-[380px] object-contain drop-shadow-xl rounded-lg"
                      loading="lazy"
                    />
                  </div>

                  {/* Bottom Frame Status Strip */}
                  <div className="mt-3.5 flex items-center justify-between text-xs text-white/70 px-1">
                    <span className="flex items-center gap-1.5 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-[#27B36A]" />
                      <span>Touchless Optical Camera Scanner</span>
                    </span>
                    <span className="font-bold text-[#1AAA94] font-mono">&lt; 3s Average Flow</span>
                  </div>

                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default WhyVisitOSSection;
