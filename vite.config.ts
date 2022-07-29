import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
    plugins: [vue()],
    resolve: { alias: { '@': path.resolve(__dirname, './src') } },
    server: { host: false, port: 3000, https: false },
})
