<script setup>
import Lucas from "@/assets/imgs/lucas.png";
import { onMounted, ref } from "vue";
import Tooltip from '@/components/Tooltip/Tooltip.vue';
import TypeIt from "typeit";

const texts = ref(null);
onMounted(() => {
    initializeTyped();
});

function initializeTyped() {
    texts.value.focus();

    new TypeIt(texts.value, {
        speed: 30,
        waitUntilVisible: true,
    })
        .type("Lukas", { delay: 300 })
        .move(-2)
        .delete(1)
        .type("c")
        .move(null, { to: "END" })
        .type(" Dantas")
        .break({ delay: 500 })
        .type("Desenvolvedor Backend")
        .delete(7)
        .type("Full Stack")
        .go();
}
</script>

<template>
    <section
        class="h-[40vh] mb-32 mt-32 lg:mb-0 lg:mt-0 flex flex-wrap items-center gap-16 max-w-screen-xl lg:h-[80vh] mx-auto p-4 animate-slide-in-right"
        id="home">
        <div
            class="w-full order-last flex flex-row gap-4 items-center justify-center lg:flex-col lg:w-auto lg:order-none lg:items-center">
            <a href="https://github.com/lucas-dantas10" aria-label="Link para o github" target="_blank"
                class="border-l-gray-950 rounded-xl px-4 py-2 bg-gray-950 hover:bg-blue-600 dark:bg-gray-950 text-white dark:hover:bg-white dark:hover:text-gray-950">
                <v-icon name="bi-github" :scale="1.4" animation="wrench" :hover="true"></v-icon>
            </a>
            <a href="https://www.linkedin.com/in/lucas-dantas10/" aria-label="Link para o linkedin" target="_blank"
                class="border-l-gray-950 rounded-xl px-4 py-2 bg-gray-950 hover:bg-blue-600 dark:bg-gray-950 text-white dark:hover:bg-white dark:hover:text-gray-950">
                <v-icon name="bi-linkedin" :scale="1.4" animation="wrench" :hover="true"></v-icon>
            </a>
            <a href="https://leetcode.com/lucas-dantas10/" aria-label="Link para o leetcode" target="_blank"
                class="border-l-gray-950 rounded-xl px-4 py-2 bg-gray-950 hover:bg-blue-600 dark:bg-gray-950 text-white dark:hover:bg-white dark:hover:text-gray-950">
                <v-icon name="co-leetcode" :scale="1.4" animation="wrench" :hover="true"></v-icon>
            </a>
            <a href="https://wa.me//5521995969988?text=Vim%20do%20seu%20portfólio!%20Podemos%20marcar%20uma%20entrevista?"
                aria-label="Link para o whatsapp" target="_blank"
                class="border-l-gray-950 rounded-xl px-4 py-2 bg-gray-950 hover:bg-blue-600 dark:bg-gray-950 text-white dark:hover:bg-white dark:hover:text-gray-950">
                <v-icon name="bi-whatsapp" :scale="1.4" animation="wrench" :hover="true"></v-icon>
            </a>
        </div>

        <div class="w-full flex-1 flex items-center gap-40">
            <div class="flex-1 flex flex-col gap-4 w-[50%] dark:text-white">

                <p ref="texts" class="dark:text-white font-bold text-4xl"></p>

                <p class="text-lg font-medium">Este é meu Portfólio Oficial.</p>

                <div class="w-full flex flex-col gap-4">
                    <div class="flex items-center gap-4 border-b border-gray-500 lg:w-full pb-2 dark:border-gray-400 overflow-scroll lg:overflow-hidden">
                        <Tooltip text="Laravel">
                            <v-icon data-tooltip-target="tooltip-default" name="si-laravel" fill="red" :scale="2"
                            animation="wrench" :hover="true"></v-icon>
                        </Tooltip>
                        <Tooltip text="PHP">
                            <v-icon data-tooltip-target="tooltip-default" name="vi-file-type-php3" fill="red" :scale="2"
                            animation="wrench" :hover="true"></v-icon>
                        </Tooltip>
                        <Tooltip text="VueJs">
                            <v-icon data-tooltip-target="tooltip-default" name="vi-file-type-vue" fill="red" :scale="2"
                            animation="wrench" :hover="true"></v-icon>
                        </Tooltip>
                        <Tooltip text="C#">
                            <v-icon data-tooltip-target="tooltip-default" name="vi-file-type-csharp2" fill="red" :scale="2"
                            animation="wrench" :hover="true"></v-icon>
                        </Tooltip>
                        <Tooltip text="Docker">
                            <v-icon data-tooltip-target="tooltip-default" name="vi-file-type-docker" fill="red" :scale="2"
                            animation="wrench" :hover="true"></v-icon>
                        </Tooltip>
                        <Tooltip text="Python">
                            <v-icon data-tooltip-target="tooltip-default" name="vi-file-type-python" fill="red" :scale="2"
                            animation="wrench" :hover="true"></v-icon>
                        </Tooltip>
                        <Tooltip text="Javascript">
                            <v-icon data-tooltip-target="tooltip-default" name="co-javascript" fill="yellow" :scale="2"
                            animation="wrench" :hover="true"></v-icon>
                        </Tooltip>
                        <Tooltip text="HTML">
                            <v-icon data-tooltip-target="tooltip-default" name="vi-file-type-html" fill="red" :scale="2"
                            animation="wrench" :hover="true"></v-icon>
                        </Tooltip>
                        <Tooltip text="CSS">
                            <v-icon data-tooltip-target="tooltip-default" name="vi-file-type-css" fill="red" :scale="2"
                            animation="wrench" :hover="true"></v-icon>
                        </Tooltip>
                        <Tooltip text="Tailwind">
                            <v-icon data-tooltip-target="tooltip-default" name="vi-file-type-tailwind" fill="red" :scale="2"
                            animation="wrench" :hover="true"></v-icon>
                        </Tooltip>
                    </div>

                    <div class="w-full">
                        <a href="https://drive.google.com/file/d/1JsyCJH3vsVKy5BpCiU6Til4eUFB34bix/view?usp=sharing"
                            download="Lucas-Dantas.pdf" target="_blank"
                            class="uppercase font-semibold py-2 px-4 rounded-md border-2 border-gray-900 hover:bg-gray-900 hover:text-white hover:cursor-pointer dark:bg-white dark:border-gray-950 text-black dark:hover:bg-gray-950 dark:hover:text-white">
                            Download cv
                        </a>
                    </div>
                </div>
            </div>

            <div class="hidden lg:block lg:flex-1">
                <img :src="Lucas" alt="Imagem do Lucas"
                    class="hidden lg:block lg:w-52 lg:h-52 lg:border-2 lg:border-gray-950 lg:rounded-full  lg:dark:border lg:dark:border-white" />
            </div>
        </div>
    </section>
</template>
