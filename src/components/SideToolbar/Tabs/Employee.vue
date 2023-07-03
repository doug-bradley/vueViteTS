<template>
    <div style="width: 560px">
        <div>
            <div v-if="isLoading" style="margin-top: 16px; margin-bottom: 25px; width: 230px;">
                <SkeletonCard></SkeletonCard>
            </div>

            <div v-else
                style="margin-top: 15px; margin-bottom: 25px; display: flex; flex-direction: row; justify-content: space-between;"
                class="align-center">
                <div>
                    <span style="margin-bottom: 5px" class="text-lg">Employee spend for</span>
                    <br />
                    <DropDownList style="width: 230px; margin-top: 5px;" :data-items="state.employeeList.value"
                        :text-field="'text'" :data-item-key="'id'" :disabled="state.employeeList.value.length < 2"
                        v-model="state.selectedEmployee.value">
                    </DropDownList>
                </div>

                <div class="chip-row-holder">
                    <Chip :text="'Line range'" :value="'Line range'" :rounded="'full'"
                        :fill-mode="state.selectedChip.value === 'line' ? 'filled' : 'outlined'" :theme-color="null"
                        :class="state.selectedChip.value === 'line' ? 'chip selectedChip' : 'chip unselectedChip'"
                        @click="state.selectedChip.value = 'line'" />

                    <Chip :text="'Vendor detail'" :value="'Vendor detail'" :rounded="'full'"
                        :fill-mode="state.selectedChip.value === 'vendor' ? 'filled' : 'outlined'" :theme-color="null"
                        :class="state.selectedChip.value === 'vendor' ? 'chip selectedChip' : 'chip unselectedChip'"
                        @click="state.selectedChip.value = 'vendor'" />
                </div>

            </div>
        </div>

        <div>
            <div v-if="isLoading" style="margin-top: 10px; height: 94px; width: 230px;">
                <SkeletonCard></SkeletonCard>
            </div>

            <div v-if="!isLoading && state.selectedChip.value === 'line'"
                style="display: flex; flex-direction:row; justify-content: space-between;">
                <div>
                    <div class="spend-text">Yearly spend</div>
                    <div class="spend-amount">
                        <MoneyBox :Amount="chartTotal" />
                    </div>
                    <div class="d-flex justify-start">
                        <DateBox :Date="state.yearAgo.value" /> &nbsp; - &nbsp;
                        <DateBox :Date="state.today.value" />
                    </div>
                </div>

                <div>
                    <div v-if="state.selectedChip.value === 'line'">
                        <div class="spend-text">Selected range spend</div>
                        <div class="spend-amount">
                            <MoneyBox :Amount="state.rangeSpend.value" />
                        </div>
                        <div class="d-flex justify-start">
                            <DateBox :Date="state.rangeStartDate.value" /> &nbsp; - &nbsp;
                            <DateBox :Date="state.rangeEndDate.value" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div v-if="isLoading" style="height: 245px; padding:10px">
            <SkeletonCard></SkeletonCard>
        </div>
        <div v-else>
            <div v-if="state.selectedChip.value === 'line'">
                <div class="lineAndAreaChart" id="wrapper">
                    <div id="employee-chart-line2">
                        <div v-if="isLoading" style="height: 245px; padding: 10px;">
                            <SkeletonCard></SkeletonCard>
                        </div>

                        <apexchart v-else type="line" height="230" :options="employeeLineChartOptions"
                            :series="state.rangeSeries.value" />
                    </div>
                    <div v-if="!documentHasEmployees && !isLoading" style="margin-top: 15px;">
                        No employee(s) found in {{ documentType }} item(s)
                    </div>
                </div>

                <div v-if="!isLoading && documentHasEmployees" class="datePickerParent">
                    <div class="spend-text text-center datePickerParent--heading">Selected range</div>
                    <div class="datePickerHolder">
                        <div>
                            <b>From:</b>
                            <DatePicker :style="{ width: '150px' }" :value="new Date(state.rangeStartDate.value)"
                                :format="'MM/dd/yyyy'" :default-Show="false"
                                @change="onStartDateChange($event.target.value)" class="datepicker-input1" />
                        </div>
                        <div>
                            <b>To:</b>
                            <DatePicker :style="{ width: '150px' }" :value="new Date(state.rangeEndDate.value)"
                                :format="'MM/dd/yyyy'" :default-Show="false" @change="onEndDateChange($event.target.value)"
                                class="datepicker-input2" />
                        </div>
                    </div>
                </div>
            </div>

            <div v-if="state.selectedChip.value === 'vendor'" style="margin-top: 30px;" class="donut-holder">
                <div v-show="state.isResizing.value === true">
                    <SkeletonCard></SkeletonCard>
                </div>
                <div v-show="state.isResizing.value === false">
                    <apexchart id="donut-chart" :options="state.employeeDonutChartOptions.value"
                        :series="state.donutSeries.value" @dataPointMouseEnter="onDataPointMouseEnter"
                        @dataPointMouseLeave="onDataPointMouseLeave" @legendClick="onLegendItemClick" />
                </div>

                <div v-if="state.isResizing.value === false" class="center-text">
                    <div>
                        <div class="spend-text">{{ state.selectedSegmentLabel.value === '' ? 'Yearly spend' :
                            state.selectedSegmentLabel.value }}</div>
                        <div class="spend-amount">
                            <MoneyBox v-if="state.selectedSegmentValue.value === 0" :Amount="chartTotal" />
                            <MoneyBox v-else :Amount="state.selectedSegmentValue.value" />
                        </div>
                        <div>
                            <DateBox :Date="state.yearAgo.value" /> &nbsp; - &nbsp;
                            <DateBox :Date="state.today.value" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
  
