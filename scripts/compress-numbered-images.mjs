import sharp from "sharp"
import fs from "fs/promises"
import path from "path"

const dir = path.join(process.cwd(), "public/images")
const MAX_DIM = 3840 // covers full-bleed hero on 4K displays
const QUALITY = 88

const files = (await fs.readdir(dir)).filter((f) => /^\d+(-\d+)?\.jpg$/.test(f))

for (const file of files) {
  const base = file.replace(/\.jpg$/, "")
  const srcPath = path.join(dir, file)
  const originalPath = path.join(dir, `${base}.original.jpg`)

  // Move current file to .original.jpg if not already done
  try {
    await fs.access(originalPath)
  } catch {
    await fs.rename(srcPath, originalPath)
  }

  const meta = await sharp(originalPath).metadata()
  const needsResize = meta.width > MAX_DIM || meta.height > MAX_DIM

  let pipeline = sharp(originalPath)
  if (needsResize) {
    pipeline = pipeline.resize({
      width: MAX_DIM,
      height: MAX_DIM,
      fit: "inside",
      withoutEnlargement: true,
    })
  }

  await pipeline
    .jpeg({ quality: QUALITY, progressive: true, mozjpeg: true })
    .toFile(srcPath)

  const [origStat, newStat] = await Promise.all([
    fs.stat(originalPath),
    fs.stat(srcPath),
  ])
  const pct = (100 * (1 - newStat.size / origStat.size)).toFixed(1)
  console.log(
    `${file}: ${meta.width}x${meta.height} ${(origStat.size / 1024 / 1024).toFixed(2)}MB -> ${(newStat.size / 1024 / 1024).toFixed(2)}MB (-${pct}%)`
  )
}
