<template>
    <field-wrapper>
        <Label :editor-id="props.id" :editor-valid="props.valid" :optional="props.optional">
            {{ label }}
        </Label>
        <div class="k-form-field-wrap">
            <MaskedTextBox :style="{ width: '230px' }" :valid="props.valid" :value="props.value" :id="props.id" :mask="props.mask"
                :readonly="props.readonly" @change="handleChange" @blur="handleBlur" @focus="handleFocus" />
            <Error v-if="showValidationMessage">
                {{ validationMessage }}
            </Error>
            <Hint v-else>{{ hint }}</Hint>
        </div>
    </field-wrapper>
</template>
<script setup lang="ts">
import { FieldWrapper } from "@progress/kendo-vue-form";
import { Error, Hint, Label } from "@progress/kendo-vue-labels";
import { MaskedTextBox } from "@progress/kendo-vue-inputs";
import { computed } from "vue";


interface IProps {
    readonly: boolean,
    optional: boolean,
    mask: string,
    touched: boolean,
    label: string,
    validationMessage: string,
    hint: string,
    id: string,
    valid: boolean,
    value: string
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
    emit('change', e);
};
const handleBlur = (e: any) => {
    emit('blur', e);
};
const handleFocus = (e: any) => {
    emit('focus', e);
};

</script>

