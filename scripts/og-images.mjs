// Writes public/og/<slug>.jpg (1200×630) from each project's cover, for link previews.
// JPG rather than WebP: some previews (LinkedIn especially) don't reliably show WebP.
// Runs before every build (see "prebuild" in package.json); the output is gitignored.
import { readFileSync, mkdirSync } from "fs";
import path from "path";
import sharp from "sharp";

const root = path.join(path.dirname(new URL(import.meta.url).pathname), "..");
const data = readFileSync(path.join(root, "app/data/projects.ts"), "utf8");

// `import fooCover from "../../public/foo/cover.webp";` → { fooCover: "public/foo/cover.webp" }
const imports = Object.fromEntries(
  [...data.matchAll(/^import (\w+) from "\.\.\/\.\.\/(public\/[^"]+)";/gm)].map((m) => [m[1], m[2]]),
);
// Each project's slug, followed by its cover's import name.
const covers = [...data.matchAll(/slug: "([\w-]+)",[\s\S]*?cover: \{ src: (\w+)/g)].map((m) => ({
  slug: m[1],
  file: imports[m[2]],
}));
const slugCount = [...data.matchAll(/^\s+slug: "/gm)].length;
if (covers.length !== slugCount || covers.some((c) => !c.file)) {
  throw new Error(`og-images: matched ${covers.length} covers for ${slugCount} projects; check app/data/projects.ts`);
}

const out = path.join(root, "public/og");
mkdirSync(out, { recursive: true });
for (const { slug, file } of covers) {
  const src = path.join(root, file);
  const { width, height } = await sharp(src).metadata();
  // Covers wider than the 1.91:1 preview are shown whole on the site background instead of losing their sides.
  const fit = width / height > 1200 / 630 ? "contain" : "cover";
  await sharp(src)
    .resize(1200, 630, { fit, position: "centre", background: "#141414" })
    .flatten({ background: "#141414" })
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile(path.join(out, `${slug}.jpg`));
}
console.log(`og-images: wrote ${covers.length} images to public/og`);
