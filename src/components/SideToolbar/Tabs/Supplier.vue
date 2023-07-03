<template>
    <div style="width: 560px">
        <div>
            <div v-if="isLoading" style="margin-top: 15px; margin-bottom: 25px; width: 230px;">
                <SkeletonCard></SkeletonCard>
            </div>
            <div v-else-if="!isLoading && documentHasSupplier" style="margin-top: 15px; margin-bottom: 25px;"
                class="align-center">
                <span style="margin-bottom: 5px" class="text-lg">Supplier spend for</span>
                <br />
                <DropDownList style="margin-top: 5px; width: 230px;" :data-items="state.supplierList.value"
                    :text-field="'text'" :data-item-key="'id'"
                    :disabled="!documentHasSupplier || state.supplierList.value.length < 2"
                    v-model="state.selectedSupplier.value">
                </DropDownList>
            </div>
        </div>
        <!-- // Spend Value [ Yearly / Selected ]  -->
        <div>
            <div v-if="isLoading" style="margin-top: 20px; height: 94px; width: 230px;">
                <SkeletonCard></SkeletonCard>
            </div>

            <div v-else-if="!isLoading && documentHasSupplier"
                style="display: flex; flex-direction:row; justify-content: space-between;">
                <div>
                    <div class="spend-text">Yearly spend</div>
                    <div class="spend-amount">
                        <MoneyBox :Amount="chartTotal" />
                    </div>
                    <div class="d-flex justify-start">
                        <DateBox :Date="state.employeeChartStartDate.value" /> &nbsp; - &nbsp;
                        <DateBox :Date="state.employeeChartEndDate.value" />
                    </div>
                </div>

                <div>
                    <div>
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

        <div v-if="isLoading" class="lineAndAreaChart" style="height: 245px; padding: 10px;">
            <SkeletonCard></SkeletonCard>
        </div>
        <div v-if="!isLoading && documentHasSupplier" class="lineAndAreaChart" id="wrapper">
            <div id="chart-line">
                <apexchart type="line" height="230" :options="supplierLineChartOptions" :series="state.rangeSeries.value" />
            </div>
        </div>

        <div v-if="!documentHasSupplier && !isLoading" style="margin-top: 15px;">
            No supplier(s) found in {{ documentType }} item(s)
        </div>

        <div v-if="isLoading" style="margin-top: 20px; height: 94px; width: 100%;">
            <SkeletonCard></SkeletonCard>
        </div>

        <div v-if="!isLoading && documentHasSupplier" class="datePickerParent">
            <div class="spend-text text-center datePickerParent--heading">Selected range</div>
            <div class="datePickerHolder">
                <div>
                    <b>From:</b>
                    <DatePicker :style="{ width: '150px' }" :value="new Date(state.rangeStartDate.value)"
                        :format="'MM/dd/yyyy'" :default-Show="false" @change="onStartDateChange($event.target.value)"
                        class="datepicker-input1" />
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
</template>
  
<script setup lang="ts">
import { computed, inject, onMounted, reactive, ref, nextTick } from "vue";
import type { Ref } from "vue";
import { useEngage } from "../../../composables/engageComposable";
import { map, chain, sumBy } from "lodash";
import { DropDownList } from "@progress/kendo-vue-dropdowns";
import { DatePicker } from "@progress/kendo-vue-dateinputs";
import SkeletonCard from "../../Common/SkeletonCard.vue";
import type { ApexOptions } from "apexcharts";
import apexchart from "vue3-apexcharts";
import DateBox from "../../Common/DateBox.vue"
import MoneyBox from "../../Common/MoneyBox.vue";
import moment from "moment";
import { useNumberFormatter } from "../../../composables/NumberFormats";

const axios: any = inject("axios");
const documentId = inject("documentId");
const documentType = inject("documentType");
const locale: string = inject("locale", navigator.language);
const formatter = useNumberFormatter(locale);

