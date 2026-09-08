import Link from 'next/link';
import { query } from '../lib/db';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Rooms & Suites | Gasham Resorts and Suites Langtang North',
  description: 'Explore our comfortable executive single suites, double rooms, and luxury accommodation equipped with 24/7 power and private amenities in Langtang North.',
};

export default async function RoomsPage() {
  // Fetch room inventory from Neon database
  const roomsResult = await query('SELECT * FROM rooms ORDER BY id ASC');
  const rooms = roomsResult.rows.length > 0 ? roomsResult.rows : [
    {
      id: 1,
      name: 'Executive Single Suite',
      description: 'Comfortable private accommodation designed for individual stays with full amenities.',
      price: 'Contact for Rate',
      image_url: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32',
      capacity: '1-2 Guests'
    },
    {
      id: 2,
      name: 'Deluxe Double Suite',
      description: 'Spacious suite featuring enhanced lounging space, plush bedding, and premium comfort.',
      price: 'Contact for Rate',
      image_url: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b',
      capacity: '2-3 Guests'
    }
  ];

  return (
    <div className="min-h-screen bg-cream py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <span className="text-gold uppercase tracking-widest text-xs font-semibold bg-gold/10 px-3 py-1 rounded-full border border-gold/20">
            Accommodation
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-charcoal">
            Rooms & Executive Suites
          </h1>
          <p className="text-stone-600 text-base">
            Every stay includes uninterrupted power supply, top-tier security, and access to our on-site restaurant and bar.
          </p>
        </div>

        {/* Room Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room: any) => (
            <div key={room.id} className="bg-white rounded-2xl shadow-sm border border-gold/20 overflow-hidden flex flex-col transition-all hover:shadow-md">
              <div className="relative h-56 w-full">
                <img 
                  src={room.image_url || 'https://images.unsplash.com/photo-1566073771259-6a8506099945'} 
                  alt={room.name}
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-4 right-4 bg-charcoal/80 backdrop-blur-sm text-gold text-xs font-semibold px-3 py-1 rounded-full">
                  {room.capacity || '2 Guests'}
                </span>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <h3 className="font-serif font-bold text-xl text-charcoal">{room.name}</h3>
                  <p className="text-stone-600 text-sm leading-relaxed">{room.description}</p>
                  
                  {/* Features Checklist */}
                  <ul className="space-y-2 pt-2 text-xs text-stone-700 font-medium">
                    <li className="flex items-center space-x-2">
                      <span className="text-gold">✓</span> <span>24/7 Power Supply</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="text-gold">✓</span> <span>Private Bathroom & Toilet</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="text-gold">✓</span> <span>Flat Screen TV & Entertainment</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="text-gold">✓</span> <span>Daily Housekeeping Available</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-4 border-t border-gold/10 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-stone-500 uppercase tracking-wider">Inquiries & Booking</span>
                    <span className="text-sm font-bold text-charcoal">{room.price || 'Call for Rate'}</span>
                  </div>
                  <a 
                    href="tel:+2348104169470" 
                    className="bg-charcoal hover:bg-gold hover:text-charcoal text-cream text-xs font-bold uppercase tracking-wider px-4 py-2.5 rounded-xl transition-all shadow-sm"
                  >
                    Call to Book
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}