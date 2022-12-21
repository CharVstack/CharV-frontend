/// <reference types="vitest" />
import { defineConfig } from 'vitest/config';
import tsConfigPaths from 'vite-tsconfig-paths';
import react from '@vitejs/plugin-react';
import jotaiReactRefresh from 'jotai/babel/plugin-react-refresh';
import jotaiDebugLabel from 'jotai/babel/plugin-debug-label';
import visualizer from 'rollup-plugin-visualizer';
import squoosh from './squoosh';
import { splitVendorChunkPlugin } from 'vite';

export default defineConfig(({ mode }) => ({
  define: {
    'import.meta.vitest': false,
  },
  plugins: [
    react({
      babel: {
        plugins: [jotaiDebugLabel, jotaiReactRefresh],
      },
    }),
    tsConfigPaths(),
    splitVendorChunkPlugin(),
    squoosh(),
  ],
  build: {
    outDir: 'build',
    sourcemap: process.env.NODE_ENV !== 'production',
    rollupOptions: {
      plugins: [
        mode === 'analyze' &&
          visualizer({
            open: true,
            filename: 'build/stats.html',
            gzipSize: false,
            brotliSize: false,
          }),
      ],
    },
    reportCompressedSize: false,
  },
  optimizeDeps: {
    include: ['react/jsx-runtime'],
  },
  test: {
    globals: true,
    environment: 'happy-dom',
    coverage: {
      all: true,
      include: ['src/**/*.{ts,tsx}'],
      exclude: ['src/**/index.ts', 'src/**/**.stories.{ts,tsx}', 'src/**/*.d.ts'],
    },
    setupFiles: ['./vitest.setup.ts'],
  },
}));
