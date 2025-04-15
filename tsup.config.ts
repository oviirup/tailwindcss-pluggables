import fs from 'fs';
import match from 'micromatch';
import path from 'path';
import { defineConfig } from 'tsup';
import pkg from './package.json';

const patterns = Object.keys(pkg.exports).flatMap((entry) => {
  // add extensions to path glob
  entry = entry.replace(/^\./, './src');
  return [`${entry}.{js,ts,css}`, `${entry}/index.{js,ts}`];
});

const files = fs
  .readdirSync('src', { recursive: true, withFileTypes: true })
  // filter out directories
  .filter((entry) => entry.isFile())
  // get filepath relative to src path
  .map((entry) => {
    const fullPath = path.join(entry.parentPath, entry.name);
    return path.relative(__dirname, fullPath).replace(/\\/g, '/');
  });

const entries = match(files, patterns);

export default defineConfig((cfg) => ({
  ...cfg,
  entry: entries,
  splitting: true,
  clean: true,
  dts: { entry: entries.filter((e) => !e.endsWith('.css')) },
  minify: !cfg.watch,
}));
