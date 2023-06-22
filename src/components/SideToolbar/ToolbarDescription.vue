<template>
    <div class="card px-5 pt-5 pb-10 text-sm">
        <h3 class="text-sm font-normal pb-4 mb-5 border-b-light-grey border-b-[1px]">{{ props.data.title }}</h3>

        <div class="mb-5 flex flex-row">
            <div class="w-[130px]">Reference #</div>
            <div>{{ props.data.details.reference }}</div>
        </div>

        <div class="mb-5 flex flex-row">
            <div class="w-[130px]">Request owner</div>
            <div v-if="props.data.details.requestOwner">{{ props.data.details.requestOwner }}</div>
            <div v-else>
                <span class="text-teal font-semibold cursor-pointer" @click="addRequestOwnerHandler">Add</span>
            </div>
        </div>

        <div class="mb-5 flex flex-row">
            <div class="w-[130px]">Company</div>
            <div v-if="props.data.details.company">{{ props.data.details.company }}</div>
            <div v-else>
                <span class="text-teal font-semibold cursor-pointer" @click="addCompanyHandler">Add</span>
            </div>
        </div>

        <div class="mb-5 flex flex-row">
            <div class="w-[130px]">Request total</div>
            <div v-if="props.data.details.requestTotal">${{ props.data.details.requestTotal }}</div>
            <div v-else class="text-teal">
                -
            </div>
        </div>

        <div class="mb-5 flex flex-row">
            <div class="w-[130px]">Budget impact</div>
            <div v-if="props.data.details.budgetImpact.link">
                <span class="text-teal font-semibold cursor-pointer" @click="budgetImpactViewHandler">View</span>
            </div>
            <div v-else class="text-teal">
                -
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineProps, onMounted } from 'vue';

const props = defineProps({
    data: {
        type: Object,
        required: true
    }
});

const addRequestOwnerHandler = () => {
    console.log('Add request owner');
}

const addCompanyHandler = () => {
    console.log('Add company');
}

const budgetImpactViewHandler = () => {
    console.log('View budget impact');
}

onMounted(() => {
    console.log(props.data);
});
</script>

<style scoped></style>