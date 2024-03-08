<script setup>
import { ref } from 'vue';

const props = defineProps({
    isLoading: {
        type: Boolean,
        default: false
    }
});
</script>

<template>
    <svg class="animate-spin border border-blue-600 rounded-full h-5 w-5 mr-3 ..." viewBox="0 0 24 24" v-show="props.isLoading">
    <!-- ... -->
     </svg>
</template>