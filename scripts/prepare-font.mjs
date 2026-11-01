import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const fontSourcePath = path.join(
  rootDir,
  'node_modules/@fontsource-variable/instrument-sans/files/instrument-sans-latin-wght-normal.woff2'
);

const licenseSourcePath = path.join(
  rootDir,
  'node_modules/@fontsource-variable/instrument-sans/LICENSE'
);

const fontTargetDir = path.join(rootDir, 'src/assets/fonts');
const fontTargetPath = path.join(fontTargetDir, 'InstrumentSans-Latin-Variable.woff2');

const licenseTargetDir = path.join(rootDir, 'public/licenses');
const licenseTargetPath = path.join(licenseTargetDir, 'INSTRUMENT_SANS_LICENSE');

if (!fs.existsSync(fontSourcePath)) {
  console.error(`Font source file not found at: ${fontSourcePath}`);
  process.exit(1);
}

fs.mkdirSync(fontTargetDir, { recursive: true });
fs.copyFileSync(fontSourcePath, fontTargetPath);
const fontStats = fs.statSync(fontTargetPath);
console.log(`Copied Instrument Sans variable font to ${fontTargetPath} (${fontStats.size} bytes)`);

if (fs.existsSync(licenseSourcePath)) {
  fs.mkdirSync(licenseTargetDir, { recursive: true });
  fs.copyFileSync(licenseSourcePath, licenseTargetPath);
  console.log(`Copied font license to ${licenseTargetPath}`);
} else {
  console.warn(`Font license not found at ${licenseSourcePath}`);
}
