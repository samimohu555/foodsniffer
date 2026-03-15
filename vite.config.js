import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
    plugins: [
        react(),
        tailwindcss(),
        VitePWA({
            registerType: 'autoUpdate',
            includeAssets: ['icons/*.png'],
            manifest: {
                name: 'FoodSniffer - Food Adulteration Test',
                short_name: 'FoodSniffer',
                description: 'Test food purity at home with FSSAI-backed rapid tests',
                start_url: '/',
                display: 'standalone',
                orientation: 'portrait',
                theme_color: '#0f766e',
                background_color: '#f8fafc',
                lang: 'hi',
                categories: ['health', 'food', 'utilities'],
                icons: [
                    { src: '/icons/icon-72.png', sizes: '72x72', type: 'image/png' },
                    { src: '/icons/icon-96.png', sizes: '96x96', type: 'image/png' },
                    { src: '/icons/icon-128.png', sizes: '128x128', type: 'image/png' },
                    { src: '/icons/icon-144.png', sizes: '144x144', type: 'image/png' },
                    { src: '/icons/icon-192.png', sizes: '192x192', type: 'image/png' },
                    { src: '/icons/icon-384.png', sizes: '384x384', type: 'image/png' },
                    { src: '/icons/icon-512.png', sizes: '512x512', type: 'image/png' },
                    { src: '/icons/maskable-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' }
                ]
            },
            workbox: {
                globPatterns: ['**/*.{js,css,html,png,webp,woff2,json}'],
                runtimeCaching: []
            }
        })
    ]
});
