import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite"


export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    target: 'esnext',
    // Force esbuild instead of Rolldown (fixes JSX in .js files)
    rollupOptions: {},
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.js': 'jsx',
      },
    },
  },
  server: {
    port: 3000,
    proxy: {
      "/api": {
        target: "http://localhost:9999",
        changeOrigin: true,
      },
      "/admin": {
        target: "http://localhost:9999",
        changeOrigin: true,
      },
    },
    historyApiFallback: true
  }
});

