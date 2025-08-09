// pages/api/sitemap.js
export default function handler(req, res) {
  const baseUrl = 'https://labtechguide.com';
  
  const pages = [
    '',
    '/ensaios',
    '/ensaios/solo',
    '/ensaios/concreto',
    '/ensaios/asfalto',
    '/ensaios/agregados',
    '/ensaios/cimento',
    '/blog',
    '/contato',
    '/politica-privacidade',
    '/politica-cookies',
    '/termos-uso'
  ];
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${pages
        .map((page) => {
          return `
            <url>
              <loc>${baseUrl}${page}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>weekly</changefreq>
              <priority>${page === '' ? '1.0' : '0.8'}</priority>
            </url>
          `;
        })
        .join('')}
    </urlset>
  `;

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();
}