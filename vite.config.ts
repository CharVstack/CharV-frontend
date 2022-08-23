/// <reference types="vitest" />
import { defineConfig } from 'vite'
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
    setupFiles: './vitest.setup.ts',
  },
})
