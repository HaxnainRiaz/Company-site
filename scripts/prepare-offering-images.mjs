import sharp from 'sharp';
import { readFile, mkdir, copyFile, writeFile } from 'node:fs/promises';
const assets = JSON.parse(await readFile('docs/offering-image-prompts.json', 'utf8'));
await mkdir('public/images/offerings', { recursive: true });
await mkdir('src/assets/offerings', { recursive: true });
const report = [];
for (const asset of assets) {
  await copyFile(asset.source, `src/assets/offerings/${asset.name}.png`);
  const width = asset.name === 'companion' ? 240 : 1000;
  const info = await sharp(asset.source).resize({width, withoutEnlargement:true}).webp({quality:80, effort:5}).toFile(asset.output);
  report.push({name:asset.name, width:info.width, height:info.height, bytes:info.size});
}
await writeFile('docs/offering-image-sizes.json', JSON.stringify(report,null,2));
console.log(report);
