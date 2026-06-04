# Gallery media

Place gallery photos (`.webp`) and videos (`.webm`) in this directory.

## Before deploy

1. **Images:** Run `npm run optimize-gallery` from the project root to audit sizes and recompress `.webp` files in place (uses `sharp`).
2. **Videos:** Re-encode large `.webm` files with [HandBrake](https://handbrake.fr/) or ffmpeg if load times are slow.
3. **Manual option:** [Squoosh](https://squoosh.app/) or TinyPNG work too if you prefer a GUI.

Update paths in `src/app/gallery/page.tsx` when adding or renaming files.
