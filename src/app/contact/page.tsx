'use client';

import React, { useState } from 'react';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    inquiryType: 'general',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#FAF9F4] font-sans text-[#1C1917] flex flex-col selection:bg-[#C28E2E] selection:text-[#0D2B1D]">
      <Header />

      <main className="flex-1 w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 py-12 sm:py-16 space-y-16">
        {/* PAGE HEADER */}
        <div className="text-center max-w-3xl mx-auto space-y-4 pt-4">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#FAF5EC] border border-[#DFCFA8] text-xs font-black uppercase tracking-[0.25em] text-[#C28E2E]">
            📞 GET IN TOUCH
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-black text-[#0A2417] leading-tight">
            We Would Love to Hear From You
          </h1>
          <p className="text-sm text-slate-700 font-medium leading-relaxed">
            Have questions about your order, bulk corporate gifting, or want to visit our organic estate? Reach out anytime!
          </p>
        </div>

        {/* SPLIT SECTION: CONTACT INFO + FORM */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* LEFT SIDE: CONTACT DETAILS */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <h2 className="text-2xl font-serif font-black text-[#0A2417]">
                Anvi Farms Estate & Headquarters
              </h2>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Directly connecting health-conscious families with certified organic farmers and traditional Bilona artisans.
              </p>
            </div>

            {/* INFO CARDS */}
            <div className="space-y-4">
              {/* Address */}
              <div className="p-5 rounded-2xl bg-[#FAF5EC] border border-[#DFCFA8] flex items-start gap-4">
                <span className="text-2xl p-2 rounded-xl bg-white border border-[#DFCFA8] shrink-0">📍</span>
                <div className="space-y-1 text-xs">
                  <h4 className="font-extrabold text-[#0A2417] uppercase tracking-wider">Farm Estate Address</h4>
                  <p className="text-slate-700 leading-relaxed">
                    Anvi Farms Organic Estate, Survey No. 402, Guntur Rural, Andhra Pradesh - 522001, India.
                  </p>
                </div>
              </div>

              {/* Phone & WhatsApp */}
              <div className="p-5 rounded-2xl bg-[#FAF5EC] border border-[#DFCFA8] flex items-start gap-4">
                <span className="text-2xl p-2 rounded-xl bg-white border border-[#DFCFA8] shrink-0">📞</span>
                <div className="space-y-1 text-xs">
                  <h4 className="font-extrabold text-[#0A2417] uppercase tracking-wider">Phone & WhatsApp Support</h4>
                  <p className="text-slate-700 font-bold">+91 7780505418</p>
                  <p className="text-slate-500 text-[11px]">Available Mon - Sat: 9:00 AM - 7:00 PM IST</p>
                </div>
              </div>

              {/* Email */}
              <div className="p-5 rounded-2xl bg-[#FAF5EC] border border-[#DFCFA8] flex items-start gap-4">
                <span className="text-2xl p-2 rounded-xl bg-white border border-[#DFCFA8] shrink-0">✉️</span>
                <div className="space-y-1 text-xs">
                  <h4 className="font-extrabold text-[#0A2417] uppercase tracking-wider">Email Us</h4>
                  <p className="text-slate-700 font-bold">care@anvifarms.com</p>
                  <p className="text-slate-500 text-[11px]">For orders, corporate gifting & press inquiries</p>
                </div>
              </div>
            </div>

            {/* WHATSAPP CTA BOX */}
            <div className="bg-[#310048] text-white p-6 rounded-3xl space-y-4 shadow-md">
              <div className="flex items-center gap-3">
                <span className="text-3xl">💬</span>
                <div>
                  <h4 className="font-bold text-sm text-white">Instant WhatsApp Ordering</h4>
                  <p className="text-xs text-slate-300">Need help right away? Chat with our team.</p>
                </div>
              </div>
              <a
                href="https://wa.me/917780505418?text=Hi%20Anvi%20Farms,%20I%20want%20to%20place%20an%20order"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center w-full py-3 rounded-full bg-[#BE8628] hover:bg-[#a67420] text-white font-extrabold text-xs uppercase tracking-wider transition-all"
              >
                OPEN WHATSAPP CHAT
              </a>
            </div>
          </div>

          {/* RIGHT SIDE: CONTACT FORM */}
          <div className="lg:col-span-7 bg-[#FAF5EC] p-8 sm:p-12 rounded-3xl border border-[#DFCFA8] shadow-xs space-y-6">
            <div className="space-y-2 border-b border-[#DFCFA8] pb-4">
              <h2 className="text-2xl sm:text-3xl font-serif font-black text-[#310048]">
                Send Us a Message
              </h2>
              <p className="text-xs text-slate-600 font-normal">
                Fill out the form below and our team will get back to you within 4 business hours.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-emerald-100 border border-emerald-300 text-center space-y-4 animate-fade-in">
                <span className="text-4xl block">✅</span>
                <h3 className="text-xl font-bold text-emerald-900">Thank You for Reaching Out!</h3>
                <p className="text-xs text-emerald-800 leading-relaxed max-w-md mx-auto">
                  We have received your message. Our Farm Care specialist will respond via WhatsApp or email shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-full bg-[#310048] hover:bg-[#4A0868] text-white font-bold text-xs uppercase tracking-wider cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-black uppercase tracking-wider text-[#310048]">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Kumar"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-[#DFCFA8] text-xs font-semibold text-slate-900 focus:outline-none focus:border-[#310048]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-black uppercase tracking-wider text-[#310048]">
                      Phone / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +91 9876543210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-[#DFCFA8] text-xs font-semibold text-slate-900 focus:outline-none focus:border-[#310048]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-black uppercase tracking-wider text-[#310048]">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. ramesh@gmail.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-[#DFCFA8] text-xs font-semibold text-slate-900 focus:outline-none focus:border-[#310048]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-black uppercase tracking-wider text-[#310048]">
                      Inquiry Type
                    </label>
                    <select
                      value={formData.inquiryType}
                      onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-[#DFCFA8] text-xs font-semibold text-slate-900 focus:outline-none focus:border-[#310048]"
                    >
                      <option value="general">General Product Question</option>
                      <option value="order">Order Tracking & Support</option>
                      <option value="wholesale">Bulk & Corporate Gifting</option>
                      <option value="farm-visit">Schedule a Farm Estate Visit</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-black uppercase tracking-wider text-[#310048]">
                    Your Message *
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="How can we help you today?"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[#DFCFA8] text-xs font-semibold text-slate-900 focus:outline-none focus:border-[#310048]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-full bg-[#310048] hover:bg-[#4A0868] text-white font-extrabold text-xs uppercase tracking-[0.2em] shadow-md hover:shadow-lg transition-all cursor-pointer"
                >
                  SUBMIT INQUIRY ✉️
                </button>
              </form>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
