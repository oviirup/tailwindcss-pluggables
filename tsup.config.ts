import { globSync } from 'tinyglobby';
import { defineConfig } from 'tsup';

const moduleEntries = globSync('src/**/*.ts');
const cssEntries = globSync('src/**/*.css');

export default defineConfig([
  { entry: moduleEntries, splitting: true, clean: true, dts: true },
  { entry: cssEntries, outDir: './dist' },
  { entry: cssEntries, outDir: './' },
]);
