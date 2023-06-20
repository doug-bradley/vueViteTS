<template>
    <div class="mt-5">
        <h2 class="text-gray-400 mb-2 border border-x-0 border-b-0 border-t-gray-500 pt-4 pl-3 w-11/12 ml-2 uppercase">Analytics</h2>

        <div v-for="item in menuItems" :key="item.id"
            class="text-white text-sm font-normal transition-colors hover:bg-white hover:bg-opacity-5">
            <div class="flex flex-row gap-[14px] pl-5 py-[10px]" @click="clickHandler(item.link)">
                <span>{{ item.title }}</span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const menuItems = ref([
    { id: 1, title: 'Insights', link: '/insights' },
    { id: 2, title: 'Reports', link: '/Home/Analysis/' },
])

const clickHandler = (link: string) => {
    console.log(link);
}

</script>

<style scoped>
.open {
    max-height: 1000px;
    /* Set a large enough value */
    transition: max-height 0.5s ease;
}

.collapsed {
    max-height: 0;
}</style>
