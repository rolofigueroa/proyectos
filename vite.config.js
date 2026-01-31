import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  // En local: '/'
  // En producción (GitHub Pages): '/proyectos/'
  base: mode === 'production' ? '/proyectos/' : '/',
}))


