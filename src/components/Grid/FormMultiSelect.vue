<template>
    <FieldWrapper>
        <Label :editor-id="props.id" :editor-valid="props.valid" :disabled="props.disabled" :optional="props.optional">
            {{ props.label }}
        </Label>
        <div class="k-form-field-wrap">
            <MultiSelect :style="{ width: '230px' }" :data-items='data' :valid="props.valid" :id="props.id" :text-field="'text'" :value-field="'value'" :value="props.value" :disabled="props.disabled" :placeholder="props.placeholder" :aria-describedby="hintId" :aria-invalid="showValidationMessage" :aria-errormessage="errorId"
                @change="handleChange" @blur="handleBlur" @focus="handleFocus"></MultiSelect>
            <Error v-if="showValidationMessage">
                {{ validationMessage }}
            </Error>
            <Hint v-else>{{ hint }}</Hint>
        </div>
    </FieldWrapper>
</template>
<script setup lang="ts">
import { FieldWrapper } from "@progress/kendo-vue-form";
import { Error, Hint, Label } from "@progress/kendo-vue-labels";
import { MultiSelect } from '@progress/kendo-vue-dropdowns';
import { computed } from "vue";

interface IProps {
    optional?: boolean;
    data: any;
    disabled?: boolean;
    placeholder?: string;
    touched?: boolean;
    label?: string;
    validationMessage?: string;
    hint?: string;
    id?: string;
    valid?: boolean;
    value?: string[];
}
const props = defineProps<IProps>();

const showValidationMessage = computed(() => {
    return props.touched && !props.validationMessage;
});
const showHint = computed(() => {
    return !showValidationMessage && !props.hint;
});
const hintId = computed(() => {
    return showHint ? `${props.id}_hint` : '';
});
const errorId = computed(() => {
    return showValidationMessage ? `${props.id}_error` : '';
});

const emit = defineEmits<{
    (e: 'input', arg: any): void
    (e: 'change', arg: any): void
    (e: 'blur', arg: any): void
    (e: 'focus', arg: any): void
}>();

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
