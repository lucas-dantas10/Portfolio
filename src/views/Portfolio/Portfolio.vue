<script setup>
import Card from '@/components/Card/Card.vue';
import UploadAi from '@/assets/imgs/upload_ai.png';
import TodoList from '@/assets/imgs/todolist-image.png';
import InvoiceApi from '@/assets/imgs/invoice-api.png';
import Ecommerce from '@/assets/imgs/ecommerce.png';
import Ibph from '@/assets/imgs/ibph.png';
import VueTracker from '@/assets/imgs/vue-tracker.png';
</script>

<template>
    <section class="w-full h-full lg:w-full lg-h-screen" id="portfolio">
        <div class="flex items-center justify-center mt-32 mb-16">
            <div class="w-[9rem]">
                <h1 class="text-center text-4xl font-semibold dark:text-white border-b-2 border-blue-600 pb-2">
                    Portfólio
                </h1>
            </div>
        </div>

        <div class="w-full flex flex-wrap items-center gap-6">
            <Card
                title="Tolist-One Website"
                subtitle="Todo List - Aplicação que possibilita adicionar tarefas, editar tarefas, adicionar customizações, adicionar prioridade da tarefa e adicionar categorias para as tarefas. Aplicação para poder gerenciar suas tarefas diárias."
                :image="TodoList"
                github="https://github.com/lucas-dantas10/TodoList"
                website="https://tolist-one.vercel.app"
                :icon-language="[{name: 'vi-file-type-vue'}, {name: 'vi-file-type-tailwind'}]"
                data-aos="fade-up"
                data-aos-delay="60"
            />

            <Card
                title="Tolist-One API"
                subtitle="Todo List - A API do ToDoList é uma interface de programação de aplicativos (API) RESTful projetada para uma aplicação web de gerenciamento de tarefas. Ela permite a comunicação entre o front-end e o back-end."
                :image="TodoList"
                github="https://github.com/lucas-dantas10/ToDoListApi"
                website="https://omlyy.com.br/public"
                :icon-language="[{name: 'si-laravel', color: 'red'}, {name: 'vi-file-type-docker'}]"
                data-aos="fade-up"
                data-aos-delay="80"
            />

            <Card
                title="Invoice API"
                subtitle="Invoice API - A API do de invoice é uma API RESTful para gerenciamento de faturas e consulta de usuários destas faturas e usuários do sistema. Utilizado swagger para testes de utiliação desta API."
                :image="InvoiceApi"
                github="https://github.com/lucas-dantas10/invoice-api"
                website="https://api-invoice.online"
                :icon-language="[{name: 'si-laravel', color: 'red'}, {name: 'vi-file-type-docker'}]"
                data-aos="fade-up"
                data-aos-delay="100"
            />

            <Card
                title="E-commerce (Em Desenvolvimento)"
                subtitle="E-commerce -  Aplicação com painel de administrador com dashboard e relatórios, Api RESTful e site de vendas para ocorrer as vendas dos items."
                :image="Ecommerce"
                github="https://github.com/lucas-dantas10/e-commerce"
                website="https://github.com/lucas-dantas10/e-commerce"
                :icon-language="[{name: 'si-laravel', color: 'red'}, {name: 'vi-file-type-vue'}, {name: 'vi-file-type-tailwind'}, {name: 'vi-file-type-docker'}]"
                data-aos="fade-up"
                data-aos-delay="120"
            />

            <Card
                title="Upload Ai Website"
                subtitle="Upload AI - Aplicação que possibilita realizar upload de videos e por meio de IA, criar automaticamente títulos chamativos e descrições com um boa indexação. Aplicação realizada em conjunto da Rocketseat."
                :image="UploadAi"
                github="https://github.com/lucas-dantas10/upload.ai"
                website="https://github.com/lucas-dantas10/upload.ai"
                :icon-language="[{name: 'vi-file-type-vue'}, {name: 'vi-file-type-typescript-official'}, {name: 'si-prisma'}, {name: 'vi-file-type-node'}]"
                data-aos="fade-up"
                data-aos-delay="140"
            />

            <Card
                title="IBPH Online"
                subtitle="Desenvolvi uma landing page para o Instituto Brasileiro de Performance Humana, visando engajamento, apresentação de conteúdo, otimização de SEO e demonstração eficaz do funcionamento do instituto."
                :image="Ibph"
                github="http://ibphonline.com.br/"
                website="http://ibphonline.com.br/"
                :icon-language="[{name: 'io-pulse'}, {name: 'vi-file-type-html'}, {name: 'vi-file-type-css'}]"
                data-aos="fade-up"
                data-aos-delay="140"
            />

            <Card
                title="Alura Tracker"
                subtitle="O Projeto Alura Tracker organiza tarefas, registra o tempo de trabalho e inicia cronômetros para melhorar a produtividade pessoal. Realizado em conjunto da Alura" 
                :image="VueTracker"
                github="https://github.com/lucas-dantas10/Alura-Tracker"
                website="https://alura-tracker-umber.vercel.app/"
                :icon-language="[{name: 'vi-file-type-vue'}, {name: 'vi-file-type-typescript-official'}]"
                data-aos="fade-up"
                data-aos-delay="140"
            />
        </div>
    </section>
</template>
