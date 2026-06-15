<script setup lang="ts">
import { ref } from 'vue';

const data = ref(new Date)
</script>

<template>
    <div class="rodape">
        <div class="download-cv">
            <a href="../../assets/cv/Fabiano-CV.pdf" download="Fabiano.pdf">
                <i class="pi pi-file-pdf"></i> <span>Download Currículo</span>
            </a>
        </div>
        <div class="info">
            © Fabiano Basso Antonio {{ data.getFullYear() }}
        </div>
    </div>
</template>

<style scoped lang="scss">
// Desktop
.rodape {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0.5rem;

    .download-cv {
        a {
            display: block;
            transition: all 0.2s ease;
            font-size: 0.8rem;

            span {
                display: block;
                margin-top: -1.5rem;
                margin-left: 1.5rem;
            }


            i {
                color: #DA181D;
                font-size: 1.5rem;
                transition: all 0.2s ease;

                &:hover {
                    color: rgba(218, 24, 29, 0.7);
                }
            }

            &:hover {
                color: rgba(255, 255, 255, 0.7);
            }
        }
    }

    .info {
        font-size: 0.8rem;
    }
}

// Responsividade para tablets
@media screen and (max-width: 1024px) {
    .rodape {
        width: 100%;
    }
}

// Responsividade para Mobile
@media (max-width: 768px) {
    .rodape {
        width: 100%;
    }
}
</style>