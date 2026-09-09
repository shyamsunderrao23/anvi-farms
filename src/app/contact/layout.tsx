import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us & Direct Customer Care | Anvi Farms',
  description:
    'Get in touch with Anvi Farms. Reach us by phone at +91 77805 05418 or email hello@anvifarms.com for orders, inquiries, or support.',
  keywords: [
    'Contact Anvi Farms',
    'Customer Support Anvi Farms',
    'Anvi Farms Phone Number',
    'WhatsApp Order Pure Ghee',
    'Farm Visit Inquiries',
  ],
  openGraph: {
    title: 'Contact Us & Direct Customer Care | Anvi Farms',
    description:
      'Have questions or need help? Reach out to the Anvi Farms team anytime.',
    url: 'https://anvifarms.com/contact',
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
