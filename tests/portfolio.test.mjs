import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const read = (relative) => fs.readFileSync(path.join(root, relative), 'utf8');

test('Vite React entry points and build configuration are present', () => {
  assert.match(read('index.html'), /src="\/src\/main\.tsx"/);
  assert.match(read('src/main.tsx'), /createRoot/);
  assert.match(read('vite.config.ts'), /@vitejs\/plugin-react/);
  assert.match(read('vercel.json'), /"buildCommand":\s*"npm run build"/);
});

test('all new-tab links protect the opener', () => {
  const source = [...fs.globSync('src/**/*.{tsx,ts}', { cwd: root })]
    .map((file) => read(file)).join('\n');
  const links = [...source.matchAll(/<a\b[\s\S]*?target=["']_blank["'][\s\S]*?>/g)];
  assert.ok(links.length > 0, 'expected external new-tab links');
  for (const link of links) assert.match(link[0], /rel=["'][^"']*noopener[^"']*noreferrer/);
});

test('portfolio data has required profile contact fields', () => {
  const source = read('src/data/portfolio.ts');
  assert.match(source, /email:/);
  assert.match(source, /linkedin:/);
  assert.match(source, /github:/);
});

test('repository contains no committed secret-looking assignments', () => {
  const files = [...fs.globSync('src/**/*.{tsx,ts}', { cwd: root })];
  for (const file of files) {
    const source = read(file);
    assert.doesNotMatch(source, /(?:api[_-]?key|secret|password|token)\s*[:=]\s*["'][^"']+["']/i);
  }
});
