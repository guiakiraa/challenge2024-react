// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://54g4dpwzph.execute-api.us-east-2.amazonaws.com/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '') // remove o prefixo /api nas chamadas
      }
    }
  }
});