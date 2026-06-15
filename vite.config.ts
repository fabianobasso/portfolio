import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import * as path from 'path'
import { viteStaticCopy } from 'vite-plugin-static-copy'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd(), '')

    return {
        plugins: [
            vue(),
            // {
            //     name: 'mudar-local-imagem-build',
            //     transformIndexHtml(html) {
            //         return html.replace(
            //             '/\/src\/assets\/img\//g',
            //             './assets/img/'
            //         )
            //     }
            // },
            tailwindcss(),
            viteStaticCopy({
                targets: [
                    {
                        src: './src/assets/json/*.json',
                        dest: 'assets/json'
                    },
                    {
                        src: './src/assets/cv/*.pdf',
                        dest: 'assets/cv'
                    },
                    {
                        src: './src/assets/img/*.png',
                        dest: 'assets/img'
                    },
                    {
                        src: './google5e378ff5734c84cd.html',
                        dest: '.'
                    }
                ]
            })
        ],
        server: {
            host: true,
            port: parseInt(env.VITE_PORT_MASTER_SERVER),
            allowedHosts: [env.VITE_URL_PUBLIC_NGROK]
        },
        base: './',
        resolve: {
            alias: {
                '@': path.resolve(__dirname, 'src')
            }
        },
        css: {
            preprocessorOptions: {
                scss: {
                    api: 'modern-compiler',
                    additionalData: `@use "/src/assets/scss/global.scss" as *;`
                }
            }
        }
    }
})
