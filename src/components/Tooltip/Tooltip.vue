<template>
    <div class="tooltip-wrapper w-[40px]">
        <span class="tooltip__text text-white p-1 bg-black rounded-md dark:text-black dark:bg-white">{{ text }}</span>
        <slot />
    </div>
</template>
<script setup>
const props = defineProps({
    text: {
        type: String,
        required: true
    }
})
</script>

<style scoped>
.tooltip__text {
    visibility: hidden;
    opacity: 0;
    transition: opacity 1s;

    text-align: center;
    border-radius: 2px;
    min-width: 120px;
}

.tooltip-wrapper {
    display: inline-block;
}

.tooltip-wrapper:hover .tooltip__text{
    visibility: visible;
    opacity: 1;
}
</style>