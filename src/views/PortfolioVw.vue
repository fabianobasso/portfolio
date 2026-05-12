<script setup lang="ts">
import Conteudo from './components/Conteudo.vue'
import Navbar from './components/Navbar.vue'
</script>

<template>
    <div class="container-base">
        <div class="container mx-auto">
            <Navbar />
            <Conteudo />
        </div>
    </div>
</template>

<style scoped lang="scss">
.container-base {
    height: 100vh;
    width: 100%;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    color: $textDefault;
}

.container {
    background-color: $bgContainer;
    height: 100%;
    max-height: 80vh;
    overflow-y: auto;
    border-radius: 8px;
    box-shadow: 6px 10px 8px 0px rgba(0, 0, 0, 0.3);
}

@media (max-width: 768px) {
    .container-base {
        height: 100vh;
    }
    .container {
        width: 96%;
        max-height: 94vh;
    }
}
</style>
