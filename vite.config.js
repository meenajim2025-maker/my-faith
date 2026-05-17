import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'My Faith',
        short_name: 'My Faith',
        description:
          'A gentle path into spirituality — prayer, reflection, story, and daily peace for everyone.',
        theme_color: '#1e293b',
        background_color: '#fff7ed',
        display: 'standalone',
        start_url: '/',
        icons: [],
      },
    }),
  ],
})
