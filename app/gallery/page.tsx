import { query } from '../lib/db';

export default async function GalleryPage() {
  const result = await query('SELECT * FROM gallery ORDER BY id DESC');
  const galleryItems = result.rows;

  return (
    <div className="flex flex-col min-h-screen bg-cream">
      {/* Header Section */}
      <section className="bg-charcoal text-cream py-16 px-4 text-center border-b border-gold/20">
        <div className="max-w-4xl mx-auto">
          <span className="text-gold uppercase tracking-widest text-xs font-semibold mb-2 inline-block bg-gold/10 px-3 py-1 rounded-full">
            Visual Experience
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold mb-4">Gasham Resorts Gallery</h1>
          <p className="text-stone-300 text-sm sm:text-base max-w-2xl mx-auto">
            Explore the tranquil ambiance, luxury suites, and exquisite spaces designed for your ultimate comfort.
          </p>
        </div>
      </section>

      {/* Gallery Grid Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full flex-grow">
        {galleryItems.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl border border-gold/20 p-8 shadow-sm max-w-xl mx-auto">
            <h3 className="font-serif text-xl font-bold text-charcoal mb-2">Moments Coming Soon</h3>
            <p className="text-stone-600 text-sm">
              Our gallery is being updated with fresh snapshots of our resort. Please check back shortly!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryItems.map((item: any) => (
              <div 
                key={item.id} 
                className="bg-white rounded-2xl overflow-hidden border border-gold/20 shadow-sm transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="h-64 bg-stone-200 overflow-hidden relative">
                  <img 
                    src={item.image_url} 
                    alt={item.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-serif text-xl font-bold text-charcoal">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}