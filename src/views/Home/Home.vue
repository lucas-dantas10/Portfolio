<script setup>
import Lucas from '@/assets/imgs/lucas.png';
</script>

<template>
    <section class="flex flex-wrap items-center gap-16 max-w-screen-xl h-[80vh] mx-auto p-4" id="home">
        <div class="flex flex-col gap-4 items-center">
            <div
                class="border-l-gray-950 rounded-full px-4 py-2 bg-gray-950 hover:bg-blue-600 dark:bg-gray-950 text-white dark:hover:bg-white dark:hover:text-gray-950"
            >
                hi
            </div>
            <div
                class="border-l-gray-950 rounded-full px-4 py-2 bg-gray-950 hover:bg-blue-600 dark:bg-gray-950 text-white dark:hover:bg-white dark:hover:text-gray-950"
            >
                oi
            </div>
            <div
                class="border-l-gray-950 rounded-full px-4 py-2 bg-gray-950 hover:bg-blue-600 dark:bg-gray-950 text-white dark:hover:bg-white dark:hover:text-gray-950"
            >
                oi
            </div>
        </div>

        <div class="flex-1 flex items-center gap-40">
            <div class="flex-1 flex flex-col gap-4 w-[50%] dark:text-white">
                <h1 class="dark:text-white text-5xl font-semibold">Lucas Dantas</h1>

                <h2 class="text-2xl font-semibold">Desenvolvedor Full Stack</h2>

                <p class="text-lg font-medium">Este é meu Portfólio Oficial.</p>

                <div class="w-full flex flex-col gap-4">
                    <div class="flex items-center gap-4 border-b w-[50%] pb-2">
                        <p>html</p>
                        <p>css</p>
                        <p>javascript</p>
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

            <div class="flex-1">
                <img :src="Lucas" alt="Imagem do Lucas" class="w-52 h-52 border-2 border-gray-950 rounded-full dark:border dark:border-white">
            </div>
        </div>
    </section>
</template>
