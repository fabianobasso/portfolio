import { createApp } from 'vue'
import App from './App.vue'

// Importes da UI
import './assets/css/index.css'
import vuestic from './vuestiic-ui.config'
import 'vuestic-ui/styles/essential.css'
import 'vuestic-ui/styles/typography.css'
import 'material-design-icons-iconfont/dist/material-design-icons.min.css'
import 'primeicons/primeicons.css'

// Import routers app
import router from './router'
import { createPinia } from 'pinia'
import Vue3Lottie from 'vue3-lottie'

const app = createApp(App)

app.use(vuestic)
app.use(createPinia())
app.use(router)
app.use(Vue3Lottie)
app.mount('#app')
