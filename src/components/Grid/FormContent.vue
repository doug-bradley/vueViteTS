<template>
    <form-element class="p-[30px]" :style="{ width: '350px' }">
        <fieldset class="k-form-fieldset">
            <!-- <legend class="k-form-legend">Please fill in the fields:</legend> -->

            <div class="mb-3">
                <form-field :id="'refNumber'" :name="'refNumber'" :label="'Reference #'" :component="'myTemplate'">
                    <template v-slot:myTemplate="{ props }">
                        <FormInput v-bind="props" @change="props.onChange" @blur="props.onBlur" @focus="props.onFocus" />
                    </template>
                </form-field>
            </div>

            <!-- <div class="mb-3">
                <form-field :name="'invoiceTitle'" :component="'myTemplate'" :label="'Title'">
                    <template v-slot:myTemplate="{ props }">
                        <FormInput v-bind="props" @change="props.onChange" @blur="props.onBlur" @focus="props.onFocus" />
                    </template>
                </form-field>
            </div> -->

            <div class="mb-3">
                <form-field :id="'status'" :name="'status'" :component="'myTemplate'" :label="'Status'"  >
                    <template v-slot:myTemplate="{ props }">
                        <FormMultiSelect :data="statusList" v-bind="props" @change="props.onChange" @blur="props.onBlur"
                            @focus="props.onFocus" />
                    </template>
                </form-field>
            </div>



            <div class="mb-3">
                <form-field :id="'phoneNumber'" :name="'phoneNumber'" :label="'Phone Number'" :mask="'(999) 000-0000'"
                    :hint="'Hint: Your active phone number.'" :component="'myTemplate'" :validator="phoneValidator">
                    <template v-slot:myTemplate="{ props }">
                        <FormMaskedTextBox v-bind="props" @change="props.onChange" @blur="props.onBlur"
                            @focus="props.onFocus"></FormMaskedTextBox>
                    </template>
                </form-field>
            </div>

            <div class="mb-3">
                <form-field :id="'postedDate'" 
                            :name="'postedDate'" 
                            :label="'Posted date'"
                            :component="'myTemplate'"
                            :validator="arrivalDateValidator" 
                            :style="{ width: '90%', 'margin-right': '18px' }">
                    <template v-slot:myTemplate="{ props }">
                        <FormDatePicker v-bind="props" @change="props.onChange" @blur="props.onBlur" @focus="props.onFocus" />
                    </template>
                </form-field>
            </div>


            <div class="mb-3">
                <form-field :id="'createdDate'" 
                    :name="'createdDate'" 
                    :label="'Created Date'"
                    :component="'myTemplate'"
                    :style="{ width: '90%', 'margin-right': '18px' }">
                    <template v-slot:myTemplate="{ props }">
                        <FormDateRangePicker v-bind="props" @change="props.onChange" @blur="props.onBlur" @focus="props.onFocus" />
                    </template>
                </form-field>
            </div>

            <!-- Created On -->
            <!-- Modified On -->
            <!-- Request Owner -->

            <!-- <div class="mb-3">
                <form-field :name="'requestOwner'" :component="'myTemplate'" :label="'Request owner'">
                    <template v-slot:myTemplate="{ props }">
                        <FormInput v-bind="props" @change="props.onChange" @blur="props.onBlur" @focus="props.onFocus" />
                    </template>
                </form-field>
            </div> -->
            <!-- Has Attachments -->
            <div class="mb-3">
                <form-field :id="'hasAttachments'" :name="'hasAttachments'" :component="'myTemplate'"
                    :label="'Has attachments'">
                    <template v-slot:myTemplate="{ props }">
                        <FormRadioGroup v-bind="props" @change="props.onChange" @blur="props.onBlur" @focus="props.onFocus" />
                    </template>
                </form-field>
            </div>


        </fieldset>


        <div class="k-form-buttons flex flex-row-reverse">
            <Button :theme-color="'primary'" type="submit" :disabled="!kendoForm.allowSubmit">Apply</Button>
            <Button :theme-color="'primary'" :fill-mode="'outline'" type="button" @click="kendoForm.onFormreset">Cancel </Button>
        </div>
    </form-element>
</template>

<script setup lang="ts">
import { inject, ref } from "vue";
import FormInput from "./FormInput.vue";
import FormMultiSelect from "./FormMultiSelect.vue";
import FormCheckbox from "./FormCheckbox.vue";
import FormRadioGroup from "./FormRadioGroup.vue";
import FormMaskedTextBox from "./FormMaskedTextBox.vue";
import FormDatePicker from "./FormDatePicker.vue";
import FormDateRangePicker from "./FormDateRangePicker.vue";
import { Field as formField, FormElement as formElement } from "@progress/kendo-vue-form";
import { FormRenderProps } from "@progress/kendo-vue-form";
import { Button } from "@progress/kendo-vue-buttons";
import { GridColumnProps } from "@progress/kendo-vue-grid";
import {
    termsValidator,
    emailValidator,
    nameValidator,
    phoneValidator,
    guestsValidator,
    nightsValidator,
    arrivalDateValidator,
} from "./validators";

interface IProps {
    invoiceColumns: GridColumnProps[];
}

const statusList = [
    { text: "Open", value: 1 },
    { text: "Closed", value: 2 },
    { text: "Pending", value: 3 },
    { text: "In Progress", value: 4 },
    { text: "On Hold", value: 5 },
];
const props2 = defineProps<IProps>();


const kendoForm = inject<FormRenderProps>('kendoForm', {} as FormRenderProps);

const handleSubmit = (dataItem: any) => {
    alert(JSON.stringify(dataItem, null, 2));
};

const clear = () => {
    if (kendoForm !== undefined)
        kendoForm.onFormreset?.();
};

const change = (e: any) => {
    console.log(e);
};


</script>

<style scoped>
:deep(.k-form-field){
    margin-top: 0!important;
    margin-bottom: 20px!important;
}
:deep(.k-input-md .k-input-inner){
    @apply p-2;
}
:deep(button.k-button){
    @apply py-3 px-4;
}
</style>