<template>
    <footer
        class="w-full h-full p-6 mb-32 lg:mt-32 lg:mb-0 bg-gradient-to-b from-white to-gray-400 dark:bg-gradient-to-b dark:from-gray-900 dark:to-black"
        id="footer"
    >
        <div class="w-full h-full">
            <div class="flex flex-col items-center gap-8">
                <h1 class="text-4xl text-center dark:text-blue-600">Lucas Dantas</h1>

                <div>
                    <p class="text-center font-medium dark:text-white">Este é meu Portfólio oficial.</p>
                    <p class="font-medium dark:text-white text-center">
                        Aqui você encontrará todos os projetos que desenvolvi.
                    </p>
                </div>

                <div class="flex items-center justify-center gap-4 mb-8">
                    <a href="https://github.com/lucas-dantas10" target="_blank">
                        <v-icon
                            name="bi-github"
                            class="dark:text-white"
                            :scale="1.4"
                            animation="wrench"
                            :hover="true"
                        ></v-icon>
                    </a>

                    <a href="https://www.linkedin.com/in/lucas-dantas10/" target="_blank">
                        <v-icon
                            name="bi-linkedin"
                            class="dark:text-white"
                            :scale="1.4"
                            animation="wrench"
                            :hover="true"
                        ></v-icon>
                    </a>
                    <a href="https://github.com/lucas-dantas10" target="_blank">
                        <v-icon
                            name="bi-instagram"
                            class="dark:text-white"
                            :scale="1.4"
                            animation="wrench"
                            :hover="true"
                        ></v-icon>
                    </a>
                </div>
            </div>

            <div class="pb-4">
                <p class="font-medium text-center  dark:text-white">
                    © Copyright <span class="font-bold text-blue-600">Lucas Dantas</span>. All Rights Reserved
                </p>
                <p class="text-center font-semibold dark:text-white">
                    Desenvolvido por <span class="font-bold text-blue-600">Lucas Dantas</span>
                </p>
            </div>
        </div>
    </footer>
</template>
