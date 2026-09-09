'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

export default function FAQsPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState('');

  const faqCategories = [
    {
      category: 'Ghee & Bilona Process',
      items: [
        {
          q: 'What makes A2 Bilona Ghee different from commercial ghee?',
          a: 'Commercial ghee is produced industrially by separating cream using high-speed centrifuges. A2 Bilona Ghee is crafted using the ancient 5-step Vedic method: whole A2 milk is boiled, set into curd overnight, churned bi-directionally with wooden bilonas to extract fresh butter, and slow-heated on low firewood flame. This retains essential digestive enzymes, active A2 protein, and natural aroma.',
        },
        {
          q: 'Why does bilona ghee naturally solidify or have a granular texture?',
          a: 'Granularity (danedar texture) is the authentic trademark of slow-heated, unrefined Bilona Ghee. Ghee naturally solidifies in cooler ambient temperatures (<20°C) and melts into liquid gold in warm temperatures. This physical change is completely natural and does not alter quality or shelf life.',
        },
        {
          q: 'Is Anvi Farms Ghee lab certified for purity?',
          a: 'Yes, 100%! Every batch of Anvi Farms Ghee undergoes rigorous FSSAI-accredited laboratory testing for A2 Beta-Casein validation, fatty acid profile, zero heavy metals, zero palm oil adulterants, and zero synthetic hormones.',
        },
      ],
    },
    {
      category: 'Raw Forest Honey & Natural Products',
      items: [
        {
          q: 'Why does raw forest honey crystallize over time?',
          a: 'Crystallization is proof of 100% pure, unheated, unfiltered raw honey! Pure honey contains natural glucose and bee pollen. When kept unheated, glucose naturally forms soft crystals. Commercial honeys prevent crystallization by high-heat pasteurization (which destroys enzymes). To re-liquefy, place your jar in a bowl of warm water.',
        },
        {
          q: 'Do you harm bees during honey extraction?',
          a: 'Never. We practice ethical, sustainable harvesting in partnership with tribal forest collectors. Only surplus honeycombs are extracted, leaving ample honey and pollen reserves for bee colonies to thrive.',
        },
      ],
    },
    {
      category: 'Shipping, Orders & Storage',
      items: [
        {
          q: 'How long does shipping take across India?',
          a: 'Orders are dispatched within 24 hours from our estate. Express shipping typically arrives within 2-4 business days for major cities and 4-6 business days for tier-2/3 regions. Tracking details are emailed and sent via WhatsApp immediately upon dispatch.',
        },
        {
          q: 'How should I store my Anvi Farms products?',
          a: 'Ghee and Honey should be stored at room temperature in a cool, dry place away from direct sunlight. Always use a clean, dry spoon. Refrigeration is not required for Ghee or Honey. Wood-pressed oils should be kept tightly capped in a cool pantry.',
        },
        {
          q: 'What is your return & refund policy?',
          a: 'If your product arrives damaged or leaking, simply take a photo and WhatsApp us at +91 7780505418 within 48 hours of delivery for an instant replacement or 100% refund.',
        },
      ],
    },
  ];

  let flatIndex = 0;

  return (
    <div className="min-h-screen bg-[#FAF9F4] font-sans text-[#1C1917] flex flex-col selection:bg-[#C28E2E] selection:text-[#0D2B1D]">
      <Header />

      <main className="flex-1 w-full max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-12 py-12 sm:py-16 space-y-12">
        {/* PAGE HEADER */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#FAF5EC] border border-[#DFCFA8] text-xs font-black uppercase tracking-[0.25em] text-[#C28E2E]">
            ❓ FREQUENTLY ASKED QUESTIONS
          </span>
          <h1 className="text-4xl sm:text-5xl font-serif font-black text-[#0A2417]">
            Everything You Need to Know
          </h1>
          <p className="text-sm text-slate-700 font-medium leading-relaxed">
            Have questions about our Vedic Bilona process, honey purity, or delivery? Find detailed answers below.
          </p>

          {/* Search Input */}
          <div className="pt-2 max-w-xl mx-auto">
            <input
              type="text"
              placeholder="Search FAQ questions (e.g. Bilona, Crystallization, Shipping)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-5 py-3.5 rounded-full bg-[#FAF5EC] border border-[#DFCFA8] text-xs font-semibold text-[#0A2417] focus:outline-none focus:border-[#0A2417] shadow-xs"
            />
          </div>
        </div>

        {/* ACCORDION SECTIONS */}
        <div className="space-y-10">
          {faqCategories.map((cat, catIdx) => {
            const filteredItems = cat.items.filter(
              (item) =>
                item.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
                item.a.toLowerCase().includes(searchQuery.toLowerCase())
            );

            if (filteredItems.length === 0) return null;

            return (
              <div key={catIdx} className="space-y-4">
                <h2 className="text-xl font-serif font-black text-[#0A2417] border-b border-[#DFCFA8] pb-2">
                  {cat.category}
                </h2>

                <div className="space-y-3">
                  {filteredItems.map((item) => {
                    const currentIndex = flatIndex++;
                    const isOpen = openIndex === currentIndex;

                    return (
                      <div
                        key={currentIndex}
                        className="bg-[#FAF5EC] rounded-2xl border border-[#DFCFA8] overflow-hidden transition-all"
                      >
                        <button
                          onClick={() => setOpenIndex(isOpen ? null : currentIndex)}
                          className="w-full p-5 text-left font-extrabold text-sm sm:text-base text-[#0A2417] flex items-center justify-between gap-4 cursor-pointer"
                        >
                          <span>{item.q}</span>
                          <span className="w-8 h-8 rounded-full bg-white border border-[#DFCFA8] flex items-center justify-center text-sm font-black text-[#0A2417] shrink-0">
                            {isOpen ? '−' : '+'}
                          </span>
                        </button>

                        {isOpen && (
                          <div className="p-5 pt-0 text-xs sm:text-sm text-slate-700 leading-relaxed font-normal border-t border-[#DFCFA8]/50">
                            {item.a}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* STILL HAVE QUESTIONS HELP CARD */}
        <div className="bg-[#310048] text-white rounded-3xl p-8 sm:p-12 text-center space-y-6 shadow-xl">
          <div className="space-y-2">
            <span className="text-2xl block">💬</span>
            <h3 className="text-2xl sm:text-3xl font-serif font-black text-white">
              Still Have Questions?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto">
              Our Farm Care team is available 6 days a week to help you choose the right produce or assist with orders.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <a
              href="https://wa.me/917780505418?text=Hi%20Anvi%20Farms,%20I%20have%20a%20question"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-[#BE8628] hover:bg-[#a67420] text-white font-extrabold text-xs uppercase tracking-wider transition-all"
            >
              CHAT ON WHATSAPP (+91 7780505418)
            </a>
            <Link
              href="/contact"
              className="px-6 py-3 rounded-full bg-white text-[#310048] font-extrabold text-xs uppercase tracking-wider hover:bg-slate-100 transition-all"
            >
              CONTACT US
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
