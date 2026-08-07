import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    strictPort: false,
    host: true,
    hmr: {
      overlay: true,
    },
  },
  base: '/AI-Caravan/',   // <-- Add this line
  build: {
    outDir: 'dist',
  },
});