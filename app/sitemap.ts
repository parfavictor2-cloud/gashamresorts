import { MetadataRoute } from 'next';
import { query } from './lib/db';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://gashamresorts.com'; // Update with your actual domain when deployed

  // Static routes
  const routes = [
    '',
    '/rooms',
    '/gallery',
    '/admin',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  try {
    // Optionally fetch dynamic rooms/gallery if you have individual detail pages later
    const roomsResult = await query('SELECT id FROM rooms');
    const roomRoutes = roomsResult.rows.map((room: any) => ({
      url: `${baseUrl}/rooms/${room.id}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    }));

    return [...routes, ...roomRoutes];
  } catch (error) {
    console.error('Error generating sitemap database entries:', error);
    return routes;
  }
}