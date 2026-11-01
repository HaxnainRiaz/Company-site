import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const dirs = [
  path.join(rootDir, 'public/images/stock'),
  path.join(rootDir, 'public/images/projects'),
  path.join(rootDir, 'public/images/articles'),
  path.join(rootDir, 'public/images/products'),
];

for (const dir of dirs) {
  fs.mkdirSync(dir, { recursive: true });
}

// Generate high quality sample product demonstration WebP images using sharp
const productAssets = [
  {
    name: 'espresso-beans.webp',
    width: 600,
    height: 600,
    svg: `<svg width="600" height="600" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
      <rect width="600" height="600" fill="#F0F3EE"/>
      <circle cx="300" cy="300" r="160" fill="#E7F0EB"/>
      <rect x="230" y="180" width="140" height="240" rx="16" fill="#205C55"/>
      <rect x="245" y="240" width="110" height="70" rx="6" fill="#FAFAF7"/>
      <text x="300" y="275" font-family="sans-serif" font-size="14" font-weight="600" fill="#24342F" text-anchor="middle">ORGANIC ROAST</text>
      <text x="300" y="295" font-family="sans-serif" font-size="12" fill="#58665F" text-anchor="middle">Whole Bean 250g</text>
      <circle cx="300" cy="380" r="14" fill="#AA5035"/>
    </svg>`,
  },
  {
    name: 'ceramic-cup.webp',
    width: 600,
    height: 600,
    svg: `<svg width="600" height="600" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
      <rect width="600" height="600" fill="#F9EEE7"/>
      <circle cx="300" cy="300" r="160" fill="#FFFFFF"/>
      <!-- Ceramic Cup Body -->
      <path d="M220 220 H380 V330 C380 374 344 410 300 410 C256 410 220 374 220 330 Z" fill="#AA5035"/>
      <!-- Handle -->
      <path d="M380 250 C410 250 425 275 425 300 C425 325 410 350 380 350" stroke="#AA5035" stroke-width="18" fill="none" stroke-linecap="round"/>
      <ellipse cx="300" cy="220" rx="80" ry="20" fill="#8C3F28"/>
    </svg>`,
  },
  {
    name: 'linen-apron.webp',
    width: 600,
    height: 600,
    svg: `<svg width="600" height="600" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
      <rect width="600" height="600" fill="#F0F3EE"/>
      <circle cx="300" cy="300" r="160" fill="#FFFFFF"/>
      <path d="M250 170 H350 L380 430 H220 Z" fill="#24342F" rx="8"/>
      <rect x="260" y="290" width="80" height="60" rx="4" fill="#58665F"/>
      <!-- Straps -->
      <path d="M260 170 L230 130 H370 L340 170" stroke="#24342F" stroke-width="8" fill="none"/>
    </svg>`,
  },
  {
    name: 'pour-over-kettle.webp',
    width: 600,
    height: 600,
    svg: `<svg width="600" height="600" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
      <rect width="600" height="600" fill="#FAFAF7"/>
      <circle cx="300" cy="300" r="160" fill="#E7F0EB"/>
      <path d="M230 250 H370 L385 410 H215 Z" fill="#205C55"/>
      <path d="M215 350 C160 330 160 230 210 210" stroke="#205C55" stroke-width="14" fill="none" stroke-linecap="round"/>
      <path d="M375 270 H415 V390 H380" stroke="#24342F" stroke-width="12" fill="none" stroke-linecap="round"/>
      <rect x="270" y="225" width="60" height="25" rx="4" fill="#24342F"/>
    </svg>`,
  },
];

for (const item of productAssets) {
  const targetPath = path.join(rootDir, 'public/images/products', item.name);
  await sharp(Buffer.from(item.svg))
    .webp({ quality: 85 })
    .toFile(targetPath);
  console.log(`Generated ${item.name} at ${targetPath}`);
}

console.log('Image preparation complete.');
