/**
 * Image Optimization Script
 * - Converts PNG/JPG/JPEG → WebP
 * - Generates responsive variants: 480w, 768w, 1200w
 * - Generates ultra-light blur placeholder (32w)
 * - Output: public/assets/ (and public/assets/certificates/)
 *
 * Run: node scripts/optimize-images.mjs
 */

import sharp from 'sharp';
import { readdir, mkdir, stat } from 'fs/promises';
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

const RESPONSIVE_WIDTHS = [480, 768, 1200];
const MAIN_WIDTH = 1200;

const OPTIONS = {
  webp: {
    quality: 82,
    effort: 6,
    smartSubsample: true,
  },
  blurWebp: {
    quality: 45,
    effort: 6,
    smartSubsample: true,
  },
};

function resizeOptions(width) {
  return {
    width,
    withoutEnlargement: true,
    fit: 'inside',
  };
}

async function optimizeFile(inputPath, outputDir, filename) {
  const ext = path.extname(filename).toLowerCase();
  if (!SUPPORTED.has(ext)) return;

  const baseName  = path.basename(filename, ext);
  // Replace spaces with hyphens for clean URLs
  const cleanName = baseName.replace(/\s+/g, '-');
  const mainOutFile = path.join(outputDir, `${cleanName}.webp`);

  try {
    const inputStat = await stat(inputPath);
    const inputKB = Math.round(inputStat.size / 1024);

    const mainInfo = await sharp(inputPath)
      .resize(resizeOptions(MAIN_WIDTH))
      .webp(OPTIONS.webp)
      .toFile(mainOutFile);

    // Responsive variants for srcset
    for (const width of RESPONSIVE_WIDTHS) {
      const variantOut = path.join(outputDir, `${cleanName}-${width}.webp`);
      await sharp(inputPath)
        .resize(resizeOptions(width))
        .webp(OPTIONS.webp)
        .toFile(variantOut);
    }

    // Tiny blurred preview placeholder
    const blurOut = path.join(outputDir, `${cleanName}-blur.webp`);
    await sharp(inputPath)
      .resize(resizeOptions(32))
      .blur(0.4)
      .webp(OPTIONS.blurWebp)
      .toFile(blurOut);

    const outputKB = Math.round(mainInfo.size / 1024);
    console.log(
      `  ✓ ${filename.padEnd(40)} ${String(inputKB).padStart(6)} KB  →  ${String(outputKB).padStart(5)} KB  (${mainOutFile.replace(ROOT, '').replace(/\\/g, '/')})`
    );
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
  console.log('   Generated: image.webp, image-480.webp, image-768.webp, image-1200.webp, image-blur.webp\n');
}

main().catch(err => { console.error(err); process.exit(1); });
