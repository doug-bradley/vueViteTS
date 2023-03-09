<template>
    {{  dateDisplay }}
</template>

<script setup>
import { defineProps, computed } from 'vue';
import {useDateFormatter} from '../composables/DateComposable';
const props = defineProps({
    dataItem: {
        type: Object,
        required: true
    },
    field: {
        type: String,
        required: true
    }
});
console.log(props.dataItem, props.field);

const dateDisplay = computed(() => {  
    if(props.dataItem[props.field] == null) return null;
    const formatter = useDateFormatter("en-US");  
    const date = parseInt(props.dataItem[props.field].substring(6, 19));
    return formatter.format(new Date(date));
});

</script>