<template>
    <div id="request-review" class="flex flex-row gap-4 w-full">
        <div class="w-9/12">
            <div class="text-teal flex flex-row items-center gap-1 text-base font-semibold my-[14px]">
                <Icon :icon="iconArrowLeft" class="w-4 h-4" />
                Back
            </div>
            <WorkcenterGrid title="Request title" :toolbar="false" />
        </div>

        <div class="flex flex-col gap-3 w-3/12">
            <ToolbarActions />
            <ToolbarStatus :data="statusData" />
            <ToolbarDescription :data="descriptionData" />
            <ToolbarDocuments />
            <ToolbarActivity />
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Icon from '../../Utility/Icon.vue';
import Loader from '../../Utility/Loader.vue';
import WorkcenterGrid from '../WorkcenterGrid.vue';
import ToolbarActions from '../SideToolbar/ToolbarActions.vue';
import ToolbarStatus from '../SideToolbar/ToolbarStatus.vue';
import ToolbarDescription from '../SideToolbar/ToolbarDescription.vue';
import ToolbarDocuments from '../SideToolbar/ToolbarDocuments.vue';
import ToolbarActivity from '../SideToolbar/ToolbarActivity.vue';

const iconArrowLeft = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" /></svg>';


const statusData = ref({
    title: 'Status',
    status: 'purchasing',
    details: {
        total: 10000,
        PO: 12345,
        receipts: [
            {
                id: 1,
                invoice: 12345,
                amount: 1000,
                date: '2021-09-01',
                link: '#'
            },
            {
                id: 2,
                invoice: 324,
                amount: 750,
                date: '2021-09-01',
                link: '#'
            },
            {
                id: 3,
                invoice: 12345,
                amount: 1000,
                date: '2021-09-01',
                link: '#'
            }
        ]
    }
})
// ---- statuses for above object ----
// - created
// - approval
// - purchasing
// - closing
// - closed

const descriptionData = ref({
    title: 'Description',
    details: {
        reference: '12345',
        requestOwner: '',
        company: '',
        requestTotal: null,
        budgetImpact: {
            title: 'Budget impact',
            link: '#'
        },
    }
})

</script>

<style scoped></style>