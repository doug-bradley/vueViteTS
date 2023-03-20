<template>
    <FieldWrapper>
        <Label :editor-id="id" :editor-valid="valid">
            {{ label }}
        </Label>
        <div class="k-form-field-wrap">
            <DateRangePicker :style="{ width: '230px' }" :value="value" :valid="valid" :id="id" @change="handleChange"
                @blur="handleBlur" @focus="handleFocus" />
            <Error v-if="showValidationMessage">
                {{ validationMessage }}
            </Error>
            <Hint v-else :direction="hintDirection">{{ hint }}</Hint>
        </div>
    </FieldWrapper>
</template>
<script setup lang="ts">
import { FieldWrapper } from "@progress/kendo-vue-form";
import { Error, Hint, Label } from "@progress/kendo-vue-labels";
import { DateRangePicker, SelectionRange } from '@progress/kendo-vue-dateinputs';
import { computed } from "vue";


interface IProps {
    hintDirection?: string;
    touched?: boolean;
    label?: string;
    validationMessage?: string;
    hint?: string;
    id?: string;
    valid?: boolean;
    value?: SelectionRange;
}

const props = defineProps<IProps>();

const emit = defineEmits<{
    (e: 'change', arg: any): void
    (e: 'blur', arg: any): void
    (e: 'focus', arg: any): void
}>();


const showValidationMessage = computed(() => {
    return props.touched && props.validationMessage;
});
const showHint = computed(() => {
    return !showValidationMessage.value && props.hint;
});
const hintId = computed(() => {
    return showHint.value ? `${props.id}_hint` : "";
});
const errorId = computed(() => {
    return showValidationMessage.value ? `${props.id}_error` : "";
});

const handleChange = (e: any) => {
    emit('change', e);
};
const handleBlur = (e: any) => {
    emit('blur', e);
};
const handleFocus = (e: any) => {
    emit('focus', e);
};
</script>

