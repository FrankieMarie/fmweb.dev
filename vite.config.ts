import { defineConfig } from 'vite';
import viteReact from '@vitejs/plugin-react';
import { TanStackRouterVite } from '@tanstack/router-plugin/vite';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import { compression } from 'vite-plugin-compression2';
// import { analyzer } from 'vite-bundle-analyzer';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    viteReact(),
    TanStackRouterVite(),
    ViteImageOptimizer(),
    // analyzer(),
    compression({
      include: [/\.(js)$/, /\.(css)$/]
    })
  ]
});
