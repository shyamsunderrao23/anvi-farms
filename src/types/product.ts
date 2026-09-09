export type CategoryId = 'all' | 'ghee' | 'honey' | 'oils' | 'spices';

export interface ProductVariant {
  id: string;
  name: string; // e.g. "250 ml", "500 ml", "1 Litre"
  price: number;
  originalPrice?: number;
  inStock: boolean;
}

export interface Review {
  id: string;
  author: string;
  rating: number; // 1-5
  date: string;
  comment: string;
  verified: boolean;
  location?: string;
}

export interface Product {
  id: string;
  name: string;
  tagline: string;
  category: CategoryId;
  rating: number;
  reviewCount: number;
  image: string;
  description: string;
  longDescription: string;
  badge?: string; // e.g. "Best Seller", "Traditional Bilona", "100% Raw"
  process: string; // e.g. "Hand churned from A2 Gir Cow Milk using curd-bilona method"
  benefits: string[];
  labTested: boolean;
  labCertificateNo?: string;
  variants: ProductVariant[];
  reviews: Review[];
}

export interface CartItem {
  product: Product;
  selectedVariant: ProductVariant;
  quantity: number;
}
