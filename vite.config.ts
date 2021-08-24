import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import pages from 'vite-plugin-react-pages'
import path from 'path'

export const alias = {
  $components: path.resolve(__dirname, 'src', 'components'),
  $hooks: path.resolve(__dirname, 'src', 'hooks'),
  $util: path.resolve(__dirname, 'src', 'util'),
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    reactRefresh(),
    pages({ pagesDir: path.resolve(__dirname, 'src', 'views') }),
  ],
  resolve: {
    alias
  }
})
