<script setup lang="ts">
import { reactive } from 'vue';
import { useForm } from 'vuestic-ui';

const { isValid, reset, validate } = useForm('contato')

const contatoForm = reactive({
    nome: '',
    email: '',
    assunto: '',
    mensagem: ''
})

const enviar = () => {
    if (!isValid.value) {
        return
    }

    reset()
    alert('Mensagem Enviada com Sucesso.')
}
</script>

<template>
    <div class="contato-vw">
        <div class="form-contato">
            <p class="text">Vamos lá?</p>
            <p>Preencha o formulário abaixo para esclarecermos suas dúvidas e dar início ao seu projeto!</p>
            <VaForm ref="contato" class="flex flex-col gap-2 mt-5 contato-form">
                <VaInput v-model="contatoForm.nome" name="Nome" label="Seu Nome:" required-mark
                    :rules="[(value) => (value && value.length > 0) || 'Precisa preencher o campo.']" />
                <VaInput v-model="contatoForm.email" name="Email" label="Seu Email:" required-mark
                    :rules="[(value) => (value && value.length > 0) || 'Precisa preencher o campo.']" />
                <VaInput v-model="contatoForm.assunto" name="Assunto" label="Assunto:" required-mark
                    :rules="[(value) => (value && value.length > 0) || 'Precisa preencher o campo.']" />
                <VaTextarea v-model="contatoForm.mensagem" name="Mensagem" max-rows="6" label="Mensagem:"
                    :resize="false" required-mark
                    :rules="[(value) => (value && value.length > 0) || 'Precisa preencher o campo.']" />
                <VaButton @click="validate() && enviar()" color="dark" gradient class="mt-0">Enviar</VaButton>
            </VaForm>
        </div>
        <div class="map-contato">
            <p>Com certeza! Para facilitar o nosso contato, você pode me enviar uma mensagem diretamente no meu WhatsApp
                ou através do meu e-mail.</p>
            <div class="forma-contato">
                <a href="https://api.whatsapp.com/send?phone=5548988169638&text=%22Ol%C3%A1!%20Tudo%20bem?%20Estou%20precisando%20desenvolver%20um%20sistema/aplicativo.%20Voc%C3%AA%20tem%20disponibilidade%20para%20conversar%20sobre%20um%20novo%20projeto%20e%20enviar%20um%20or%C3%A7amento?%22"
                    target="blank">
                    <div class="card-contato">
                        <i class="pi pi-whatsapp"></i>
                    </div>
                </a>

                <a href="mailto:fabiano.basso.dev@gmail.com" target="blank">
                    <div class="card-contato">
                        <i class="pi pi-envelope"></i>
                    </div>
                </a>
            </div>
            <div class="localizacao">
                <p class="text">Localização</p>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d452702.6412298072!2d-48.79991652848503!3d-27.570597635654536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9527394eb2c632d7%3A0x81bc550b6a04c746!2sFlorian%C3%B3polis%2C%20SC!5e0!3m2!1spt-BR!2sbr!4v1779487126156!5m2!1spt-BR!2sbr"
                    width="100%" height="100%" style="border:0;" loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
// Desktop
.contato-vw {
    display: flex;
    width: 94%;
    height: 95%;
    flex-direction: row;
    border-radius: 0.8rem;
    background-color: #fff;
    color: #222;



    p {
        text-align: justify;
        font-weight: 400;
        font-size: 0.9rem;
        padding-bottom: 0.6rem;

        &.text {
            text-align: center;
            font-size: 1.2rem;
            font-weight: 500;
            font-weight: 800;
        }
    }

    .form-contato {
        width: 50%;
        padding: 1rem;

        .contato-form {
            ::v-deep(.va-input-label) {
                text-transform: capitalize;
                font-size: 0.8rem;
            }
        }



    }

    .map-contato {
        width: 50%;
        height: 60vh;
        display: flex;
        flex-direction: column;
        padding: 1rem;

        p {
            font-size: 0.9rem;
            text-align: justify;

            &.text {
                margin-top: 1.6rem;
                text-align: center;
                font-size: 1.2rem;
                font-weight: 500;
                font-weight: 800;
            }
        }

        .localizacao {
            width: 100%;
            height: 60%;

            iframe {
                border-radius: 0.8rem;
            }
        }

        .forma-contato {
            width: 100%;
            height: 15%;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;



            .card-contato {
                margin: 0.5rem;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                width: 60px;
                height: 60px;
                background-color: #1E1F20;
                border-radius: 1rem;

                i {
                    color: #518167;
                    font-size: 2rem;
                }
            }
        }
    }
}

// Responsividade para tablets
@media screen and (max-width: 1024px) {
    .contato-vw {
        width: 94%;
        flex-direction: column;
        height: 130vh;

        p {
            text-align: justify;
            font-size: 0.8rem;
        }

        .form-contato {
            width: 100%;
        }

        .map-contato {
            width: 100%;
            height: 110vh;

            .localizacao {
                height: 50%;
            }

            .forma-contato {
                margin-top: 0.5rem;
                height: 10%;
            }
        }
    }
}

// Responsividade para Mobile
@media (max-width: 768px) {
    .contato-vw {
        width: 94%;
        flex-direction: column;
        height: 130vh;

        p {
            text-align: justify;
            font-size: 0.8rem;
        }

        .form-contato {
            width: 100%;
        }

        .map-contato {
            width: 100%;
            height: 110vh;

            .localizacao {
                height: 50%;
            }

            .forma-contato {
                margin-top: 0.5rem;
                height: 10%;
            }
        }


    }
}
</style>