<script setup lang="ts"></script>

<template>
    <div class="conteudo mx-auto">
        <RouterView v-slot="{ Component }">
            <transition name="slide-fade" mode="out-in">
                <component :is="Component" />
            </transition>
        </RouterView>
    </div>
</template>

<style scoped lang="scss">
.conteudo {
    display: flex;
    flex-direction: row;
    justify-content: center;
    overflow-y: auto;
    color: $textDefault;
    height: 86%;
    width: 80%;
    overflow-x: hidden;


    // Animação da entrada e saída do conteúdo da pagina usando componente transition 'slide-fade'
    .slide-fade-enter-active {
        transition: all 0.3s ease-out;
    }

    .slide-fade-leave-active {
        transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
    }

    .slide-fade-enter-from,
    .slide-fade-leave-to {
        transform: translateX(20px);
        opacity: 0;
    }



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

@media (max-width: 768px) {
    .conteudo {
        width: 100%;
    }
}
</style>
