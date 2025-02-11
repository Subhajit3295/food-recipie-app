import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: "true",
    allowedHosts: ['b31d-2409-40e0-1e-ae22-2af7-6fff-d5ed-30e2.ngrok-free.app'],
  },
  plugins: [ tailwindcss(), react()],
})
