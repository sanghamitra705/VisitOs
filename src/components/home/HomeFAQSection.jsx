import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, HelpCircle, ArrowRight } from 'lucide-react';
import { GlobalSectionHeading } from '../common/GlobalSectionHeading';
import { FAQ_DATA } from '../../data/faq';

export const HomeFAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  // Curate 6 top high-value questions for homepage visitors
  const topFaqs = FAQ_DATA.slice(0, 6);

  return (
    <section 
      aria-label="Frequently Asked Questions"
      className="py-16 sm:py-20 lg:py-24 bg-[#F3F9FD] border-b border-[#DCE6EF] relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-12 sm:mb-14">
          <GlobalSectionHeading
            eyebrow="FREQUENTLY ASKED QUESTIONS"
            title="Everything You Need to Know About"
            gradientTitle="VisitOS"
            subtitle="Clear answers regarding visitor check-in, smartphone QR passes, data encryption, and simple pricing tiers."
            centered={true}
            theme="light"
          />
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {topFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden bg-white ${
                  isOpen 
                    ? 'border-[#1769D2]/40 shadow-md ring-1 ring-[#1769D2]/15' 
                    : 'border-[#DCE6EF] hover:border-[#1769D2]/30 shadow-xs'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  aria-expanded={isOpen}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-bold text-[#10243E] text-sm sm:text-base focus:outline-none cursor-pointer"
                >
                  <span className="font-sans leading-snug">{faq.question}</span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                    isOpen ? 'bg-[#1769D2] text-white rotate-180' : 'bg-[#EDF6FC] text-[#1769D2]'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-[#5F7185] leading-relaxed border-t border-[#DCE6EF]/60">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* View All FAQ Link */}
        <div className="mt-10 text-center">
          <Link
            to="/faq"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#1769D2] hover:text-[#10243E] transition-colors"
          >
            <span>Have more questions? View all FAQs in the Knowledge Center</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
};
