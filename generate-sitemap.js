import { SitemapStream } from 'sitemap';
import { createWriteStream } from 'fs';
import { resolve } from 'path';

// Define the links to include in the sitemap
const links = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/about', changefreq: 'monthly', priority: 0.7 },
  { url: '/services', changefreq: 'monthly', priority: 0.7 },
  { url: '/gallery', changefreq: 'monthly', priority: 0.7 },
  { url: '/team', changefreq: 'monthly', priority: 0.7 },
  { url: '/contact', changefreq: 'monthly', priority: 0.7 },
];

// Create a SitemapStream instance with the hostname
const sitemap = new SitemapStream({ hostname: 'https://osdem-dfec.club' });

// Create a write stream to the sitemap.xml file in the public directory
const writeStream = createWriteStream(resolve('public', 'sitemap.xml'));

// Pipe the sitemap stream to the write stream
sitemap.pipe(writeStream);

// Write each link to the sitemap stream
links.forEach(link => {
  console.log(`Writing link: ${JSON.stringify(link)}`);
  sitemap.write(link);
});

// End the sitemap stream
sitemap.end(() => {
  console.log('Sitemap stream ended.');
});
