import sharp from "sharp"
import fs from "fs/promises"
import path from "path"

const dir = path.join(process.cwd(), "public/images")

// Images used only as small grid cards (~300px CSS width, .grid--4 .ratio-16-9)
// 1100px width gives ample headroom even at 4x device pixel ratio.
const THUMB_WIDTH = 1100
const QUALITY = 78

const targets = ["2", "3", "12-2", "14-2", "24"]

for (const name of targets) {
  const originalPath = path.join(dir, `${name}.original.jpg`)
  const thumbPath = path.join(dir, `${name}-thumb.jpg`)

  await sharp(originalPath)
    .resize({ width: THUMB_WIDTH, withoutEnlargement: true })
    .jpeg({ quality: QUALITY, progressive: true, mozjpeg: true })
    .toFile(thumbPath)

  const [origStat, newStat] = await Promise.all([
    fs.stat(originalPath),
    fs.stat(thumbPath),
  ])
  const meta = await sharp(thumbPath).metadata()
  const pct = (100 * (1 - newStat.size / origStat.size)).toFixed(1)
  console.log(
    `${name}-thumb.jpg: ${meta.width}x${meta.height} ${(newStat.size / 1024).toFixed(0)}KB (orig ${(origStat.size / 1024 / 1024).toFixed(2)}MB, -${pct}%)`
  )
}