// interfaces
interface IDropdownItem {
    id: number;
    text: string;
}
interface ISpendHistory {
    VendorName: string;
    TransactionAmount: number;
    TransactionDate: Date;
}
interface IState {
    supplierSpendHistory: Ref<ISpendHistory[]>;
    supplierList: Ref<IDropdownItem[]>;
    selectedSupplier: Ref<IDropdownItem>;

    employeeChartStartDate: Ref<Date>;
    employeeChartEndDate: Ref<Date>;
    employeeSelectedChartStartDate: Ref<Date>;
    employeeSelectedChartEndDate: Ref<Date>;

    rangeStartDate: Ref<Date>;
    rangeEndDate: Ref<Date>;
    rangeSeries: Ref<any>;
    rangeSpend: Ref<number>;

    internalSum: Ref<number>;
    isLoading: Ref<boolean>;
}

// reactive state
const state: IState = {
    supplierSpendHistory: ref([]),
    supplierList: ref([]),
    selectedSupplier: ref({ id: 0, text: "" }),

    employeeChartStartDate: ref(new Date()),
    employeeChartEndDate: ref(new Date()),
    employeeSelectedChartStartDate: ref(new Date()),
    employeeSelectedChartEndDate: ref(new Date()),

    rangeStartDate: ref(new Date()),
    rangeEndDate: ref(new Date()),
    rangeSeries: ref([]),
    rangeSpend: ref(0),

    internalSum: ref(0),
    isLoading: ref(true),
};

const isLoading = ref(true);