<script setup lang="ts">
import { computed, inject, onMounted, onUnmounted, reactive, ref, nextTick, onUpdated } from 'vue';
import axios from 'axios';
import type { Ref } from "vue";
import { map, sumBy, chain, orderBy } from 'lodash';
import { DropDownList } from '@progress/kendo-vue-dropdowns';
import { DatePicker } from "@progress/kendo-vue-dateinputs";
import { Chip } from '@progress/kendo-vue-buttons';
import SkeletonCard from "../../../components/Common/SkeletonCard.vue";
import DateBox from "../../../components/Common/DateBox.vue";
import MoneyBox from "../../../components/Common/MoneyBox.vue";
import type { ApexOptions } from 'apexcharts';
import apexchart from 'vue3-apexcharts';
import moment from 'moment';
import { useNumberFormatter } from "../../../composables/NumberFormats";

const documentId = inject('documentId');
const documentType = inject('documentType');
const locale: string = inject("locale", navigator.language);
const formatter = useNumberFormatter(locale);

const isLoading = ref(true);

interface ISpendHistory {
    TransactionDate: Date;
    TransactionAmount: number;
    SupplierName: string;
    FullName: string;
}

interface IDropdownItem {
    id: number;
    text: string;
}
interface IState {
    employeeSpendHistory: Ref<ISpendHistory[]>;
    employeeList: Ref<IDropdownItem[]>;
    selectedEmployee: Ref<IDropdownItem>;

    employeeChartStartDate: Ref<Date>;
    employeeChartEndDate: Ref<Date>;
    employeeSelectedChartStartDate: Ref<Date>;
    employeeSelectedChartEndDate: Ref<Date>;

    rangeStartDate: Ref<Date>;
    rangeEndDate: Ref<Date>;
    rangeSeries: Ref<any>;
    rangeSpend: Ref<number>;

    yearAgo: Ref<Date>;
    today: Ref<Date>;

    donutSeries: Ref<any>;
    donutLabels: Ref<any>;
    employeeDonutChartOptions: Ref<any>;
    selectedSegmentLabel: Ref<string>;
    selectedSegmentValue: Ref<number>;
    isResizing: Ref<boolean>;
    calcHeight: Ref<string>;
    donutCvs: Ref<any>;
    donutSvg: Ref<any>;
    donutFob: Ref<any>;
    donutLegend: Ref<any>;

