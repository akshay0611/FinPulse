import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['@vercel/analytics/react'], // Add this to ensure Vite can optimize this package
    exclude: ['lucide-react'],
  },
  build: {
    rollupOptions: {
      external: ['@vercel/analytics/react'], // Add this to ensure Vite treats it as an external dependency
    },
  },
  base: '/', // Adjust this if your project is served from a sub-path
});
