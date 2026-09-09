'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const OurStory: React.FC = () => {
  const storyFeatures = [
    {
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M17 8C8 10 59 16.17 3.82 21.34l1.78 1.78c.39.39 1.02.39 1.41 0L12 18.17l5 5c.39.39 1.02.39 1.41 0l1.78-1.78c.39-.39.39-1.02 0-1.41L15.17 15l5-5c.39-.39.39-1.02 0-1.41L18.4 6.8c-.39-.39-1.02-.39-1.4 0zM12 3C6.48 3 2 7.48 2 13c0 2.38.83 4.57 2.21 6.3L12 11.5l7.79 7.8C21.17 17.57 22 15.38 22 13c0-5.52-4.48-10-10-10z" />
        </svg>
      ),
      title: 'ROOTED IN TRADITION',
      description: 'Inspired by age-old practices passed down for generations.',
    },
    {
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </svg>
      ),
      title: 'PURE & NATURAL',
      description: 'No chemicals. No shortcuts. Just nature in its purest form.',
    },
    {
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      ),
      title: 'CRAFTED WITH CARE',
      description: 'Small batches, made with love and attention to detail.',
    },
    {
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
        </svg>
      ),
      title: 'FROM OUR FARM TO YOUR HOME',
      description: 'Bringing you honest, wholesome goodness from our farm.',
    },
  ];

  const trustPillars = [
    {
      icon: '🍃',
      title: '100% NATURAL',
      description: 'Pure ingredients from nature.',
    },
    {
      icon: '🧪',
      title: 'NO CHEMICALS',
      description: 'We never use harmful chemicals or additives.',
    },
    {
      icon: '🤍',
      title: 'MADE WITH LOVE',
      description: 'Every product is made with care and honesty.',
    },
    {
      icon: '🌾',
      title: 'SUSTAINABLY MADE',
      description: 'Good for you, good for the planet.',
    },
  ];

  return (
    <section id="our-story" className="w-full bg-[#FAF9F4] py-16 sm:py-24 px-4 sm:px-8 lg:px-12 relative overflow-hidden">
      <div className="max-w-[1720px] mx-auto space-y-16 lg:space-y-20">

        {/* Main Grid: Left Story Text + Right Asymmetric 4-Image Editorial Collage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column: Our Story Content */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-8">
            
            {/* Header Block */}
            <div className="space-y-2 sm:space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#C28E2E]">
                <span>🌿</span>
                <span>OUR JOURNEY</span>
                <span>🌿</span>
              </div>

              <h2 className="text-3.5xl xs:text-4.5xl sm:text-6xl lg:text-[70px] font-serif font-black text-[#310048] tracking-tight leading-none">
                OUR STORY
              </h2>

              <div className="w-16 h-[2px] bg-[#C28E2E] pt-1" />
            </div>

            {/* Lead Description Paragraph */}
            <p className="text-slate-800 text-sm sm:text-lg font-medium leading-relaxed max-w-xl">
              At Anvi Farms, we believe in going back to our roots. Our products are crafted with age-old traditions, pure ingredients and a whole lot of care.
            </p>

            {/* 4 Feature Points with Circular Icons */}
            <div className="space-y-4 sm:space-y-6 pt-1 sm:pt-2">
              {storyFeatures.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3 sm:gap-4 group">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#310048] text-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <div className="space-y-0.5 pt-0.5">
                    <h4 className="font-extrabold text-xs sm:text-sm uppercase tracking-wider text-[#310048]">
                      {feature.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-700 font-normal leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-2 sm:pt-4">
              <Link href="/about" className="inline-flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full bg-[#310048] text-white border border-[#C28E2E] font-extrabold text-xs uppercase tracking-[0.2em] shadow-md hover:bg-[#4A0868] hover:shadow-lg transition-all duration-300 cursor-pointer">
                <span>KNOW MORE ABOUT US</span>
                <span className="text-[#C28E2E] text-sm">→</span>
              </Link>
            </div>

          </div>

          {/* Right Column: Asymmetric 4-Image Editorial Overlapping Collage */}
          <div className="lg:col-span-7 relative pt-4 lg:pt-0">
            
            {/* Top Right Floating Botanical Emblem */}
            <div className="absolute -top-4 -right-2 sm:-top-6 sm:-right-6 z-30 pointer-events-none">
              <div className="w-12 h-12 sm:w-20 sm:h-20 rounded-full bg-[#FAF5EC] border border-[#DFCFA8] flex items-center justify-center shadow-xs">
                <span className="text-xl sm:text-3xl text-[#C28E2E]">🌿</span>
              </div>
            </div>

            <div className="relative">
              {/* Top Landscape Farm Image */}
              <div className="relative aspect-[16/9] w-full rounded-2xl sm:rounded-[36px] overflow-hidden shadow-md border-2 sm:border-4 border-white">
                <Image
                  src="/images/story-landscape.jpg"
                  alt="Anvi Farms Organic Sunrise Farm Landscape"
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover object-center hover:scale-105 transition-transform duration-700 ease-out"
                  priority
                />
              </div>

              {/* Bottom 3 Image Cards Container with Center Card Overlap */}
              <div className="grid grid-cols-3 gap-2 sm:gap-5 pt-2 sm:pt-3 relative z-10">
                
                {/* Left Card: Honey Jar (Square ratio, aligned at bottom) */}
                <div className="relative aspect-square w-full rounded-xl sm:rounded-[28px] overflow-hidden shadow-md border-2 sm:border-4 border-white self-end">
                  <Image
                    src="/images/story-honey.jpg"
                    alt="Raw Wild Forest Honey and Honeycomb"
                    fill
                    sizes="(max-width: 1024px) 33vw, 20vw"
                    className="object-cover object-center hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>

                {/* Center Card: Ghee Jar (Overlaps Upward into Top Farm Image!) */}
                <div className="relative aspect-[3/4.2] w-full rounded-xl sm:rounded-[28px] overflow-hidden shadow-xl border-2 sm:border-4 border-white -mt-6 sm:-mt-16 lg:-mt-20 z-20">
                  <Image
                    src="/images/story-ghee.jpg"
                    alt="Pure A2 Desi Cow Bilona Ghee"
                    fill
                    sizes="(max-width: 1024px) 33vw, 20vw"
                    className="object-cover object-center hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>

                {/* Right Card: Sprouted Ragi Malt Pouch (Tall portrait ratio) */}
                <div className="relative aspect-[3/4.2] w-full rounded-xl sm:rounded-[28px] overflow-hidden shadow-md border-2 sm:border-4 border-white">
                  <Image
                    src="/images/story-ragi.jpg"
                    alt="Organic Sprouted Ragi & Almond Malt"
                    fill
                    sizes="(max-width: 1024px) 33vw, 20vw"
                    className="object-cover object-center hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
