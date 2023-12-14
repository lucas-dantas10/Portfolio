<script setup>
import Card from '@/components/Card/Card.vue';
import UploadAi from '@/assets/imgs/upload_ai.png';
import TodoList from '@/assets/imgs/todolist.png';
import Ecommerce from '@/assets/imgs/ecommerce.png';
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
                title="Upload Ai Website"
                subtitle="Upload AI - Aplicação que possibilita realizar upload de videos e por meio de IA, criar automaticamente títulos chamativos e descrições com um boa indexação. Aplicação realizada em conjunto da Rocketseat."
                :image="UploadAi"
                github="https://github.com/lucas-dantas10/upload.ai"
                website="https://github.com/lucas-dantas10/upload.ai"
                :icon-language="[{name: 'vi-file-type-vue'}, {name: 'vi-file-type-typescript-official'}, {name: 'si-prisma'}, {name: 'vi-file-type-node'}]"
            />

            <Card
                title="ToDo List Website"
                subtitle="Todo List - Aplicação que possibilita adicionar tarefas, editar tarefas, adicionar customizações, adicionar prioridade da tarefa e adicionar categorias para as tarefas. Aplicação para poder gerenciar suas tarefas diárias."
                :image="TodoList"
                github="https://github.com/lucas-dantas10/TodoList"
                website="https://todolistapp01.netlify.app/"
                :icon-language="[{name: 'vi-file-type-vue'}, {name: 'vi-file-type-tailwind'}]"
            />

            <Card
                title="ToDo List API"
                subtitle="Todo List -  A API do ToDoList é uma interface de programação de aplicativos (API) RESTful projetada para uma aplicação web de gerenciamento de tarefas. Ela permite a comunicação entre o front-end e o back-end."
                :image="TodoList"
                github="https://github.com/lucas-dantas10/ToDoListApi"
                website="https://omlyy.com.br/public"
                :icon-language="[{name: 'si-laravel', color: 'red'}, {name: 'vi-file-type-docker'}]"
            />

            <Card
                title="E-commerce (Em Desenvolvimento)"
                subtitle="E-commerce -  Aplicação E-commerce construída com Laravel, VueJs, tailwindcss. Com painel de administrador com dashboard e relatórios, Api RESTful, gerenciamento de cliente, pagamento e etc."
                :image="Ecommerce"
                github="https://github.com/lucas-dantas10/e-commerce"
                website="https://github.com/lucas-dantas10/e-commerce"
                :icon-language="[{name: 'si-laravel', color: 'red'}, {name: 'vi-file-type-vue'}, {name: 'vi-file-type-tailwind'}, {name: 'vi-file-type-docker'}]"
            />
        </div>
    </section>
</template>
