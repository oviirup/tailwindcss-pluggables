import { defineConfig } from 'tsup';

export default defineConfig([
  { entry: ['src/**/*.ts'], dts: true },
  { entry: ['src/**/*.ts'], format: 'esm' },
  { entry: ['src/**/*.css'], outDir: './' },
]);
