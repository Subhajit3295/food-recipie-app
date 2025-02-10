import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: "true",
    allowedHosts: ['cf66-2409-40e0-2d-6f52-bb0a-e561-bce5-9360.ngrok-free.app'],
  },
  plugins: [ tailwindcss(), react()],
})
