'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

export default function AboutPage() {
  const values = [
    {
      icon: '🧈',
      title: 'Vedic Bilona Method',
      desc: 'Boiled whole A2 milk set to curd, bi-directionally churned with wooden bilona to extract fresh butter, slow-heated over low firewood.',
    },
    {
      icon: '🌿',
      title: '100% Pure & Unadulterated',
      desc: 'Zero chemical refining, zero palm oil fillers, zero artificial colors or synthetic fragrances. Certified by FSSAI lab testing.',
    },
    {
      icon: '🐄',
      title: 'Ethical Grazing & Farmer Well-being',
      desc: 'Our indigenous Gir cows graze freely in open pastures. We partner directly with 500+ organic farmers at fair, transparent trade pricing.',
    },
    {
      icon: '🏺',
      title: 'Glass Jar Packaging',
      desc: 'Preserved in food-grade, eco-friendly glass jars that retain natural granular texture, aroma, and essential nutrients without leaching microplastics.',
    },
  ];

  const timeline = [
    {
      year: '2018',
      title: 'The Seed of Anvi Farms',
      desc: 'Founded with a small herd of 15 indigenous Gir cows in rural Andhra Pradesh to bring back pure, unadulterated farm produce.',
    },
    {
      year: '2020',
      title: 'Reviving Vedic Bilona Churning',
      desc: 'Established our traditional wooden churning facility, rejecting industrial centrifuges in favor of authentic bi-directional Bilona method.',
    },
    {
      year: '2022',
      title: 'Expanding Wild Forest Reserves',
      desc: 'Partnered with indigenous tribal honey harvesters in deep forest sanctuaries for ethical, unheated raw forest honey.',
    },
    {
      year: '2024',
      title: '500+ Organic Farmers Network',
      desc: 'Scaled our direct-to-farm network across Andhra Pradesh, Telangana, and Tamil Nadu, promoting chemical-free sustainable agriculture.',
    },
    {
      year: '2026',
      title: '50,000+ Happy Kitchens',
      desc: 'Delivering fresh, lab-certified Vedic A2 Ghee, Raw Honey, and Wood-Pressed Oils directly to homes across India.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#FAF9F4] font-sans text-[#1C1917] flex flex-col selection:bg-[#C28E2E] selection:text-[#0D2B1D]">
      <Header />

      <main className="flex-1 w-full">
        {/* HERO BANNER SECTION */}
        <section className="relative bg-[#310048] text-white py-20 sm:py-28 px-4 sm:px-8 overflow-hidden">
          {/* Subtle Background Pattern */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#C28E2E_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

          <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#BE8628]/20 border border-[#BE8628]/40 text-xs font-black uppercase tracking-[0.25em] text-[#BE8628]">
              🌱 OUR HERITAGE & MISSION
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-black tracking-tight leading-tight">
              Rooted in Tradition, Sourced with Integrity
            </h1>
            <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto">
              At Anvi Farms, we believe true nourishment comes from nature untouched by chemicals. We preserve India’s ancient agricultural heritage by handcrafting pure A2 Bilona Ghee, Raw Forest Honey, and Cold-Pressed Oils.
            </p>
          </div>
        </section>

        {/* OUR STORY SPLIT SECTION */}
        <section className="max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 py-16 sm:py-24 space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Media Collage */}
            <div className="lg:col-span-6 relative aspect-square w-full rounded-3xl overflow-hidden border border-[#DFCFA8] shadow-md bg-white">
              <Image
                src="/images/story-landscape.jpg"
                alt="Anvi Farms Grazing Lands"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>

            {/* Right Story Text */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-black uppercase tracking-[0.25em] text-[#C28E2E]">
                  THE BILONA DIFFERENCE
                </span>
                <h2 className="text-3xl sm:text-4xl font-serif font-black text-[#310048] leading-tight">
                  Why We Never Compromise on the Ancient 5-Step Process
                </h2>
              </div>

              <p className="text-sm text-slate-700 leading-relaxed font-normal">
                Unlike commercial ghee produced in minutes using high-speed industrial cream separators, Anvi Farms practices the labor-intensive 5-step Vedic Bilona method. Whole A2 Gir cow milk is boiled, cultured overnight into curd, and churned bi-directionally with wooden bilonas.
              </p>

              <p className="text-sm text-slate-700 leading-relaxed font-normal">
                The resulting fresh butter (makhan) is slow-heated on low firewood flame to produce a rich, golden, granular ghee packed with active digestive enzymes, A2 beta-casein protein, and natural aroma.
              </p>

              <div className="pt-4 grid grid-cols-2 gap-4">
                <div className="bg-[#FAF5EC] p-4 rounded-2xl border border-[#DFCFA8]">
                  <span className="block text-2xl font-black text-[#310048]">100%</span>
                  <span className="block text-xs font-bold text-slate-600 uppercase tracking-wider mt-1">
                    Pure A2 Gir Milk
                  </span>
                </div>
                <div className="bg-[#FAF5EC] p-4 rounded-2xl border border-[#DFCFA8]">
                  <span className="block text-2xl font-black text-[#310048]">0%</span>
                  <span className="block text-xs font-bold text-slate-600 uppercase tracking-wider mt-1">
                    Chemical Additives
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* CORE VALUES GRID */}
          <div className="space-y-10 pt-8">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <span className="text-xs font-black uppercase tracking-[0.25em] text-[#C28E2E]">
                OUR PILLARS
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-black text-[#310048]">
                Purity You Can Trust in Every Jar
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((v, i) => (
                <div key={i} className="bg-[#FAF5EC] p-6 rounded-3xl border border-[#DFCFA8] space-y-3 shadow-xs hover:border-[#310048] transition-all">
                  <span className="text-4xl block">{v.icon}</span>
                  <h3 className="font-serif font-black text-lg text-[#310048]">{v.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* TIMELINE SECTION */}
          <div className="bg-[#310048] text-white rounded-3xl p-8 sm:p-14 space-y-12 shadow-xl relative overflow-hidden">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <span className="text-xs font-black uppercase tracking-[0.25em] text-[#BE8628]">
                OUR JOURNEY
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-black text-white">
                How Anvi Farms Has Grown
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {timeline.map((item, idx) => (
                <div key={idx} className="bg-white/5 p-5 rounded-2xl border border-white/10 space-y-2">
                  <span className="text-xl font-black text-[#BE8628] block">{item.year}</span>
                  <h4 className="font-bold text-sm text-white">{item.title}</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA SECTION */}
          <div className="text-center space-y-6 pt-4">
            <h3 className="text-3xl font-serif font-black text-[#310048]">
              Ready to Experience Authentic Farm Freshness?
            </h3>
            <div className="flex justify-center gap-4">
              <Link
                href="/products"
                className="px-8 py-3.5 rounded-full bg-[#310048] text-white font-extrabold text-xs uppercase tracking-[0.2em] shadow-md hover:bg-[#4A0868] transition-all"
              >
                EXPLORE PRODUCTS
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