const fetchDummyData = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const json = await response.json();

        state.supplierSpendHistory.value = [
  {
    "VendorName": "A. Datum Corporation",
    "TransactionDate": new Date("2022-07-01"),
    "TransactionAmount": 1641.21
  },
  {
    "VendorName": "A. Datum Corporation",
    "TransactionDate": new Date("2022-07-02"),
    "TransactionAmount": 143.13
  },
  {
    "VendorName": "A. Datum Corporation",
    "TransactionDate": new Date("2022-07-05"),
    "TransactionAmount": 44.04
  },
  {
    "VendorName": "A. Datum Corporation",
    "TransactionDate": new Date("2022-07-08"),
    "TransactionAmount": 104
  },
  {
    "VendorName": "A. Datum Corporation",
    "TransactionDate": new Date("2022-08-08"),
    "TransactionAmount": 220.2
  },
  {
    "VendorName": "A. Datum Corporation",
    "TransactionDate": new Date("2022-08-11"),
    "TransactionAmount": 11.01
  },
  {
    "VendorName": "A. Datum Corporation",
    "TransactionDate": new Date("2022-08-16"),
    "TransactionAmount": 11.01
  },
  {
    "VendorName": "A. Datum Corporation",
    "TransactionDate": new Date("2022-08-17"),
    "TransactionAmount": 1101
  },
  {
    "VendorName": "A. Datum Corporation",
    "TransactionDate": new Date("2022-08-18"),
    "TransactionAmount": 3303
  },
  {
    "VendorName": "A. Datum Corporation",
    "TransactionDate": new Date("2022-08-22"),
    "TransactionAmount": 3963.6
  },
  {
    "VendorName": "A. Datum Corporation",
    "TransactionDate": new Date("2022-08-23"),
    "TransactionAmount": 5327.85
  },
  {
    "VendorName": "A. Datum Corporation",
    "TransactionDate": new Date("2022-08-29"),
    "TransactionAmount": 5284.8
  },
  {
    "VendorName": "A. Datum Corporation",
    "TransactionDate": new Date("2022-08-30"),
    "TransactionAmount": 303.69
  },
  {
    "VendorName": "A. Datum Corporation",
    "TransactionDate": new Date("2022-08-31"),
    "TransactionAmount": 3357.36
  },
  {
    "VendorName": "A. Datum Corporation",
    "TransactionDate": new Date("2022-09-01"),
    "TransactionAmount": 11.01
  },
  {
    "VendorName": "A. Datum Corporation",
    "TransactionDate": new Date("2022-09-02"),
    "TransactionAmount": 220.2
  },
  {
    "VendorName": "A. Datum Corporation",
    "TransactionDate": new Date("2022-09-07"),
    "TransactionAmount": 170.1
  },
  {
    "VendorName": "A. Datum Corporation",
    "TransactionDate": new Date("2022-09-08"),
    "TransactionAmount": 140
  },
  {
    "VendorName": "A. Datum Corporation",
    "TransactionDate": new Date("2022-09-09"),
    "TransactionAmount": 11.01
  },
  {
    "VendorName": "A. Datum Corporation",
    "TransactionDate": new Date("2022-09-12"),
    "TransactionAmount": 2339.42
  },
  {
    "VendorName": "A. Datum Corporation",
    "TransactionDate": new Date("2022-09-13"),
    "TransactionAmount": 3786.24
  },
  {
    "VendorName": "A. Datum Corporation",
    "TransactionDate": new Date("2022-09-15"),
    "TransactionAmount": 915.15
  },
  {
    "VendorName": "A. Datum Corporation",
    "TransactionDate": new Date("2023-02-03"),
    "TransactionAmount": 20
  },
  {
    "VendorName": "A. Datum Corporation",
    "TransactionDate": new Date("2023-03-07"),
    "TransactionAmount": 10
  },
  {
    "VendorName": "A. Datum Corporation",
    "TransactionDate": new Date("2023-03-14"),
    "TransactionAmount": 40
  },
  {
    "VendorName": "A. Datum Corporation",
    "TransactionDate": new Date("2023-03-15"),
    "TransactionAmount": 18
  },
  {
    "VendorName": "A. Datum Corporation",
    "TransactionDate": new Date("2023-03-16"),
    "TransactionAmount": 9
  },
  {
    "VendorName": "A. Datum Corporation",
    "TransactionDate": new Date("2023-03-17"),
    "TransactionAmount": 415.85
  },
  {
    "VendorName": "A. Datum Corporation",
    "TransactionDate": new Date("2023-04-12"),
    "TransactionAmount": 0
  },
  {
    "VendorName": "A. Datum Corporation",
    "TransactionDate": new Date("2023-04-14"),
    "TransactionAmount": 6
  },
  {
    "VendorName": "A. Datum Corporation",
    "TransactionDate": new Date("2023-04-21"),
    "TransactionAmount": 10
  },
  {
    "VendorName": "A. Datum Corporation",
    "TransactionDate": new Date("2023-06-29"),
    "TransactionAmount": 158.25
  },
  {
    "VendorName": "A. Datum Corporation",
    "TransactionDate": new Date("2023-06-29"),
    "TransactionAmount": 316.5
  }
]



        for (const item of state.supplierSpendHistory.value) {
            if (moment(state.employeeChartStartDate.value).isAfter(item.TransactionDate)) {
                state.employeeChartStartDate.value = item.TransactionDate;
            } else if (moment(state.employeeChartEndDate.value).isBefore(item.TransactionDate)) {
                state.employeeChartEndDate.value = item.TransactionDate;
            }
        }

        state.supplierList.value = chain(state.supplierSpendHistory.value)
            .uniqBy((supplier) => supplier.VendorName)
            .map((supplier, index) => {
                return { id: index, text: supplier.VendorName };
            })
            .value();

        state.selectedSupplier.value = state.supplierList.value[0];
    } catch (error) {
        console.log(error);
    }
}

//   const fetchSuppliersSpendHistories = async () => {
//   try {
//     const response = await axios.get("/Supplier/GetSupplierOverview", {
//       params: { documentId: documentId, documentType: documentType },
//     });

//     state.supplierSpendHistory.value = response.data;

//     for (const item of state.supplierSpendHistory.value) {
//       if (moment(state.employeeChartStartDate.value).isAfter(item.TransactionDate)) {
//         state.employeeChartStartDate.value = item.TransactionDate;
//       } else if (moment(state.employeeChartEndDate.value).isBefore(item.TransactionDate)) {
//         state.employeeChartEndDate.value = item.TransactionDate;
//       }
//     }

