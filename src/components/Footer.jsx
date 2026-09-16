import React, { useState } from 'react'
import { 
  Heart, 
  Send, 
  Phone, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  Award, 
  Leaf, 
  CheckCircle2,
  MessageCircle
} from 'lucide-react'
import footerBgImg from '../assets/images/footer_bg.jpg'
import logoImg from '../assets/images/logo.png'

export default function Footer({ onNavigateCategory, onNavigateHome }) {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (!email) return
    setSubscribed(true)
    setEmail('')
    setTimeout(() => setSubscribed(false), 5000)
  }

  const categories = [
    { id: 'ghee', name: 'Vedic A2 Desi Ghee', href: '#category/ghee' },
    { id: 'honey', name: 'Raw Forest Honey', href: '#category/honey' },
    { id: 'spices', name: 'Lakadong Spices', href: '#category/spices' },
    { id: 'super-foods', name: 'Amlaprash & Super Foods', href: '#category/super-foods' },
    { id: 'cold-pressed-oils', name: 'Wood Pressed Oils', href: '#category/cold-pressed-oils' },
    { id: 'natural-sweeteners', name: 'Natural Sweeteners', href: '#category/natural-sweeteners' },
    { id: 'protein-bars', name: 'Clean Protein Bars', href: '#category/protein-bars' },
    { id: 'non-veg-pickles', name: 'Artisanal Pickles', href: '#category/non-veg-pickles' }
  ]

  const quickLinks = [
    { name: 'About Anvi Farms', href: '#about' },
    { name: 'Our Goshala & Gir Cows', href: '#goshala' },
    { name: 'Lab Reports & Certifications', href: '#reports' },
    { name: 'Generational Traditions', href: '#traditions' },
    { name: 'Track Your Order', href: '#track' },
    { name: 'Shipping & Returns', href: '#shipping' },
    { name: 'Privacy Policy', href: '#privacy' },
    { name: 'Terms of Service', href: '#terms' }
  ]

  return (
    <footer 
      className="relative mt-auto bg-cover bg-bottom bg-no-repeat pt-14 sm:pt-20 pb-6 overflow-hidden text-gray-800"
      style={{
        backgroundImage: `url(${footerBgImg})`,
        backgroundPosition: 'bottom center',
        backgroundSize: 'cover',
        backgroundColor: '#ffffff'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-16 sm:pb-28">
          {/* Col 1: Brand Logo & Bio (4 cols) */}
          <div className="lg:col-span-4 pl-6 sm:pl-10 lg:pl-12 space-y-4">
            <div className="flex items-center">
              <a 
                href="#home" 
                onClick={(e) => {
                  if (onNavigateHome) {
                    e.preventDefault()
                    onNavigateHome()
                  }
                }}
                className="cursor-pointer"
              >
                <img 
                  src={logoImg} 
                  alt="Anvi Farms Logo" 
                  className="h-24 sm:h-28 w-auto object-contain drop-shadow-sm hover:scale-105 transition-transform" 
                />
              </a>
            </div>

            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed max-w-sm">
              Cultivating pure, unadulterated farm produce through regenerative agriculture, indigenous Gir cow goshala, and ancestral Vedic preparations with zero chemicals.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3.5 pt-2">
              <a 
                href="#instagram" 
                aria-label="Instagram"
                className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/95 border border-gray-200 text-[#2D0345] hover:bg-[#2D0345] hover:text-white flex items-center justify-center transition-all shadow-xs hover:scale-105"
              >
                <svg className="w-5.5 h-5.5 sm:w-6 sm:h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a 
                href="#facebook" 
                aria-label="Facebook"
                className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/95 border border-gray-200 text-[#2D0345] hover:bg-[#2D0345] hover:text-white flex items-center justify-center transition-all shadow-xs hover:scale-105"
              >
                <svg className="w-5.5 h-5.5 sm:w-6 sm:h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a 
                href="#youtube" 
                aria-label="YouTube"
                className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/95 border border-gray-200 text-[#2D0345] hover:bg-[#2D0345] hover:text-white flex items-center justify-center transition-all shadow-xs hover:scale-105"
              >
                <svg className="w-5.5 h-5.5 sm:w-6 sm:h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a 
                href="#whatsapp" 
                aria-label="WhatsApp"
                className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/95 border border-gray-200 text-[#404D1A] hover:bg-[#404D1A] hover:text-white flex items-center justify-center transition-all shadow-xs hover:scale-105"
              >
                <MessageCircle className="w-5.5 h-5.5 sm:w-6 sm:h-6 stroke-[2.2]" />
              </a>
            </div>
          </div>

          {/* Col 2: Shop Categories (3 cols) */}
          <div className="lg:col-span-3 md:pl-6 lg:pl-16 space-y-3">
            <h4 className="text-xs sm:text-sm font-black text-[#2D0345] uppercase tracking-wider">
              Shop Categories
            </h4>
            <ul className="space-y-2 text-xs font-semibold text-gray-700">
              {categories.map((cat, idx) => (
                <li key={idx}>
                  <a 
                    href={cat.href} 
                    onClick={(e) => {
                      if (onNavigateCategory) {
                        e.preventDefault()
                        onNavigateCategory(cat.id)
                      }
                    }}
                    className="hover:text-[#2D0345] hover:underline inline-block transition-colors cursor-pointer"
                  >
                    {cat.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs sm:text-sm font-black text-[#2D0345] uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs font-semibold text-gray-700">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <a 
                    href={link.href} 
                    className="hover:text-[#2D0345] hover:underline inline-block transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Newsletter & Contact (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <div>
              <h4 className="text-xs sm:text-sm font-black text-[#2D0345] uppercase tracking-wider">
                Farm Newsletter
              </h4>
              <p className="text-xs text-gray-600 mt-1 font-medium">
                Receive fresh harvest updates, organic recipes & farm stories.
              </p>
            </div>

            {/* Newsletter Input */}
            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email" 
                  required
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 bg-white/95 text-xs text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#2D0345] focus:ring-2 focus:ring-[#2D0345]/15 shadow-2xs pr-10"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="absolute right-1.5 top-1/2 -translate-y-1/2 w-7 h-7 rounded-lg bg-[#2D0345] text-white flex items-center justify-center transition-opacity hover:opacity-90 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
              {subscribed && (
                <div className="flex items-center gap-1.5 text-[11px] font-semibold text-[#404D1A] bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Thank you for subscribing!</span>
                </div>
              )}
            </form>

            {/* Contact Details */}
            <div className="pt-2 space-y-2 text-xs text-gray-700">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#2D0345] shrink-0" />
                <span className="font-bold">+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#2D0345] shrink-0" />
                <span className="font-semibold">care@anvifarms.com</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#2D0345] shrink-0 mt-0.5" />
                <span className="font-medium">Anvi Farms, Eco-Agro Valley, Telangana / Karnataka, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Divider & Copyright */}
        <div className="pt-4">
          <div className="bg-white/85 backdrop-blur-xs px-4 py-2.5 rounded-xl border border-gray-200/60 shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-800 font-medium">
            <div className="flex items-center gap-2">
              <span className="font-black text-[#2D0345]">Anvi Farms</span>
              <span>•</span>
              <span className="font-bold text-[#404D1A]">Good Food, Brighter Tomorrow</span>
            </div>

            <p className="text-center sm:text-right text-[11px] text-gray-600">
              © {new Date().getFullYear()} Anvi Farms Private Limited. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
