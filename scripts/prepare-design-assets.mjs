import sharp from 'sharp';
import { mkdir, writeFile } from 'node:fs/promises';

const assets = [
  ['studio-collaboration', 'https://images.pexels.com/photos/5466236/pexels-photo-5466236.jpeg?cs=srgb&dl=pexels-shkrabaanthony-5466236.jpg&fm=jpg', 1600],
  ['appointment-workspace', 'https://images.pexels.com/photos/6809657/pexels-photo-6809657.jpeg?cs=srgb&dl=pexels-pavel-danilyuk-6809657.jpg&fm=jpg', 1200],
  ['mobile-commerce', 'https://images.pexels.com/photos/16052344/pexels-photo-16052344.jpeg?cs=srgb&dl=pexels-introspectivedsgn-16052344.jpg&fm=jpg', 1200],
  ['retail-checkout', 'https://images.pexels.com/photos/36772947/pexels-photo-36772947.jpeg?cs=srgb&dl=pexels-radik-2707-170977881-36772947.jpg&fm=jpg', 1200],
];
await mkdir('public/images/stock', { recursive: true });
for (const [name, url, width] of assets) {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Download ${name}: ${response.status}`);
  const source = Buffer.from(await response.arrayBuffer());
  const output = await sharp(source).rotate().resize({ width, withoutEnlargement: true }).webp({ quality: 82 }).toBuffer();
  await writeFile(`public/images/stock/${name}.webp`, output);
  console.log(`${name}: ${output.length} bytes`);
}
