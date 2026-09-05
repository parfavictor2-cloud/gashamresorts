import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://gashamresorts.com'; // Update with your actual domain

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/admin', // Keep search engines out of your management dashboard
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}