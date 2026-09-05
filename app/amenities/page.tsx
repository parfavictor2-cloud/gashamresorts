import Link from 'next/link';

export const metadata = {
  title: 'Resort Amenities & Facilities | Gasham Resorts and Suites Langtang North',
  description: 'Discover world-class hospitality facilities at Gasham Resorts and Suites. Enjoy 24/7 power, our onsite bar, restaurant serving local dishes, and football viewing centre.',
};

export default function AmenitiesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-cream">
      
      {/* Page Header */}
      <section className="bg-charcoal text-cream py-16 px-4 text-center border-b border-gold/20">
        <div className="max-w-4xl mx-auto">
          <span className="text-gold uppercase tracking-widest text-xs font-semibold mb-3 inline-block bg-gold/10 px-3 py-1 rounded-full">
            Facilities & Services
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Resort Amenities
          </h1>
          <p className="text-stone-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            From uninterrupted electricity to vibrant social and dining spaces, Gasham Resorts and Suites provides everything you need for a truly relaxing stay in Langtang North.
          </p>
        </div>
      </section>

      {/* Amenities Grid Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Amenity 1: 24/7 Power */}
          <div className="bg-white p-8 rounded-2xl border border-gold/20 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 bg-gold/15 rounded-xl flex items-center justify-center text-gold font-bold text-xl mb-6">⚡</div>
              <h3 className="font-serif text-2xl font-bold text-charcoal mb-3">24/7 Power Supply</h3>
              <p className="text-stone-600 text-sm leading-relaxed mb-6">
                Never experience blackouts during your stay. Our robust, always-on backup power generation ensures complete comfort, lighting, and ventilation around the clock.
              </p>
            </div>
            <span className="text-xs font-semibold text-gold uppercase tracking-wider">Guaranteed Comfort</span>
          </div>

          {/* Amenity 2: Restaurant */}
          <div className="bg-white p-8 rounded-2xl border border-gold/20 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 bg-gold/15 rounded-xl flex items-center justify-center text-gold font-bold text-xl mb-6">🍽️</div>
              <h3 className="font-serif text-2xl font-bold text-charcoal mb-3">Onsite Restaurant</h3>
              <p className="text-stone-600 text-sm leading-relaxed mb-6">
                Savor delicious local and contemporary Nigerian dishes prepared fresh daily by expert chefs using the finest ingredients. Clean dining ambiance available.
              </p>
            </div>
            <span className="text-xs font-semibold text-gold uppercase tracking-wider">Fresh & Delicious</span>
          </div>

          {/* Amenity 3: Bar & Drinks */}
          <div className="bg-white p-8 rounded-2xl border border-gold/20 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 bg-gold/15 rounded-xl flex items-center justify-center text-gold font-bold text-xl mb-6">🥂</div>
              <h3 className="font-serif text-2xl font-bold text-charcoal mb-3">Fully Stocked Bar</h3>
              <p className="text-stone-600 text-sm leading-relaxed mb-6">
                Unwind after a busy day with a wide selection of chilled alcoholic and non-alcoholic beverages served in a relaxed, secure lounge setting.
              </p>
            </div>
            <span className="text-xs font-semibold text-gold uppercase tracking-wider">Relax & Unwind</span>
          </div>

          {/* Amenity 4: Viewing Centre */}
          <div className="bg-white p-8 rounded-2xl border border-gold/20 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 bg-gold/15 rounded-xl flex items-center justify-center text-gold font-bold text-xl mb-6">📺</div>
              <h3 className="font-serif text-2xl font-bold text-charcoal mb-3">Viewing Centre</h3>
              <p className="text-stone-600 text-sm leading-relaxed mb-6">
                Catch all major football matches and live sporting events on big screens in our vibrant viewing centre alongside fellow sports enthusiasts.
              </p>
            </div>
            <span className="text-xs font-semibold text-gold uppercase tracking-wider">Live Sports Entertainment</span>
          </div>

          {/* Amenity 5: Security & Parking */}
          <div className="bg-white p-8 rounded-2xl border border-gold/20 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 bg-gold/15 rounded-xl flex items-center justify-center text-gold font-bold text-xl mb-6">🛡️</div>
              <h3 className="font-serif text-2xl font-bold text-charcoal mb-3">Secure Parking & Grounds</h3>
              <p className="text-stone-600 text-sm leading-relaxed mb-6">
                Your peace of mind matters. We feature secure vehicle parking space and trained personnel to maintain a safe, welcoming environment throughout your visit.
              </p>
            </div>
            <span className="text-xs font-semibold text-gold uppercase tracking-wider">Safe & Secure</span>
          </div>

          {/* Amenity 6: Customer Support */}
          <div className="bg-white p-8 rounded-2xl border border-gold/20 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 bg-gold/15 rounded-xl flex items-center justify-center text-gold font-bold text-xl mb-6">🛎️</div>
              <h3 className="font-serif text-2xl font-bold text-charcoal mb-3">24/7 Front Desk Support</h3>
              <p className="text-stone-600 text-sm leading-relaxed mb-6">
                Our courteous front desk attendants and room service team are always on standby to ensure your immediate requests are met promptly.
              </p>
            </div>
            <span className="text-xs font-semibold text-gold uppercase tracking-wider">Always At Your Service</span>
          </div>

        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="bg-charcoal text-cream py-14 px-4 text-center mt-auto border-t border-gold/30">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-gold mb-3">Experience True Hospitality in Langtang North</h2>
          <p className="text-stone-300 text-sm sm:text-base mb-6 leading-relaxed">
            Plan your next relaxation stop or weekend getaway with us past Jimmy Cato Junction along FGGC Road.
          </p>
          <a 
            href="tel:+2348104169470" 
            className="inline-block bg-gold hover:bg-gold-secondary text-charcoal font-bold px-8 py-3 rounded-lg transition-all"
          >
            Call Front Desk: 0810 416 9470
          </a>
        </div>
      </section>

    </div>
  );
}