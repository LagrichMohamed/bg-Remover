import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    middlewareMode: false,
    headers: {
      'Cross-Origin-Opener-Policy': 'same-origin',
      'Cross-Origin-Embedder-Policy': 'require-corp',
    },
  },
  optimizeDeps: {
    include: [
      'react-icons/fa',
      'react-icons/bi',
      'react-icons/md'
    ]
  },
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  }
});
