import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/sweetplanner/', // Fixed: matches the actual repository name
  build: {
    outDir: 'dist',
  },
})
