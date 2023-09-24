<template>
    <div class="w-full h-screen mt-32" id="contact">
        <div class="flex items-center justify-center mt-32 mb-16">
            <div class="w-[8rem]">
                <h1 class="text-center text-4xl font-semibold dark:text-white border-b-2 border-blue-600 pb-2">
                    Contato
                </h1>
            </div>
        </div>

        <div class="w-full flex items-center justify-between">
            <div class="flex items-center gap-6">
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
            </div>
        </div>
    </div>
</template>
