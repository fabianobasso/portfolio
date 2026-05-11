import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Login App',
        component: () => import('@/views/login/Login.vue'),
        meta: { titulo: 'Login' }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

router.beforeEach((to, _form, next) => {
    document.title = to.meta.titulo
        ? `Configurar Clinica - ${to.meta.titulo}`
        : 'Configurar Clinica'
    next()
})

export default router
