import desiGheeImg from '../assets/images/desi_ghee.jpg'
import buffaloGheeImg from '../assets/images/buffalo_ghee.jpg'
import honeyImg from '../assets/images/honey.jpg'
import spicesImg from '../assets/images/spices.jpg'
import amlaprashImg from '../assets/images/amlaprash.jpg'
import coldPressedOilImg from '../assets/images/cold_pressed_oil.jpg'
import naturalSweetenerImg from '../assets/images/natural_sweetener.jpg'
import proteinBarImg from '../assets/images/protein_bar.jpg'
import chickenPickleImg from '../assets/images/chicken_pickle.jpg'

// Banner imports
import banner1Img from '../assets/images/banner1.jpg'
import banner2Img from '../assets/images/banner2.jpg'
import banner3Img from '../assets/images/banner3.jpg'
import spicesBanner from '../assets/images/spices.png'
import superfoodsBanner from '../assets/images/super-food.png'
import naturalBanner from '../assets/images/natural-banner.jpg'
import proteinBarsBanner from '../assets/images/protein-bars.jpg'
import nonVegPicklesBanner from '../assets/images/non-veg-pickels.jpg'

export const CATEGORIES = [
  {
    id: 'ghee',
    title: 'Ghee',
    subtitle: 'Cultured A2 Gir Cow & Buffalo Bilona Ghee',
    description: 'Slow-churned in clay pots during Brahmamuhurta using Vedic curd fermentation. 100% pure A2 beta-casein, grain-textured (Danedar), and free from preservatives.',
    badge: 'Vedic Bilona',
    image: desiGheeImg,
    banner: banner1Img,
    highlights: ['Vedic Bilona Method', '100% A2 Gir Cow Milk', 'Zero Preservatives', 'Clay Pot Churned'],
    productCount: 4
  },
  {
    id: 'honey',
    title: 'Honey',
    subtitle: '100% Raw Wild Forest & Single-Origin Honey',
    description: 'Direct from wild bee apiaries in pristine reserve forests. Completely raw, unheated, unpasteurized, NMR tested for zero adulteration and rich in active pollen enzymes.',
    badge: 'Raw & NMR Tested',
    image: honeyImg,
    banner: banner2Img,
    highlights: ['100% NMR Tested Pure', 'Unheated & Raw', 'Wild Forest Sourced', 'Active Natural Pollen'],
    productCount: 4
  },
  {
    id: 'spices',
    title: 'Spices',
    subtitle: 'High Curcumin Lakadong & Single-Origin Spices',
    description: 'Grown sustainably in pristine hills, harvested at peak potency, and stone-ground at low temperatures to preserve volatile aromatic oils and medicinal curcumin.',
    badge: 'High Curcumin',
    image: spicesImg,
    banner: spicesBanner,
    highlights: ['High Curcumin (7-9%)', 'Single-Origin Harvest', 'Stone Ground Low Heat', 'Zero Chemical Colors'],
    productCount: 6
  },
  {
    id: 'super-foods',
    title: 'Super Foods',
    subtitle: 'Vedic Amlaprash, Chyawanprash & Herbal Rasayanas',
    description: 'Handcrafted according to Charaka Samhita with wild amla, raw forest honey, A2 ghee, and over 40 synergistic botanical herbs for generational vitality.',
    badge: 'Ancestral Immunity',
    image: amlaprashImg,
    banner: superfoodsBanner,
    highlights: ['40+ Ayurvedic Herbs', 'Wild Forest Amla Base', 'A2 Ghee & Raw Honey', 'Ancestral Immunity'],
    productCount: 5
  },
  {
    id: 'cold-pressed-oils',
    title: 'Cold Pressed Oils',
    subtitle: 'Wood Pressed (Marachekku/Kolhu) Kachi Ghani Oils',
    description: 'Slow-pressed in traditional wooden churns without heat or chemical solvents. Retains natural vitamin E, heart-healthy antioxidants, and deep authentic flavor.',
    badge: 'Wood Pressed',
    image: coldPressedOilImg,
    banner: banner3Img,
    highlights: ['Traditional Wood Churned', 'Cold Extracted (No Heat)', 'Zero Chemical Solvents', 'Rich in Vitamin E'],
    productCount: 4
  },
  {
    id: 'natural-sweeteners',
    title: 'Natural Sweeteners',
    subtitle: 'Chemical-Free Desi Khand, Jaggery & Kakvi',
    description: 'Made from native heirloom sugarcane using age-old boiling and clarifying methods with zero sulfur, bleach, or synthetic refining agents.',
    badge: 'Zero Sulphur',
    image: naturalSweetenerImg,
    banner: naturalBanner,
    highlights: ['100% Sulphur-Free', 'Heirloom Native Cane', 'Natural Minerals Intact', 'Unrefined & Pure'],
    productCount: 3
  },
  {
    id: 'protein-bars',
    title: 'Protein Bars',
    subtitle: 'Cold-Pressed Seeds, Nuts & Raw Honey Energy Bars',
    description: 'Wholesome artisanal energy bars crafted with cold-processed nuts, seeds, raw forest honey, and ancient grains. Zero isolate powders or artificial binding agents.',
    badge: 'Clean Nutrition',
    image: proteinBarImg,
    banner: proteinBarsBanner,
    highlights: ['Clean Whole Foods', 'Raw Forest Honey Bound', 'Zero Whey Isolates', 'High Fibre & Seeds'],
    productCount: 4
  },
  {
    id: 'non-veg-pickles',
    title: 'Non-Veg Pickles',
    subtitle: 'Artisanal Country Chicken & Grandmother\'s Spice Blends',
    description: 'Made with free-range country meat, sun-dried mountain spices, and cold-pressed sesame oil. Prepared in small batches with ancestral home kitchen traditions.',
    badge: 'Artisanal Batch',
    image: chickenPickleImg,
    banner: nonVegPicklesBanner,
    highlights: ['Free Range Meat', 'Cold-Pressed Sesame Oil', 'Sun-Dried Spices', 'Grandmother Recipe'],
    productCount: 2
  }
]

