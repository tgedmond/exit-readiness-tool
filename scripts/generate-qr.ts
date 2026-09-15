import { writeFileSync, mkdirSync } from 'node:fs'
import { join } from 'node:path'
import QRCode from 'qrcode'

const baseUrl = process.argv[2] ?? 'https://example.com/exit-readiness?source=qr&host=pantheon&campaign=exit-readiness'
const outputDir = join(process.cwd(), 'outputs')
mkdirSync(outputDir, { recursive: true })
const svg = await QRCode.toString(baseUrl, { type: 'svg', margin: 2, color: { dark: '#102c4e', light: '#ffffff' }, width: 720 })
writeFileSync(join(outputDir, 'pantheon-exit-readiness-qr.svg'), svg)
writeFileSync(join(outputDir, 'qr-target.txt'), baseUrl + '\n')
console.log(`Wrote real QR SVG and target URL to ${outputDir}`)
