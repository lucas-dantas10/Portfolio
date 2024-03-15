<script setup>
import Switch from "../Switch/Switch.vue";7
import { ref } from 'vue';

const isOpenMenu = ref(false);
const menusDesktop = ref([
    {name: 'Home', href: "#home"},
    {name: 'Sobre', href: "#about"},
    {name: 'Portfólio', href: "#portfolio"},
    {name: 'Contato', href: "#contact"},
]);
const activeIndex = ref(0);

function setActiveIndex(index) {
    activeIndex.value = index;
}

function openMenu() {
    isOpenMenu.value = !isOpenMenu.value;
}
</script>

<template>
    <nav class="bg-white border-gray-200 dark:bg-gray-900 overflow-hidden z-10">
        <div class="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto p-4 animate-slide-in-left">
            <a href="#home" class="flex items-center">
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">LD</span>
            </a>

            <button @click.prevent="openMenu()" data-collapse-toggle="navbar-default" type="button" class="inline-flex order-last items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                <span class="sr-only">Open main menu</span>
                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
            </button>

            <div v-if="isOpenMenu" class=" order-last w-full animate-fade-in-down lg:block" id="navbar-default">
                <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                    <li v-for="(menu, i) in menusDesktop">
                        <a
                            :href="menu.href"
                            @click="setActiveIndex(i)"
                            :class="{ '!text-blue-600': activeIndex === i }"
                            class="block py-2 pl-3 pr-4 text-black  hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-600 lg:p-0 dark:text-white lg:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                            >{{menu.name}}</a
                        >
                    </li>
                </ul>
            </div>

            <div id="mega-menu" class="items-center justify-between hidden w-full lg:flex lg:w-auto">
                <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                    <li v-for="(menu, i) in menusDesktop">
                        <a
                            :href="menu.href"
                            @click="setActiveIndex(i)"
                            :class="{ '!text-blue-600': activeIndex === i }"
                            class="block py-2 pl-3 pr-4 text-black border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-600 lg:p-0 dark:text-white lg:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                            >{{menu.name}}</a
                        >
                    </li>
                </ul>
            </div>

            <div class="lg:inline">
                <Switch />
            </div>
        </div>
    </nav>
</template>
