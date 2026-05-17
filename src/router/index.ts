import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/portfolio/',
        name: 'Portfolio',
        component: () => import('@/views/PortfolioVw.vue'),
        children: [
            {
                path: '',
                meta: { titulo: 'Sobre Mim' },
                component: () => import('@/views/SobreMimVw.vue')
            },
            {
                path: 'contato',
                meta: { titulo: 'Contato' },
                component: () => import('@/views/ContatoVw.vue')
            },
            {
                path: 'projetos',
                meta: { titulo: 'Projetos' },
                component: () => import('@/views/ProjetosVw.vue')
            }
        ]
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
