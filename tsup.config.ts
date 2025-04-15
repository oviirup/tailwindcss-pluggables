import fs from 'fs';
import match from 'micromatch';
import path from 'path';
import { defineConfig } from 'tsup';
import pkg from './package.json';

const patterns = Object.keys(pkg.exports).flatMap((entry) => {
  // add extensions to path glob
  return path.parse(entry).ext ? entry : [`${entry}.{js,ts,css}`, `${entry}/index.{js,ts,css}`];
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
      const outPath = path.join(dir, name);
      acc[outPath] = path.join('src', filePath);
    }
    return acc;
  }, {});

export default defineConfig((cfg) => ({
  ...cfg,
  entry: entries,
  outDir: 'dist',
  splitting: true,
  clean: true,
  dts: true,
}));
