import type { Metadata } from 'next';

export const SITE_URL = 'https://gashamresorts.vercel.app';

export function createPageMetadata(title: string, description: string, pathname: string): Metadata {
	const pageTitle = `${title} | Gasham Resorts & Suites`;

	return {
		title,
		description,
		alternates: {
			canonical: pathname,
		},
		openGraph: {
			title: pageTitle,
			description,
			url: new URL(pathname, SITE_URL).toString(),
			siteName: 'Gasham Resorts and Suites',
			images: [{ url: '/image.png', width: 1200, height: 630, alt: 'Gasham Resorts and Suites' }],
			locale: 'en_NG',
			type: 'website',
		},
		twitter: {
			card: 'summary_large_image',
			title: pageTitle,
			description,
			images: ['/image.png'],
		},
	};
}