import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

// https://vite.dev/config/
export default defineConfig({
  base: '/event-table/',
  plugins: [react(), svgr()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
})
