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
            <ToolbarDocuments :data="documentsData" />
            <ToolbarActivity :data="activityData" />
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
    status: 'closed',
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

const documentsData = ref({
    title: 'Documents',
    details: [
        {
            id: 1,
            file: 'Screenshot 1.pdf',
            link: '#'
        },
        {
            id: 2,
            file: 'Screenshot 2.jpg',
            link: '#'
        }
    ]
})

const activityData = ref({
    title: 'Activity timeline',
    details: [
        {
            id: 1,
            status: 'approval',
            user: 'Prathima Suvarna',
            date: '2023-07-02',
        },
        {
            id: 2,
            status: 'approval',
            user: 'Peet Kuger',
            date: '2023-07-03',
        },
        {
            id: 3,
            status: 'create',
            user: 'Celeste Visagie',
            date: '2023-07-01',
        }
    ]
})

</script>

<style scoped></style>