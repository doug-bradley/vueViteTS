<template>
    <div style="diplay: flex; flex-direction: row" id="wrapper">
        <div id="chart-line">
            <apexchart type="line" height="230" :options="supplierLineChartOptions" :series="selectedSupplierSeries" />
        </div>
        <div id="chart-area">
            <apexchart type="area" height="130" :options="supplierAreaChartOptions" :series="selectedSupplierSeries" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';


const supplierLineChartOptions = reactive({
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
        curve: 'smooth',
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
        title: { text: "Supplier spend" },
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
            }
        }
    },
    tooltip: {
        enabled: true,
        // custom: ({ seriesIndex, dataPointIndex, w }) => {
        //     var amount = w.globals.initialSeries[seriesIndex].data[dataPointIndex];

        //     var seriesName = "Spend";

        //     const currency = amount[1];

        //     return `<div class="outlined my-4 mx-4">${seriesName}: <strong>${currency}</strong></div>`;
        // }
    }

});

const supplierAreaChartOptions = {
    chart: {
        id: "chart1",
        height: 130,
        type: "area",
        brush: {
            target: "chart2",
            enabled: true,
        },
        selection: {
            enabled: true,
            xaxis: {
                // min: new Date(2022, 6, 1).getTime(),
                // max: new Date(2022, 7, 11).getTime(),
            },
        },
        events: {
            // brushScrolled: (chartContext, { xaxis, }) => {
            //     state.internalSum = sumOfRange(xaxis.min, xaxis.max);
            //     if(supplierLineChartOptions.xaxis){
            //         supplierLineChartOptions.xaxis.min = xaxis.min;
            //         supplierLineChartOptions.xaxis.max = xaxis.max;
            //     }
            //     console.log("internalSum", state.internalSum);
            // }
        },
    },
    stroke: {
        curve: 'smooth',
    },
    colors: ["#008FFB"],
    fill: {
        type: "gradient",
        gradient: {
            opacityFrom: 0.91,
            opacityTo: 0.1,
        },
    },
    xaxis: {
        type: "datetime",
        tooltip: {
            enabled: false,
        },
    },
    yaxis: {
        tickAmount: 2,
        show: true,
        showAlways: true,
        showForNullSeries: true,
        forceNiceScale: true,
        floating: false,
        decimalsInFloat: 0,
        labels: {
            formatter: (value: any) => {
                return value.toString();
            }
        }
    },
};

const selectedSupplierSeries = [{
    "data": [
        [
            "2022-02-11",
            213.2
        ],
        [
            "2022-03-04",
            110.1
        ],
        [
            "2022-03-15",
            11633.4
        ],
        [
            "2022-03-16",
            1554.05
        ],
        [
            "2022-03-21",
            10398.96
        ],
        [
            "2022-03-24",
            2088.9
        ],
        [
            "2022-03-29",
            633
        ],
        [
            "2022-03-29",
            653.42
        ],
        [
            "2022-05-11",
            10.4
        ],
        [
            "2022-06-02",
            10.4
        ],
        [
            "2022-09-26",
            31.2
        ],
        [
            "2022-09-27",
            3299.75
        ],
        [
            "2022-09-28",
            62.4
        ],
        [
            "2022-10-31",
            1099.899
        ],
        [
            "2022-12-22",
            1070.09
        ],
        [
            "2023-01-18",
            110.1
        ],
        [
            "2023-02-09",
            23.21
        ]
    ]
}];

</script>
