<template>
    <FieldWrapper>
        <Label :editor-id="props.id" :editor-valid="props.valid" :disabled="props.disabled" :optional="props.optional">
            {{ props.label }}
        </Label>

        <RadioGroup :data-items="dataItems" @change="handleChange" />

    </FieldWrapper>
    <!-- Debug output for valid radios selection -->
    <!-- <pre>
        {{ props.value }}
    </pre> -->
</template>
<script setup lang="ts">
import { ref, defineProps, defineEmits } from "vue";
import { FieldWrapper } from "@progress/kendo-vue-form";
import { Error, Hint, Label } from "@progress/kendo-vue-labels";
import { RadioGroup } from "@progress/kendo-vue-inputs";
import { computed } from "vue";
import { watch } from "fs";

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
    value: { yes: boolean, no: boolean, unassigned: boolean}
}

const dataItems = ref([
    { label: "Yes", value: "yes" },
    { label: "No", value: "no" },
]);

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
    console.log(e);
    emit('input', e);
};
const handleChangeYes = (e: any) => {
    emit('input', e);
};
const handleChangeNo = (e: any) => {
    emit('input', e);
};
const handleBlur = (e: any) => {
    emit('blur', e);
};

const handleFocus = (e: any) => {
    emit('focus', e);
};
</script>
