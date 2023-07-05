/// <reference types="vitest" />

// import react from '@vitejs/plugin-react'
// import tsconfigPaths from 'vite-tsconfig-paths'
import { configDefaults, defineConfig } from 'vitest/config'

export default defineConfig({
  // plugins: [react(), tsconfigPaths()],
  test: {
    environment: 'happy-dom',
    // coverage: {
    //   reporter: ['text', 'json', 'html'],
    // },
    // exclude: [...configDefaults.exclude, '**/submodules/**'],
    // setupFiles: ['src/vitest-setup.ts'],
  },
})
