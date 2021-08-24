import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import pages from 'vite-plugin-react-pages'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    reactRefresh(),
    pages({ pagesDir: path.join(__dirname, 'src') }),
  ]
})
