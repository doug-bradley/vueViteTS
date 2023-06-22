<template>
    <div class="relative z-10 flex flex-row justify-center pt-8">
        <a href="/Request/Create/1" class="btn-dropdown" @click="newRequestHandler()">
            <div class="flex flex-row items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6 mr-[8px]">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                New request
            </div>
        </a>
        <div class="relative w-[30] bg-secondary flex flex-row justify-center items-center pl-3 pr-2 rounded-r-md border-l-[1px] border-white border-opacity-50 transition-colors hover:bg-accent-1"
            @click="showNewDrop = !showNewDrop" @mouseleave="showNewDrop = false">
            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 1L5 5L1 1" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
                <ul v-if="showNewDrop" class="absolute z-20 top-0 left-0 bg-white text-primary rounded-sm w-[159px] mt-8 text-[12px]">
                    <li v-for="item in newDropItems" :key="item.id"
                        class="flex flex-row items-center justify-between h-full">
                        <a :href="item.url + '?id=' + item.id"
                            class="w-full p-3 border-b cursor-pointer transition-colors hover:bg-light-grey">{{
                                item.title }}</a>
                    </li>
                </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const showNewDrop = ref(false);
const newDropItems = ref([
    { id: '10', title: 'Expense', url: '/Request/Create/' },
    { id: '20', title: 'Leave', url: '/Request/Create/' },
    { id: '30', title: 'Travel', url: '/Request/Create/' },
])
const newRequestHandler = () => {
    console.log('new request');
}
</script>

<style scoped>
.btn-dropdown {
    @apply flex flex-row justify-between bg-secondary text-white rounded-l-md pl-2 w-[130px] h-[40px] text-[13px] cursor-pointer shadow-none transition-shadow hover:shadow-lg hover:bg-accent-1;
}
</style>