import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/aes_depannage/',
  plugins: [react()],
})

// import { defineConfig } from 'vite'

// export default defineConfig({
//   base: '/nom-de-votre-repository/', // Remplacez par le nom de votre dépôt GitHub
// })
