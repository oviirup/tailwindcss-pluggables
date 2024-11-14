import fs from 'fs';
import match from 'micromatch';
import path from 'path';
import { defineConfig } from 'tsup';
import pkg from './package.json';

const patterns = Object.keys(pkg.exports).map((entry) => {
  // add extensions to path glob
  return path.parse(entry).ext ? entry : `${entry}.{js,ts}`;
});

const srcPath = path.join(__dirname, 'src');

type Entry = Record<string, string>;

const entries = fs
  .readdirSync(srcPath, { recursive: true, withFileTypes: true })
  // filter out directories
  .filter((entry) => entry.isFile())
  // get filepath relative to src path
  .map((entry) => path.relative(srcPath, path.join(entry.parentPath, entry.name)).replace(/\\/g, '/'))
  // loop through entries and append matched entries
  .reduce<Entry>((acc, filePath) => {
    if (match([filePath], patterns)[0]) {
      const { name, dir } = path.parse(filePath);
      const outPath = path.posix.join(dir, name);
      acc[outPath] = path.posix.join('src', filePath);
    }
    return acc;
  }, {});

export default defineConfig((cfg) => {
  const commons = {
    entry: entries,
    outDir: 'dist',
    clean: true,
    minify: !cfg.watch,
  };

  return [
    { ...cfg, ...commons, format: ['esm'], dts: true },
    { ...cfg, ...commons, format: ['cjs'] },
  ];
});
