<script setup>
import emailjs from 'emailjs-com';
import {ref} from 'vue';
import Swal from 'sweetalert2'
import Spinner from '../../components/Spinner/Spinner.vue';

const email = ref("");
const message = ref("");
const isLoading = ref(false);

function sendEmail() {
    const templateParams = {
        email: email.value,
        message: message.value,
    };

    isLoading.value = true;

    emailjs
        .send(
            "service_q2p08vb",
            "template_9fol4op",
            templateParams,
            "Mo0mHfqz-r1pWDrbu"
        )
        .then(response => {
            Swal.fire({
                title: "Mensagem enviada!",
                text: "Obrigado por enviar esta mensagem ;)",
                icon: "success",
            });

            isLoading.value = false;
        },
            function (error) {
                Swal.fire({
                    title: "Erro ao enviar a mensagem!",
                    text: "Desculpa :(",
                    icon: "error",
                });
                isLoading.value = false;
                return;
            }
        );
    email.value = "";
    message.value = "";
}
</script>

<template>
    <div class="w-full h-screen mt-32" id="contact">
        <div class="flex items-center justify-center mt-32 mb-16">
            <div class="w-[8rem]">
                <h1 class="text-center text-4xl font-semibold dark:text-white border-b-2 border-blue-600 pb-2">
                    Contato
                </h1>
            </div>
        </div>

        <div class="w-full flex flex-col gap-6 justify-center lg:flex-row lg:items-center lg:justify-between"
            data-aos="fade-right" data-aos-delay="100">
            <form @submit.prevent="sendEmail" class="space-y-8 w-full">
                <div>
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Seu
                        E-mail</label>
                    <input type="email" id="email" v-model.trim="email"
                        class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                        placeholder="name@example.com" required>
                </div>
                <div class="sm:col-span-2">
                    <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Sua
                        Mensagem</label>
                    <textarea id="message" rows="6" v-model.trim="message"
                        class="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Deixe um comentário...">
                    </textarea>
                </div>

                <div class="flex items-center gap-4 w-full">
                    <button type="submit"
                        class="py-3 px-5 w-3/4 flex items-center text-sm font-medium text-center text-white rounded-lg bg-black sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-white dark:text-black dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                        <Spinner :isLoading="isLoading" />
                        Enviar Mensagem
                    </button>

                    <a 
                        target="_blank"
                        href="https://wa.me//5521995969988?text=Vim%20do%20seu%20portfólio!%20Podemos%20marcar%20uma%20entrevista?"
                        class="py-3 px-5 w-full flex items-center bg-emerald-800 text-sm font-medium text-center text-white rounded-lg sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:text-black dark:hover:bg-primary-700 dark:focus:ring-primary-800 dark:bg-emerald-300 "
                    >
                        Conversar no WhatsApp
                    </a>
                </div>
                
            </form>
            <!-- <div class="flex items-center gap-6">
                <v-icon name="co-location-pin" class="text-red-500" :scale="1.4" animation="wrench" :hover="true"></v-icon>

                <div class="flex flex-col justify-center dark:text-white">
                    <h4 class="text-2xl font-medium">Localização:</h4>
                    <p class="font-semibold">Rio de Janeiro - RJ</p>
                </div>
            </div>

            <div class="flex items-center gap-6">
                <v-icon name="md-email" class="text-red-500" :scale="1.4" animation="wrench" :hover="true"></v-icon>

                <div class="flex flex-col justify-center dark:text-white">
                    <h4 class="text-2xl font-medium">E-mail:</h4>
                    <p class="font-semibold">lucas.dantas.nogueira@gmail.com</p>
                </div>
            </div>

            <div class="flex items-center gap-6">
                <v-icon name="co-phone" class="text-red-500" :scale="1.4" animation="wrench" :hover="true"></v-icon>

                <div class="flex flex-col justify-center dark:text-white">
                    <h4 class="text-2xl font-medium">Telefone:</h4>
                    <p class="font-semibold">+55 (21) 99596-9988</p>
                </div>
            </div> -->
        </div>
    </div>
</template>
