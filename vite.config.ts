import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'

// base './' permite publicar em https://fabianobasso.github.io/portfolio/
export default defineConfig({
    plugins: [vue()],
    base: './',
    resolve: { alias: { '@': path.resolve(__dirname, 'src') } }
})
