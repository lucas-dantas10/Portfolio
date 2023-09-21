<script setup>
import AboutImage from "@/assets/imgs/about_me.svg";
</script>
<template>
    <section class="w-full h-screen" id="about">
        <div class="flex items-center justify-center mt-32 mb-16">
            <div class="w-[6rem]">
                <h1 class="text-center text-4xl font-semibold dark:text-white border-b-2 border-blue-600 pb-2">
                    Sobre
                </h1>
            </div>
        </div>

        <div class="w-full h-full flex justify-center gap-32 2xl:justify-between">
            <div class="w-80 h-80">
                <img :src="AboutImage" alt="Imagem de um Vector Pensativo" class="w-80- h-80" />
            </div>

            <div class="w-[40%] flex flex-col gap-4">
                <h2 class="text-2xl font-bold dark:text-blue-600">Desenvolvedor Full Stack</h2>

                <p class="text-justify font-medium dark:text-white">
                    Cursando Sistemas de Informação, Desenvolvedor Full Stack. Foco em implementar, executar,
                    integrar desenvolvendo sistemas, sites, softwares e outros. Sou extremamente motivado, e sempre
                    estou em constante desenvolvimento de minhas habilidades.
                </p>
            </div>
        </div>
    </section>
</template>
