import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions & Purity Guarantees | Anvi Farms',
  description:
    'Find answers about A2 Gir Cow Ghee, Bilona preparation, lab test reports, delivery timelines, shipping policies, and cancellations.',
  keywords: [
    'Anvi Farms FAQs',
    'A2 Ghee Questions',
    'Bilona Ghee Benefits',
    'Pure Ghee Lab Tests',
    'Shipping and Delivery Policy',
  ],
  openGraph: {
    title: 'FAQs & Purity Guarantees | Anvi Farms',
    description:
      'Answers to all your questions regarding our Vedic A2 Ghee, honey purity, delivery, and quality testing.',
    url: 'https://anvifarms.com/faqs',
  },
};

export default function FaqsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
