<script setup>
import Lucas from '@/assets/imgs/lucas.png';
</script>

<template>
    <section class="h-[40vh] mb-32 mt-32 lg:mb-0 lg:mt-0 flex flex-wrap items-center gap-16 max-w-screen-xl lg:h-[80vh] mx-auto p-4" id="home">
        <div class="w-full order-last flex flex-row gap-4 items-center justify-center lg:flex-col lg:w-auto lg:order-none lg:items-center">
            <a
                href="https://github.com/lucas-dantas10"
                target="_blank"
                class="border-l-gray-950 rounded-xl px-4 py-2 bg-gray-950 hover:bg-blue-600 dark:bg-gray-950 text-white dark:hover:bg-white dark:hover:text-gray-950"
            >
                <v-icon name="bi-github" :scale="1.4" animation="wrench" :hover="true"></v-icon>
            </a>
            <a
                href="https://www.linkedin.com/in/lucas-dantas10/"
                target="_blank"
                class="border-l-gray-950 rounded-xl px-4 py-2 bg-gray-950 hover:bg-blue-600 dark:bg-gray-950 text-white dark:hover:bg-white dark:hover:text-gray-950"
            >
                <v-icon name="bi-linkedin" :scale="1.4" animation="wrench" :hover="true"></v-icon>
            </a>
            <a
                href="https://github.com/lucas-dantas10"
                target="_blank"
                class="border-l-gray-950 rounded-xl px-4 py-2 bg-gray-950 hover:bg-blue-600 dark:bg-gray-950 text-white dark:hover:bg-white dark:hover:text-gray-950"
            >
                <v-icon name="bi-instagram" :scale="1.4" animation="wrench" :hover="true"></v-icon>
            </a>
        </div>

        <div class="w-full flex-1 flex items-center gap-40">
            <div class="flex-1 flex flex-col gap-4 w-[50%] dark:text-white">
                <h1 class="dark:text-white text-5xl font-semibold">Lucas Dantas</h1>

                <h2 class="text-2xl font-semibold">Desenvolvedor Full Stack</h2>

                <p class="text-lg font-medium">Este é meu Portfólio Oficial.</p>

                <div class="w-full flex flex-col gap-4">
                    <div class="flex items-center gap-4 border-b border-gray-500 lg:w-[80%] pb-2 dark:border-gray-400">
                        <v-icon name="si-laravel" fill="red" :scale="1.4" animation="wrench" :hover="true"></v-icon>
                        <v-icon name="vi-file-type-vue" :scale="1.4" animation="wrench" :hover="true"></v-icon>
                        <v-icon name="vi-file-type-php3" :scale="1.4" animation="wrench" :hover="true"></v-icon>
                        <v-icon name="vi-file-type-python" :scale="1.4" animation="wrench" :hover="true"></v-icon>
                        <v-icon name="co-javascript" fill="yellow" :scale="1.4" animation="wrench" :hover="true"></v-icon>
                        <v-icon name="vi-file-type-html" :scale="1.4" animation="wrench" :hover="true"></v-icon>
                        <v-icon name="vi-file-type-css" :scale="1.4" animation="wrench" :hover="true"></v-icon>
                        <v-icon name="vi-file-type-docker" :scale="1.4" animation="wrench" :hover="true"></v-icon>
                        <v-icon name="vi-file-type-tailwind" :scale="1.4" animation="wrench" :hover="true"></v-icon>
                    </div>

                    <div class="w-full">
                        <a
                            href="https://drive.google.com/file/d/1vz6pMsbE7Z-LD1fpPB7JkaZHASfaO4Nm/view?usp=sharing"
                            download="Lucas-Dantas.pdf" 
                            target="_blank"
                            class="uppercase font-semibold py-2 px-4 rounded-md border-2 border-gray-900 hover:bg-gray-900 hover:text-white hover:cursor-pointer dark:bg-white dark:border-gray-950 text-black dark:hover:bg-gray-950 dark:hover:text-white"
                        >
                            Download cv
                        </a>
                    </div>
                </div>
            </div>

            <div class="hidden lg:block lg:flex-1">
                <img :src="Lucas" alt="Imagem do Lucas" class="hidden lg:block lg:w-52 lg:h-52 lg:border-2 lg:border-gray-950 lg:rounded-full lg:dark:border lg:dark:border-white">
            </div>
        </div>
    </section>
</template>