//     state.supplierList.value = chain(response.data)
//       .uniqBy((supplier) => supplier.VendorName)
//       .map((supplier, index) => {
//         return { id: index, text: supplier.VendorName };
//       })
//       .value();

//     state.selectedSupplier.value = state.supplierList.value[0];
//     state.isLoading.value = false;
//   } catch (error) {
//     console.log("caught an error", error);
//   }
// };


const chartSeriesAsObject = () => {
    // unpack the data from the chart selectedSupplierSeries array
    if (!selectedSupplierSeries.value) {
        return [];
    }
    const seriesData = selectedSupplierSeries.value[0].data;
    // map the multidimensional array to a list of objects
    return seriesData.map((item) => {
        return {
            date: item[0],
            amount: item[1],
        };
    });
};

const supplierLineChartOptions: ApexOptions = reactive({
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


const documentHasSupplier = computed(() => {
    return state.supplierList.value.length > 0;
});

const selectedSupplierSeries = computed(() => {
    const filteredSuppliers = state.supplierSpendHistory.value.filter(
        (supplier) => supplier.VendorName === state.selectedSupplier.value.text
    );
    const chartSeries = filteredSuppliers.map((item) => {
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
    const filteredSpendHistory = state.supplierSpendHistory.value.filter((item) => {
        const transactionDate = moment(item.TransactionDate).startOf('day');
        return transactionDate.isBetween(startDate, endDate, null, '[]');
    });

    // Extract the necessary data for the graph
    const graphData = filteredSpendHistory.map((item) => ([
        item.TransactionDate,
        item.TransactionAmount,
    ]));
    // Update the chart series
    state.rangeSeries.value = [{ data: graphData }];

    // calculate range spend amount
    const rangeSpendAmount = sumBy(filteredSpendHistory, "TransactionAmount");
    state.rangeSpend.value = rangeSpendAmount;
};

const initialchartSeries = () => {
    var today = new Date();
    var thirtyDaysAgo = new Date(today);
    thirtyDaysAgo.setDate(today.getDate() - 30);

    const start = thirtyDaysAgo;
    const end = state.rangeEndDate.value;
    state.rangeStartDate.value = start;
    updateChartHandler(start, end);
}


const makeDatePickerInputReadOnly = () => {
    const input1 = document.querySelector(".datepicker-input1 .k-dateinput input")
    const input2 = document.querySelector(".datepicker-input2 .k-dateinput input")
    if (!input1 || !input2) return
    input1.setAttribute("readonly", "true");
    input1.setAttribute("disabled", "true");
    input2.setAttribute("readonly", "true");
    input2.setAttribute("disabled", "true");
};

onMounted(async () => {
    isLoading.value = true;
    await fetchDummyData();
    // await fetchSuppliersSpendHistories();
    isLoading.value = false;
    // set range dates same as chart dates
    initialchartSeries();
    // set datepicker input to readonly
    nextTick(() => {
        makeDatePickerInputReadOnly();
    });
});

</script>
  
<style scoped>
.lineAndAreaChart {
    margin-top: 25px;
    flex-direction: row;
    border: 1px solid lightgrey;
    border-radius: 5px;
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

.card-title {
    color: #333333 !important;
}

.card-subAmount {
    font-size: 24px;
    color: #333333 !important;
}

.card-amount {
    font-size: 38px;
    color: #333333 !important;
}

.datePickerParent {
    margin-top: 40px;
    @apply relative z-0
}

.datePickerParent--heading::before {
    content: '';
    width: 70%;
    height: 30px;
    border: 1px solid #ccc;
    border-bottom: transparent;
    position: absolute;
    z-index: -1;
    left: 0;
    right: 0;
    margin: 0 auto;
    top: 0.7rem;
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
</style>