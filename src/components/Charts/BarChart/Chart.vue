<template>
    <div class="bar-chart-holder">
        <card class="k-card pa-2">
            <cardBody>
                <div class="card-title"><slot></slot></div>
                <div style="display: flex;">
                    <span class="card-amount" :class="setAmountColor">
                        <MoneyBox :Amount="budgetRemaining"></MoneyBox>
                    </span>
                    <span v-if="hasBudgetDefined" class="font-weight-thin pl-2" style="padding-top: 25px;">Available budget</span>
                    <span v-else class="font-weight-thin pl-2" style="padding-top: 25px;">Total spend</span>
                </div>

                <apexchart v-if="budgetData.BudgetCommitted" height="125px" type="bar" :options="chartOptions" :series="chartSeries"></apexchart>

                 <!--  placeholder block for when there is no data -->
                <div v-else style="height: 125px;">
                    &nbsp;
                </div>
            </cardBody>
        </card>
    </div>
</template>

<script setup lang="ts">
import ChartConfig from "./ChartConfig";
import MoneyBox from "../../Common/MoneyBox.vue";
import apexchart from "vue3-apexcharts";
import { computed, inject, ref } from 'vue';
import { useNumberFormatter } from "../../../composables/NumberFormats";

// interfaces
interface IBudget {
    ReportType: string;
    AllocationStructure: string;
    BudgetAmount: number;
    BudgetCommitted: number;
    BudgetActual: number;
}
interface IItem {
    name: string;
    data: number[];
}
interface IProps {
    budgetData: IBudget;
    isLoading: boolean;
}
interface ApexTooltip {
  series: number[];
  seriesIndex: number;
  dataPointIndex: number;
  w: any; // Update the type of 'w' if you have specific typings available for it
}

const props = defineProps<IProps>();

const locale: string = inject("locale", navigator.language);
const formatter = useNumberFormatter(locale);

const chartOptions = {
    ...ChartConfig.options,
    annotations: {
        position: 'front',
        xaxis: [{
            x: props.budgetData.BudgetAmount,
            label: {
                text: 'Total budget',
                show: true,
                borderColor: '#c2c2c2',
                borderWidth: 0,
                borderRadius: 2,
                textAnchor: props.budgetData.BudgetAmount ? 'middle' : 'start',
                position: 'top',
                orientation: 'horizontal',
                offsetX: 0,
                offsetY: -20,
                mouseEnter: undefined,
                mouseLeave: undefined,
                style: {
                    background: '#fff',
                    color: '#777',
                    fontSize: '12px',
                    cssClass: 'apexcharts-xaxis-annotation-label',
                },
            }
        },
        {
            x: props.budgetData.BudgetAmount,
            label: {
                text: formatter.formatCurrency(props.budgetData.BudgetAmount, 0),
                show: true,
                borderColor: '#c2c2c2',
                borderWidth: 0,
                borderRadius: 2,
                textAnchor: props.budgetData.BudgetAmount ? 'middle' : 'start',
                position: 'bottom',
                orientation: 'horizontal',
                offsetX: 0,
                offsetY: 20,
                mouseEnter: undefined,
                mouseLeave: undefined,
                style: {
                    background: '#fff',
                    color: '#777',
                    fontSize: '12px',
                    cssClass: 'apexcharts-xaxis-annotation-label',
                },
            }
        }],
    },
    dataLabels: {
        position: 'top',
        maxItems: 100,
        hideOverflowingLabels: false,
        orientation: 'horizontal',
        offsetY: -20,
        formatter: (val: number) => {
            return formatter.formatCurrency(val, 0);
        },
        style: {
            colors: ['#333333'],
            fontSize: '12px',
            fontWeight: 'bold',
            cssClass: 'apexcharts-data-label',
        },
    },
    tooltip: {
        custom: ({ series, seriesIndex, dataPointIndex, w }: ApexTooltip) => {
            var amount;
            var seriesName = w.globals.initialSeries[seriesIndex].name;

            if (seriesIndex == 2) {
                amount = series.reduce((partialSum: number, a: any) => partialSum + Number(a), 0);
            }
            else {
                amount = w.globals.initialSeries[seriesIndex].data[dataPointIndex];
            }

            const currency = formatter.formatCurrency(amount, 0);

            return `<div class="outlined my-4 mx-4" style="padding: 10px;">${seriesName}: <strong>${currency}</strong></div>`;
        },
    }
};

const setAmountColor = computed(() => {
    return (budgetRemaining?.value < 0) ? "text-danger" : "text-success";
});

const budgetRemaining = computed<number>(() => {
    return props.budgetData.BudgetAmount - props.budgetData.BudgetCommitted - props.budgetData.BudgetActual;
});

const hasBudgetDefined = computed(() => {
    return props.budgetData.BudgetAmount > 0;
});

const chartSeries = computed(() => {

    const result: IItem[] = [];
    if (props.budgetData.BudgetCommitted > 0 || hasBudgetDefined?.value) {
        result.push({
            name: 'Committed',
            data: [props.budgetData.BudgetCommitted]
        });
    }
    if (props.budgetData.BudgetActual > 0 || hasBudgetDefined?.value) {
        result.push({
            name: 'Actual',
            data: [props.budgetData.BudgetActual]
        });
    }
    if (hasBudgetDefined?.value) {
        result.push({
            name: "Budget",
            data: [(budgetRemaining?.value > 0) ? budgetRemaining?.value : 0]
        });
    }
    return result;

});
</script>

<style scoped>
.card-amount {
    font-size: 38px;
    color: #333333 !important;
    font-weight: 100;
}
.k-card {
    width: 95%;
    border: 1;
    border-radius: 8;
    box-shadow: none;
    background: transparent;
    border-color: lightgray;
    margin-top: 30px;
    padding: 0px 10px;
}

.card-amount.text-danger {
    font-size: 38px;
    color: #C53151 !important;
}

.card-title {
    color: #333333 !important;
    font-weight: 400;
    padding-top: 17px;
}

.card-amount.text-success {
    font-size: 38px;
    color: #333333 !important;
}

.card-previous {
    color: #333333 !important;
}

.rounded-card {
    border-radius: 8px !important;
}

.pl-2 {
    padding-left: 8px !important;
}
</style>