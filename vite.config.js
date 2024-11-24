import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv';


// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // Load environment variables
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [react()],
    define: {
      'process.env': env
    },
    server: {
      proxy: {
        '/api': {
          target: env.VITE_API_URI, // Use the loaded environment variable
          changeOrigin: true,
          rewrite: path => path.replace(/^\/api/, ''),
        },
      },
    },
  };
});
