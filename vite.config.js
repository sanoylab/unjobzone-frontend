import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv';

dotenv.config();

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: `${process.env.VITE_API_URI}`,
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '')
      }
    },
  },
})
