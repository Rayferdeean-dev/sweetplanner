import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/sweetplanner-official/', // <--- WAJIB! agar path asset benar di GitHub Pages
  build: {
    outDir: 'dist',
  },
})
