import { query } from '../lib/db';

export default async function RoomsPage() {
  const roomsResult = await query('SELECT * FROM rooms ORDER BY id DESC');
  const rooms = roomsResult.rows;

  return (
    <div className="flex flex-col min-h-screen bg-cream">
      {/* Header Section */}
      <section className="bg-charcoal text-cream py-16 px-4 text-center border-b border-gold/20">
        <div className="max-w-4xl mx-auto">
          <span className="text-gold uppercase tracking-widest text-xs font-semibold mb-2 inline-block bg-gold/10 px-3 py-1 rounded-full">
            Accommodation & Rates
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold mb-4">Our Luxury Suites</h1>
          <p className="text-stone-300 text-sm sm:text-base max-w-2xl mx-auto">
            Experience absolute comfort, security, and 24/7 power supply in Langtang North, Plateau State.
          </p>
        </div>
      </section>

      {/* Rooms Grid Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full flex-grow">
        {rooms.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl border border-gold/20 p-8 shadow-sm max-w-xl mx-auto">
            <h3 className="font-serif text-xl font-bold text-charcoal mb-2">Suites Updating</h3>
            <p className="text-stone-600 text-sm">
              We are currently updating our room inventory. Please reach out directly for reservations.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rooms.map((room: any) => (
              <div 
                key={room.id} 
                className="bg-white rounded-2xl overflow-hidden border border-gold/20 shadow-sm flex flex-col justify-between"
              >
                <div className="p-6 sm:p-8 space-y-4">
                  <h3 className="font-serif text-2xl font-bold text-charcoal">{room.name}</h3>
                  <div className="text-stone-700 font-semibold text-lg">
                    Rate: <span className="text-gold-secondary font-serif">{room.price}</span>
                  </div>
                  <p className="text-stone-600 text-sm">
                    Includes comfortable bedding, private facilities, complimentary amenities, and access to resort amenities past Jimmy Cato Junction.
                  </p>
                </div>
                
                <div className="p-6 bg-cream border-t border-stone-200">
                  <a 
                    href="tel:+2348000000000" 
                    className="block w-full text-center bg-charcoal hover:bg-gold hover:text-charcoal text-cream font-semibold py-3 rounded-xl transition-all text-sm shadow-sm"
                  >
                    Call Front Desk to Book
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}