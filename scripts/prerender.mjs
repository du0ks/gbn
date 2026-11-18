// Build sonrası her sayfayı statik HTML olarak üretir (SEO + hızlı ilk açılış).
import { mkdir, readFile, writeFile, rm } from 'node:fs/promises';
import { fileURLToPath, pathToFileURL } from 'node:url';
import path from 'node:path';

const SITE = 'https://gbntr.com';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const ssrDir = path.join(root, '.ssr');

const { render, pages, notFound } = await import(pathToFileURL(path.join(ssrDir, 'entry-server.js')).href);
const template = await readFile(path.join(dist, 'index.html'), 'utf8');

const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

function build(page, { noindex = false } = {}) {
  const url = SITE + (page.path === '/' ? '/' : page.path + '/');
  let html = template.replace('<!--app-html-->', render(page.path));
  html = html
    .replace(/<title>.*?<\/title>/, `<title>${esc(page.title)}</title>`)
    .replace(/(<meta name="description" content=")[^"]*/, `$1${esc(page.description)}`)
    .replace(/(<meta property="og:title" content=")[^"]*/, `$1${esc(page.title)}`)
    .replace(/(<meta name="twitter:title" content=")[^"]*/, `$1${esc(page.title)}`)
    .replace(/(<meta property="og:description" content=")[^"]*/, `$1${esc(page.description)}`)
    .replace(/(<meta name="twitter:description" content=")[^"]*/, `$1${esc(page.description)}`)
    .replace(/(<meta property="og:url" content=")[^"]*/, `$1${url}`)
    .replace(/(<link rel="canonical" href=")[^"]*/, `$1${url}`);
  if (noindex) {
    html = html
      .replace(/\s*<link rel="canonical"[^>]*>/, '')
      .replace('<meta name="viewport"', '<meta name="robots" content="noindex" />\n    <meta name="viewport"');
  }
  return html;
}

for (const page of pages) {
  const dir = page.path === '/' ? dist : path.join(dist, page.path.slice(1));
  await mkdir(dir, { recursive: true });
  await writeFile(path.join(dir, 'index.html'), build(page));
  console.log('prerendered', page.path);
}
await writeFile(path.join(dist, '404.html'), build(notFound, { noindex: true }));
console.log('prerendered 404');

// sitemap
const urls = pages.map((p) => `  <url><loc>${SITE}${p.path === '/' ? '/' : p.path + '/'}</loc></url>`).join('\n');
await writeFile(
  path.join(dist, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
);

await rm(ssrDir, { recursive: true, force: true });
