<template>
    <DropDownButton
    class="grid-button"
        :items="invoiceColumns" 
        :text="'Customize'" 
        :icon="'cog'" 
        :opened="opened" 
        :item-render="'itemRender'"
        @click="onClick" 
        @itemclick="onItemClick">

        <template v-slot:itemRender="{ props }">
            <div class="k-link k-menu-link">
                <Checkbox :checked="!props.item.hidden" />
                {{ props.item.title }}
            </div>
        </template>
    </DropDownButton>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { DropDownButton } from '@progress/kendo-vue-buttons';
import { Checkbox } from "@progress/kendo-vue-inputs";
import { GridColumnProps } from '@progress/kendo-vue-grid';

interface IProps {
    invoiceColumns: GridColumnProps[];
}

const props = defineProps<IProps>();

const opened = ref(false);

const onClick = () => {
    opened.value = !opened.value;
};

const onItemClick = (e: any) => {
    const item = e.item;
    const column = item.field;
    const hidden = item.hidden;

    props.invoiceColumns.forEach((col: any) => {
        if (col.field === column) {
            col.hidden = !hidden;
        }
    });
};

</script>