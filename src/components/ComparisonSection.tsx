'use client';

import React from 'react';

export const ComparisonSection: React.FC = () => {
  const comparisonData = [
    {
      feature: 'Milk Source',
      anvi: '100% Free-Grazing Indigenous A2 Gir Cows',
      commercial: 'Mixed Breed / Factory Farmed Cows & Buffaloes'
    },
    {
      feature: 'Extraction Process',
      anvi: 'Traditional Curd-Bilona Hand Churning',
      commercial: 'Direct Cream Separator & High Heat Centrifuge'
    },
    {
      feature: 'Digestion & Health',
      anvi: 'Contains A2 Beta-Casein, Easy on Stomach',
      commercial: 'Contains A1 Beta-Casein, Hard to Digest'
    },
    {
      feature: 'Preservatives & Additives',
      anvi: 'Zero Preservatives, Zero Synthetic Chemicals',
      commercial: 'Added Preservatives & Artificial Fragrance'
    },
    {
      feature: 'Granular Texture & Aroma',
      anvi: 'Naturally Granular with Rich Golden Aroma',
      commercial: 'Flat Greasy Texture with Synthetic Aroma'
    }
  ];

  return (
    <section className="py-20 bg-[#FAF9F4] border-b border-[#E7E0D3]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0D2B1D] bg-white border border-[#E7E0D3] px-4 py-1.5 rounded-full">
            Know The Difference
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-serif text-[#0D2B1D]">
            Anvi A2 Bilona vs Commercial Market Ghee
          </h2>
          <p className="text-slate-600 text-sm font-light">
            See why authentic hand-churned A2 Bilona Ghee is vastly superior for health, digestion, and taste.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-3xl border border-[#E7E0D3] shadow-xl overflow-hidden">
          <div className="grid grid-cols-12 bg-[#0D2B1D] text-[#F5EBE0] p-5 font-bold text-xs uppercase tracking-wider">
            <div className="col-span-4">Feature</div>
            <div className="col-span-4 text-[#C28E2E] flex items-center gap-1.5 font-black text-sm">
              <span>🌱</span> Anvi Farms A2 Ghee
            </div>
            <div className="col-span-4 text-slate-400">Commercial Market Ghee</div>
          </div>

          <div className="divide-y divide-[#E7E0D3] text-xs">
            {comparisonData.map((row, idx) => (
              <div key={idx} className="grid grid-cols-12 p-5 items-center hover:bg-[#FDFBF7] transition-colors">
                <div className="col-span-4 font-extrabold text-[#0D2B1D] font-serif">{row.feature}</div>
                <div className="col-span-4 font-semibold text-[#0D2B1D] bg-[#F5EBE0]/60 p-2.5 rounded-xl border border-[#C28E2E]/20 flex items-start gap-2">
                  <span className="text-emerald-700 font-bold text-sm">✓</span>
                  <span>{row.anvi}</span>
                </div>
                <div className="col-span-4 text-slate-500 p-2.5 flex items-start gap-2">
                  <span className="text-red-500 font-bold text-sm">✕</span>
                  <span>{row.commercial}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
