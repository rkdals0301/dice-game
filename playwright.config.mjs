import { defineConfig } from '@playwright/test'

const origin = 'http://127.0.0.1:4176/dice-game/'

export default defineConfig({
  use: { baseURL: origin },
  webServer: {
    command: 'node node_modules/vite/bin/vite.js preview --host 127.0.0.1 --port 4176 --strictPort',
    url: origin
  }
})
