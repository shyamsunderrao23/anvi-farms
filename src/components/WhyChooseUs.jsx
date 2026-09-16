import React from 'react'
import { Sparkles } from 'lucide-react'

export default function WhyChooseUs() {
  const features = [
    {
      id: 1,
      title: 'Natural Goodness',
      description: 'Pure and wholesome farm products.',
      // Cow in lush green pasture
      illustration: (
        <svg viewBox="0 0 200 160" className="w-20 h-16 sm:w-24 sm:h-18 mx-auto drop-shadow-xs" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Background circular soft glow & leaves */}
          <ellipse cx="100" cy="115" rx="75" ry="32" fill="#2E3C14" />
          <path d="M45 125 C30 110 30 85 45 75 C60 90 60 115 45 125Z" fill="#556B2F" opacity="0.7" />
          <path d="M55 128 C45 118 45 100 55 90 C65 100 65 118 55 128Z" fill="#6B8E23" />
          <path d="M155 125 C170 110 170 85 155 75 C140 90 140 115 155 125Z" fill="#556B2F" opacity="0.7" />
          <path d="M145 128 C155 118 155 100 145 90 C135 100 135 118 145 128Z" fill="#6B8E23" />
          
          {/* Grass base */}
          <path d="M30 125 Q65 115 100 118 Q135 115 170 125 Q100 140 30 125Z" fill="#4B5E20" />
          <path d="M38 122 L42 108 L46 122 M50 120 L54 105 L58 120 M142 122 L146 106 L150 122 M154 120 L158 108 L162 120" stroke="#7BA038" strokeWidth="3" strokeLinecap="round" />
          
          {/* Cow Body */}
          <ellipse cx="108" cy="92" rx="34" ry="24" fill="#FFFFFF" />
          {/* Cow Back Leg L */}
          <rect x="80" y="98" width="7" height="24" rx="3.5" fill="#FFFFFF" />
          <rect x="80" y="118" width="7" height="5" rx="1.5" fill="#3D2B1F" />
          {/* Cow Back Leg R */}
          <rect x="91" y="96" width="7" height="26" rx="3.5" fill="#F0ECE1" />
          <rect x="91" y="118" width="7" height="5" rx="1.5" fill="#3D2B1F" />
          {/* Cow Front Leg L */}
          <rect x="122" y="98" width="7" height="24" rx="3.5" fill="#FFFFFF" />
          <rect x="122" y="118" width="7" height="5" rx="1.5" fill="#3D2B1F" />
          {/* Cow Front Leg R */}
          <rect x="133" y="96" width="7" height="26" rx="3.5" fill="#F0ECE1" />
          <rect x="133" y="118" width="7" height="5" rx="1.5" fill="#3D2B1F" />
          
          {/* Cow Spots (Brown patches) */}
          <path d="M90 78 C98 75 110 82 108 92 C106 100 92 102 86 94 C82 88 84 80 90 78 Z" fill="#6A381F" />
          <path d="M120 85 C128 84 135 90 132 98 C128 102 122 100 120 95 Z" fill="#6A381F" />
          {/* Cow Tail */}
          <path d="M75 88 C70 95 72 104 68 112" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
          <path d="M68 110 C66 114 65 117 67 119 C69 117 71 114 70 111 Z" fill="#6A381F" />

          {/* Cow Udder */}
          <ellipse cx="98" cy="110" rx="6" ry="4" fill="#FDB4B4" />

          {/* Cow Bell collar */}
          <path d="M136 84 C138 90 142 94 146 95" stroke="#7A3E1D" strokeWidth="3" strokeLinecap="round" />
          <circle cx="143" cy="96" r="3.5" fill="#D4AF37" />

          {/* Cow Head */}
          <ellipse cx="152" cy="74" rx="16" ry="14" fill="#FFFFFF" />
          {/* Cow Horns */}
          <path d="M144 64 C142 57 138 56 137 57 C139 61 143 65 145 66 Z" fill="#D4AF37" />
          <path d="M156 63 C159 56 163 56 164 57 C162 61 158 65 155 66 Z" fill="#D4AF37" />
          {/* Cow Ears */}
          <ellipse cx="138" cy="69" rx="7" ry="4" transform="rotate(-20 138 69)" fill="#FFFFFF" />
          <ellipse cx="138" cy="69" rx="5" ry="2.5" transform="rotate(-20 138 69)" fill="#FDB4B4" />
          <ellipse cx="166" cy="71" rx="7" ry="4" transform="rotate(20 166 71)" fill="#FFFFFF" />
          <ellipse cx="166" cy="71" rx="5" ry="2.5" transform="rotate(20 166 71)" fill="#FDB4B4" />
          {/* Cow Muzzle/Snout */}
          <ellipse cx="160" cy="80" rx="10" ry="7" fill="#FDB4B4" />
          <circle cx="157" cy="80" r="1.5" fill="#7A3E1D" />
          <circle cx="163" cy="80" r="1.5" fill="#7A3E1D" />
          {/* Cow Eyes */}
          <ellipse cx="147" cy="72" rx="2" ry="2.5" fill="#222222" />
          <circle cx="146.5" cy="71" r="0.8" fill="#FFFFFF" />
          <ellipse cx="155" cy="71" rx="2" ry="2.5" fill="#222222" />
          <circle cx="154.5" cy="70" r="0.8" fill="#FFFFFF" />
        </svg>
      )
    },
    {
      id: 2,
      title: 'From Our Farms',
      description: 'Sourced directly from our trusted farms.',
      // Farmhouse & Rolling green hills with sun
      illustration: (
        <svg viewBox="0 0 200 160" className="w-20 h-16 sm:w-24 sm:h-18 mx-auto drop-shadow-xs" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Circular mask / background glow */}
          <ellipse cx="100" cy="115" rx="75" ry="32" fill="#2E3C14" />
          <circle cx="100" cy="80" r="50" fill="#3D4F1B" opacity="0.85" />
          
          {/* Golden Sun */}
          <circle cx="128" cy="55" r="12" fill="#F6C343" />

          {/* Rolling Crop Fields */}
          <path d="M50 110 C70 95 130 95 150 110 C130 135 70 135 50 110 Z" fill="#5F7B27" />
          <path d="M40 120 C70 100 130 100 160 120 C140 145 60 145 40 120 Z" fill="#6F8F2D" />
          {/* Farm field crop furrow lines */}
          <path d="M75 130 Q100 115 108 98" stroke="#8CB638" strokeWidth="2" strokeDasharray="3 3" fill="none" />
          <path d="M100 135 Q106 120 112 98" stroke="#8CB638" strokeWidth="2" strokeDasharray="3 3" fill="none" />
          <path d="M125 130 Q116 115 115 98" stroke="#8CB638" strokeWidth="2" strokeDasharray="3 3" fill="none" />

          {/* Trees behind house */}
          <circle cx="82" cy="78" r="9" fill="#4B631E" />
          <circle cx="138" cy="78" r="8" fill="#4B631E" />
          <circle cx="148" cy="80" r="6" fill="#3D4F1B" />

          {/* Red Barn House */}
          {/* Main Body */}
          <polygon points="86,85 106,70 126,85 126,105 86,105" fill="#B34B38" />
          {/* Roof overhang */}
          <polygon points="83,86 106,68 129,86 126,89 106,72 86,89" fill="#FFFFFF" />
          {/* Barn Door / White X */}
          <rect x="98" y="90" width="16" height="15" fill="#FFFFFF" />
          <rect x="100" y="92" width="12" height="13" fill="#B34B38" />
          <line x1="100" y1="92" x2="112" y2="105" stroke="#FFFFFF" strokeWidth="1.5" />
          <line x1="112" y1="92" x2="100" y2="105" stroke="#FFFFFF" strokeWidth="1.5" />
          {/* Loft window */}
          <polygon points="106,75 102,80 110,80" fill="#FFFFFF" />

          {/* Side extension */}
          <polygon points="126,85 140,88 140,105 126,105" fill="#8F3827" />
          <rect x="130" y="93" width="6" height="6" fill="#F6C343" rx="1" />
        </svg>
      )
    },
    {
      id: 3,
      title: 'Traditional Methods',
      description: 'Prepared using time-tested traditional techniques.',
      // Traditional Clay Pot with wooden bilona churner & butter
      illustration: (
        <svg viewBox="0 0 200 160" className="w-20 h-16 sm:w-24 sm:h-18 mx-auto drop-shadow-xs" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Background circular soft glow & leaves */}
          <ellipse cx="100" cy="115" rx="75" ry="32" fill="#2E3C14" />
          <path d="M55 110 C45 95 48 80 58 72 C68 85 65 100 55 110Z" fill="#6B8E23" />
          <path d="M48 100 C38 88 40 75 50 68 C58 80 56 92 48 100Z" fill="#556B2F" opacity="0.8" />
          <path d="M145 110 C155 95 152 80 142 72 C132 85 135 100 145 110Z" fill="#6B8E23" />
          <path d="M152 100 C162 88 160 75 150 68 C142 80 144 92 152 100Z" fill="#556B2F" opacity="0.8" />

          {/* Wooden Churner Stick (Bilona Ravai) */}
          <rect x="110" y="40" width="8" height="42" rx="4" transform="rotate(12 110 40)" fill="#A7673C" stroke="#7A3E1D" strokeWidth="1" />
          <ellipse cx="120" cy="42" rx="5" ry="3" fill="#C98858" />

          {/* Clay Pot Shadow */}
          <ellipse cx="100" cy="120" rx="30" ry="8" fill="#24300E" />

          {/* Terracotta Clay Pot Body */}
          <ellipse cx="100" cy="98" rx="32" ry="24" fill="#A75328" />
          <ellipse cx="100" cy="95" rx="30" ry="22" fill="#BD6332" />
          <path d="M78 82 Q100 80 122 82 Q130 98 122 114 Q100 122 78 114 Q70 98 78 82Z" fill="#A75328" />
          
          {/* Pot Neck & Rim */}
          <path d="M84 80 Q100 78 116 80 L118 73 Q100 71 82 73 Z" fill="#8F3F1A" />
          <ellipse cx="100" cy="73" rx="18" ry="5" fill="#8F3F1A" />
          
          {/* Traditional White Folk Motifs on Pot */}
          <path d="M76 96 Q82 92 88 96 Q94 92 100 96 Q106 92 112 96 Q118 92 124 96" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.9" />
          <circle cx="82" cy="102" r="1.5" fill="#FFFFFF" opacity="0.8" />
          <circle cx="94" cy="102" r="1.5" fill="#FFFFFF" opacity="0.8" />
          <circle cx="106" cy="102" r="1.5" fill="#FFFFFF" opacity="0.8" />
          <circle cx="118" cy="102" r="1.5" fill="#FFFFFF" opacity="0.8" />

          {/* Fresh Wholesome White Butter/Curd Mound */}
          <ellipse cx="100" cy="72" rx="16" ry="6" fill="#FAF6EE" />
          <path d="M86 72 Q92 64 100 65 Q108 64 114 72 Q100 76 86 72Z" fill="#FFFFFF" />
          <circle cx="93" cy="69" r="3" fill="#FFFDF8" />
          <circle cx="106" cy="69" r="3.5" fill="#FFFDF8" />
          <circle cx="100" cy="67" r="4" fill="#FFFFFF" />
        </svg>
      )
    },
    {
      id: 4,
      title: 'Quality You Can Trust',
      description: "Carefully prepared for your family's well-being.",
      // Shield with dual leaves & natural assurance aura
      illustration: (
        <svg viewBox="0 0 200 160" className="w-20 h-16 sm:w-24 sm:h-18 mx-auto drop-shadow-xs" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Background circular soft glow & surrounding leaves */}
          <ellipse cx="100" cy="115" rx="75" ry="32" fill="#2E3C14" />
          
          {/* Radiating sparkles/pips */}
          <path d="M72 65 L66 60 M62 82 L54 82 M72 102 L64 108 M128 65 L134 60 M138 82 L146 82 M128 102 L136 108" stroke="#F6C343" strokeWidth="2.5" strokeLinecap="round" opacity="0.75" />
          
          {/* Laurel Leaves around shield */}
          <path d="M60 115 C52 100 56 85 68 76 C76 90 70 106 60 115Z" fill="#6B8E23" />
          <path d="M140 115 C148 100 144 85 132 76 C124 90 130 106 140 115Z" fill="#6B8E23" />
          <path d="M50 128 C42 118 45 105 56 98 C62 110 58 122 50 128Z" fill="#4B631E" />
          <path d="M150 128 C158 118 155 105 144 98 C138 110 142 122 150 128Z" fill="#4B631E" />

          {/* Shield Outer Border / Shadow */}
          <path d="M100 52 C118 52 134 56 134 76 C134 104 100 124 100 124 C100 124 66 104 66 76 C66 56 82 52 100 52Z" fill="#88A843" />
          
          {/* Shield Inner Plate */}
          <path d="M100 56 C115 56 129 60 129 77 C129 101 100 118 100 118 C100 118 71 101 71 77 C71 60 85 56 100 56Z" fill="#F8F6EB" />

          {/* Central Green Twin Leaves */}
          {/* Left Leaf */}
          <path d="M99 90 C84 88 80 72 87 64 C98 68 100 80 99 90Z" fill="#5F7B27" />
          <path d="M88 67 Q95 78 98 88" stroke="#8CB638" strokeWidth="1.5" strokeLinecap="round" fill="none" />
          {/* Right Leaf */}
          <path d="M99 90 C114 86 118 68 108 60 C98 66 98 78 99 90Z" fill="#789D2F" />
          <path d="M107 63 Q102 75 99 88" stroke="#A4CE4A" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        </svg>
      )
    }
  ]

  return (
    <section className="bg-[#364417] text-white py-5 sm:py-6 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Subtle background floating leaf accents */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <path d="M100,50 Q120,30 140,50 Q120,70 100,50 Z" fill="#88A843" transform="rotate(25 100 50)" />
          <path d="M90%,20% Q92%,15% 95%,20% Q92%,25% 90%,20% Z" fill="#88A843" transform="rotate(-30 900 200)" />
          <path d="M5%,80% Q7%,75% 10%,80% Q7%,85% 5%,80% Z" fill="#88A843" transform="rotate(45 50 800)" />
          <path d="M85%,75% Q87%,70% 90%,75% Q87%,80% 85%,75% Z" fill="#88A843" transform="rotate(-15 850 750)" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-10 text-center">
        {/* Eyebrow */}
        <p className="text-[10px] sm:text-[11px] font-semibold tracking-[0.25em] text-white/90 uppercase mb-1">
          WHY CHOOSE ANVI FARMS?
        </p>

        {/* Main Heading */}
        <h2 className="text-xl sm:text-2xl md:text-[26px] font-extrabold text-white tracking-tight mb-1.5">
          Pure Goodness You Can Trust
        </h2>

        {/* Decorative Leaf Divider */}
        <div className="flex items-center justify-center gap-2 mb-4 sm:mb-5">
          <div className="h-px w-8 sm:w-12 bg-white/30"></div>
          {/* Centered Organic Leaf Sprout */}
          <div className="text-lime-300 flex items-center gap-1">
            <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-lime-300" xmlns="http://www.w3.org/2000/svg">
              <path d="M17,8 C8,10 5.9,16.17 3.82,21.34 L5.71,22 L6.66,19.7 C7.14,19.87 7.64,20 8,20 C19,20 22,3 22,3 C21,5 14,5.25 9,6.25 C4,7.25 2,11.5 2,13.5 C2,15.5 3.75,17.25 3.75,17.25 C7,8 17,8 17,8 Z" />
            </svg>
          </div>
          <div className="h-px w-8 sm:w-12 bg-white/30"></div>
        </div>

        {/* 4 Feature Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-3">
          {features.map((feature) => (
            <div 
              key={feature.id} 
              className="flex flex-col items-center text-center group"
            >
              {/* Illustration with subtle hover lift */}
              <div className="mb-1 transition-transform duration-300 group-hover:scale-105">
                {feature.illustration}
              </div>

              {/* Title */}
              <h3 className="text-xs sm:text-sm font-bold text-white mb-0.5 tracking-normal">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-white/80 text-[11px] leading-tight max-w-[190px]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