    selectedChip: Ref<any>;

    internalSum: Ref<number>;
    isLoading: Ref<boolean>;
}

let state: IState = {
    employeeSpendHistory: ref([]),
    employeeList: ref([]),
    selectedEmployee: ref({ id: 0, text: '' }),

    employeeChartStartDate: ref(new Date()),
    employeeChartEndDate: ref(new Date()),
    employeeSelectedChartStartDate: ref(new Date()),
    employeeSelectedChartEndDate: ref(new Date()),

    rangeStartDate: ref(new Date()),
    rangeEndDate: ref(new Date()),
    rangeSeries: ref([]),
    rangeSpend: ref(0),

    yearAgo: ref(new Date()),
    today: ref(new Date()),

    donutSeries: ref([]),
    donutLabels: ref([]),
    employeeDonutChartOptions: ref({}),
    selectedSegmentLabel: ref(''),
    selectedSegmentValue: ref(0),
    isResizing: ref(false),
    calcHeight: ref(''),
    donutCvs: ref(null),
    donutSvg: ref(null),
    donutFob: ref(null),
    donutLegend: ref(null),

    selectedChip: ref('line'),

    internalSum: ref(0),
    isLoading: ref(true),
};

const employeeLineChartOptions: ApexOptions = reactive({
    chart: {
        id: "chart2",
        type: "line",
        height: 230,
        toolbar: {
            autoSelected: "pan",
            show: false,
        },
    },

    colors: ["#546E7A"],
    stroke: {
        width: 3,
        curve: "smooth",
    },
    dataLabels: {
        enabled: false,
    },
    fill: {
        opacity: 1,
    },
    markers: {
        size: 0,
    },
    xaxis: {
        // min: state.employeeChartStartDate.getDate(),
        // max: state.employeeChartEndDate.getDate(),
        title: { text: "" },
        type: "datetime",
    },
    yaxis: {
        show: true,
        showAlways: true,
        showForNullSeries: true,
        forceNiceScale: true,
        floating: false,
        decimalsInFloat: 0,
        labels: {
            formatter: (value: number, opts: any) => {
                return value.toString();
            },
        },
    },
    tooltip: {
        enabled: true,
        custom: ({ seriesIndex, dataPointIndex, w }) => {
            var amount = w.globals.initialSeries[seriesIndex].data[dataPointIndex];

            var seriesName = "Spend";

            const currency = formatter.formatCurrency(amount[1], 0);

            return `<div class="outlined my-4 mx-4" style="padding: 10px;">${seriesName}: <strong>${currency}</strong></div>`;
        },
    },
});


const documentHasEmployees = computed(() => {
    return state.employeeList.value.length > 0;
});

const setEmployee = () => {
    state.employeeList.value = chain(state.employeeSpendHistory.value)
        .groupBy('FullName')
        .map((value, key) => ({ FullName: key }))
        //   .uniqBy()
        .map((value, key) => ({ id: key, text: value.FullName }))
        .value();

    state.selectedEmployee.value = state.employeeList.value[0];
};

const fetchDummyData = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const json = await response.json();
        state.employeeSpendHistory.value = [
            {
                "TransactionDate": new Date("2023-06-12"),
                "TransactionAmount": 1099.9000,
                "SupplierName": "AdventureWorks Cycles",
                "FullName": "FraxionTempAdmin FTA"
            },
            {
                "TransactionDate": new Date("2023-06-13"),
                "TransactionAmount": 21097.8900,
                "SupplierName": "A. Datum Corporation",
                "FullName": "FraxionTempAdmin FTA"
            }
        ];
        for (var item of state.employeeSpendHistory.value) {
            if (moment(state.employeeChartStartDate.value).isAfter(item.TransactionDate)) {
                state.employeeChartStartDate.value = item.TransactionDate;
            } else if (moment(state.employeeChartStartDate.value).isBefore(item.TransactionDate)) {
                state.employeeChartEndDate.value = item.TransactionDate;
            }
        }

        setEmployee();
    } catch (error) {
        console.log(error);
    }

}

