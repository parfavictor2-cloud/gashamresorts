import Link from 'next/link';
import { query } from './lib/db';

export default async function Home() {
  // Fetch dedicated hero settings from Neon database
  const heroResult = await query('SELECT * FROM hero_settings WHERE id = 1');
  const hero = heroResult.rows[0] || {
    title: 'Where Absolute Comfort Meets Elegance',
    image_url: 'https://images.unsplash.com/photo-1566073771259-6a8506099945'
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with Dedicated Admin-Controlled Background */}
      <section className="relative bg-charcoal text-cream py-24 sm:py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
          <img 
            src={hero.image_url} 
            alt="Gasham Resorts and Suites Hero" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/80 to-transparent z-0" />

        <div className="max-w-7xl mx-auto relative z-10 space-y-6">
          <span className="text-gold uppercase tracking-widest text-xs font-semibold bg-gold/10 px-3 py-1 rounded-full border border-gold/20 inline-block">
            Langtang North, Plateau State
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold max-w-2xl leading-tight">
            {hero.title}
          </h1>
          <p className="text-stone-300 text-base sm:text-lg max-w-xl">
            Experience premier accommodation, executive suites, restaurant, bar, and relaxation spots past Jimmy Cato Junction along FGGC Road.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Link 
              href="/rooms" 
              className="bg-gold hover:bg-gold-secondary text-charcoal font-semibold px-8 py-3.5 rounded-xl transition-all shadow-md"
            >
              Explore Suites
            </Link>
            <Link 
              href="/gallery" 
              className="bg-white/10 hover:bg-white/20 text-cream border border-gold/30 font-semibold px-8 py-3.5 rounded-xl transition-all backdrop-blur-sm"
            >
              View Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* Rest of homepage highlights... */}
    </div>
  );
}