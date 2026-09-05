import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-cream/95 backdrop-blur border-b border-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & SEO-Optimized Brand Wordmark */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative w-10 h-10 flex items-center justify-center">
              <Image 
                src="/logo-placeholder.svg" 
                alt="Gasham Resorts and Suites Logo - Langtang North Hotel" 
                width={40} 
                height={40}
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-lg text-charcoal tracking-tight group-hover:text-gold transition-colors">
                GASHAM RESORTS & SUITES
              </span>
              <span className="text-xs text-stone-600 tracking-wider">LANGTANG NORTH, PLATEAU STATE</span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-charcoal hover:text-gold font-medium transition-colors">Home</Link>
            <Link href="/rooms" className="text-charcoal hover:text-gold font-medium transition-colors">Rooms & Suites</Link>
            <Link href="/amenities" className="text-charcoal hover:text-gold font-medium transition-colors">Amenities</Link>
            <Link href="/gallery" className="text-charcoal hover:text-gold font-medium transition-colors">Gallery</Link>
            <Link href="/contact" className="text-charcoal hover:text-gold font-medium transition-colors">Contact & Location</Link>
          </nav>

          {/* Desktop Call-to-Action (Routes to Contact Page) */}
          <div className="hidden md:block">
            <Link 
              href="/contact"
              className="bg-gold hover:bg-gold-secondary text-charcoal font-semibold px-5 py-2.5 rounded-lg shadow-sm transition-all"
            >
              Book Your Stay
            </Link>
          </div>
        </div>

        {/* Mobile Horizontal Pill Navigation */}
        <div className="md:hidden py-2.5 overflow-x-auto no-scrollbar border-t border-gold/10 flex space-x-2">
          <Link href="/" className="bg-gold/10 text-charcoal text-sm px-4 py-1.5 rounded-full whitespace-nowrap font-medium">Home</Link>
          <Link href="/rooms" className="bg-gold/10 text-charcoal text-sm px-4 py-1.5 rounded-full whitespace-nowrap font-medium">Rooms</Link>
          <Link href="/amenities" className="bg-gold/10 text-charcoal text-sm px-4 py-1.5 rounded-full whitespace-nowrap font-medium">Amenities</Link>
          <Link href="/gallery" className="bg-gold/10 text-charcoal text-sm px-4 py-1.5 rounded-full whitespace-nowrap font-medium">Gallery</Link>
          <Link href="/contact" className="bg-gold/10 text-charcoal text-sm px-4 py-1.5 rounded-full whitespace-nowrap font-medium">Contact & Location</Link>
        </div>

      </div>
    </header>
  );
}