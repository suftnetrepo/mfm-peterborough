import type { MetadataRoute } from 'next';
import { hasFeature } from '@/lib/features';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3001';

const STATIC_ROUTES = [
  '',
  '/about',
  '/service-times',
  '/prayers',
  '/fellowship',
  '/events',
  '/new-here',
  '/give',
  '/contact',
  '/testimonies',
  '/privacy-policy',
  '/terms',
  '/cookies'
];

export default function sitemap(): MetadataRoute.Sitemap {
  // Only list feature-gated routes when the feature is actually on — the
  // page 404s otherwise, and a 404 in the sitemap just wastes crawl budget.
  const featureRoutes = [
    hasFeature('foodBank') && '/food-bank',
    hasFeature('freeTransport') && '/free-transport',
    hasFeature('wofbi') && '/resources/wofbi',
    hasFeature('bfc') && '/resources/bfc'
  ].filter((route): route is string => Boolean(route));

  const now = new Date();

  return [...STATIC_ROUTES, ...featureRoutes].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: path === '' ? 'weekly' : 'monthly',
    priority: path === '' ? 1 : 0.6
  }));
}
