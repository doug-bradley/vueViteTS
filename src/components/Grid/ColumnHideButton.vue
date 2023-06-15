<template>
    <div @click="onClick">
    <DropDownButton
        :items="invoiceColumns" 
        :text="'Customize'" 
        :opened="opened" 
        :item-render="'itemRender'" 
        @itemclick="onItemClick">

        <template v-slot:itemRender="{ props }">
            <div class="k-link k-menu-link">
                <Checkbox :checked="!props.item.hidden" />
                {{ props.item.title }}
            </div>
        </template>
    </DropDownButton>
    </div>
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

<style scoped>
.k-dropdown-button >>> button.k-button:hover {
    background-color: transparent!important;
    border: transparent!important;
    color: #60A5FA!important;
}
.k-dropdown-button >>> button.k-button:focus {
    box-shadow: none!important;
}
.k-dropdown-button >>> .k-button-solid-base{
    background-image: none!important;
    font-size: 16px!important
}
.k-dropdown-button >>> .k-button-md{
    padding: 0!important;
}
.k-menu-group .k-item:focus>.k-link,
.k-menu-group .k-item.k-focus>.k-link,
.k-menu.k-context-menu .k-item:focus>.k-link,
.k-menu.k-context-menu .k-item.k-focus>.k-link {
    box-shadow: none!important;
}

</style>