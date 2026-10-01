import { MetadataRoute } from 'next';
import { SITE_URL } from './lib/site';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/admin/', // Keeps your custom inventory management CRUD panel private from web crawlers
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}