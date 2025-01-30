import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Faria1/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': [
            'react',
            'react-dom',
            'react-router-dom',
            '@react-three/fiber',
            '@react-three/drei',
            'three'
          ]
        }
      }
    }
  },
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  publicDir: 'public'
})
