/// <reference types="vite/client" />
import type { readonly } from 'vue'

interface ImportMetaEnv {
    readonly VITE_APP: string
    readonly VITE_URL_PUBLIC_NGROK: string
    readonly VITE_PORT_MASTER_SERVER: number
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
