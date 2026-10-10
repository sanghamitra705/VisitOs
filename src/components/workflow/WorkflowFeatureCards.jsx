import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Sparkles } from 'lucide-react';
import { GlobalSectionHeading } from '../common/GlobalSectionHeading';

export const WorkflowFeatureCards = ({ workflow }) => {
  return (
    <section className="py-16 sm:py-20 bg-[#F3F9FD] border-b border-[#DCE6EF] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <GlobalSectionHeading
            eyebrow="CORE CAPABILITIES"
            title="Enterprise Features &"
            gradientTitle="Compliance Safeguards"
            subtitle={`Key technology built directly into ${workflow.title} to guarantee security, speed, and audit transparency.`}
            align="center"
            theme="light"
          />
        </div>

        {/* 4 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {workflow.featureCards.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-[#DCE6EF] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
              >
                <div>
                  {/* Feature Icon Header */}
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#EDF6FC] to-[#E3F2FD] border border-[#DCE6EF] text-[#1769D2] flex items-center justify-center mb-5 shadow-2xs">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-base font-extrabold text-[#10243E] font-sans leading-tight mb-2">
                    {feat.title}
                  </h3>

                  <p className="text-xs text-[#5F7185] leading-relaxed font-medium">
                    {feat.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-[#DCE6EF]/60 flex items-center gap-1.5 text-[#27B36A] text-xs font-bold">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                  <span>Verified Feature</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default WorkflowFeatureCards;
