<script setup>
import { ref } from 'vue';
const props = defineProps({
    title: String,
    subtitle: String,
    image: Image,
    github: String,
    website: String,
    iconLanguage: Array,
});
</script>

<template>
    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div>
            <img class="rounded-t-lg h-[210px] w-full aspect-video" :src="image" alt="" />
        </div>
        <div class="p-5">
            <a :href="website" target="_blank">
                <h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {{ title }}
                </h2>

                <div class="flex flex-row items-center gap-2 dark:text-white pt-2 pb-2">
                    <v-icon v-for="(icon, i) in iconLanguage" :key="i" :name="icon.name" :fill="icon.color" :scale="1.4" animation="wrench" :hover="true"></v-icon>
                </div>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {{ subtitle }}
            </p>

            <div class="mt-4 flex items-center gap-4">
                <a 
                    :href="github"
                    target="_blank"
                    class="border-l-gray-950 rounded-md px-4 py-2 bg-gray-950 hover:bg-blue-600 dark:bg-gray-900 text-white dark:hover:bg-white dark:hover:text-gray-950"
                >
                    <v-icon name="bi-github" :scale="1.4" animation="float" :hover="true"></v-icon>
                </a>

                <a 
                    :href="website"
                    target="_blank"
                    class="border-l-gray-950 rounded-md px-4 py-2 bg-gray-950 hover:bg-blue-600 dark:bg-gray-900 text-white dark:hover:bg-white dark:hover:text-gray-950"
                >
                    <v-icon name="gi-world" class="dark:text-blue-600" :scale="1.4" animation="float" :hover="true"></v-icon>
                </a>
            </div>
        </div>
    </div>
</template>
