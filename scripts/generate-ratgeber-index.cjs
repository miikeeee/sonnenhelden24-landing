const fs = require('fs');
const path = require('path');

const RATGEBER_DIR = path.join(__dirname, '..', 'public', 'data', 'ratgeber');
const OUTPUT_FILE = path.join(RATGEBER_DIR, 'index.json');

function getAllJsonFiles(dir) {
  return fs.readdirSync(dir)
    .filter(f => f.endsWith('.json') && f !== 'index.json');
}

try {
  const files = getAllJsonFiles(RATGEBER_DIR);
  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(files, null, 2));
  console.log('✅ Ratgeber-Index generiert:', OUTPUT_FILE);
  console.log('Gefundene Dateien:', files);
} catch (e) {
  console.error('❌ Fehler beim Generieren des Ratgeber-Index:', e);
  process.exit(1);
}
