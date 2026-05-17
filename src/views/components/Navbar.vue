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
        perfil: 'https://github.com/fabianobasso',
        icone: 'pi-github'
    },
    {
        perfil: 'https://www.linkedin.com/in/fabiano-basso/',
        icone: 'pi-linkedin'
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

const isMenuAtivo = ref('Sobre Mim')
const isAtivoToggle = ref(false)

const ativarMenuMobile = () => {
    isAtivoToggle.value = !isAtivoToggle.value
}

const trocarMenuAtivo = (menu: MenuPortfolio) => {
    isMenuAtivo.value = menu.nome
}

</script>

<template>
    <nav
        class="h-[140px] sticky  top-0 z-50 w-full px-6 md:px-16 lg:px-24 xl:px-32 flex items-center justify-between  transition-all">
        <div class=" foto-perfil">
            <img class="foto-circulo" src="./../../assets/img/fb-perfil.png" alt="Foto de Perfil">
            <div class="exibir-nome">
                <span class="nome text-padrao-menu">Fabiano Basso Antonio</span>
            </div>
        </div>

        <ul class="text-[#518167] md:flex hidden items-center gap-10 pt-2">
            <li v-for="menu in menuPortifolio" :key="menu.nome" @click="trocarMenuAtivo(menu)">
                <RouterLink :class="isMenuAtivo === menu.nome ? 'menu-ativo' : ''"
                    class="hover:text-[#518167]/70 transition text-padrao-menu" :to="menu.link"> {{ menu.nome }}
                </RouterLink>
            </li>
        </ul>

        <div class="icones-rede-social pt-2">
            <a v-for="icone in redesSocial" :key="icone.icone" :href="icone.perfil">
                <i class="pi" :class="icone.icone"></i>
            </a>
        </div>

        <button aria-label="menu-btn" type="button"
            class="menu-btn inline-block md:hidden active:scale-90 transition pt-2" @click="ativarMenuMobile">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="#fff">
                <path
                    d="M3 7a1 1 0 1 0 0 2h24a1 1 0 1 0 0-2zm0 7a1 1 0 1 0 0 2h24a1 1 0 1 0 0-2zm0 7a1 1 0 1 0 0 2h24a1 1 0 1 0 0-2z" />
            </svg>
        </button>

        <div :class="isAtivoToggle ? '' : 'hidden'"
            class="mobile-menu absolute top-[124px] h-[31rem] left-0 w-full bg-gradient-to-r from-gray-500 to-gray-900 p-6 md:hidden">

            <ul class="flex flex-col space-y-2 text-[#518167] text-lg">
                <li v-for="menu in menuPortifolio">
                    <RouterLink @click="ativarMenuMobile" class="hover:text-[#518167]/70 transition" :to="menu.link"> {{
                        menu.nome }}
                    </RouterLink>
                </li>
            </ul>

            <div class="mt-[100px] icones-rede-social-mobile">
                <a v-for="icone in redesSocial" :key="icone.icone" :href="icone.perfil">
                    <i class="pi" :class="icone.icone"></i>
                </a>
            </div>
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

    .text-padrao-menu {
        font-size: 1.3rem;
    }

    .menu-ativo {
        padding: 0 4px 0 4px;
        border-bottom: 4px solid rgb(81, 129, 103);
        transition: all 0.2s ease;
    }

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
                    font-weight: 600;
                    padding-left: 10px;
                    line-height: 16px;
                }

                @media (max-width: 768px) {
                    &.nome {
                        font-size: 1.2rem;
                        padding-left: 4px;
                    }
                }
            }


        }

    }

    .icones-rede-social-mobile,
    .icones-rede-social {
        padding: 4px;

        i {
            font-size: 1.4rem;
            padding: 6px;
            color: $textDefault;
            font-weight: 800;
            transition: all 0.5s ease;

            &:hover {
                color: rgba(255, 255, 255, 0.7);
            }
        }
    }
}

.mobile-menu {
    background: linear-gradient(to right, #1d1e1f, #22222b);
}

@media screen and (max-width: 1024px) {
    .icones-rede-social {
        display: none;
    }

    nav {
        .icones-rede-social-mobile {
            padding: 0;
            margin-left: -6px;
        }
    }
}

@media (max-width: 768px) {
    .icones-rede-social {
        display: none;
    }

    nav {
        .icones-rede-social-mobile {
            padding: 0;
            margin-left: -6px;
        }
    }

}
</style>
