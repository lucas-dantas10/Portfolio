<script setup>
import HeaderVue from '@/views/Header/Header.vue';
import Home from '@/views/Home/Home.vue';
import About from '@/views/About/About.vue';
import Portfolio from '@/views/Portfolio/Portfolio.vue';
import Contact from '@/views/Contact/Contact.vue';
import Footer from '@/views/Footer/Footer.vue';
</script>

<template>
  <div class="w-full h-full">
    <HeaderVue />

    <Home />

    <main class="flex flex-wrap items-center max-w-screen-xl mx-auto p-4">
        <About />

        <Portfolio />

        <Contact />
        
    </main>

    <Footer />
  </div>
</template>
