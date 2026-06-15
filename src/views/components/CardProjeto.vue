<script setup lang="ts">

export interface Projeto {
    periodo: string
    projeto: string
    descricao: string
    responsabilidades_funcionalidades: string[]
    stacks: string
    resultado_alcancados: string[]
    imagem: string
    link_mensagem_whatsapp: string
}

defineProps<{ projeto: Projeto }>()

const getImageUrl = (nome: string) => {
    console.log(import.meta.url)
    return new URL(`../../assets/img/${nome}`, import.meta.url).href
}

</script>

<template>
    <div class="card-projeto">
        <div class="imagem-projeto">
            <img :src="getImageUrl(projeto.imagem)" alt="Imagem do Projeto">
        </div>
        <div class="periodo-projeto">
            <p class="data">{{ projeto.periodo }}</p>
            <p class="titulo-projeto">{{ projeto.projeto }}</p>
        </div>
        <div class="descricao-projeto">
            <p class="texto">{{ projeto.descricao }}</p>

            <p class="sub-titulo">Principais responsabilidades e funcionalidades:</p>
            <ul class="lista-circulos">
                <li v-for="responsabilidade in projeto.responsabilidades_funcionalidades" :key="responsabilidade">{{
                    responsabilidade }}</li>
            </ul>

            <p class="sub-titulo">Tecnologias utilizadas:</p>
            <p class="texto">{{ projeto.stacks }}</p>

            <p class="sub-titulo">Resultados alcançados:</p>
            <ul class="lista-circulos">
                <li v-for="resultado in projeto.resultado_alcancados" :key="resultado">{{ resultado }}</li>
            </ul>
        </div>
        <div class="links-projetos">
            <div class="icones">
                <a :href="`https://api.whatsapp.com/send?phone=5548988169638&text=${projeto.link_mensagem_whatsapp}`"
                    target="blank">
                    <i class="pi pi-whatsapp"></i>
                </a>
            </div>
            <div class="arrow">
                <svg viewBox="0 0 24 24">
                    <path d="M6 9l6 6 6-6" />
                </svg>
            </div>
        </div>

    </div>
</template>

<style scoped lang="scss">
// Desktop
.card-projeto {
    margin: 0.6rem;
    width: 45%;
    height: 500px;
    display: flex;
    flex-direction: column;
    border-radius: 0.8rem;
    padding: 0.6rem;
    background-color: #FFF;
    transition: transform 0.3s ease;
    color: #1E1F20;

    &:hover {
        transform: scale(1.02);
    }

    .imagem-projeto {
        img {
            border-radius: 0.5rem 0.5rem 0 0;
            border-bottom: 3px solid #518167;
        }
    }

    .periodo-projeto {
        height: 10%;
        width: 100%;

        p {
            &.data {
                font-weight: 800;
                font-size: 0.6rem;
            }

            &.titulo-projeto {
                margin-top: 0.5rem;
                font-weight: 600;
                font-size: 0.9rem;
            }
        }
    }

    .descricao-projeto {
        width: 100%;
        margin-top: 0.4rem;
        height: 80%;
        overflow-y: auto;

        /** Scroll da div */
        /* Largura da barra de rolagem */
        &::-webkit-scrollbar {
            width: 5px;
        }

        /* Fundo da barra (trilho) */
        &::-webkit-scrollbar-track {
            background-color: #cfcfcf;
            border-radius: 5px;
        }

        /* Parte móvel (thumb) */
        &::-webkit-scrollbar-thumb {
            background: #222222;
            border-radius: 5px;
        }

        /* Parte móvel ao passar o mouse */
        &::-webkit-scrollbar-thumb:hover {
            background-color: rgba(34, 34, 34, 0.7);
            transition: background-color 0.8s ease, transform 0.5s ease;
        }

        p {
            padding-right: 0.4rem;

            &.texto {
                padding: 0.3rem;
                text-align: justify;
                font-size: 0.8rem;
            }

            &.sub-titulo {
                font-size: 0.8rem;
                font-weight: 800;
            }
        }

        .lista-circulos {
            list-style: none;
            padding-left: 0.3rem;
        }

        .lista-circulos li {
            position: relative;
            padding-left: 0.4rem;
            margin-bottom: 0.2rem;
            font-size: 0.8rem;
        }

        .lista-circulos li::before {
            content: "";
            position: absolute;
            left: 0;
            top: 8px;
            width: 4px;
            height: 4px;
            background-color: #518167;
            border-radius: 50%;
        }
    }

    .links-projetos {
        height: 10%;
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;

        .icones {
            margin-top: 0.5rem;
            width: 5%;
            margin-left: -1.4rem;

            i {
                font-weight: 800;
                font-size: 1rem;
                color: #7dbe6a;
            }
        }

        .arrow {
            width: 90%;
            display: flex;
            align-items: center;
            justify-content: center;

            svg {
                width: 20px;
                height: 20px;
                stroke: #518167;
                stroke-width: 2.5;
                fill: none;
                animation: bounce 1.5s infinite;
            }
        }

        @keyframes bounce {

            0%,
            100% {
                transform: translateY(0);
            }

            50% {
                transform: translateY(6px);
            }
        }
    }
}

// Responsividade para tablets
@media screen and (max-width: 1024px) {
    .card-projeto {
        width: 100%;
    }
}

// Responsividade para Mobile
@media (max-width: 768px) {
    .card-projeto {
        width: 100%;
    }
}
</style>