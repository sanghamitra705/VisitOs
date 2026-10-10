import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Sparkles, ChevronRight } from 'lucide-react';
import { GlobalSectionHeading } from '../common/GlobalSectionHeading';

export const WorkflowProcess = ({ workflow }) => {
  return (
    <section className="py-16 sm:py-20 bg-white border-b border-[#DCE6EF] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <GlobalSectionHeading
            eyebrow="EXECUTION BLUEPRINT"
            title="Step-by-Step"
            gradientTitle="Operational Flow"
            subtitle={`How ${workflow.title} operates smoothly in enterprise lobby and access environments.`}
            align="center"
            theme="light"
          />
        </div>

        {/* 4 Connected Process Stages */}
        <div className="relative">
          {/* Horizontal Connecting Flow Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-10 right-10 -translate-y-1/2 h-[2px] bg-gradient-to-r from-[#1769D2] via-[#16A6A1] to-[#27B36A] z-0 pointer-events-none opacity-40" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {workflow.processSteps.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.1 }}
                className="bg-[#F8FAFD] rounded-3xl p-6 sm:p-7 border border-[#DCE6EF] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  {/* Top Step Number Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-9 h-9 rounded-2xl bg-gradient-to-tr from-[#1769D2] to-[#16A6A1] text-white font-mono font-black text-xs flex items-center justify-center shadow-sm">
                      {item.step}
                    </span>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#5F7185]">
                      PHASE 0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-base font-extrabold text-[#10243E] font-sans leading-tight mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs text-[#5F7185] leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-[#DCE6EF]/60 flex items-center justify-between text-[#1769D2] text-[11px] font-bold">
                  <span>Automated</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#27B36A]" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default WorkflowProcess;
