import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    // Disabling isolation improves performance in Node.js environments
    isolate: false,
    maxWorkers: 1,
  },
})
