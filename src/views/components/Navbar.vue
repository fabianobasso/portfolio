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
        class="h-[140px] sticky  top-0 z-50 w-full px-6 md:px-16 lg:px-24 xl:px-32 flex items-center justify-between  transition-all">
        <div class=" foto-perfil">
            <img class="foto-circulo" src="./../../assets/img/fb-perfil.png" alt="Foto de Perfil">
            <div class="exibir-nome">
                <span class="nome">Fabiano Basso Antonio</span>
                <span class="cargo">Desenvolvedor Full Stack</span>
            </div>
        </div>

        <ul class="text-[#518167] md:flex hidden items-center gap-10">
            <li v-for="menu in menuPortifolio" :key="menu.nome">
                <a class="hover:text-[#518167]/70 transition" :href="menu.link">{{ menu.nome }}</a>
            </li>
        </ul>

        <div class="icones-rede-social">
            <i class="pi pi-check"></i>
        </div>

        <button aria-label="menu-btn" type="button" class="menu-btn inline-block md:hidden active:scale-90 transition"
            @click="ativarMenuMobile">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="#fff">
                <path
                    d="M3 7a1 1 0 1 0 0 2h24a1 1 0 1 0 0-2zm0 7a1 1 0 1 0 0 2h24a1 1 0 1 0 0-2zm0 7a1 1 0 1 0 0 2h24a1 1 0 1 0 0-2z" />
            </svg>
        </button>

        <div :class="isAtivoToggle ? '' : 'hidden'"
            class="mobile-menu absolute top-[120px] left-0 w-full bg-gradient-to-r from-gray-500 to-gray-900 p-6 md:hidden">

            <ul class="flex flex-col space-y-2 text-[#518167] text-lg">
                <li v-for="menu in menuPortifolio">
                    <a :href="menu.link" class="text-sm">{{ menu.nome }}</a>
                </li>
            </ul>

            <div class="mt-[100px]">Icones</div>
        </div>
    </nav>
</template>

<style scoped lang="scss">
nav {
    padding: 10px;
    background: linear-gradient(to right, #1d1e1f, #22222b);
    border-radius: 8px;
}

nav {
    .foto-perfil {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-top: 14px;

        .foto-circulo {
            width: 120px;
            height: 120px;
            border-radius: 50%;
            object-fit: cover;
            border: 2px solid #518167;
        }

        @media (max-width: 768px) {
            .foto-circulo {
                width: 60px;
                height: 60px;
            }
        }

        .exibir-nome {
            display: flex;
            flex-direction: column;

            span {
                &.nome {
                    font-size: 1.6rem;
                    font-weight: 600;
                    padding-left: 10px;
                    line-height: 16px;
                }

                &.cargo {
                    font-size: 0.9rem;
                    padding-left: 10px;
                    color: #518167;
                    font-weight: 500;
                    line-height: 16px;
                }

                @media (max-width: 768px) {
                    &.nome {
                        font-size: 1.2rem;
                        padding-left: 4px;
                    }

                    &.cargo {
                        padding-left: 4px;
                    }
                }
            }


        }

    }

}

.mobile-menu {
    background: linear-gradient(to right, #1d1e1f, #22222b);
}

@media (max-width: 768px) {
    .icones-rede-social {
        display: none;
    }
}
</style>
