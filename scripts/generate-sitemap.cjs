const fs = require('fs');
const path = require('path');

// Base URL - korrekte Domain
const BASE_URL = 'https://www.sonnenhelden24.de';

// Statische Routen
const staticRoutes = [
  '',
  '/solaranlage',
  '/ratgeber',
  '/impressum',
  '/datenschutz',
  '/agb'
];

// Hilfsfunktion: Alle JSON-Dateien rekursiv auslesen (inkl. Unterordner)
function getAllJsonSlugs(dir, prefix = '') {
  const dataPath = path.join(__dirname, '..', 'public', 'data', dir);
  let slugs = [];
  if (!fs.existsSync(dataPath)) return slugs;
  const files = fs.readdirSync(dataPath);
  for (const file of files) {
    const fullPath = path.join(dataPath, file);
    const relPath = prefix ? `${prefix}/${file}` : file;
    if (fs.statSync(fullPath).isDirectory()) {
      slugs = slugs.concat(getAllJsonSlugs(path.join(dir, file), relPath.replace(/\.json$/, '')));
    } else if (file.endsWith('.json')) {
      slugs.push(relPath.replace(/\.json$/, ''));
    }
  }
  return slugs;
}

// Solaranlage: alle Slugs inkl. Stadtteile
const solaranlageSlugs = getAllJsonSlugs('solaranlage');
// Ratgeber: alle Slugs aus JSON-Dateien (nicht mehr fest definiert)
const ratgeberSlugs = getAllJsonSlugs('ratgeber');

// XML-Sitemap generieren
function generateSitemap() {
  const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD Format
  
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  // Statische Routen hinzufügen
  staticRoutes.forEach(route => {
    const priority = route === '' ? '1.0' : '0.8';
    sitemap += `
  <url>
    <loc>${BASE_URL}${route}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${priority}</priority>
  </url>`;
  });

  // Solaranlage-Seiten hinzufügen
  solaranlageSlugs.forEach(slug => {
    sitemap += `
  <url>
    <loc>${BASE_URL}/solaranlage/${slug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>`;
  });

  // Ratgeber-Seiten hinzufügen
  ratgeberSlugs.forEach(slug => {
    sitemap += `
  <url>
    <loc>${BASE_URL}/ratgeber/${slug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`;
  });

  sitemap += `
</urlset>`;

  return sitemap;
}

// Sitemap speichern
try {
  const sitemap = generateSitemap();
  const outputPath = path.join(__dirname, '..', 'public', 'sitemap.xml');
  fs.writeFileSync(outputPath, sitemap);
  console.log('✅ Sitemap erfolgreich generiert:', outputPath);
  console.log(`📊 Enthält ${sitemap.split('<url>').length - 1} URLs`);
  console.log(`🌐 Domain: https://www.sonnenhelden24.de`);
  console.log(`📅 Datum: ${new Date().toISOString().split('T')[0]}`);
} catch (error) {
  console.error('❌ Fehler beim Generieren der Sitemap:', error);
  process.exit(1);
}
