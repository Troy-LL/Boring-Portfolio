/**
 * Audit and recompress gallery WebP images in public/images/gallery.
 * WebM videos are listed for manual re-encoding (ffmpeg/HandBrake).
 *
 * Usage: npm run optimize-gallery
 */
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const GALLERY_DIR = path.join(__dirname, '..', 'public', 'images', 'gallery');
const WEBP_QUALITY = 82;
const MIN_SAVINGS_BYTES = 1024;

function formatBytes(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}

async function optimizeWebp(filePath) {
  const before = (await fs.stat(filePath)).size;

  const buffer = await sharp(filePath, { failOn: 'none' })
    .webp({ quality: WEBP_QUALITY, effort: 6 })
    .toBuffer();

  const after = buffer.length;

  if (after < before - MIN_SAVINGS_BYTES) {
    await fs.writeFile(filePath, buffer);
    return { before, after, saved: true };
  }

  return { before, after: before, saved: false };
}

async function main() {
  let entries;
  try {
    entries = await fs.readdir(GALLERY_DIR);
  } catch {
    console.error(`Gallery directory not found: ${GALLERY_DIR}`);
    process.exit(1);
  }

  const media = entries.filter((name) => {
    const ext = path.extname(name).toLowerCase();
    return ext === '.webp' || ext === '.webm' || ext === '.png' || ext === '.jpg' || ext === '.jpeg';
  });

  if (media.length === 0) {
    console.log('No gallery media found. Add .webp/.webm files to public/images/gallery/ first.');
    return;
  }

  console.log('--- Gallery size audit ---');
  const webpFiles = [];
  const webmFiles = [];

  for (const name of media.sort()) {
    const stat = await fs.stat(path.join(GALLERY_DIR, name));
    const ext = path.extname(name).toLowerCase();
    console.log(`  ${name}: ${formatBytes(stat.size)}`);
    if (ext === '.webp') webpFiles.push(name);
    if (ext === '.webm') webmFiles.push(name);
  }

  if (webmFiles.length > 0) {
    console.log('\nWebM files (re-encode manually if large):');
    for (const name of webmFiles) {
      console.log(`  ${name}`);
    }
  }

  if (webpFiles.length === 0) {
    console.log('\nNo .webp files to optimize.');
    return;
  }

  console.log('\n--- Optimizing WebP images ---');
  let totalBefore = 0;
  let totalAfter = 0;

  for (const name of webpFiles) {
    const filePath = path.join(GALLERY_DIR, name);
    try {
      const result = await optimizeWebp(filePath);
      totalBefore += result.before;
      totalAfter += result.saved ? result.after : result.before;
      const delta = result.before - (result.saved ? result.after : result.before);
      console.log(
        `  ${name}: ${formatBytes(result.before)} → ${formatBytes(result.saved ? result.after : result.before)}${result.saved ? ` (saved ${formatBytes(delta)})` : ' (unchanged)'}`
      );
    } catch (err) {
      const before = (await fs.stat(filePath)).size;
      totalBefore += before;
      totalAfter += before;
      console.log(`  ${name}: skipped (${err.code || err.message})`);
    }
  }

  console.log(`\nTotal WebP: ${formatBytes(totalBefore)} → ${formatBytes(totalAfter)}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
