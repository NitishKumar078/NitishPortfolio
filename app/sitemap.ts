import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://www.nishkumar.dev/' },
    { url: 'https://www.nishkumar.dev/v1' },
    { url: 'https://www.nishkumar.dev/v2' },
  ];
}
