import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-cream pt-12 pb-8 border-t border-gold/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-8 border-b border-stone-800">
          
          {/* SEO-Rich Descriptive Keyword Block */}
          <div>
            <h3 className="font-serif text-xl font-bold text-gold mb-3">Gasham Resorts and Suites</h3>
            <p className="text-stone-300 text-sm leading-relaxed max-w-lg">
              The premier destination for hospitality in <strong>Langtang North, Plateau State</strong>. Offering comfortable single and double suites, 24/7 reliable power, an onsite restaurant, bar, and viewing centre. Conveniently located past Jimmy Cato Junction along FGGC Road.
            </p>
          </div>

          {/* Location & Navigation Link */}
          <div className="flex flex-col md:items-end justify-center">
            <p className="text-sm text-stone-300 mb-1 font-medium">Past Jimmy Cato Junction, along FGGC Road</p>
            <p className="text-sm text-stone-300 mb-3">Langtang North, Plateau State, Nigeria</p>
            <Link 
              href="/contact" 
              className="text-gold font-semibold text-sm hover:underline"
            >
              View Contact Details & Phone Number &rarr;
            </Link>
          </div>

        </div>

        {/* Copyright & SEO Footer Note */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-400">
          <p>© {currentYear} Gasham Resorts and Suites Ltd. All rights reserved.</p>
          <p className="mt-2 sm:mt-0">Your home for comfort and relaxation in Langtang North.</p>
        </div>
      </div>
    </footer>
  );
}