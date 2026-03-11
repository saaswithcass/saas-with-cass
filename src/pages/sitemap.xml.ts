import { getCollection } from 'astro:content';

export async function GET() {
  const posts = await getCollection('posts');
  
  const postUrls = posts.map(post => {
    const slug = post.id.replace('.md', '');
    return `
  <url>
    <loc>https://saaswithcass.com/blog/${slug}</loc>
    <lastmod>2026-03-10</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`;
  }).join('\n');

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://saaswithcass.com/</loc>
    <lastmod>2026-03-10</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://saaswithcass.com/blog</loc>
    <lastmod>2026-03-10</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>${postUrls}
  <url>
    <loc>https://saaswithcass.com/about</loc>
    <lastmod>2026-03-10</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
