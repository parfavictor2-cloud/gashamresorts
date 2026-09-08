import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact & Location | Gasham Resorts and Suites Langtang North',
  description: 'Get in touch with Gasham Resorts and Suites. Located past Jimmy Cato Junction along FGGC Road, Langtang North, Plateau State. Call 0810 416 9470.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-cream py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <span className="text-gold uppercase tracking-widest text-xs font-semibold bg-gold/10 px-3 py-1 rounded-full border border-gold/20">
            Get In Touch
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-charcoal">
            Contact & Location
          </h1>
          <p className="text-stone-600 text-sm sm:text-base">
            Reach out to our front desk for bookings, event reservations, or directions to the property.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          
          {/* Contact Details Card */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gold/20 space-y-8">
            <h3 className="font-serif text-2xl font-bold text-charcoal border-b border-gold/10 pb-4">
              Gasham Resorts & Suites Office
            </h3>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="text-gold text-2xl mt-1">📍</div>
                <div>
                  <h4 className="font-bold text-charcoal text-sm uppercase tracking-wider">Exact Location</h4>
                  <p className="text-stone-600 text-sm mt-1">
                    Past Jimmy Cato Junction, along FGGC Road,<br />
                    Langtang North, Plateau State, Nigeria.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="text-gold text-2xl mt-1">📞</div>
                <div>
                  <h4 className="font-bold text-charcoal text-sm uppercase tracking-wider">Phone Bookings</h4>
                  <p className="text-stone-600 text-sm mt-1">
                    <a href="tel:+2348104169470" className="text-gold font-bold hover:underline">
                      0810 416 9470
                    </a><br />
                    Available 24/7 for reservations and guest inquiries.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="text-gold text-2xl mt-1">⚡</div>
                <div>
                  <h4 className="font-bold text-charcoal text-sm uppercase tracking-wider">Facility Services</h4>
                  <p className="text-stone-600 text-sm mt-1">
                    24/7 Power Supply, Secure Parking, On-site Restaurant, Bar, and Executive Lounge.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <a 
                href="tel:+2348104169470"
                className="w-full block text-center bg-gold hover:bg-gold-secondary text-charcoal font-bold py-3.5 rounded-xl shadow transition-all uppercase tracking-wider text-xs"
              >
                Call Front Desk Now
              </a>
            </div>
          </div>

          {/* Local Map / Direction Card */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gold/20 space-y-6 flex flex-col justify-between h-full">
            <div>
              <h3 className="font-serif text-2xl font-bold text-charcoal mb-2">
                Finding the Resort
              </h3>
              <p className="text-stone-600 text-sm">
                Visitors coming from within Langtang North can easily locate us right past Jimmy Cato Junction along FGGC Road. Look out for our signature resort branding.
              </p>
            </div>

            <div className="bg-charcoal/5 rounded-xl p-8 border border-gold/10 text-center space-y-4">
              <div className="text-4xl">🗺️</div>
              <h4 className="font-bold text-charcoal text-base">Langtang North, Plateau State</h4>
              <p className="text-xs text-stone-600">
                Need help with directions? Our front desk staff are available to guide you over the phone.
              </p>
              <a 
                href="tel:+2348104169470"
                className="inline-block bg-charcoal text-cream text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-lg hover:bg-gold hover:text-charcoal transition-all"
              >
                Call for Navigation Assistance
              </a>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}