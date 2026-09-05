import { query } from '../lib/db';
import { revalidatePath } from 'next/cache';

// Server Action to update the dedicated Hero Settings
async function updateHeroSettings(formData: FormData) {
  'use server';
  const title = formData.get('heroTitle') as string;
  const imageUrl = formData.get('heroImageUrl') as string;

  if (!imageUrl) return;

  await query(
    'UPDATE hero_settings SET title = $1, image_url = $2, updated_at = NOW() WHERE id = 1',
    [title, imageUrl]
  );

  revalidatePath('/');
  revalidatePath('/admin');
}

// Server Action to add a room
async function addRoom(formData: FormData) {
  'use server';
  const name = formData.get('name') as string;
  const price = formData.get('price') as string;

  if (!name) return;

  await query(
    'INSERT INTO rooms (name, price, status) VALUES ($1, $2, $3)',
    [name, price || 'Inquire', 'Available']
  );

  revalidatePath('/rooms');
  revalidatePath('/admin');
}

// Server Action to delete a room
async function deleteRoom(formData: FormData) {
  'use server';
  const id = formData.get('id');

  await query('DELETE FROM rooms WHERE id = $1', [id]);

  revalidatePath('/rooms');
  revalidatePath('/admin');
}

// Server Action to add a gallery item with a cloud image URL
async function addGalleryItem(formData: FormData) {
  'use server';
  const title = formData.get('title') as string;
  const imageUrl = formData.get('imageUrl') as string;

  if (!title) return;

  await query(
    'INSERT INTO gallery (title, image_url) VALUES ($1, $2)',
    [title, imageUrl || 'https://images.unsplash.com/photo-1566073771259-6a8506099945']
  );

  revalidatePath('/gallery');
  revalidatePath('/admin');
}

// Server Action to delete a gallery item
async function deleteGalleryItem(formData: FormData) {
  'use server';
  const id = formData.get('id');

  await query('DELETE FROM gallery WHERE id = $1', [id]);

  revalidatePath('/gallery');
  revalidatePath('/admin');
}

