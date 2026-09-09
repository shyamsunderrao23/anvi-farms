'use client';

import React from 'react';

export const ProcessSection: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Free-Grazing Gir Cows',
      desc: 'Indigenous A2 Gir cows graze freely on organic pastures, eating medicinal herbs & clean grass.',
      icon: '🌿'
    },
    {
      number: '02',
      title: 'Curd Set & Bilona Churn',
      desc: 'Whole A2 milk is fermented into natural curd, then hand-churned bi-directionally using wooden bilona.',
      icon: '🪵'
    },
    {
      number: '03',
      title: 'Low-Heat Slow Clarification',
      desc: 'Fresh makhan (butter) is slow-simmered over low fire to produce golden, granular aromatic ghee.',
      icon: '🔥'
    },
    {
      number: '04',
      title: 'Lab Test & Glass Jar Sealing',
      desc: 'Multi-parameter FSSAI lab tested for zero adulteration before vacuum-sealing in eco-friendly glass jars.',
      icon: '✨'
    }
  ];

  return (
    <section className="py-20 bg-[#FAF9F4] border-b border-[#E7E0D3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C28E2E] bg-[#F5EBE0] px-4 py-1.5 rounded-full border border-[#E7E0D3]">
            The Anvi Standard
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-serif text-[#0D2B1D]">
            How Authentic Vedic Ghee Is Made
          </h2>
          <p className="text-slate-600 text-sm font-light leading-relaxed">
            Unlike commercial brands that extract ghee directly from cream using high heat machines, we adhere 100% to the ancient 5-step Curd-Bilona process.
          </p>
        </div>

        {/* Process Steps Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((s, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-white border border-[#E7E0D3] shadow-sm hover:shadow-xl hover:border-[#0D2B1D]/30 transition-all duration-300 relative group flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-3xl">{s.icon}</span>
                  <span className="text-3xl font-black text-[#E7E0D3] font-serif group-hover:text-[#C28E2E] transition-colors">
                    {s.number}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-[#0D2B1D] font-serif group-hover:text-[#C28E2E] transition-colors">
                  {s.title}
                </h3>
                <p className="text-xs text-slate-600 font-light leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
