import { Product } from '../types/product';

export const PRODUCTS: Product[] = [
  {
    id: 'a2-desi-cow-ghee',
    name: 'A2 Desi Cow Bilona Ghee',
    tagline: 'Vedic Hand-Churned from Indigenous Gir Cows',
    category: 'ghee',
    rating: 4.9,
    reviewCount: 342,
    image: '/images/a2-ghee.jpg',
    description: 'Crafted using the ancient 5-step Vedic Bilona method from pure A2 milk of free-grazing Gir cows. Rich golden texture, granular aroma, and immense digestive benefits.',
    longDescription: 'Our A2 Desi Cow Ghee is prepared strictly following the traditional Bilona process: boiled whole A2 milk is set into curd, churned bi-directionally with wooden bilona to yield fresh makhan (butter), and slow-heated on low fire. Contains zero additives, zero preservatives, and zero synthetic hormones.',
    badge: 'Best Seller',
    process: 'Traditional 5-Step Vedic Bilona Churning from Curd',
    benefits: [
      'Boosts Immunity & Digestive Fire (Agni)',
      'Rich in A2 Beta-Casein Protein & Vitamin K2',
      'High Smoke Point ideal for Cooking & Ayurvedic Remedies',
      'Supports Healthy Brain Function & Joint Lubrication'
    ],
    labTested: true,
    labCertificateNo: 'FSSAI-LAB-2026-A2GHEE-994',
    variants: [
      { id: 'a2-ghee-250', name: '250 ml', price: 650, originalPrice: 750, inStock: true },
      { id: 'a2-ghee-500', name: '500 ml', price: 1250, originalPrice: 1400, inStock: true },
      { id: 'a2-ghee-1000', name: '1 Litre', price: 2350, originalPrice: 2700, inStock: true },
    ],
    reviews: [
      {
        id: 'r1',
        author: 'Dr. Rajesh Sharma',
        rating: 5,
        date: '2 weeks ago',
        comment: 'The aroma takes me back to my village home. Pure granular texture and genuine bilona taste. Outstanding quality!',
        verified: true,
        location: 'Hyderabad'
      },
      {
        id: 'r2',
        author: 'Ananya Reddy',
        rating: 5,
        date: '1 month ago',
        comment: 'Best A2 Ghee I have tried in India. Highly digestible and my kids love it on hot rotis.',
        verified: true,
        location: 'Bengaluru'
      }
    ]
  },
  {
    id: 'vedic-buffalo-ghee',
    name: 'Pure Vedic Buffalo Ghee',
    tagline: 'Hand-Churned Bilona Ghee from Murrah Buffaloes',
    category: 'ghee',
    rating: 4.8,
    reviewCount: 164,
    image: '/images/buffalo-ghee.jpg',
    description: 'Traditional creamy white bilona ghee packed with rich healthy fats, perfect for sweets, baking, and body strength.',
    longDescription: 'Crafted from pure milk of grass-fed Murrah buffaloes using the traditional curd-churning method. Known for its rich texture and nourishing properties.',
    badge: 'Rich & Creamy',
    process: 'Hand Churned Curd Bilona Process',
    benefits: [
      'Supports Muscle Strength & Weight Gain',
      'Rich in Calcium & Natural Fat-Soluble Vitamins',
      'Delightful Creamy Taste for Traditional Sweets'
    ],
    labTested: true,
    labCertificateNo: 'FSSAI-LAB-2026-BGHEE-112',
    variants: [
      { id: 'bghee-500', name: '500 ml', price: 850, originalPrice: 950, inStock: true },
      { id: 'bghee-1000', name: '1 Litre', price: 1599, originalPrice: 1800, inStock: true },
    ],
    reviews: [
      {
        id: 'r5',
        author: 'Mahesh Kumar',
        rating: 5,
        date: '2 weeks ago',
        comment: 'Extremely good quality buffalo ghee. Very aromatic and dense.',
        verified: true,
        location: 'Tirupati'
      }
    ]
  },
  {
    id: 'raw-wild-forest-honey',
    name: 'Raw Wild Forest Honey',
    tagline: '100% Unheated, Unfiltered & Ethically Harvested',
    category: 'honey',
    rating: 4.95,
    reviewCount: 289,
    image: '/images/wild-honey.jpg',
    description: 'Pure wildflower nectar gathered by wild bees in deep forest reserves. Retains natural enzymes, pollen, and propolis naturally.',
    longDescription: 'Directly sourced from deep forest reserves without heating, fine ultra-filtration, or sugar syrup adulteration. Our honey naturally crystallizes over time—a hallmark of true raw, unprocessed honey.',
    badge: '100% Raw & Pure',
    process: 'Ethical Wild Hive Extraction without Harm to Bees',
    benefits: [
      'Natural Antibacterial & Antioxidant Powerhouse',
      'Soothes Cough & Supports Respiratory Health',
      'Rich in Natural Bee Pollen & Active Enzymes',
      'Sustainably Sourced from Deep Forest Reserves'
    ],
    labTested: true,
    labCertificateNo: 'FSSAI-LAB-2026-HONEY-401',
    variants: [
      { id: 'honey-250', name: '250 g', price: 380, originalPrice: 450, inStock: true },
      { id: 'honey-500', name: '500 g', price: 690, originalPrice: 800, inStock: true },
      { id: 'honey-1000', name: '1 kg', price: 1290, originalPrice: 1500, inStock: true },
    ],
    reviews: [
      {
        id: 'r3',
        author: 'Srinivas Rao',
        rating: 5,
        date: '3 weeks ago',
        comment: 'Deep amber color and rich floral notes. Absolutely pure honey, no artificial sweetness.',
        verified: true,
        location: 'Vijayawada'
      }
    ]
  },
  {
    id: 'sprouted-ragi-malt',
    name: 'Sprouted Ragi & Almond Health Malt',
    tagline: 'Traditional Superfood Porridge Mix for All Ages',
    category: 'spices',
    rating: 4.92,
    reviewCount: 178,
    image: '/images/ragi-malt.jpg',
    description: 'Slow-sprouted finger millet, stone-ground with almonds, cashews, and organic cardamom. Rich in natural calcium, iron, and fiber.',
    longDescription: 'Our Sprouted Ragi Malt is prepared following traditional recipes: whole finger millets are soaked, sprouted to maximize nutrient bioavailability, sun-dried, stone-ground, and blended with roasted almonds, cashews, and aromatic cardamom.',
    badge: 'Superfood',
    process: 'Traditional Sprouting & Low-Heat Stone Grinding',
    benefits: [
      '3x Higher Calcium than Milk & Rich in Natural Bio-Iron',
      'Supports Healthy Growth in Kids & Bone Strength in Adults',
      '100% Preservative Free & Easily Digestible'
    ],
    labTested: true,
    labCertificateNo: 'FSSAI-LAB-2026-RAGI-771',
    variants: [
      { id: 'ragi-250', name: '250 g', price: 290, originalPrice: 340, inStock: true },
      { id: 'ragi-500', name: '500 g', price: 540, originalPrice: 620, inStock: true },
    ],
    reviews: [
      {
        id: 'r8',
        author: 'Meenakshi Iyer',
        rating: 5,
        date: '1 week ago',
        comment: 'So fragrant and wholesome! My toddlers love this ragi malt porridge every morning.',
        verified: true,
        location: 'Bengaluru'
      }
    ]
  },
  {
    id: 'wood-pressed-groundnut-oil',
    name: 'Wood Pressed Groundnut Oil',
    tagline: 'Traditional Cold Pressed Chekku Oil',
    category: 'oils',
    rating: 4.85,
    reviewCount: 215,
    image: '/images/groundnut-oil.jpg',
    description: 'Extracted at low temperature using traditional wooden chakkis (Marachekku). Retains natural aroma, nutty taste, and heat stability.',
    longDescription: 'Extracted from hand-selected sun-dried premium groundnuts using traditional wooden expellers. No chemical refining, bleaching, or deodorizing. Rich in monounsaturated healthy fats.',
    badge: 'Traditional Chekku',
    process: 'Cold Extraction in Vagai Wood Mortar at <45°C',
    benefits: [
      'Rich in Vitamin E & Healthy MUFA Fats',
      'Zero Trans Fats & Zero Cholesterol',
      'High Smoke Point Perfect for Everyday Indian Cooking',
      'Natural Nutty Flavor and Warm Culinary Aroma'
    ],
    labTested: true,
    labCertificateNo: 'FSSAI-LAB-2026-OIL-882',
    variants: [
      { id: 'gnut-500', name: '500 ml', price: 240, originalPrice: 280, inStock: true },
      { id: 'gnut-1000', name: '1 Litre', price: 450, originalPrice: 520, inStock: true },
      { id: 'gnut-5000', name: '5 Litres (Tin)', price: 2100, originalPrice: 2450, inStock: true },
    ],
    reviews: [
      {
        id: 'r4',
        author: 'Kavitha V.',
        rating: 5,
        date: '1 week ago',
        comment: 'Food tastes so much lighter and authentic compared to refined oils. We have completely switched our home to Anvi Farms oils!',
        verified: true,
        location: 'Chennai'
      }
    ]
  },
  {
    id: 'wood-pressed-mustard-oil',
    name: 'Cold Pressed Kachi Ghani Mustard Oil',
    tagline: 'Pungent & Pure Cold Pressed Black Mustard Oil',
    category: 'oils',
    rating: 4.9,
    reviewCount: 198,
    image: '/images/groundnut-oil.jpg',
    description: 'Extracted from native black mustard seeds in wooden presses. Authentic pungent aroma and rich natural antioxidants.',
    longDescription: 'Pressed at low temperatures to retain natural allyl isothiocyanate, which gives authentic mustard oil its characteristic zesty aroma and antimicrobial qualities.',
    badge: 'Kachi Ghani',
    process: 'Cold Pressed in Slow Wooden Mortar',
    benefits: [
      'Rich in Omega-3 & Omega-6 Fatty Acids',
      'Natural Cardioprotective & Antimicrobial Qualities',
      'Ideal for Pickling & North Indian Regional Cuisines'
    ],
    labTested: true,
    labCertificateNo: 'FSSAI-LAB-2026-MUSTARD-520',
    variants: [
      { id: 'must-500', name: '500 ml', price: 260, originalPrice: 300, inStock: true },
      { id: 'must-1000', name: '1 Litre', price: 480, originalPrice: 550, inStock: true },
    ],
    reviews: [
      {
        id: 'r6',
        author: 'Pradeep Verma',
        rating: 5,
        date: '1 month ago',
        comment: 'Authentic kachi ghani taste. Perfectly pungent for pickles and cooking.',
        verified: true,
        location: 'Delhi NCR'
      }
    ]
  },
  {
    id: 'lakadong-turmeric-powder',
    name: 'High-Curcumin Lakadong Turmeric',
    tagline: '7%+ Curcumin Content - Pure Farm Ground',
    category: 'spices',
    rating: 4.98,
    reviewCount: 142,
    image: '/images/wild-honey.jpg',
    description: 'Directly sourced from Meghalaya hills. Extremely high natural curcumin content for immunity and medicinal golden milk.',
    longDescription: 'Lakadong turmeric is famed globally for containing over 7% natural curcumin (compared to 2% in regular market turmeric). Chemical-free and stone ground.',
    badge: '7%+ Curcumin',
    process: 'Sun-Dried & Stone Ground at Low Heat',
    benefits: [
      'Powerful Anti-Inflammatory & Cellular Antioxidant',
      'Supports Joint Health & Immunity Protection',
      'Vibrant Deep Golden Color & Earthy Aroma'
    ],
    labTested: true,
    labCertificateNo: 'FSSAI-LAB-2026-SPICE-303',
    variants: [
      { id: 'turm-250', name: '250 g', price: 290, originalPrice: 350, inStock: true },
      { id: 'turm-500', name: '500 g', price: 540, originalPrice: 650, inStock: true },
    ],
    reviews: [
      {
        id: 'r7',
        author: 'Sunita Rao',
        rating: 5,
        date: '2 weeks ago',
        comment: 'The color and warmth of this turmeric is unbelievable. A tiny pinch works wonders.',
        verified: true,
        location: 'Visakhapatnam'
      }
    ]
  }
];

