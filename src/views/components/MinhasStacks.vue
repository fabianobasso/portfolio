<script setup lang="ts">
import { ref } from 'vue';
import minhasStacks from '../../assets/json/minhas_stacks.json'

const stacks = ref<Array<keyof typeof minhasStacks>>(
    ["Frontend", "Backend", "Banco De Dados", "Devops"]
)



</script>

<template>
    <!-- Todo componente, view precisa ter uma div pai -->
    <div class="minhas-stacks">
        <div v-for="stack in stacks" :key="stack" class="card-stack">
            <p>{{ stack }}:</p>
            <ul>
                <li v-for="minhaStack in minhasStacks[stack]" :key="minhaStack"> - {{ minhaStack }}</li>
            </ul>
        </div>
    </div>
</template>

<style scoped lang="scss">
// Desktop
.minhas-stacks {
    width: 100%;
    color: #222;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;


    .card-stack {
        background-color: #EAECEE;
        margin: 0.4rem 0.2rem 0.1rem;
        width: 40%;
        box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
        border-radius: 0.4rem;
        padding: 0.4rem;

        p {
            font-size: 1.0rem;
            font-weight: 700;
        }

        ul {
            li {
                font-size: 0.8rem;
                padding-left: 0.4rem;
            }
        }
    }
}

// Responsividade para tablets
@media screen and (max-width: 1024px) {
    .minhas-stacks {
        width: 90%;
    }
}

// Responsividade para Mobile
@media (max-width: 768px) {
    .minhas-stacks {
        width: 100%;
    }
}
</style>