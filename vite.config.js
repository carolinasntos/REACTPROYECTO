/*import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'*/

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/REACTPROYECTO/', // <-- el nombre exacto de tu repositorio
  plugins: [react()],
})
