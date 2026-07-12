// Baut den Ordner "dist" fuer GitHub Pages.
// Diese Website ist statisch – build.js kopiert nur die fertigen Dateien nach dist/.
const fs = require('fs');
const path = require('path');

const OUT = 'dist';
// Diese Dateien/Ordner NICHT veroeffentlichen:
const SKIP = new Set([
  '.git', '.github', 'dist', 'node_modules', 'build.js',
  'LIESMICH.txt', 'ANLEITUNG-GitHub-Strato.md'
]);

fs.rmSync(OUT, { recursive: true, force: true });
fs.mkdirSync(OUT, { recursive: true });

for (const name of fs.readdirSync('.')) {
  if (SKIP.has(name)) continue;
  fs.cpSync(name, path.join(OUT, name), { recursive: true });
}
console.log('Build fertig: alle Website-Dateien liegen jetzt in ./dist');
