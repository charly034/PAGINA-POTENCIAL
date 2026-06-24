import sharp from "sharp";
import { readdir, stat } from "fs/promises";
import { join, extname, basename } from "path";

const dirs = ["public/logos", "public/team", "public/testimonios", "public"];

const configs = {
  logos:       { width: 400,  quality: 80 },
  team:        { width: 800,  quality: 82 },
  testimonios: { width: 1200, quality: 80 },
  public:      { width: 1200, quality: 85 },
};

async function optimizeDir(dir) {
  const key = dir.split("/").pop();
  const cfg = configs[key] || configs.public;

  let files;
  try { files = await readdir(dir); } catch { return; }

  for (const file of files) {
    const ext = extname(file).toLowerCase();
    if (![".jpg", ".jpeg", ".png"].includes(ext)) continue;

    const src = join(dir, file);
    const sizeBefore = (await stat(src)).size;

    // Convertir a WebP
    const outName = basename(file, ext) + ".webp";
    const dest = join(dir, outName);

    await sharp(src)
      .resize({ width: cfg.width, withoutEnlargement: true })
      .webp({ quality: cfg.quality })
      .toFile(dest);

    const sizeAfter = (await stat(dest)).size;
    const saved = Math.round((1 - sizeAfter / sizeBefore) * 100);
    console.log(`✓ ${file} → ${outName}  ${Math.round(sizeBefore/1024)}KB → ${Math.round(sizeAfter/1024)}KB  (-${saved}%)`);
  }
}

for (const dir of dirs) await optimizeDir(dir);
console.log("\nDone. Actualiza las referencias .png/.jpg → .webp en el código.");
