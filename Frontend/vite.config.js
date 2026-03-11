import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Split vendor and asset chunks for better caching
    rollupOptions: {
      output: {
        // Images get their own folder with content-hash names for long-term caching
        assetFileNames: (assetInfo) => {
          const imgExts = ['.png', '.jpg', '.jpeg', '.gif', '.svg', '.webp', '.avif'];
          if (imgExts.some(ext => assetInfo.name?.endsWith(ext))) {
            return 'assets/images/[name]-[hash][extname]';
          }
          return 'assets/[name]-[hash][extname]';
        },
        // Split big vendor libraries into separate chunks
        manualChunks: {
          'vendor-react': ['react', 'react-dom'],
          'vendor-motion': ['framer-motion'],
        },
      },
    },
    // Inline tiny assets as base64 to save HTTP round-trips
    assetsInlineLimit: 4096, // 4 KB
  },
})
