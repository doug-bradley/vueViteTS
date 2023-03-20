<template>
    <Form @submit="handleSubmit">
        <FormContent :invoiceColumns="props.invoiceColumns" />
    </Form>
</template>

<script setup lang="ts">
import { GridColumnProps } from '@progress/kendo-vue-grid';
import { Form } from "@progress/kendo-vue-form";
import FormContent from './FormContent.vue';

interface IProps {
    invoiceColumns: GridColumnProps[];
}

const props = defineProps<IProps>();

const handleSubmit = (dataItem: any) => {
    console.log(dataItem)
    alert(JSON.stringify(dataItem, null, 2));
}
</script>
