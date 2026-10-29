// Generates responsive WebP variants (name-<width>.webp) beside each JPG in public/images, and writes
// src/lib/image-variants.json (name -> widths) for SiteImage. Run after adding or replacing a source image:
//   node scripts/optimise-images.mjs
import { readdir, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = path.join(import.meta.dirname, "..");
const dir = path.join(root, "public", "images");
const steps = [480, 960, 1600];
const manifest = {};

for (const file of (await readdir(dir)).filter((f) => f.endsWith(".jpg")).sort()) {
  const name = path.basename(file, ".jpg");
  const { width = 0 } = await sharp(path.join(dir, file)).metadata();
  const widths = [...new Set([...steps.filter((w) => w < width), width])];
  for (const w of widths) {
    await sharp(path.join(dir, file)).resize({ width: w }).webp({ quality: 74 }).toFile(path.join(dir, `${name}-${w}.webp`));
  }
  manifest[name] = widths;
}

await writeFile(path.join(root, "src", "lib", "image-variants.json"), `${JSON.stringify(manifest, null, 2)}\n`);
