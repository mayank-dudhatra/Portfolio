/**
 * Image Optimization Script
 * - Converts PNG/JPG/JPEG → WebP
 * - Resizes to max 1200px width (preserves aspect ratio)
 * - Compresses to target ~100–300 KB
 * - Output: public/assets/  (and public/assets/certificates/)
 *
 * Run: node scripts/optimize-images.mjs
 */

import sharp from 'sharp';
import { readdir, mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

const SOURCES = [
  {
    input:  path.join(ROOT, 'src', 'assets'),
    output: path.join(ROOT, 'public', 'assets'),
    recursive: false,
  },
  {
    input:  path.join(ROOT, 'src', 'assets', 'certificates'),
    output: path.join(ROOT, 'public', 'assets', 'certificates'),
    recursive: false,
  },
];

const SUPPORTED = new Set(['.png', '.jpg', '.jpeg', '.gif', '.bmp', '.tiff']);

const OPTIONS = {
  webp: {
    quality: 82,      // 82 gives excellent quality at a fraction of the original size
    effort: 6,        // 0=fast … 6=best compression
    smartSubsample: true,
  },
  resize: {
    width: 1200,
    withoutEnlargement: true, // never upscale smaller images
    fit: 'inside',
  },
};

async function optimizeFile(inputPath, outputDir, filename) {
  const ext = path.extname(filename).toLowerCase();
  if (!SUPPORTED.has(ext)) return;

  const baseName  = path.basename(filename, ext);
  // Replace spaces with hyphens for clean URLs
  const cleanName = baseName.replace(/\s+/g, '-');
  const outFile   = path.join(outputDir, `${cleanName}.webp`);

  try {
    const info = await sharp(inputPath)
      .resize(OPTIONS.resize)
      .webp(OPTIONS.webp)
      .toFile(outFile);

    const inputKB  = Math.round((await sharp(inputPath).metadata()).size / 1024) || '?';
    const outputKB = Math.round(info.size / 1024);
    console.log(`  ✓ ${filename.padEnd(40)} ${String(inputKB).padStart(6)} KB  →  ${String(outputKB).padStart(5)} KB  (${outFile.replace(ROOT, '').replace(/\\/g, '/')})`);
  } catch (err) {
    console.error(`  ✗ Failed: ${filename} — ${err.message}`);
  }
}

async function processDir({ input, output }) {
  if (!existsSync(input)) {
    console.warn(`  ⚠ Skipping (not found): ${input}`);
    return;
  }

  await mkdir(output, { recursive: true });

  const entries = await readdir(input, { withFileTypes: true });
  const files   = entries.filter(e => e.isFile());

  console.log(`\n📁 ${input.replace(ROOT, '')}`);
  if (files.length === 0) { console.log('   (no files)'); return; }

  for (const file of files) {
    await optimizeFile(path.join(input, file.name), output, file.name);
  }
}

async function main() {
  console.log('🚀 Starting image optimization...\n');
  for (const src of SOURCES) {
    await processDir(src);
  }
  console.log('\n✅ Done! Optimized images saved to public/assets/');
  console.log('   Import them with: src="/assets/image-name.webp"\n');
}

main().catch(err => { console.error(err); process.exit(1); });
