import Link from 'next/link';
import { query } from './lib/db';

export default async function Home() {
  const heroResult = await query('SELECT * FROM hero_settings WHERE id = 1');
  const hero = heroResult.rows[0] || {
    title: 'Where Absolute Comfort Meets Elegance',
    image_url: 'https://images.unsplash.com/photo-1566073771259-6a8506099945'
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* High-Intent Hero Section */}
      <section className="relative bg-charcoal text-cream py-20 sm:py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
          <img 
            src={hero.image_url} 
            alt="Gasham Resorts and Suites Hero" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/80 to-transparent z-0" />

        <div className="max-w-7xl mx-auto relative z-10 space-y-6">
          <div className="inline-flex items-center space-x-2 bg-gold/10 px-3.5 py-1.5 rounded-full border border-gold/20">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse"></span>
            <span className="text-gold uppercase tracking-wider text-xs font-semibold">
              Langtang North, Plateau State
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl font-bold max-w-3xl leading-tight">
            Comfortable stays in Langtang North.
          </h1>
          
          <p className="text-stone-300 text-base sm:text-lg max-w-xl font-medium">
            Executive suites • On-site restaurant & bar • 24/7 power supply. Located past Jimmy Cato Junction along FGGC Road.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <Link 
              href="/rooms" 
              className="bg-gold hover:bg-gold-secondary text-charcoal font-bold px-8 py-3.5 rounded-xl transition-all shadow-md text-sm uppercase tracking-wider"
            >
              View Rooms
            </Link>
            <a 
              href="tel:+2348104169470" 
              className="bg-white/10 hover:bg-white/20 text-cream border border-gold/30 font-bold px-8 py-3.5 rounded-xl transition-all backdrop-blur-sm text-sm uppercase tracking-wider flex items-center space-x-2"
            >
              <span>Call to Book</span>
            </a>
          </div>
        </div>
      </section>

      {/* Trust & Advantages Grid (Immediate Proof Section) */}
      <section className="py-12 bg-cream border-b border-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gold/10">
              <div className="text-gold text-2xl mb-3">⚡</div>
              <h3 className="font-bold text-charcoal text-lg mb-1">24/7 Power Supply</h3>
              <p className="text-stone-600 text-sm">Reliable, uninterrupted electricity for a completely comfortable stay.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gold/10">
              <div className="text-gold text-2xl mb-3">📍</div>
              <h3 className="font-bold text-charcoal text-lg mb-1">Prime Location</h3>
              <p className="text-stone-600 text-sm">Easily accessible past Jimmy Cato Junction along FGGC Road.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gold/10">
              <div className="text-gold text-2xl mb-3">🍽️</div>
              <h3 className="font-bold text-charcoal text-lg mb-1">On-site Dining</h3>
              <p className="text-stone-600 text-sm">Full restaurant and bar available right on the premises for guests.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gold/10">
              <div className="text-gold text-2xl mb-3">🛡️</div>
              <h3 className="font-bold text-charcoal text-lg mb-1">Secure & Private</h3>
            <p className="text-stone-600 text-sm">Designed for safe, quiet short or extended executive stays.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}