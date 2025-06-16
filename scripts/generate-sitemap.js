
const fs = require('fs');
const path = require('path');

// Base URL - in production sollte das eine Umgebungsvariable sein
const BASE_URL = 'https://badhelden24.de';

// Statische Routen
const staticRoutes = [
  '',
  '/badsanierung',
  '/ratgeber',
  '/impressum',
  '/datenschutz',
  '/agb'
];

// Funktion um alle JSON-Dateien aus einem Verzeichnis zu lesen
function getDataFiles(dir) {
  const dataPath = path.join(__dirname, '..', 'public', 'data', dir);
  try {
    const files = fs.readdirSync(dataPath);
    return files
      .filter(file => file.endsWith('.json'))
      .map(file => file.replace('.json', ''));
  } catch (error) {
    console.warn(`Could not read directory ${dataPath}:`, error.message);
    return [];
  }
}

// XML-Sitemap generieren
function generateSitemap() {
  const badsanierungSlugs = getDataFiles('badsanierung');
  const ratgeberSlugs = getDataFiles('ratgeber');
  
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  // Statische Routen hinzufügen
  staticRoutes.forEach(route => {
    const priority = route === '' ? '1.0' : '0.8';
    sitemap += `
  <url>
    <loc>${BASE_URL}${route}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${priority}</priority>
  </url>`;
  });

  // Badsanierung-Seiten hinzufügen
  badsanierungSlugs.forEach(slug => {
    sitemap += `
  <url>
    <loc>${BASE_URL}/badsanierung/${slug}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>`;
  });

  // Ratgeber-Seiten hinzufügen
  ratgeberSlugs.forEach(slug => {
    sitemap += `
  <url>
    <loc>${BASE_URL}/ratgeber/${slug}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
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
} catch (error) {
  console.error('❌ Fehler beim Generieren der Sitemap:', error);
  process.exit(1);
}
