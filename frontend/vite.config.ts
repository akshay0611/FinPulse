import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
    include: ['react-scroll'], // Ensure react-scroll is included in dependencies optimization
  },
  build: {
    rollupOptions: {
      external: ['react-scroll'], // Treat react-scroll as an external dependency if needed
    },
  },
  base: '/', // Adjust this if your project is served from a sub-path
});
