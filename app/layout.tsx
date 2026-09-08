import type { Metadata } from 'next';
import { Fraunces, Work_Sans } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
});

const workSans = Work_Sans({
  subsets: ['latin'],
  variable: '--font-work-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://gashamresorts.vercel.app'),
  title: {
    default: 'Gasham Resorts and Suites | Langtang North',
    template: '%s | Gasham Resorts and Suites',
  },
  description: 'Experience premium comfort at Gasham Resorts and Suites in Langtang North, Plateau State. Featuring single and double suites, 24/7 power, restaurant, bar, and viewing centre along FGGC Road.',
  keywords: ['Gasham Resorts', 'Langtang North hotel', 'Plateau State accommodation', 'suites in Langtang', 'FGGC Road hotel', 'relaxation spot Langtang North'],
  openGraph: {
    type: 'website',
    locale: 'en_NG',
    url: 'https://gashamresorts.vercel.app',
    siteName: 'Gasham Resorts and Suites',
    title: 'Gasham Resorts and Suites | Langtang North',
    description: 'Your home for comfort, relaxation, and hospitality past Jimmy Cato Junction along FGGC Road, Langtang North.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Gasham Resorts and Suites Langtang North',
      },
    ],
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
    image: 'https://gashamresorts.vercel.app/og-image.jpg',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Jimmy Cato Junction, FGGC Road',
      addressLocality: 'Langtang North',
      addressRegion: 'Plateau State',
      addressCountry: 'NG',
    },
    url: 'https://gashamresorts.vercel.app',
    priceRange: '₦₦',
    amenityFeature: [
      { '@type': 'LocationFeatureSpecification', name: '24/7 Power Supply', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Restaurant & Bar', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Viewing Centre', value: true },
    ],
  };

  return (
    <html lang="en" className={`${fraunces.variable} ${workSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-cream text-charcoal font-sans antialiased">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}