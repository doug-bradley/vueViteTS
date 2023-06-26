<template>
    {{  formattedAmount }}
</template>

<script setup lang="ts">
import { useNumberFormatter } from '../../composables/NumberFormats';
import { computed, inject } from 'vue';

interface IProps {
    Amount: number;
}
const props = defineProps<IProps>();
const locale: string = inject('locale', navigator.language);
const currencyCode: string = inject('currencyCode', 'USD');
const formatter = useNumberFormatter(locale);

const formattedAmount = computed(() => {
    return formatter.formatCurrency(props.Amount, 0);
});

</script>