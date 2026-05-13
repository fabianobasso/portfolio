<script setup lang="ts">
import Conteudo from './components/Conteudo.vue'
import Navbar from './components/Navbar.vue'
import Rodape from './components/Rodape.vue';
</script>

<template>
    <div class="container-base">
        <div class="container mx-auto">
            <Navbar />
            <Conteudo />
            <Rodape />
        </div>
    </div>
</template>

<style scoped lang="scss">
.container-base {
    width: 100%;
    height: 90vh;
    border-radius: 8px;
    color: $textDefault;
    overflow: hidden;
}

.container {
    background: linear-gradient(to right, #1d1e1f, #22222b);
    height: 95%;
    width: 60%;
    box-shadow: 6px 10px 8px 0px rgba(0, 0, 0, 0.3);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
}

@media (max-width: 768px) {
    .container-base {
        height: 90vh;
    }

    .container {
        width: 96%;
        max-height: 94vh;
    }
}
</style>
