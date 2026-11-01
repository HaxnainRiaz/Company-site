import { readFile, readdir, stat, writeFile } from 'node:fs/promises';
import path from 'node:path';
const root = process.cwd();
const appRoot = path.join(root, '.next/server/app');
async function walk(dir) { const entries = await readdir(dir, { withFileTypes: true }); const files = []; for (const entry of entries) { const full = path.join(dir, entry.name); if (entry.isDirectory()) files.push(...await walk(full)); else if (full.endsWith('.html')) files.push(full); } return files; }
// Next's emergency global-error shell intentionally bypasses the application layout.
const files = (await walk(appRoot)).filter(file => path.basename(file) !== '_global-error.html');
const issues = [];
const routes = [];
const publicPaths = new Set();
const localLinks = new Set();
for (const file of files) {
 const html = await readFile(file, 'utf8');
 const relative = path.relative(appRoot, file).split(path.sep).join('/');
 const route = relative === 'index.html' ? '/' : '/' + relative.replace(/\.html$/, '');
 const headings = [...html.matchAll(/<h1(?:\s[^>]*)?>([\s\S]*?)<\/h1>/g)];
 const mains = [...html.matchAll(/<main(?:\s[^>]*)?>/g)];
 const noindex = /name="robots"[^>]*content="[^"]*noindex/.test(html);
 if (headings.length !== 1) issues.push(route + ': expected one h1, got ' + headings.length);
 if (mains.length !== 1) issues.push(route + ': expected one main, got ' + mains.length);
 if (!noindex) issues.push(route + ': missing preview noindex');
 for (const match of html.matchAll(/<a\b[^>]*\bhref="([^"]+)"/g)) {
  const href = match[1].replaceAll('&amp;', '&');
  if (href.startsWith('/') && !href.startsWith('//')) localLinks.add(new URL(href, 'http://local.invalid').pathname);
 }
 const imageUrls = [...html.matchAll(/<img\b[^>]*\bsrc="([^"]+)"/g)].map(match => match[1].replaceAll('&amp;', '&'));
 for (const url of imageUrls) { const parsed = new URL(url, 'http://local.invalid'); const imagePath = parsed.pathname === '/_next/image' ? parsed.searchParams.get('url') : parsed.pathname; if (imagePath?.startsWith('/images/')) publicPaths.add(imagePath); }
 routes.push({ route, h1: headings[0]?.[1].replace(/<[^>]*>/g, '').replaceAll('&amp;', '&'), noindex, images: imageUrls.length });
}
for (const imagePath of publicPaths) { try { const entry = await stat(path.join(root, 'public', imagePath)); if (entry.size === 0) issues.push('Empty image: ' + imagePath); } catch { issues.push('Missing image: ' + imagePath); } }
const required = ['/', '/about', '/contact', '/demos', '/work', '/cookies', '/accessibility', '/services', '/demos/admin-dashboard', '/demos/retail-pos', '/demos/ecommerce-store', '/demos/booking-flow'];
for (const route of required) if (!routes.some(entry => entry.route === route)) issues.push('Missing route: ' + route);
const builtRoutes = new Set(routes.map(entry => entry.route));
for (const href of localLinks) {
 if (builtRoutes.has(href) || ['/thank-you', '/robots.txt', '/sitemap.xml'].includes(href)) continue;
 try { await stat(path.join(root, 'public', href)); } catch { issues.push('Unresolved local link: ' + href); }
}
const report = { generatedAt: new Date().toISOString(), checkedRoutes: routes.length, checkedLocalImages: publicPaths.size, checkedLocalLinks: localLinks.size, issues, routes };
await writeFile('docs/built-site-check.json', JSON.stringify(report, null, 2));
console.log(JSON.stringify({ checkedRoutes: routes.length, checkedLocalImages: publicPaths.size, checkedLocalLinks: localLinks.size, issues }, null, 2));
if (issues.length) process.exitCode = 1;

