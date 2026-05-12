<script setup lang="ts">
import { ref } from 'vue'

type MenuPortfolio = {
    link: string
    nome: string
}
type RedeSocial = {
    perfil: string
    icone: string
}

const redesSocial = ref<RedeSocial[]>([
    {
        perfil: '',
        icone: ''
    }
])

const menuPortifolio = ref<MenuPortfolio[]>([
    {
        link: 'projetos',
        nome: 'Projetos'
    },
    {
        link: 'contato',
        nome: 'Contato'
    },
    {
        link: '/portfolio/',
        nome: 'Sobre Mim'
    }
])

const isAtivoToggle = ref(false)

const ativarMenuMobile = () => {
    isAtivoToggle.value = !isAtivoToggle.value
}
</script>

<template>
    <nav
        class="h-[100px] sticky top-0 z-50 w-full px-6 md:px-16 lg:px-24 xl:px-32 flex items-center justify-between bg-gradient-to-r from-indigo-700 to-violet-500 transition-all">
        <a href=""> Fabiano Basso Antonio </a>

        <ul class="text-[#f38881] md:flex hidden items-center gap-10">
            <li v-for="menu in menuPortifolio" :key="menu.nome">
                <a class="hover:text-[#f38881]/70 transition" :href="menu.link">{{ menu.nome }}</a>
            </li>
        </ul>

        <div class="icones-rede-social">Icones</div>

        <button aria-label="menu-btn" type="button" class="menu-btn inline-block md:hidden active:scale-90 transition"
            @click="ativarMenuMobile">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="#fff">
                <path
                    d="M3 7a1 1 0 1 0 0 2h24a1 1 0 1 0 0-2zm0 7a1 1 0 1 0 0 2h24a1 1 0 1 0 0-2zm0 7a1 1 0 1 0 0 2h24a1 1 0 1 0 0-2z" />
            </svg>
        </button>

        <div :class="isAtivoToggle ? '' : 'hidden'"
            class="mobile-menu absolute top-[70px] left-0 w-full bg-gradient-to-r from-indigo-700 to-violet-500 p-6 md:hidden">
            <ul class="flex flex-col space-y-2 text-[#f38881] text-lg">
                <li v-for="menu in menuPortifolio">
                    <a :href="menu.link" class="text-sm">{{ menu.nome }}</a>
                </li>
            </ul>

            <div class="mt-[100px]">Icones</div>
        </div>
    </nav>
</template>

<style scoped lang="scss">
@media (max-width: 768px) {
    .icones-rede-social {
        display: none;
    }
}
</style>
