/// <reference types="vitest" />
import { defineConfig } from 'vitest/config';
import tsConfigPaths from 'vite-tsconfig-paths';
import react from '@vitejs/plugin-react';
import jotaiReactRefresh from 'jotai/babel/plugin-react-refresh';
import jotaiDebugLabel from 'jotai/babel/plugin-debug-label';

export default defineConfig({
  define: {
    'import.meta.vitest': false,
  },
  plugins: [react({ babel: { plugins: [jotaiDebugLabel, jotaiReactRefresh] } }), tsConfigPaths()],
  build: {
    outDir: 'build',
  },
  optimizeDeps: {
    include: ['react/jsx-runtime'],
  },
  test: {
    globals: true,
    environment: 'jsdom',
    coverage: {
      all: true,
      include: ['src/**/*.{ts,tsx}'],
      exclude: ['src/**/index.ts', 'src/**/**.stories.{ts,tsx}', 'src/**/*.d.ts'],
    },
    setupFiles: ['./vitest.setup.ts'],
  },
});
