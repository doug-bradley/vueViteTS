<template>
    <div ref="filterButton">
    <div @click="show = !show">Filter</div>
    <Popup :anchor="'filterButton'" :show="show" :popup-class="'popup-content'">
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
