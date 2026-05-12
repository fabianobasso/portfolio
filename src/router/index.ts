import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    {
        path: '',
        name: 'Portfolio',
        component: () => import('@/views/PortfolioVw.vue'),
        meta: { titulo: 'Sobre Mim' }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

router.beforeEach((to, _form, next) => {
    document.title = to.meta.titulo
        ? `${to.meta.titulo} | ${import.meta.env.VITE_APP}`
        : `${import.meta.env.VITE_APP}`
    next()
})

export default router
