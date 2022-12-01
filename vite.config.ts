/// <reference types="vitest" />
import { defineConfig } from 'vitest/config'
import tsConfigPaths from 'vite-tsconfig-paths'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react(), tsConfigPaths()],
  build: {
    outDir: 'build',
  },
  optimizeDeps: {
    include: ['react/jsx-runtime'],
  },
  test: {
    globals: true,
    environment: 'happy-dom',
    coverage: {
      all: true,
      include: ["src/**/*.{ts,tsx}"],
      exclude: [
        "src/**/index.ts",
        "src/**/**.stories.{ts,tsx}"
      ]
    },
    setupFiles: ['./vitest.setup.ts']
  },
})
