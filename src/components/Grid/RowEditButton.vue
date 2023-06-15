<template>
    <div ref="editButton">
    <span class="text-teal cursor-pointer" @click="show = !show">
        <svg viewBox="0 0 17 17" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 hover:text-blue-400">
            <path d="M5.79876 14.1468L1 15.5152L2.37177 10.728L11.6251 1.49686C12.2892 0.834381 13.3604 0.834381 14.0245 1.49686L15.0521 2.522C15.7162 3.18448 15.7162 4.25314 15.0521 4.91562L5.79876 14.1468Z" stroke-linejoin="round"/>
            <path d="M13.6789 6.27911L10.252 2.86035" stroke-linejoin="round"/>
        </svg>


    </span>
    <Popup :anchor="'editButton'" :show="show" :popup-class="'popup-content'">
        <ColumnFilterView :invoiceColumns="props.invoiceColumns" />
    </Popup>
    </div>
</template>

<script setup lang="ts">
// import { Button } from '@progress/kendo-vue-buttons';
import { GridColumnProps } from '@progress/kendo-vue-grid';
import { Popup } from '@progress/kendo-vue-popup';
import ColumnFilterView from './ColumnFilterView.vue';

import { ref } from 'vue';

interface IProps {
    invoiceColumns: GridColumnProps[];
}

const props = defineProps<IProps>();
const show = ref(false);

</script>

<style scoped>
:deep(.popup-content.k-popup.k-child-animation-container) {
    border-radius: 8px;
}
</style>
