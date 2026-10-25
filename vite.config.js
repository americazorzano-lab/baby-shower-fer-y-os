import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // La página se publica en https://<usuario>.github.io/baby-shower-fer-y-os/
  // por lo que los assets necesitan ese prefijo.
  base: '/baby-shower-fer-y-os/',
})
