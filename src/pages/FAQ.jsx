import React, { useState } from 'react';
import { ChevronDown, Search, HelpCircle, MessageSquare } from 'lucide-react';
import { PageHeader } from '../components/common/PageHeader';
import { CTASection } from '../components/common/CTASection';
import { Button } from '../components/common/Button';
import { FAQ_DATA } from '../data/faq';

export const FAQ = () => {
  const [selectedCat, setSelectedCat] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [openIndex, setOpenIndex] = useState(0);

  const categories = [
    'All',
    'Visitor Registration',
    'QR Code Check-in',
    'Security',
    'Employee Approvals',
    'Notifications',
    'Visitor Reports',
    'Account Management',
    'Pricing'
  ];

  const filteredFaqs = FAQ_DATA.filter((faq) => {
    const matchesCategory = selectedCat === 'All' || faq.category === selectedCat;
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-[#F3F9FD] min-h-screen">
      <PageHeader
        badge="Knowledge Center"
        title="Frequently Asked Questions"
        subtitle="Find instant answers to questions regarding visitor check-in, QR passes, security encryption, and multi-tier subscription plans."
        breadcrumb={[{ label: 'FAQ' }]}
      />

      {/* Filter and Search Bar */}
      <section className="py-6 bg-white border-b border-[#DCE6EF] sticky top-[60px] z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1 md:pb-0">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCat(cat)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                    selectedCat === cat
                      ? 'bg-[#1769D2] text-white shadow-xs'
                      : 'bg-[#EDF6FC] text-[#5F7185] hover:text-[#10243E] hover:bg-[#DCE6EF]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-[#5F7185] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search FAQs..."
                className="w-full pl-9 pr-4 py-2 text-xs bg-[#F3F9FD] border border-[#DCE6EF] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1769D2] focus:bg-white"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Accordion Content */}
      <section className="py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          {filteredFaqs.length === 0 ? (
            <div className="bg-white rounded-3xl p-10 text-center border border-[#DCE6EF]">
              <p className="text-sm font-semibold text-[#10243E]">No questions match your query "{searchQuery}"</p>
              <button
                onClick={() => { setSearchQuery(''); setSelectedCat('All'); }}
                className="mt-3 text-xs text-[#1769D2] font-bold hover:underline cursor-pointer"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            filteredFaqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className="rounded-3xl border border-[#DCE6EF] bg-white overflow-hidden shadow-xs"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="w-full text-left p-6 flex items-center justify-between gap-4 font-bold text-[#10243E] text-sm sm:text-base focus:outline-none cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-[#EDF6FC] text-[#1769D2] shrink-0">
                        {faq.category}
                      </span>
                      <span>{faq.question}</span>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-[#5F7185] shrink-0 transition-transform ${
                        isOpen ? 'rotate-180 text-[#1769D2]' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="p-6 pt-0 text-xs sm:text-sm text-[#5F7185] leading-relaxed border-t border-[#DCE6EF]/60 bg-[#F3F9FD]/40">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })
          )}

          {/* Still Have Questions Box */}
          <div className="mt-10 p-8 rounded-3xl bg-white border border-[#DCE6EF] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
            <div className="flex items-center gap-4 text-left">
              <div className="w-12 h-12 rounded-2xl bg-[#EDF6FC] text-[#1769D2] flex items-center justify-center shrink-0">
                <MessageSquare className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-bold text-[#10243E] font-sans">Have a specific question?</h4>
                <p className="text-xs text-[#5F7185]">Our technical support team is available 24/7 to help you.</p>
              </div>
            </div>
            <Button to="/contact" size="sm" variant="primary">
              Contact Support
            </Button>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
};
