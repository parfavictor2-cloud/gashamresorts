import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/admin/', // Keeps your custom inventory management CRUD panel private from web crawlers
    },
    sitemap: 'https://gashamresorts.vercel.app/sitemap.xml',
  };
}