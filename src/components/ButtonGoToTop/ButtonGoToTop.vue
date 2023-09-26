<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue';

const scrollTopButton = ref(null);

onMounted(() => {
    scrollTopButton.value.focus();
    window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
    window.removeEventListener("scroll", handleScroll);
});

function handleScroll() {

    if (window.scrollY > 0) {
        scrollTopButton.value.classList.remove("invisible");
    } else {
        scrollTopButton.value.classList.add("invisible");
    }
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}
</script>

<template>
    <div
        ref="scrollTopButton"
        class="sticky flex justify-end bottom-0 pb-3 pr-5 transition"
    >
        <div
            class="text-gray-400 hover:text-blue-400 transition"
        >
            <button @click="scrollToTop">
                <v-icon name="bi-arrow-up-circle-fill" class="text-gray-950 dark:text-gray-300" :scale="3" animation="wrench" :hover="true"></v-icon>
            </button>
        </div>
    </div> 
</template>