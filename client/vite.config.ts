import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/client/', // <-- Ensure this is correct
  plugins: [react()]
})
