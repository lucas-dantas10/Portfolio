<script setup>
import Card from '@/components/Card/Card.vue';
import UploadAi from '@/assets/imgs/upload_ai.png';
import TodoList from '@/assets/imgs/todolist.png';
</script>

<template>
    <section class="w-full h-screen" id="portfolio">
        <div class="flex items-center justify-center mt-32 mb-16">
            <div class="w-[9rem]">
                <h1 class="text-center text-4xl font-semibold dark:text-white border-b-2 border-blue-600 pb-2">
                    Portfólio
                </h1>
            </div>
        </div>

        <div class="w-full flex flex-wrap items-center gap-6">
            <Card
                title="Upload Ai Web Site"
                subtitle="Upload AI - Aplicação que possibilita realizar upload de videos e por meio de IA, criar automaticamente títulos chamativos e descrições com um boa indexação. Aplicação realizada em conjunto da Rocketseat."
                :image="UploadAi"
            />

            <Card
                title="ToDo List"
                subtitle="Todo List - Aplicação que possibilita adicionar tarefas, editar tarefas, adicionar customizações, possui um cronômetro para poder medir o tempo que realiza a tarefa, calendário para identificar as tarefas do dia selecionado."
                :image="TodoList"
            />
        </div>
    </section>
</template>
