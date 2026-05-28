<script setup lang='ts'>
import { Vue3Lottie } from 'vue3-lottie';
import desenvolvedorLottie from '../assets/img/lottie/desenvolvedor.json'
import MinhasStacks from './components/MinhasStacks.vue';

</script>

<template>
    <div class="principal">
        <div class="titulo">
            <div class="animacao">
                <Vue3Lottie :animation-data="desenvolvedorLottie" width="100%" height="100%" />
            </div>
            <div class="texto-inicio">
                <div class="apresentacao flex flex-direction-row pt-[40px]">
                    <h2>Oi,</h2>
                    <div class="digitar-texto">Seja bem vindo</div>
                </div>
                <div class="texto-espera">
                    <p class="quem-sou pt-5">Eu sou Fabiano Basso Antonio, <span>Desenvolvedor Full Stack</span></p>
                </div>
            </div>
        </div>
        <div class="sobre-mim mt-4 texto-espera">
            <div class="sobre">
                <p>
                    Com mais de 8 anos de experiência, focado em criar soluções digitais robustas e de alto desempenho.
                </p>
                <p>
                    Especializado em criar interfaces modernas que oferecem a melhor experiência para o usuário, ajudo
                    empresas a automatizar tarefas repetitivas e processar dados de forma eficiente
                </p>
                <p>
                    <b>Serviços:</b>
                </p>
                <ul>
                    <li>
                        <div class="flex flex-row">
                            <div class="seta-direita"></div>
                            <span>Desenvolver E-Commerce ou Marketplace</span>
                        </div>
                    </li>
                    <li>
                        <div class="flex flex-row">
                            <div class="seta-direita"></div>
                            <span>Desenvolver Dashboard de Métricas/Analytics</span>
                        </div>
                    </li>
                    <li>
                        <div class="flex flex-row">
                            <div class="seta-direita"></div>
                            <span>Desenvolver Sistema de Gestão (CRM ou ERP)</span>
                        </div>
                    </li>
                    <li>
                        <div class="flex flex-row">
                            <div class="seta-direita"></div>
                            <span>Desenvolver APIs</span>
                        </div>
                    </li>
                    <li>
                        <div class="flex flex-row">
                            <div class="seta-direita"></div>
                            <span>Desenvolver Sites responsivos (Mobile First)</span>
                        </div>
                    </li>
                    <li>
                        <div class="flex flex-row">
                            <div class="seta-direita"></div>
                            <span>Integração de APIs e pagamentos</span>
                        </div>
                    </li>
                    <li>
                        <div class="flex flex-row">
                            <div class="seta-direita"></div>
                            <span>Automação de processos (Jenkins,Bitbucket Pipeline)</span>
                        </div>
                    </li>
                </ul>
                <p>Proativo, focado e preparado para projetos de curta, média e longa duração.</p>
                <p>Foco total em segurança e estabilidade do sistema.</p>
                <p>Comprometo-me com prazos e código limpo. Vamos transformar sua ideia em realidade?</p>
            </div>
            <div class="stacks">
                <p class="titulo">Minhas Stacks</p>
                <MinhasStacks class="mt-1" />
            </div>
        </div>
    </div>

</template>

<style scoped lang='scss'>
.principal {
    margin-top: 2rem;
    height: 90%;
    width: 94%;
    display: flex;
    flex-direction: column;
    align-items: center;



    .texto-espera {
        opacity: 0;
        visibility: hidden;
        animation: aparecer 2s ease-in 2s forwards;
    }

    .titulo {
        width: 100%;
        display: flex;
        flex-direction: row;

        .texto-inicio {
            width: 70%;


            .apresentacao {
                padding-left: 2rem;

                h2 {
                    font-size: 3rem;
                    padding-right: 20px;
                }

                .digitar-texto {
                    font-family: monospace;
                    font-size: 3rem;
                    white-space: nowrap;
                    overflow: hidden;
                    border-right: 3px solid #fff;
                    width: 14ch;
                    animation: digitar 2s steps(14, end) 1, piscar 0.5s step-end infinite;
                }
            }

            .quem-sou {
                padding-left: 2.2rem;
                font-size: 1.2rem;
                font-weight: 500;

                span {
                    color: $textoDestaque;
                    font-weight: 600;
                    text-decoration: underline;
                    text-decoration-thickness: 3px
                }
            }
        }

        .animacao {
            width: 30%;
            padding: 0;
            margin: 0;
        }
    }

    .sobre-mim {
        display: flex;
        flex-direction: row;
        width: 100%;
        margin: 20px;


        .sobre {
            padding: 10px;
            width: 50%;

            p {
                font-size: 0.9rem;
                margin-top: 10px;
                text-align: justify;
            }

            ul {



                li {
                    font-size: 0.9rem;
                    padding-top: 10px;
                    padding-left: 15px;
                    color: $textoDestaque;
                    font-weight: 600;
                    text-decoration: underline;
                    text-decoration-thickness: 2px;
                    text-underline-position: under;

                    .seta-direita {
                        width: 10px;
                        height: 10px;
                        border-top: 6px solid #fff;
                        border-right: 6px solid #fff;
                        transform: rotate(45deg);
                        animation: moverSeta 1.5s infinite ease-in-out;
                    }

                    span {
                        margin-top: -6px;
                        padding-left: 10px;
                    }
                }
            }

        }

        .stacks {
            width: 50%;
            border-radius: 8px;
            background-color: #fff;
            margin: 20px;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 0.8rem;

            p {
                display: block;
                width: 100%;
                text-align: center;
                font-size: 1.2rem;
                color: #22222b;
                font-weight: 800;
                text-decoration: underline;
                text-decoration-thickness: 2px;
                text-underline-position: under;
            }


        }
    }
}

@media (max-width: 768px) {
    .principal {
        align-items: unset;
        padding: 10px;

        .titulo {
            flex-direction: column;


            .texto-inicio {
                width: 100%;


                .apresentacao {
                    padding: 0;
                    display: flex;
                    justify-content: center;

                    h2 {
                        font-size: 1.4rem;
                        padding-right: 14px;
                    }

                    .digitar-texto {
                        font-size: 1.4rem;
                        width: 14.2ch;
                    }
                }

                .quem-sou {
                    padding: 0px;
                    font-size: 0.9rem;
                    font-weight: 500;
                    text-align: center;

                    span {
                        text-decoration-thickness: 2px
                    }
                }
            }

            .animacao {
                width: 100%;
            }
        }

        .sobre-mim {
            flex-direction: column;
            width: 100%;
            margin: 0;

            .sobre {
                width: 100%;
                padding: 0;

                p {
                    font-size: 0.8rem;
                }
            }

            .stacks {
                width: 100%;
                margin: 0;
                margin-top: 0.5rem;
            }
        }
    }

}
</style>