<template>
    <Loader v-if="isLoading" theme="light" />
    <div>
        <p>Cost allocation</p>
        <DropDownList style="margin-top: 5px; width: 230px;" :disabled="state.allocationsList.length < 1"
            :data-items="state.allocationsList" :text-field="'text'" :data-item-key="'id'"
            v-model="state.selectedAllocation" />

        <div>
            <Chart :currencyCode="'USD'" :locale="locale" :budgetData="currentPeriodBudgetData" :is-loading="isLoading">
                Current period</Chart>
            <Chart :currencyCode="'USD'" :locale="locale" :budgetData="ytdBudgetData" :is-loading="isLoading">Year to date
            </Chart>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, inject, onMounted, reactive, ref } from 'vue';
import { DropDownList } from '@progress/kendo-vue-dropdowns';
import { uniqBy } from 'lodash';
import Chart from '../../Charts/BarChart/Chart.vue';
import Loader from '../../../Utility/Loader.vue';
import { useEngage } from '../../../composables/engageComposable';
import { Request } from '../../../models/data-contracts';

const axios: any = inject('axios');
const documentId = inject('documentId') // 72465
const documentType = inject('documentType'); // 'Request'
const currencyCode = inject('currencyCode');; // 'USD'
const locale = inject('locale', navigator.language);


// interfaces
interface IBudget {
    ReportType: string;
    AllocationStructure: string;
    BudgetAmount: number;
    BudgetCommitted: number;
    BudgetActual: number;
}

interface IDropdownItem {
    id: number;
    text: string;
}


// data
const isLoading = ref(true);
const state = reactive({
    requestBudgetData: [] as IBudget[],
    allocationsList: [] as IDropdownItem[],
    selectedAllocation: {} as IDropdownItem,
    isLoading: true,
});

const documentHasAllocations = computed(() => {
    return state.allocationsList.length > 0;
});

const ytdBudgetData = computed(() => {
    const result = state.requestBudgetData.find(
        (item) =>
            item.AllocationStructure == state.selectedAllocation.text &&
            item.ReportType == 'YTD'
    );
    return result ?? {
        ReportType: '',
        AllocationStructure: '',
        BudgetAmount: 0,
        BudgetCommitted: 0,
        BudgetActual: 0,
    };
});

const currentPeriodBudgetData = computed(() => {
    const result = state.requestBudgetData.find(
        (item) =>
            item.AllocationStructure == state.selectedAllocation.text &&
            item.ReportType == 'CurrentPeriod'
    );

    return result ?? {
        ReportType: '',
        AllocationStructure: '',
        BudgetAmount: 0,
        BudgetCommitted: 0,
        BudgetActual: 0,
    };
});

// const fetchBudgetData = async () => {
//     const authToken = 'YWEyYmIyYjAtNTI5NS00OWYxLWIxZDctMGE0OTRiZDM0NGQ40.XlnsraWiOQEljxwsVyI5M9f4TsM4qFJ60BYCG_ljCwV_Do5rwJFDTDE9F5JxSr29jUy4JmB-rM2pbCIGRi-9BbtcO2AUJZelB2GLcX1QxBWzjxCudqiQ_sEtGs490mQzN3FERm8-zv0dnCdrthanDJb_aq1gu-T-TVbF2DUbsync9ge0qdcCyqYr4qVz7pGPcFIulXno_L90lzTuy6oaMavRFbDLz6DVGHTyY9vNHDE1';
//     const odataURl = `$count=true`;
//     const { data, error, loading, count } = useEngage<Request>(ref(`/api/Budgets/?${odataURl}`), authToken);
// };

const fetchDummyData = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const json = await response.json();
        state.allocationsList = [
            {
                id: 0,
                text: '4000-100-10',
            },
            {
                id: 1,
                text: '4000-100-10',
            },
        ];
        state.selectedAllocation = state.allocationsList[0];
        state.requestBudgetData = [
            {
                ReportType: 'CurrentPeriod',
                AllocationStructure: '4000-100-10',
                BudgetAmount: 10000,
                BudgetCommitted: 5000,
                BudgetActual: 2000,
            },
            {
                ReportType: 'YTD',
                AllocationStructure: '4000-100-10',
                BudgetAmount: 20000,
                BudgetCommitted: 5200,
                BudgetActual: 4000,
            },
        ];
    } catch (error) {
        console.log(error);
    }
};

onMounted(async () => {
    // --------------- BUDGET ---------------
    isLoading.value = true;
    await fetchDummyData();
    isLoading.value = false;
});
</script>

<style scoped></style>