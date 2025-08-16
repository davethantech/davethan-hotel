import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import tsconfigPaths from 'vite-tsconfig-paths';

// Vite configuration
export default defineConfig({
  plugins: [
    react(),          // React support
    tsconfigPaths(),  // Use paths from tsconfig.json
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // shortcut to /src
    },
  },
  server: {
    port: 3000,
    open: true,
  },
  build: {
    target: 'esnext', // allows top-level await
    outDir: 'dist',
    sourcemap: true,
  },
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      '@hono/node-server',
    ],
  },
  define: {
    'process.env': {}, // fix React environment issues
  },
});