//   const fetchEmployeeSpend = async () => {
//   await axios.get("/Employee/GetEmployeeOverview", { params: { documentId: documentId, documentType: documentType } })
//       .then((response) => {
//         state.employeeSpendHistory.value = response.data;
//         for (var item of state.employeeSpendHistory.value) {
//           if (moment(state.employeeChartStartDate.value).isAfter(item.TransactionDate)) {
//             state.employeeChartStartDate.value = item.TransactionDate;
//           } else if (moment(state.employeeChartStartDate.value).isBefore(item.TransactionDate)) {
//             state.employeeChartEndDate.value = item.TransactionDate;
//           }
//         }

//         setEmployee();
//       });
//   };

onMounted(async () => {
    isLoading.value = true;
    setEmployee();
    await fetchDummyData();
    // await fetchEmployeeSpend();
    isLoading.value = false;
    //get date for a year ago
    today();
    oneYearAgo();
    // set range dates same as chart dates
    initialchartSeries();
    // set donut options
    state.employeeDonutChartOptions.value = {
        chart: {
            type: 'donut',
        },
        redrawOnWindowResize: false,
        legend: {
            show: true,
            position: 'bottom',
            floating: true, // Enable floating legend
            offsetY: 0, // Offset it slightly vertically
            offsetX: 0, // Offset it slightly horizontally
        },
        tooltip: {
            enabled: false, // Disable the tooltip
        },
        plotOptions: {
            pie: {
                donut: {
                    size: '85%', // Adjust the thickness here (e.g., '65%')
                },
            },
        },
        dataLabels: {
            enabled: false,
            formatter: function (val: any, opts: { seriesIndex: any; }) {
                const labelIndex = opts.seriesIndex;
                const label = state.donutLabels.value[labelIndex];
                return label;
            }
        },
        labels: state.donutLabels.value,
    }
    // set datepicker input to readonly
    nextTick(() => {
        makeDatePickerInputReadOnly();
    });
    // check employee spend history (less than 20, display vendor chart)
    if (state.employeeSpendHistory.value.length < 20) {
        state.selectedChip.value = 'vendor';
    }

    // Handler function for window resize event (donut mods)
    const handleWindowResize = async () => {
        state.isResizing.value = true;

        // Change donut canvas heights to reveal repositioned floating legend
        setTimeout(() => {
            state.isResizing.value = false;
            donutMods();
        }, 1500)
    };


    // Add window resize event listener
    window.addEventListener('resize', handleWindowResize);



    // Clean up: remove window resize event listener on component unmount
    onUnmounted(() => {
        window.removeEventListener('resize', handleWindowResize);
    });
});

onUpdated(() => {

    nextTick(() => {
        // set datepicker inputs to readonly
        makeDatePickerInputReadOnly();
        // Change donut canvas heights to reveal repositioned floating legend
        donutMods();
    });
});

const donutMods = () => {
    // Function to check if the target element is present
    const checkElementPresence = () => {
        const donutSVG = document.querySelector('#donut-chart .apexcharts-canvas .apexcharts-svg');
        const donutFOB = document.querySelector('#donut-chart .apexcharts-canvas .apexcharts-svg foreignObject');

        if (donutSVG && donutFOB) {
            // Elements are present
            donutSVG.setAttribute('height', state.calcHeight.value);
            donutFOB.setAttribute('height', state.calcHeight.value);

            // Stop observing once the element is found
            observer.disconnect();
        }
    };

    // Create a new MutationObserver instance
    const observer = new MutationObserver(checkElementPresence);

    // Define the configuration for the observer (observe changes in the parent container where the element is inserted)
    const observerConfig = {
        childList: true,
        subtree: true,
    };

    // Start observing changes in the DOM
    observer.observe(document.body, observerConfig);

    // Change donut canvas heights to reveal repositioned floating legend
    if (!state.donutCvs.value && !state.donutSvg.value && !state.donutFob.value) {
        state.donutCvs.value = document.querySelector('#donut-chart .apexcharts-canvas') as HTMLElement;
        state.donutSvg.value = document.querySelector('#donut-chart .apexcharts-canvas .apexcharts-svg') as HTMLElement;
        state.donutFob.value = document.querySelector('#donut-chart .apexcharts-canvas .apexcharts-svg foreignObject') as HTMLElement;
        state.donutLegend.value = document.querySelector('#donut-chart .apexcharts-legend') as HTMLElement;
    }

    if (!state.calcHeight.value && state.selectedChip.value === 'vendor') {
        let calc = Number(state.donutSvg.value.getAttribute('height')) + state.donutLegend.value.offsetHeight + 20;
        state.calcHeight.value = String(calc);
    }
    if (state.calcHeight.value) {
        state.donutCvs.value.style.height = state.calcHeight.value + 'px';
        state.donutSvg.value.setAttribute('height', state.calcHeight.value);
        state.donutFob.value.setAttribute('height', state.calcHeight.value);
    }
}

