'use client';

import React from 'react';

export const TrustBadges: React.FC = () => {
  const badges = [
    {
      icon: '🐄',
      title: 'Free-Grazing A2 Gir Cows',
      description: 'Indigenous Gir cows fed organic grass & wild herbs in natural open pastures.'
    },
    {
      icon: '🪵',
      title: 'Traditional Curd Bilona',
      description: 'Hand-churned in wooden vessels to preserve vital nutrients & rich granular texture.'
    },
    {
      icon: '🫒',
      title: 'Wood-Pressed Extraction',
      description: 'Cold pressed in slow Vaagai wooden chakkis under 45°C to retain vital antioxidants.'
    },
    {
      icon: '🔬',
      title: 'FSSAI Certified Lab Pure',
      description: 'Every batch undergoes rigorous multi-parameter purity tests for zero adulteration.'
    }
  ];

  return (
    <section className="py-20 bg-[#0D2B1D] text-white border-y border-[#1D4A34]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E2C07D]">The Anvi Purity Guarantee</span>
          <h2 className="text-3xl font-extrabold font-serif text-white">Uncompromising Organic Standards</h2>
          <p className="text-xs text-slate-300 font-light">Direct from farm to table. No chemical additives, no synthetic preservatives.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {badges.map((b, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-[#C28E2E]/50 transition-all group duration-300"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{b.icon}</div>
              <h3 className="text-lg font-bold text-[#E2C07D] font-serif mb-2">{b.title}</h3>
              <p className="text-xs text-slate-300 leading-relaxed font-light">{b.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
