<template>
    <FieldWrapper>
        <Label :editor-id="props.id" :editor-valid="props.valid" :disabled="props.disabled" :optional="props.optional">
            {{ props.label }}
        </Label>
        <div class="k-form-field-wrap my-4">
            <Checkbox
                :valid="props.valid"
                :id="props.id"
                :label="'Yes'"
                @change="handleChangeYes"
                @blur="handleBlur"
                @focus="handleFocus" />
        </div>

        <div class="k-form-field-wrap my-4">
            <Checkbox
                :valid="props.valid"
                :id="props.id"
                :label="'No'"    
                @change="handleChangeNo"
                @blur="handleBlur"
                @focus="handleFocus" />
        </div>
    </FieldWrapper>
    <pre>
        {{ props.value }}
    </pre>
</template>
<script setup lang="ts">
import { ref, defineProps, defineEmits } from "vue";
import { FieldWrapper } from "@progress/kendo-vue-form";
import { Error, Hint, Label } from "@progress/kendo-vue-labels";
import { Checkbox } from "@progress/kendo-vue-inputs";
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
