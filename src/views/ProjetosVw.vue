<script setup lang="ts">
import CardProjeto, { type Projeto } from './components/CardProjeto.vue';
import json from './../assets/json/projetos.json';
import { ref } from 'vue';

const projetos = ref<Record<keyof typeof json, Projeto[]>>(json)

</script>

<template>
    <div class="projetos-vw">
        <div class="descricao">
            <p>
                Projeto Full Stack desenvolvido de ponta a ponta, incluindo arquitetura, backend, frontend e banco de
                dados. Implementação de APIs REST, autenticação de usuários, dashboards interativos e integrações
                externas. Foco em performance, escalabilidade e boas práticas de desenvolvimento, proporcionando uma
                solução robusta e intuitiva para os usuários.
            </p>
        </div>
        <div class="projetos">
            <CardProjeto v-for="projeto in projetos.projetos" :projeto="projeto" :key="projeto.projeto" />
        </div>
    </div>
</template>

<style scoped lang="scss">
// Desktop
.projetos-vw {
    width: 94%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .descricao {
        width: 100%;
        text-align: justify;

        p {
            font-size: 1rem;
            font-weight: 600;
            padding: 0.5rem;
        }

    }

    .projetos {
        margin-top: 0.5rem;
        padding: 0.1rem;
        width: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
    }
}

// Responsividade para tablets
@media screen and (max-width: 1024px) {
    .projetos-vw {
        width: 94%;
    }
}

// Responsividade para Mobile
@media (max-width: 768px) {
    .projetos-vw {
        width: 94%;
    }
}
</style>