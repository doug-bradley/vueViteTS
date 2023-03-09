<template>
    <form-element class="pa-10" :style="{ width: '350px' }">
        <fieldset class="k-form-fieldset">
            <!-- <legend class="k-form-legend">Please fill in the fields:</legend> -->

            <div class="mb-3">
                <Field :id="'refNumber'" :name="'refNumber'" :label="'Reference #'" :component="'myTemplate'">
                    <template v-slot:myTemplate="{ props }">
                        <FormInput v-bind="props" @change="props.onChange" @blur="props.onBlur" @focus="props.onFocus" />
                    </template>
                </Field>
            </div>

            <div class="mb-3">
                <Field :name="'invoiceTitle'" :component="'myTemplate'" :label="'Title'">
                    <template v-slot:myTemplate="{ props }">
                        <FormInput v-bind="props" @change="props.onChange" @blur="props.onBlur" @focus="props.onFocus" />
                    </template>
                </Field>
            </div>

            <div class="mb-3">
                <Field :name="'status'" :type="'status'" :component="'myTemplate'" :label="'Status'"
                    :validator="emailValidator">
                    <template v-slot:myTemplate="{ props }">
                        <FormMultiSelect v-bind="props" @change="props.onChange" @blur="props.onBlur" @focus="props.onFocus" />
                    </template>
                </Field>
            </div>

            <!-- Created On -->
            <!-- Modified On -->
            <!-- Request Owner -->
            
            <div class="mb-3">
                <field :name="'requestOwner'" :component="'myTemplate'" :label="'Request owner'">
                    <template v-slot:myTemplate="{ props }">
                        <FormInput v-bind="props" @change="props.onChange" @blur="props.onBlur" @focus="props.onFocus" />
                    </template>
                </field>
            </div>
            <!-- Has Attachments -->
            <div class="mb-3">
                <Field :name="'hasAttachments'" :component="'myTemplate'" :label="'Has attachments'">
                    <template v-slot:myTemplate="{ props }">
                        <FormCheckbox v-bind="props" @change="props.onChange" @blur="props.onBlur" @focus="props.onFocus" />
                    </template>
                </Field>
            </div>


        </fieldset>


        <div class="k-form-buttons">
            <Button type="submit" :disabled="!kendoForm.allowSubmit">
                Submit
            </Button>
            <Button type="button" @click="clear">Clear </Button>
        </div>
    </form-element>
</template>

<script setup lang="ts">
import { inject, ref } from "vue";
import FormInput from "./FormInput.vue";
import FormMultiSelect from "./FormMultiSelect.vue";
import FormCheckbox from "./FormCheckbox.vue";
import { Field, FormElement } from "@progress/kendo-vue-form";
import { Button } from "@progress/kendo-vue-buttons";
import { GridColumnProps } from "@progress/kendo-vue-grid";

interface IProps {
    invoiceColumns: GridColumnProps[];
}

const props2 = defineProps<IProps>();
const firstName = ref('doug')

console.log('FormContent', props2.invoiceColumns)
const emailRegex = new RegExp(/\S+@\S+\.\S+/);
const emailValidator = (value: string) => emailRegex.test(value) ? "" : "Please enter a valid email.";

const kendoForm: any = inject('kendoForm');

const handleSubmit = (dataItem: any) => {
    alert(JSON.stringify(dataItem, null, 2));
};

const clear = () => {
    console.log('clear', kendoForm)
    kendoForm.onFormReset();
};


</script>