const chartSeriesAsObject = () => {
    // unpack the data from the chart selectedSupplierSeries array
    if (selectedEmployeeSeries.value.length < 1) {
        return [];
    }
    const seriesData = selectedEmployeeSeries.value[0].data;
    // map the multidimensional array to a list of objects
    return map(seriesData, (item) => {
        return {
            date: item[0],
            amount: item[1],
        };
    });
};

const selectedEmployeeSeries = computed(() => {
    const filteredEmployees = state.employeeSpendHistory.value.filter(
        (employee) => employee.FullName === state.selectedEmployee.value.text
    );
    const chartSeries = map(filteredEmployees, (item) => {
        return [item.TransactionDate, item.TransactionAmount];
    });

    return [{ data: chartSeries }];
});

const chartTotal = computed(() => {
    const chartPointsAsObject = chartSeriesAsObject();

    // sum the amounts in the range
    return sumBy(chartPointsAsObject, "amount");
});

const onStartDateChange = (date: Date) => {
    state.rangeStartDate.value = date
    updateChartHandler(state.rangeStartDate.value, state.rangeEndDate.value)
};

const onEndDateChange = (date: Date) => {
    state.rangeEndDate.value = date
    updateChartHandler(state.rangeStartDate.value, state.rangeEndDate.value)
};

const updateChartHandler = (startDate: moment.MomentInput, endDate: moment.MomentInput) => {
    // Filter the spend history based on the selected date range
    const filteredSpendHistory = state.employeeSpendHistory.value.filter((item) => {
        const transactionDate = moment(item.TransactionDate).startOf('day');
        return transactionDate.isBetween(startDate, endDate, null, '[]');
    });

    // Extract the necessary data for the graph
    const graphData = filteredSpendHistory.map((item) => ([
        item.TransactionDate,
        item.TransactionAmount,
    ]));

    // prep donut chart data
    // Group the transactions by supplier name and sum the transaction amounts
    const groupedData = chain(state.employeeSpendHistory.value)
        .groupBy('SupplierName')
        .map((value, key) => ({ SupplierName: key, TransactionAmount: sumBy(value, 'TransactionAmount') }))
        .value();

    // Sort the data by transaction amount
    const sortedData = orderBy(groupedData, 'TransactionAmount', 'desc');
    //update the donut chart series
    state.donutSeries.value = sortedData.map((item) =>
        item.TransactionAmount,
    );
    state.donutLabels.value = sortedData.map((item) =>
        item.SupplierName,
    );


    // Update the line chart series
    state.rangeSeries.value = [{ data: graphData }];

    // calculate range spend amount
    const rangeSpendAmount = sumBy(filteredSpendHistory, "TransactionAmount");
    state.rangeSpend.value = rangeSpendAmount;
};

const initialchartSeries = () => {
    var today = new Date();
    var last30days = new Date(today);
    last30days.setDate(today.getDate() - 30);

    const start = last30days;
    const end = state.rangeEndDate.value;
    state.rangeStartDate.value = start;
    updateChartHandler(start, end);
}

