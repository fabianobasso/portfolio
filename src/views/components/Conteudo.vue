<script setup lang="ts"></script>

<template>
    <div class="conteudo">
        Conteudo <br />
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        div
    </div>
</template>

<style scoped lang="scss">
.conteudo {
    overflow-y: auto;
    color: $textDefault;
    height: 86%;
    padding: 20px;

    /** Scroll da div */
    /* Largura da barra de rolagem */
    &::-webkit-scrollbar {
        width: 8px;
    }

    /* Fundo da barra (trilho) */
    &::-webkit-scrollbar-track {
        background-color: #22222b;
        border-radius: 8px;
    }

    /* Parte móvel (thumb) */
    &::-webkit-scrollbar-thumb {
        background: #518167;
        border-radius: 6px;
    }

    /* Parte móvel ao passar o mouse */
    &::-webkit-scrollbar-thumb:hover {
        background-color: rgba(81, 129, 103, 0.7);
        transition: background-color 0.8s ease, transform 0.5s ease;
    }
}
</style>
