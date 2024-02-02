<script setup>
import AboutImage from "@/assets/imgs/AboutMe.svg";
</script>
<template>
    <section class="w-full h-screen" id="about">
        <div class="mb-16 flex items-center justify-center lg:mt-32 lg:mb-16">
            <div class="w-[6rem]">
                <h1 class="text-center text-4xl font-semibold dark:text-white border-b-2 border-blue-600 pb-2">
                    Sobre
                </h1>
            </div>
        </div>

        <div class="flex flex-col justify-center items-center lg:w-full lg:flex-row lg:justify-center lg:gap-32 2xl:justify-between">
            <div class="lg:w-80 lg:h-80">
                <img :src="AboutImage" alt="Imagem de um Vector Pensativo" class="w-80 h-80" data-aos="fade-right" data-aos-delay="100" />
            </div>

            <div class="w-full flex flex-col gap-4 lg:w-[40%] lg:flex-col lg:gap-4" data-aos="fade-left" data-aos-delay="100">
                <h2 class="text-2xl font-bold dark:text-blue-600">Desenvolvedor Full Stack</h2>

                <p class="text-justify font-medium dark:text-white">
                    Sou estudante de Sistemas de Informação e um Desenvolvedor Full Stack com foco no Back-End,
                    com uma forte dedicação em implementar, executar e integrar sistemas, sites, softwares e mais. 
                    Mantenho-me altamente motivado, buscando constantemente aprimorar minhas habilidades.
                </p>
            </div>
        </div>
    </section>
</template>
