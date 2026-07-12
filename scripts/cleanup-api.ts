import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SRC_DIR = path.join(__dirname, '../src');

const TARGET_DIRS = [
  path.join(SRC_DIR, 'api/services'),
  path.join(SRC_DIR, 'api/models'),
];

function getAllTsFiles(dir: string, files: string[] = []) {
  for (const entry of fs.readdirSync(dir)) {
    const fullPath = path.join(dir, entry);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      getAllTsFiles(fullPath, files);
    } else if (entry.endsWith('.ts')) {
      files.push(fullPath);
    }
  }
  return files;
}

// 1️⃣ collect all TS files in src
const allFiles = getAllTsFiles(SRC_DIR);

// 2️⃣ detect used files via imports
const used = new Set<string>();

for (const file of allFiles) {
  const content = fs.readFileSync(file, 'utf8');

  for (const match of content.matchAll(/from\s+['"](.+?)['"]/g)) {
    const imp = match[1];
    if (!imp.startsWith('.')) continue;

    const resolved = path.resolve(path.dirname(file), imp);

    used.add(resolved + '.ts');
    used.add(path.join(resolved, 'index.ts'));
  }
}

// 3️⃣ clean target folders
for (const dir of TARGET_DIRS) {
  if (!fs.existsSync(dir)) continue;

  for (const file of fs.readdirSync(dir)) {
    const fullPath = path.join(dir, file);

    if (
      file.endsWith('.ts') &&
      fullPath !== __filename &&
      !used.has(fullPath)
    ) {
      fs.unlinkSync(fullPath);
      console.log(`Deleted unused file: ${path.relative(SRC_DIR, fullPath)}`);
    }
  }
}