export const ALL_PRODUCTS = [
  // 1. GHEE CATEGORY
  {
    id: 'ghee-1',
    categoryId: 'ghee',
    categoryName: 'Ghee',
    tag: 'BEST SELLER',
    tagBg: 'bg-[#2D0345]',
    title: 'Desi Gir Cow Cultured A2 Ghee',
    subtitle: 'Bilona-made | Certified Vedic A2 | Clay Pot Churned',
    description: 'Handcrafted from grass-fed indigenous Gir cows. Cultured into whole curd overnight and churned in wooden Bilona at Brahmamuhurta. Danedar golden texture with rich aroma.',
    image: desiGheeImg,
    rating: '4.9',
    reviews: '2.4k+ Reviews',
    badge: 'Vedic A2',
    variants: [
      { label: '1000 ml (Glass Jar)', price: 3595, originalPrice: 3999 },
      { label: '500 ml (Glass Jar)', price: 1850, originalPrice: 2100 },
      { label: '250 ml (Glass Jar)', price: 950, originalPrice: 1100 }
    ]
  },
  {
    id: 'ghee-2',
    categoryId: 'ghee',
    categoryName: 'Ghee',
    tag: 'TRADITIONAL',
    tagBg: 'bg-[#404D1A]',
    title: 'Cultured Indigenous Buffalo Ghee',
    subtitle: 'Grass-Fed Murrah Buffalo | Traditional Bilona',
    description: 'Rich, aromatic white granular ghee prepared through traditional curd churning of pasture-grazed Murrah buffalos. High smoke point and deep Ayurvedic nourishment.',
    image: buffaloGheeImg || desiGheeImg,
    rating: '4.8',
    reviews: '1.2k+ Reviews',
    badge: 'Grass-Fed',
    variants: [
      { label: '1000 ml (Glass Jar)', price: 1950, originalPrice: 2200 },
      { label: '500 ml (Glass Jar)', price: 1050, originalPrice: 1200 }
    ]
  },
  {
    id: 'ghee-3',
    categoryId: 'ghee',
    categoryName: 'Ghee',
    tag: 'MEDHYA RASAYANA',
    tagBg: 'bg-[#2D0345]',
    title: 'Brahmi Infused Vedic A2 Gir Ghee',
    subtitle: 'Medhya Herb Infused | Memory & Sleep Support',
    description: 'Authentic A2 Gir cow ghee slow-infused with fresh wild-harvested Brahmi leaves. Enhances cognitive clarity, nervous system relaxation, and deep restorative sleep.',
    image: desiGheeImg,
    rating: '4.9',
    reviews: '850+ Reviews',
    badge: 'Herb Infused',
    variants: [
      { label: '500 ml (Glass Jar)', price: 2250, originalPrice: 2500 },
      { label: '250 ml (Glass Jar)', price: 1200, originalPrice: 1350 }
    ]
  },
  {
    id: 'ghee-4',
    categoryId: 'ghee',
    categoryName: 'Ghee',
    tag: 'ANCESTRAL',
    tagBg: 'bg-[#D97706]',
    title: 'Organic Danedar A2 Cow Ghee (Panchgavya Batch)',
    subtitle: 'Single Herd | Hand-Churned Artisanal Batch',
    description: 'Small-batch golden ghee prepared exclusively during auspicious lunar phases. Rich in butyric acid and fat-soluble vitamins A, D, E, and K2.',
    image: desiGheeImg,
    rating: '4.9',
    reviews: '960+ Reviews',
    badge: 'Single Herd',
    variants: [
      { label: '1000 ml (Glass Jar)', price: 3750, originalPrice: 4200 },
      { label: '500 ml (Glass Jar)', price: 1950, originalPrice: 2200 }
    ]
  },

  // 2. HONEY CATEGORY
  {
    id: 'honey-1',
    categoryId: 'honey',
    categoryName: 'Honey',
    tag: 'PURE & RAW',
    tagBg: 'bg-[#D97706]',
    title: 'Raw Wild Forest Honey',
    subtitle: 'Unpasteurized | NMR 100% Pure | Unprocessed',
    description: 'Harvested ethically by tribal foragers from deep reserve forests. Packed with active bee pollen, natural propolis, and live digestive enzymes without micro-filtration.',
    image: honeyImg,
    rating: '4.9',
    reviews: '1.6k+ Reviews',
    badge: 'NMR Tested',
    variants: [
      { label: '500 g', price: 650, originalPrice: 750 },
      { label: '1 kg', price: 1200, originalPrice: 1400 },
      { label: '250 g', price: 350, originalPrice: 400 }
    ]
  },
  {
    id: 'honey-2',
    categoryId: 'honey',
    categoryName: 'Honey',
    tag: 'SINGLE ORIGIN',
    tagBg: 'bg-[#2D0345]',
    title: 'Raw Sheesham (Rosewood) Honey',
    subtitle: 'Single Floral | Rich Dark Amber & Caramel Undertones',
    description: 'Monofloral raw honey collected during the spring Sheesham blooming season. Known for its distinct woody caramel profile and potent soothing properties.',
    image: honeyImg,
    rating: '4.8',
    reviews: '740+ Reviews',
    badge: 'Single Floral',
    variants: [
      { label: '500 g', price: 690, originalPrice: 800 },
      { label: '1 kg', price: 1290, originalPrice: 1500 }
    ]
  },
  {
    id: 'honey-3',
    categoryId: 'honey',
    categoryName: 'Honey',
    tag: 'NATURAL DELIGHT',
    tagBg: 'bg-[#404D1A]',
    title: 'Raw Wild Acacia Forest Honey',
    subtitle: 'Light Golden | Low Glycemic & Mild Floral Sweetness',
    description: 'Delicate, clear acacia nectar that resists natural crystallization. Gentle on digestion and rich in prebiotic oligosaccharides for gut flora.',
    image: honeyImg,
    rating: '4.9',
    reviews: '920+ Reviews',
    badge: 'Low Glycemic',
    variants: [
      { label: '500 g', price: 720, originalPrice: 850 },
      { label: '1 kg', price: 1350, originalPrice: 1600 }
    ]
  },
  {
    id: 'honey-4',
    categoryId: 'honey',
    categoryName: 'Honey',
    tag: 'IMMUNITY',
    tagBg: 'bg-[#D97706]',
    title: 'Tulsi & Ginger Infused Raw Honey',
    subtitle: 'Wild Forest Honey with Fresh Holy Basil & Sun-Dried Sonth',
    description: 'Cold-infused with bio-active Krishna Tulsi and organic ginger. The ideal seasonal companion for throat relief, respiratory wellness, and daily vitality.',
    image: honeyImg,
    rating: '4.8',
    reviews: '510+ Reviews',
    badge: 'Tulsi Infused',
    variants: [
      { label: '500 g', price: 780, originalPrice: 900 },
      { label: '250 g', price: 420, originalPrice: 500 }
    ]
  },

  // 3. SPICES CATEGORY
  {
    id: 'spices-1',
    categoryId: 'spices',
    categoryName: 'Spices',
    tag: '8%+ CURCUMIN',
    tagBg: 'bg-[#D97706]',
    title: 'High Curcumin Lakadong Turmeric Powder',
    subtitle: 'Meghalaya Single Origin | Tested 8.2% Curcumin',
    description: 'Grown organically in the Jaintia Hills of Meghalaya. Tested for exceptional curcumin concentration. Cold stone ground to preserve vital essential oils.',
    image: spicesImg,
    rating: '4.9',
    reviews: '3.1k+ Reviews',
    badge: '8.2% Curcumin',
    variants: [
      { label: '250 g', price: 340, originalPrice: 400 },
      { label: '500 g', price: 620, originalPrice: 750 },
      { label: '1 kg', price: 1150, originalPrice: 1350 }
    ]
  },
  {
    id: 'spices-2',
    categoryId: 'spices',
    categoryName: 'Spices',
    tag: 'EXTRA BOLD',
    tagBg: 'bg-[#2D0345]',
    title: 'Single-Origin Malabar Tellicherry Black Peppercorns',
    subtitle: 'Extra Bold Grade TGSEB | Sun-Dried Whole Pepper',
    description: 'The highest grade Tellicherry black peppercorns from the Malabar coast. High piperine concentration with a deep pungent heat and complex fruity aroma.',
    image: spicesImg,
    rating: '4.9',
    reviews: '1.4k+ Reviews',
    badge: 'Grade 1 Bold',
    variants: [
      { label: '200 g', price: 390, originalPrice: 450 },
      { label: '500 g', price: 890, originalPrice: 1050 }
    ]
  },
  {
    id: 'spices-3',
    categoryId: 'spices',
    categoryName: 'Spices',
    tag: 'COLD GROUND',
    tagBg: 'bg-[#DC2626]',
    title: 'Guntur Sun-Dried Red Chilli Powder',
    subtitle: 'Whole Stemless Pods | Zero Color Adulteration',
    description: 'Sun-ripened red chillies stone-ground with seeds for balanced heat and natural crimson color without artificial dyes or mineral oil gloss.',
    image: spicesImg,
    rating: '4.8',
    reviews: '890+ Reviews',
    badge: '100% Pure',
    variants: [
      { label: '250 g', price: 240, originalPrice: 290 },
      { label: '500 g', price: 440, originalPrice: 520 }
    ]
  },
  {
    id: 'spices-4',
    categoryId: 'spices',
    categoryName: 'Spices',
    tag: 'ROYAL AROMA',
    tagBg: 'bg-[#404D1A]',
    title: 'Royal Green Cardamom (8mm+ Extra Bold)',
    subtitle: 'Idukki Hills Estate | Plump & Highly Aromatic',
    description: 'Handpicked jumbo green cardamom pods loaded with black oil-rich seeds. Sweet camphoraceous aroma ideal for sweets, chai, and curries.',
    image: spicesImg,
    rating: '4.9',
    reviews: '620+ Reviews',
    badge: 'Jumbo 8mm',
    variants: [
      { label: '100 g', price: 540, originalPrice: 650 },
      { label: '250 g', price: 1250, originalPrice: 1450 }
    ]
  },
  {
    id: 'spices-5',
    categoryId: 'spices',
    categoryName: 'Spices',
    tag: 'TRUE CINNAMON',
    tagBg: 'bg-[#B45309]',
    title: 'Ceylon Cinnamon Quills (Cinnamomum Verum)',
    subtitle: 'Ultra-Low Coumarin | Delicate Fragrance & Natural Sweetness',
    description: 'Soft layered true Ceylon cinnamon quills. Safe for daily wellness consumption with virtually zero toxic coumarin found in common Cassia bark.',
    image: spicesImg,
    rating: '4.9',
    reviews: '710+ Reviews',
    badge: 'Zero Cassia',
    variants: [
      { label: '100 g', price: 380, originalPrice: 450 },
      { label: '250 g', price: 850, originalPrice: 990 }
    ]
  },
  {
    id: 'spices-6',
    categoryId: 'spices',
    categoryName: 'Spices',
    tag: 'HEIRLOOM',
    tagBg: 'bg-[#404D1A]',
    title: 'Aromatic Desi Cumin Seeds (Jeera)',
    subtitle: 'Rajasthan Unpolished Harvest | High Essential Oils',
    description: 'Pesticide-free native cumin seeds with intense earthy flavor and high thymol content for optimal digestive kindle (Agni).',
    image: spicesImg,
    rating: '4.8',
    reviews: '480+ Reviews',
    badge: 'Unpolished',
    variants: [
      { label: '250 g', price: 290, originalPrice: 350 },
      { label: '500 g', price: 540, originalPrice: 650 }
    ]
  },

  // 4. SUPER FOODS CATEGORY
  {
    id: 'super-1',
    categoryId: 'super-foods',
    categoryName: 'Super Foods',
    tag: 'IMMUNITY',
    tagBg: 'bg-[#404D1A]',
    title: 'Amlaprash (Herbal Chyawanprash)',
    subtitle: '40+ Wild Herbs | Fresh Forest Amla & A2 Ghee Base',
    description: 'Slow-cooked according to classical Vedic formulations in iron Kadhais. Preserves bio-available vitamin C with wild honey and zero white sugar.',
    image: amlaprashImg,
    rating: '4.9',
    reviews: '1.8k+ Reviews',
    badge: 'Wild Amla',
    variants: [
      { label: '300 g', price: 675, originalPrice: 750 },
      { label: '500 g', price: 1050, originalPrice: 1200 },
      { label: '1 kg', price: 1950, originalPrice: 2200 }
    ]
  },
  {
    id: 'super-2',
    categoryId: 'super-foods',
    categoryName: 'Super Foods',
    tag: 'DIGESTIVE HEALTH',
    tagBg: 'bg-[#2D0345]',
    title: 'Pure Forest Triphala Churna',
    subtitle: 'Balanced 1:1:1 Ratio of Amla, Haritaki & Bibhitaki',
    description: 'Gentle whole-body detoxifier and colon cleanser prepared from shade-dried wild fruits without synthetic preservatives.',
    image: amlaprashImg,
    rating: '4.8',
    reviews: '930+ Reviews',
    badge: 'Wild Harvest',
    variants: [
      { label: '250 g', price: 280, originalPrice: 340 },
      { label: '500 g', price: 490, originalPrice: 590 }
    ]
  },
  {
    id: 'super-3',
    categoryId: 'super-foods',
    categoryName: 'Super Foods',
    tag: 'STRESS RELIEF',
    tagBg: 'bg-[#404D1A]',
    title: 'Organic Ashwagandha Root Powder (KSM Grade)',
    subtitle: 'Pure Withania Somnifera | Energy, Stamina & Calm',
    description: 'Potent adaptogen root powder to reduce cortisol, elevate stamina, and promote calm focused energy throughout the day.',
    image: amlaprashImg,
    rating: '4.9',
    reviews: '1.1k+ Reviews',
    badge: 'Adaptogen',
    variants: [
      { label: '200 g', price: 390, originalPrice: 460 },
      { label: '500 g', price: 850, originalPrice: 990 }
    ]
  },
  {
    id: 'super-4',
    categoryId: 'super-foods',
    categoryName: 'Super Foods',
    tag: 'SUPER GREEN',
    tagBg: 'bg-[#404D1A]',
    title: 'Sun-Dried Organic Moringa Leaf Powder',
    subtitle: '90+ Nutrients & 46 Antioxidants | Whole Green Food',
    description: 'Young tender drumstick leaves shade-dried to lock in chlorophyll, plant protein, iron, and calcium.',
    image: amlaprashImg,
    rating: '4.8',
    reviews: '670+ Reviews',
    badge: 'Raw Greens',
    variants: [
      { label: '200 g', price: 290, originalPrice: 350 },
      { label: '500 g', price: 590, originalPrice: 700 }
    ]
  },
  {
    id: 'super-5',
    categoryId: 'super-foods',
    categoryName: 'Super Foods',
    tag: 'GOLD GRADE',
    tagBg: 'bg-[#D97706]',
    title: 'Purified Himalayan Shilajit Resin (Gold Grade)',
    subtitle: '75%+ Fulvic Acid | 84+ Trace Minerals',
    description: 'Sourced from high-altitude Himalayan rock faces at 18,000+ ft. Tri-filtered through traditional water purification for maximum bioavailability.',
    image: amlaprashImg,
    rating: '5.0',
    reviews: '2.1k+ Reviews',
    badge: '75% Fulvic Acid',
    variants: [
      { label: '20 g Glass Jar', price: 1450, originalPrice: 1750 },
      { label: '50 g Glass Jar', price: 2950, originalPrice: 3500 }
    ]
  },

  // 5. COLD PRESSED OILS CATEGORY
  {
    id: 'oil-1',
    categoryId: 'cold-pressed-oils',
    categoryName: 'Cold Pressed Oils',
    tag: 'COLD PRESSED',
    tagBg: 'bg-[#B45309]',
    title: 'Wood Pressed Groundnut (Peanut) Oil',
    subtitle: 'Wood Pressed (Kolhu) | Unrefined & Chemical Free',
    description: 'Crushed at slow speed in Vaagai wood churns at ambient temperature under 40°C. Golden, sweet-tasting, and nutrient dense.',
    image: coldPressedOilImg,
    rating: '4.8',
    reviews: '980+ Reviews',
    badge: 'Wood Pressed',
    variants: [
      { label: '1 Litre (Tin)', price: 440, originalPrice: 500 },
      { label: '5 Litre (Tin)', price: 2100, originalPrice: 2400 },
      { label: '500 ml (Bottle)', price: 240, originalPrice: 280 }
    ]
  },
  {
    id: 'oil-2',
    categoryId: 'cold-pressed-oils',
    categoryName: 'Cold Pressed Oils',
    tag: 'KACHI GHANI',
    tagBg: 'bg-[#D97706]',
    title: 'Wood Pressed Yellow Mustard Oil',
    subtitle: 'Pungent Mustard Seeds | Stone Crushed Traditional',
    description: 'Milder than black mustard with a golden glow and pure pungency. Zero argemone oil adulteration, perfect for daily Indian cooking.',
    image: coldPressedOilImg,
    rating: '4.9',
    reviews: '810+ Reviews',
    badge: 'Kachi Ghani',
    variants: [
      { label: '1 Litre (Tin)', price: 390, originalPrice: 450 },
      { label: '5 Litre (Tin)', price: 1850, originalPrice: 2150 }
    ]
  },
  {
    id: 'oil-3',
    categoryId: 'cold-pressed-oils',
    categoryName: 'Cold Pressed Oils',
    tag: 'EXTRA VIRGIN',
    tagBg: 'bg-[#404D1A]',
    title: 'Cold Pressed Extra Virgin Coconut Oil',
    subtitle: 'Fresh Coconut Milk Extracted | Raw & Edible Grade',
    description: 'Centrifuged cold extraction from freshly grated wet coconuts within 2 hours of opening. Crystal clear with a light tropical scent and high Lauric acid.',
    image: coldPressedOilImg,
    rating: '4.9',
    reviews: '1.3k+ Reviews',
    badge: 'Centrifuged',
    variants: [
      { label: '500 ml (Glass Bottle)', price: 480, originalPrice: 560 },
      { label: '1 Litre (Tin)', price: 890, originalPrice: 1050 }
    ]
  },
  {
    id: 'oil-4',
    categoryId: 'cold-pressed-oils',
    categoryName: 'Cold Pressed Oils',
    tag: 'HIGH CALCIUM',
    tagBg: 'bg-[#2D0345]',
    title: 'Wood Pressed Black Sesame (Til) Oil',
    subtitle: 'Native Heirloom Sesame | Raw Wooden Mill Extracted',
    description: 'Extracted from native black sesame seeds. High in sesamol, sesamolin, and calcium, revered in Ayurveda for cooking and Abhyanga massage.',
    image: coldPressedOilImg,
    rating: '4.8',
    reviews: '570+ Reviews',
    badge: 'Black Sesame',
    variants: [
      { label: '500 ml (Bottle)', price: 490, originalPrice: 570 },
      { label: '1 Litre (Tin)', price: 920, originalPrice: 1090 }
    ]
  },

  // 6. NATURAL SWEETENERS CATEGORY
  {
    id: 'sweetener-1',
    categoryId: 'natural-sweeteners',
    categoryName: 'Natural Sweeteners',
    tag: 'UNREFINED',
    tagBg: 'bg-[#D97706]',
    title: 'Organic Desi Khand (Raw Cane Sugar)',
    subtitle: 'Traditional Desi Bilona Method | Zero Bleach & Bone Char',
    description: 'Unrefined, naturally cooled cane sugar crystal loaded with vital molasses minerals. The healthiest direct substitute for white refined sugar in beverages and sweets.',
    image: naturalSweetenerImg,
    rating: '4.9',
    reviews: '1.5k+ Reviews',
    badge: 'Zero Sulphur',
    variants: [
      { label: '1 kg Pack', price: 180, originalPrice: 220 },
      { label: '2 kg Pack', price: 340, originalPrice: 420 },
      { label: '5 kg Pack', price: 790, originalPrice: 990 }
    ]
  },
  {
    id: 'sweetener-2',
    categoryId: 'natural-sweeteners',
    categoryName: 'Natural Sweeteners',
    tag: 'MINERAL RICH',
    tagBg: 'bg-[#B45309]',
    title: 'Organic Desi Jaggery Powder (Gur Shakkar)',
    subtitle: 'Wild Okra Clarified | High Natural Iron & Magnesium',
    description: 'Fine golden jaggery powder made from whole sugarcane juice clarified with botanical plant extracts instead of harmful chemical soda.',
    image: naturalSweetenerImg,
    rating: '4.9',
    reviews: '1.2k+ Reviews',
    badge: 'No Soda Added',
    variants: [
      { label: '1 kg Pack', price: 195, originalPrice: 240 },
      { label: '3 kg Pack', price: 540, originalPrice: 680 }
    ]
  },
  {
    id: 'sweetener-3',
    categoryId: 'natural-sweeteners',
    categoryName: 'Natural Sweeteners',
    tag: 'TRADITIONAL',
    tagBg: 'bg-[#2D0345]',
    title: 'Liquid Jaggery Syrup (Kakvi)',
    subtitle: 'Concentrated Cane Nectar | Rich Dark Caramel',
    description: 'Pure sugarcane molasses concentrate extracted at the first boil. Natural digestive digestive tonic packed with bioavailable iron.',
    image: naturalSweetenerImg,
    rating: '4.8',
    reviews: '430+ Reviews',
    badge: 'Liquid Jaggery',
    variants: [
      { label: '500 ml Glass Jar', price: 260, originalPrice: 320 },
      { label: '1 Litre Glass Bottle', price: 490, originalPrice: 590 }
    ]
  },

  // 7. PROTEIN BARS CATEGORY
  {
    id: 'bar-1',
    categoryId: 'protein-bars',
    categoryName: 'Protein Bars',
    tag: '12G PROTEIN',
    tagBg: 'bg-[#404D1A]',
    title: 'Spiced Almond & Pumpkin Seed Protein Bar',
    subtitle: 'Cold Processed | 100% Whole Food Clean Protein',
    description: 'Rich roasted Mamra almonds, pumpkin seeds, raw forest honey, and green cardamom. Zero soy isolate, palm oil, or artificial sweeteners.',
    image: proteinBarImg,
    rating: '4.8',
    reviews: '640+ Reviews',
    badge: '12g Protein',
    variants: [
      { label: 'Box of 6 Bars (300g)', price: 450, originalPrice: 540 },
      { label: 'Box of 12 Bars (600g)', price: 850, originalPrice: 1050 }
    ]
  },
  {
    id: 'bar-2',
    categoryId: 'protein-bars',
    categoryName: 'Protein Bars',
    tag: 'ZERO ADDED SUGAR',
    tagBg: 'bg-[#D97706]',
    title: 'Fig, Date & Wild Honey Energy Bar',
    subtitle: 'Natural Dried Anjeer & Medjool Dates | Sustained Energy',
    description: 'Naturally sweet and chewy bar packed with dried figs, organic chia seeds, and raw honey for clean pre-workout stamina.',
    image: proteinBarImg,
    rating: '4.9',
    reviews: '790+ Reviews',
    badge: 'No Cane Sugar',
    variants: [
      { label: 'Box of 6 Bars (300g)', price: 480, originalPrice: 580 },
      { label: 'Box of 12 Bars (600g)', price: 890, originalPrice: 1100 }
    ]
  },
  {
    id: 'bar-3',
    categoryId: 'protein-bars',
    categoryName: 'Protein Bars',
    tag: 'DARK CACAO',
    tagBg: 'bg-[#2D0345]',
    title: 'Raw Cacao & Roasted Hazelnut Clean Bar',
    subtitle: 'Single Origin Cacao Nibs | Antioxidant Rich Snack',
    description: 'Rich dark cacao paired with crunchy roasted hazelnuts and a touch of Himalayan pink salt for an indulgent yet clean snack.',
    image: proteinBarImg,
    rating: '4.8',
    reviews: '520+ Reviews',
    badge: 'Rich Cacao',
    variants: [
      { label: 'Box of 6 Bars (300g)', price: 510, originalPrice: 620 },
      { label: 'Box of 12 Bars (600g)', price: 950, originalPrice: 1200 }
    ]
  },
  {
    id: 'bar-4',
    categoryId: 'protein-bars',
    categoryName: 'Protein Bars',
    tag: 'VEDIC ENERGY',
    tagBg: 'bg-[#404D1A]',
    title: 'Chia, Flax & A2 Gir Ghee Superfood Bar',
    subtitle: 'Omega-3 Rich Seeds Bound with Cultured A2 Bilona Ghee',
    description: 'Ancient Ayurvedic stamina recipe combining roasted flax, chia, and amaranth bound delicately with pure Gir cow Bilona ghee.',
    image: proteinBarImg,
    rating: '4.9',
    reviews: '430+ Reviews',
    badge: 'Omega-3 Rich',
    variants: [
      { label: 'Box of 6 Bars (300g)', price: 540, originalPrice: 650 },
      { label: 'Box of 12 Bars (600g)', price: 990, originalPrice: 1250 }
    ]
  },

  // 8. NON-VEG PICKLES CATEGORY
  {
    id: 'pickle-1',
    categoryId: 'non-veg-pickles',
    categoryName: 'Non-Veg Pickles',
    tag: 'ARTISANAL BATCH',
    tagBg: 'bg-[#DC2626]',
    title: 'Artisanal Country Chicken Pickle (Gongura Style)',
    subtitle: 'Free-Range Country Chicken | Cold-Pressed Sesame Oil Base',
    description: 'Traditional Andhra-style boneless country chicken pickle slowly cooked with tangy Gongura leaves, stone-ground Guntur chillies, and ginger garlic.',
    image: chickenPickleImg,
    rating: '4.9',
    reviews: '1.4k+ Reviews',
    badge: 'Country Chicken',
    variants: [
      { label: '250 g Glass Jar', price: 420, originalPrice: 500 },
      { label: '500 g Glass Jar', price: 790, originalPrice: 950 },
      { label: '1 kg Glass Jar', price: 1490, originalPrice: 1800 }
    ]
  },
  {
    id: 'pickle-2',
    categoryId: 'non-veg-pickles',
    categoryName: 'Non-Veg Pickles',
    tag: 'SLOW ROASTED',
    tagBg: 'bg-[#2D0345]',
    title: 'Boneless Mutton Sukka Artisanal Pickle',
    subtitle: 'Tender Grass-Fed Mutton | 21 Whole Mountain Spices',
    description: 'Slow-cooked succulent boneless mutton marinated in mountain spices, cold pressed sesame oil, and organic lemon juice with zero artificial preservatives.',
    image: chickenPickleImg,
    rating: '4.9',
    reviews: '880+ Reviews',
    badge: 'Tender Mutton',
    variants: [
      { label: '250 g Glass Jar', price: 540, originalPrice: 650 },
      { label: '500 g Glass Jar', price: 990, originalPrice: 1200 }
    ]
  }
]
