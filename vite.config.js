import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'docs',  // Configura la carpeta de salida de la compilación
    rollupOptions: {
      // Asegúrate de que la opción base esté configurada correctamente si estás usando GitHub Pages
      input: {
        main: 'index.html'
      },
      output: {
        // Puedes personalizar la salida aquí si es necesario
      }
    }
  }
})
