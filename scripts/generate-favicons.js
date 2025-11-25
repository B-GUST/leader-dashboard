const fs = require('fs')
const path = require('path')
const sharp = require('sharp')
const pngToIcoMod = require('png-to-ico')
const pngToIco = pngToIcoMod && (pngToIcoMod.default || pngToIcoMod)

async function generate() {
  const publicDir = path.resolve(__dirname, '..', 'public')
  const src = path.join(publicDir, 'logo.png')
  if (!fs.existsSync(src)) {
    console.error('Source image not found:', src)
    process.exit(1)
  }

  const sizes = [16, 32, 48]
  const buffers = []

  for (const s of sizes) {
    const buf = await sharp(src).resize(s, s, { fit: 'contain', background: { r:0,g:0,b:0, alpha:0 } }).png().toBuffer()
    const outPath = path.join(publicDir, `favicon-${s}.png`)
    fs.writeFileSync(outPath, buf)
    console.log('Wrote', outPath)
    buffers.push(buf)
  }

  // generate multi-size ico (png-to-ico expects buffers for pngs)
  const icoBuf = await pngToIco(buffers)
  const icoPath = path.join(publicDir, 'favicon.ico')
  fs.writeFileSync(icoPath, icoBuf)
  console.log('Wrote', icoPath)
}

generate().catch(err => { console.error(err); process.exit(1) })
