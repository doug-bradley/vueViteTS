<template>
    <FieldWrapper>
        <Label :editor-id="props.id" :editor-valid="props.valid" :disabled="props.disabled" :optional="props.optional">
            {{ props.label }}
        </Label>
        <div class="k-form-field-wrap">
            <Input :style="{ width: '230px' }" :valid="props.valid" :id="props.id" :value="props.value" :disabled="props.disabled"
                :placeholder="props.placeholder" @input="handleChange" @blur="handleBlur" @focus="handleFocus" />
            <Error v-if="showValidationMessage">
                {{ props.validationMessage }}
            </Error>
            <Hint v-else>{{ props.hint }}</Hint>
        </div>
    </FieldWrapper>
</template>
<script setup lang="ts">
import { FieldWrapper } from "@progress/kendo-vue-form";
import { Error, Hint, Label } from "@progress/kendo-vue-labels";
import { Input } from "@progress/kendo-vue-inputs";
import { computed } from "vue";

interface IProps {
    optional?: boolean;
    disabled?: boolean;
    placeholder?: string;
    touched?: boolean;
    label?: string;
    validationMessage?: string;
    hint?: string;
    id?: string;
    valid?: boolean;
    value?: string;
}

const props = defineProps<IProps>();

const emit = defineEmits<{
    (e: 'input', arg: any): void
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
    emit('input', e);
};
const handleBlur = (e: any) => {
    emit('blur', e);
};

const handleFocus = (e: any) => {
    emit('focus', e);
};
</script>
