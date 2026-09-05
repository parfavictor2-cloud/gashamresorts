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
  metadataBase: new URL('https://gashamresortsandsuites.com'),
  title: {
    default: 'Gasham Resorts and Suites | Langtang North Hotel & Bar',
    template: '%s | Gasham Resorts and Suites',
  },
  description: 'Experience premium comfort at Gasham Resorts and Suites in Langtang North, Plateau State. Featuring single and double suites, 24/7 power, restaurant, bar, and viewing centre along FGGC Road.',
  keywords: ['Gasham Resorts', 'Langtang North hotel', 'Plateau State accommodation', 'suites in Langtang', 'FGGC Road hotel', 'relaxation spot Langtang North'],
  openGraph: {
    type: 'website',
    locale: 'en_NG',
    url: 'https://gashamresortsandsuites.com',
    siteName: 'Gasham Resorts and Suites',
    title: 'Gasham Resorts and Suites | Langtang North',
    description: 'Your home for comfort, relaxation, and hospitality past Jimmy Cato Junction along FGGC Road, Langtang North.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${workSans.variable}`}>
      <body className="min-h-screen flex flex-col bg-cream text-charcoal font-sans antialiased">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}