export default async function AdminPage() {
  const roomsResult = await query('SELECT * FROM rooms ORDER BY id DESC');
  const galleryResult = await query('SELECT * FROM gallery ORDER BY id DESC');
  const heroResult = await query('SELECT * FROM hero_settings WHERE id = 1');

  const rooms = roomsResult.rows;
  const galleryItems = galleryResult.rows;
  const currentHero = heroResult.rows[0] || { title: '', image_url: '' };

  return (
    <div className="flex flex-col min-h-screen bg-cream">
      {/* Admin Header */}
      <section className="bg-charcoal text-cream py-12 px-4 border-b border-gold/20">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span className="text-gold uppercase tracking-widest text-xs font-semibold mb-1 inline-block bg-gold/10 px-3 py-1 rounded-full">
              Management Portal
            </span>
            <h1 className="font-serif text-3xl font-bold">Admin Database Dashboard</h1>
          </div>
          <div className="text-stone-300 text-sm">
            Neon Cloud Database Active
          </div>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full flex-grow space-y-12">
        
        {/* Dedicated Hero Banner Manager */}
        <div className="bg-white p-8 rounded-2xl border border-gold/20 shadow-sm">
          <h2 className="font-serif text-2xl font-bold text-charcoal mb-2">Homepage Hero Banner Manager</h2>
          <p className="text-stone-600 text-sm mb-6">Update the main background banner and headline displayed on the homepage.</p>
          
          <form action={updateHeroSettings} className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
            <div>
              <label className="block text-xs font-semibold uppercase text-stone-600 mb-1">Hero Main Headline</label>
              <input 
                type="text" 
                name="heroTitle"
                defaultValue={currentHero.title}
                className="w-full px-4 py-2.5 rounded-lg border border-stone-300 focus:outline-none focus:border-gold text-sm"
                required
              />
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase text-stone-600 mb-1">Hero Cloud Image URL</label>
              <input 
                type="url" 
                name="heroImageUrl"
                defaultValue={currentHero.image_url}
                className="w-full px-4 py-2.5 rounded-lg border border-stone-300 focus:outline-none focus:border-gold text-sm"
                required
              />
            </div>
            <button 
              type="submit" 
              className="bg-gold hover:bg-gold-secondary text-charcoal font-semibold py-2.5 rounded-lg transition-all text-sm h-[42px] shadow-sm"
            >
              Update Hero Banner
            </button>
          </form>
        </div>

        {/* Rooms & Suites Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-2xl border border-gold/20 shadow-sm flex flex-col justify-between">
            <div>
              <h2 className="font-serif text-2xl font-bold text-charcoal mb-2">Add New Room / Suite</h2>
              <p className="text-stone-600 text-sm mb-6">Persists instantly to your Neon cloud database across all browsers.</p>
              
              <form action={addRoom} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold uppercase text-stone-600 mb-1">Suite Name</label>
                  <input 
                    type="text" 
                    name="name"
                    placeholder="e.g. Executive Luxury Suite" 
                    className="w-full px-4 py-2.5 rounded-lg border border-stone-300 focus:outline-none focus:border-gold text-sm"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase text-stone-600 mb-1">Price / Rate Description</label>
                  <input 
                    type="text" 
                    name="price"
                    placeholder="e.g. Inquire or ₦30,000 / night" 
                    className="w-full px-4 py-2.5 rounded-lg border border-stone-300 focus:outline-none focus:border-gold text-sm"
                  />
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-gold hover:bg-gold-secondary text-charcoal font-semibold py-3 rounded-lg transition-all shadow-sm mt-4"
                >
                  Save Room to Cloud Database
                </button>
              </form>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-gold/20 shadow-sm">
            <h2 className="font-serif text-2xl font-bold text-charcoal mb-4">Cloud Suites Inventory ({rooms.length})</h2>
            <div className="space-y-3 max-h-80 overflow-y-auto pr-2">
              {rooms.length === 0 ? (
                <p className="text-stone-500 text-sm italic">No rooms in database yet.</p>
              ) : (
                rooms.map((room: any) => (
                  <div key={room.id} className="flex items-center justify-between p-4 bg-cream rounded-xl border border-stone-200">
                    <div>
                      <h3 className="font-serif font-bold text-charcoal">{room.name}</h3>
                      <span className="text-xs text-stone-500">Rate: {room.price} | Status: {room.status}</span>
                    </div>
                    <form action={deleteRoom}>
                      <input type="hidden" name="id" value={room.id} />
                      <button 
                        type="submit" 
                        className="text-red-600 hover:text-red-800 text-xs font-semibold px-3 py-1.5 bg-red-50 rounded-lg transition-colors"
                      >
                        Delete
                      </button>
                    </form>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        {/* Gallery Manager Section with Add & Delete */}
        <div className="bg-white p-8 rounded-2xl border border-gold/20 shadow-sm">
          <h2 className="font-serif text-2xl font-bold text-charcoal mb-2">Cloud Gallery Manager</h2>
          <p className="text-stone-600 text-sm mb-6">Add or delete permanent cloud image URLs that sync globally across every browser.</p>
          
          <form action={addGalleryItem} className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 items-end">
            <div>
              <label className="block text-xs font-semibold uppercase text-stone-600 mb-1">Gallery Title</label>
              <input 
                type="text" 
                name="title"
                placeholder="e.g. Executive Lounge" 
                className="w-full px-4 py-2.5 rounded-lg border border-stone-300 focus:outline-none focus:border-gold text-sm"
                required
              />
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase text-stone-600 mb-1">Cloud Image URL</label>
              <input 
                type="url" 
                name="imageUrl"
                placeholder="https://images.unsplash.com/..." 
                className="w-full px-4 py-2.5 rounded-lg border border-stone-300 focus:outline-none focus:border-gold text-sm"
                required
              />
            </div>
            <button 
              type="submit" 
              className="bg-charcoal text-cream hover:bg-gold hover:text-charcoal font-semibold py-2.5 rounded-lg transition-all text-sm h-[42px]"
            >
              Save to Cloud Database
            </button>
          </form>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {galleryItems.length === 0 ? (
              <p className="text-stone-500 text-sm italic col-span-full">No gallery items in database yet.</p>
            ) : (
              galleryItems.map((item: any) => (
                <div key={item.id} className="bg-cream p-4 rounded-xl border border-stone-200 flex flex-col justify-between space-y-3">
                  <div>
                    <div className="h-32 bg-stone-200 rounded-lg overflow-hidden mb-2">
                      <img src={item.image_url} alt={item.title} className="w-full h-full object-cover" />
                    </div>
                    <span className="text-xs font-bold text-charcoal block truncate">{item.title}</span>
                  </div>
                  <form action={deleteGalleryItem}>
                    <input type="hidden" name="id" value={item.id} />
                    <button 
                      type="submit" 
                      className="w-full text-red-600 hover:text-red-800 text-xs font-semibold py-1.5 bg-red-50 hover:bg-red-100 rounded-lg transition-colors border border-red-200"
                    >
                      Delete Item
                    </button>
                  </form>
                </div>
              ))
            )}
          </div>
        </div>

      </section>
    </div>
  );
}