const oneYearAgo = () => {
    var today = new Date();
    var lastYear = new Date(today);
    lastYear.setFullYear(today.getFullYear() - 1);

    state.yearAgo.value = lastYear;
}

const today = () => {
    var today = new Date();
    state.today.value = today;
}

// set date picker input to readonly
const makeDatePickerInputReadOnly = () => {
    const input1 = document.querySelector(".datepicker-input1 .k-dateinput input")
    const input2 = document.querySelector(".datepicker-input2 .k-dateinput input")
    if (!input1 || !input2) return
    input1.setAttribute("readonly", "true");
    input1.setAttribute("disabled", "true");
    input2.setAttribute("readonly", "true");
    input2.setAttribute("disabled", "true");
};


// Event handler for segment mouse enter
const onDataPointMouseEnter = (chartContext: any, seriesIndex: { series: { w: { config: { labels: { [x: string]: any; }; series: { [x: string]: any; }; }; }; }; }, dataPointIndex: { dataPointIndex: string | number; }) => {
    const label = seriesIndex.series.w.config.labels[dataPointIndex.dataPointIndex];
    const value = seriesIndex.series.w.config.series[dataPointIndex.dataPointIndex];

    // Update state with the segment label and value
    state.selectedSegmentLabel.value = label;
    state.selectedSegmentValue.value = value;
};

// Event handler for segment mouse leave
const onDataPointMouseLeave = () => {
    // Reset state when mouse leaves the segment
    state.selectedSegmentLabel.value = '';
    state.selectedSegmentValue.value = 0;
};

const onLegendItemClick = (chartContext: { w: { globals: { labels: { [x: string]: any; }; series: { [x: string]: any; }; }; }; }, seriesIndex: string | number) => {
    const label = chartContext.w.globals.labels[seriesIndex];
    const value = chartContext.w.globals.series[seriesIndex];

    state.selectedSegmentLabel.value = label;
    state.selectedSegmentValue.value = value;
};
</script>
  
<style scoped>
.color-on {
    color: #008897;
}

.color-off {
    color: #545454;
}

.input__label {
    color: rgb(57, 15, 196);
}

.spend-text {
    font-size: 14px;
    font-family: "Open Sans", sans-serif;
    font-weight: 400;
    color: #333333 !important;
}

.spend-amount {
    font-size: 38px;
    font-family: "Open Sans", sans-serif;
    font-weight: 100;
    color: #333333 !important;
}

.lineAndAreaChart {
    margin-top: 25px;
    flex-direction: row;
    border: 1px solid lightgrey;
    border-radius: 5px;
}

.datePickerParent {
    margin-top: 40px;
    @apply relative z-0;
}

.datePickerParent--heading::before {
    content: '';
    width: 70%;
    height: 30px;
    border: 1px solid #ccc;
    border-bottom: transparent;
    position: absolute;
    z-index: -2;
    left: 0;
    right: 0;
    margin: 0 auto;
    top: 1rem;
}

.datePickerParent--heading::after {
    content: '';
    width: 20%;
    height: 30px;
    background-color: #fff;
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
}

.datePickerHolder {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 15px;
}

.range-spend {
    width: 100%;
    text-align: center;
}

.chip-row-holder {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 15px;
}

.chip-row-holder .chip {
    padding: 10px;
    border-radius: 999px !important;
    position: initial !important;
    top: initial;
    margin-left: 15px;
    line-height: normal;
}

.selectedChip {
    background-color: #1498c4;
    color: #fff;
}

.unselectedChip {
    background-color: #fff;
    color: #1498c4;
}

.donut-holder {
    position: relative;
    overflow: visible !important;
    height: 70vh;
}

.donut-holder .center-text {
    position: absolute;
    z-index: 0;
    top: 170px;
    left: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
}

.donut-holder .vue-apexcharts {
    overflow: visible !important;
    height: 650px !important;
}

#donut-chart {
    height: 800px;
    overflow: scroll;
}
</style>
  
  