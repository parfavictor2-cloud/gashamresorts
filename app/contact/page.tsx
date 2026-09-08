import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact & Location',
  description: 'Get in touch with Gasham Resorts and Suites in Langtang North, Plateau State. Located past Jimmy Cato Junction along FGGC Road. Call 0810 416 9470.',
};

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-cream">
      
      {/* Page Header */}
      <section className="bg-charcoal text-cream py-16 px-4 text-center border-b border-gold/20">
        <div className="max-w-4xl mx-auto">
          <span className="text-gold uppercase tracking-widest text-xs font-semibold mb-3 inline-block bg-gold/10 px-3 py-1 rounded-full">
            Get In Touch
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Contact & Location
          </h1>
          <p className="text-stone-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Planning a visit or need to make a reservation? Reach out to our front desk team or find our exact location in Langtang North.
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Details Column */}
          <div className="bg-white p-8 sm:p-10 rounded-2xl border border-gold/20 shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-xs text-gold font-semibold uppercase tracking-wider">Direct Channels</span>
              <h2 className="font-serif text-3xl font-bold text-charcoal mt-1 mb-6">We Are Here For You</h2>
              
              <div className="space-y-6">
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-gold/15 rounded-xl flex items-center justify-center text-gold font-bold text-lg flex-shrink-0 mt-1">📞</div>
                  <div>
                    <h3 className="font-serif font-bold text-charcoal text-lg">Phone Number</h3>
                    <p className="text-stone-600 text-sm mb-1">Call us for immediate room bookings and inquiries:</p>
                    <a href="tel:+2348104169470" className="text-gold font-bold text-lg hover:underline">
                      0810 416 9470
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-gold/15 rounded-xl flex items-center justify-center text-gold font-bold text-lg flex-shrink-0 mt-1">📍</div>
                  <div>
                    <h3 className="font-serif font-bold text-charcoal text-lg">Resort Address</h3>
                    <p className="text-stone-600 text-sm leading-relaxed">
                      Past Jimmy Cato Junction, along FGGC Road<br />
                      Langtang North, Plateau State, Nigeria
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-gold/15 rounded-xl flex items-center justify-center text-gold font-bold text-lg flex-shrink-0 mt-1">🕒</div>
                  <div>
                    <h3 className="font-serif font-bold text-charcoal text-lg">Operating Hours</h3>
                    <p className="text-stone-600 text-sm leading-relaxed">
                      Front Desk & Accommodation: 24/7 Daily<br />
                      Bar, Restaurant & Viewing Centre: Open Daily till Late
                    </p>
                  </div>
                </div>

              </div>
            </div>

            <div className="mt-10 pt-6 border-t border-stone-200">
              <a 
                href="tel:+2348104169470" 
                className="block w-full bg-gold hover:bg-gold-secondary text-charcoal font-bold py-3.5 rounded-lg text-center transition-all shadow-sm"
              >
                Call Front Desk Now
              </a>
            </div>
          </div>

          {/* Location & Directions Column */}
          <div className="bg-white p-8 sm:p-10 rounded-2xl border border-gold/20 shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-xs text-gold font-semibold uppercase tracking-wider">Navigation Guide</span>
              <h2 className="font-serif text-3xl font-bold text-charcoal mt-1 mb-6">How to Find Us</h2>
              
              <p className="text-stone-600 text-base leading-relaxed mb-6">
                Gasham Resorts and Suites is strategically positioned for easy accessibility within Langtang North. Whether you are arriving by car, bike, or public transit, our location is simple to navigate.
              </p>

              <div className="bg-cream/60 p-6 rounded-xl border border-gold/10 space-y-4 mb-6">
                <div>
                  <h3 className="font-serif font-bold text-charcoal text-sm">Landmark Reference</h3>
                  <p className="text-stone-600 text-sm">Located just past <strong>Jimmy Cato Junction</strong> when heading along <strong>FGGC Road</strong>.</p>
                </div>
                <div>
                  <h3 className="font-serif font-bold text-charcoal text-sm">Parking & Accessibility</h3>
                  <p className="text-stone-600 text-sm">Spacious compound parking is available on-site for all registered guests and visitors.</p>
                </div>
              </div>
            </div>

            <div className="bg-stone-200 h-48 rounded-xl flex items-center justify-center text-stone-500 font-medium">
              [Map Directions / Location Placeholder]
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}