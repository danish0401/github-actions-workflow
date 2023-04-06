import * as path from 'path';
import { defineConfig } from 'vitest/config';
import { chunkSplitPlugin } from 'vite-plugin-chunk-split';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [
    react({
      exclude: /\.stories\.(t|j)sx?$/,
      include: '**/*.tsx',
    }),
    chunkSplitPlugin(),
    svgr(),
  ],
  server: {
    host: '127.0.0.1',
    port: 8080,
    open: true,
  },
  resolve: {
    alias: [
      { find: 'app', replacement: path.resolve(__dirname, 'src/app') },
      { find: 'pages', replacement: path.resolve(__dirname, 'src/pages') },
      { find: 'shared', replacement: path.resolve(__dirname, 'src/shared') },
      { find: 'features', replacement: path.resolve(__dirname, 'src/features') },
      { find: 'entities', replacement: path.resolve(__dirname, 'src/entities') },
    ],
  },
  test: {
    globals: true,
    setupFiles: 'src/setupTests.ts',
    environment: 'jsdom',
    coverage: {
      reporter: ['text', 'json', 'html'],
    },
  },
});
