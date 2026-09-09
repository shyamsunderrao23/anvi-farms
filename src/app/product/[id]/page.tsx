import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PRODUCTS } from '../../../data/products';
import { ProductDetailClient } from '../../../components/ProductDetailClient';

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { id } = await params;
  const product = PRODUCTS.find((p) => p.id === id);

  if (!product) {
    return {
      title: 'Product Not Found | Anvi Farms',
    };
  }

  return {
    title: `${product.name} | 100% Pure & Vedic | Anvi Farms`,
    description: product.description,
    keywords: [
      product.name,
      product.category,
      'A2 Cow Ghee',
      'Organic Farm Produce',
      'Bilona Ghee',
      'Anvi Farms',
    ],
    openGraph: {
      title: `${product.name} | Anvi Farms`,
      description: product.description,
      images: [
        {
          url: product.image,
          width: 800,
          height: 800,
          alt: product.name,
        },
      ],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${product.name} | Anvi Farms`,
      description: product.description,
      images: [product.image],
    },
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = PRODUCTS.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  return <ProductDetailClient product={product} />;
}

