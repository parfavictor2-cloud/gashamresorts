import type { Metadata } from 'next';
import './globals.css';
import Navbar from './components/Navbar';

export const metadata: Metadata = {
  title: 'Gasham Resorts & Suites | Hotel & Accommodation in Langtang North, Plateau State',
  description: 'Experience absolute comfort, 24/7 power supply, secure parking, and fine hospitality at Gasham Resorts and Suites past Jimmy Cato Junction along FGGC Road, Langtang North.',
  keywords: ['hotel in Langtang North', 'accommodation in Langtang', 'suites in Langtang North', 'hotels in Plateau State', 'restaurant in Langtang North', 'Gasham Resorts'],
  verification: {
    google: 'QtBHwZz58ijLGlvjkIHPzwQ6AfLzXiRm_xW_QWSz51E',
  },
  openGraph: {
    title: 'Gasham Resorts & Suites | Hotel & Accommodation in Langtang North',
    description: 'Experience absolute comfort, 24/7 power supply, and fine hospitality along FGGC Road, Langtang North.',
    url: 'https://gashamresorts.com',
    siteName: 'Gasham Resorts and Suites',
    images: [{ url: '/image.png', width: 1200, height: 630, alt: 'Gasham Resorts and Suites Logo' }],
    locale: 'en_NG',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gasham Resorts & Suites | Langtang North',
    description: 'Premier accommodation, executive suites, restaurant, and bar past Jimmy Cato Junction along FGGC Road.',
    images: ['/image.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LodgingBusiness',
    name: 'Gasham Resorts and Suites',
    image: 'https://gashamresorts.com/image.png',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Past Jimmy Cato Junction, FGGC Road',
      addressLocality: 'Langtang North',
      addressRegion: 'Plateau State',
      addressCountry: 'NG',
    },
    telephone: '+2348104169470',
    priceRange: '₦₦',
    url: 'https://gashamresorts.com',
    amenityFeature: [
      { '@type': 'LocationFeatureSpecification', name: '24/7 Power Supply', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Restaurant and Bar', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Secure Parking', value: true }
    ]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-cream text-charcoal font-sans antialiased pb-16 md:pb-0">
        <Navbar />
        <main>{children}</main>

        {/* Persistent Sticky Mobile Call-to-Action Bar */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-charcoal/95 backdrop-blur border-t border-gold/30 px-4 py-3 flex items-center justify-between shadow-lg">
          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-wider text-gold font-semibold">Direct Booking</span>
            <span className="text-cream text-xs font-medium">0810 416 9470</span>
          </div>
          <a
            href="tel:+2348104169470"
            className="bg-gold hover:bg-gold-secondary text-charcoal text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-lg shadow transition-all flex items-center space-x-2"
          >
            <span>📞 Call to Book</span>
          </a>
        </div>
      </body>
    </html>
  );
}