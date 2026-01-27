import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // For GitHub Pages: set to '/' for custom domain or username.github.io
  // Set to '/repo-name/' if deploying to username.github.io/repo-name
  base: '/',
  server: {
    port: 3000
  }
})