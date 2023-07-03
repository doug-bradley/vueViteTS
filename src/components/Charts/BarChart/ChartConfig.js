
const barColors = ["#83D3EA", "#3E8C95", "#E9E9E9"];

export default {
    options: {
        chart: {
            type: 'bar',
            height: 125,
            stacked: true,
            toolbar: { show: false },
        },
        colors: barColors,
        plotOptions: {
            bar: {
                horizontal: true,
                startingShape: 'flat',
                endingShape: 'flat',
                borderRadius: 0,
                columnWidth: '10%',
                barHeight: '30%',
                distributed: false,
                rangeBarOverlap: true,
                rangeBarGroupRows: false,
            },
        },
        stroke: {
            width: 1, colors: ['#fff']
        },
        title: {
            text: ''
        },
        xaxis: {
            type: 'numeric',
            tickAmount: 400,
            labels: {
                formatter: function () {
                    return '';
                }
            },
            axisBorder: {
                show: false
            },
            axisTicks: {
                show: false,
            },
        },
        yaxis: {
            show: false,
            title: {
                text: undefined
            },
            axisBorder: {
                show: false
            },
            axisTicks: {
                show: false,
            },
        },
        tooltip: {
            enabled: true,
            fillSeriesColor: true,
            style: {
                fontSize: '14px',
                fontFamily: 'Open Sans',
            },
        },
        fill: {
            opacity: 1
        },
        legend: {
            position: 'bottom',
            horizontalAlign: 'center',
            offsetX: 40
        },
        grid: {
            show: false,
            borderColor: '#90A4AE',
            strokeDashArray: 0,
            position: 'back',
            xaxis: {
                lines: {
                    show: true
                }
            },
            yaxis: {
                lines: {
                    show: false
                }
            },
            row: {
                colors: undefined, //["#545454"],
                opacity: 0.5
            },
            column: {
                colors: undefined,
                opacity: 0.5
            },
            padding: {
                top: 0,
                right: 30,
                bottom: 0,
                left: 0
            },
        },
        dataLabels: {
            enabled: true,
            offsetX: 0,
            offsetY: -20,
            style: {
                colors: ["#545454"]
            },
            formatter: (value) => {
                var outputValue = value;
                if (outputValue > 1000) {
                    const fixedDigits = (outputValue % 1000) === 0 ? 0 : 1;
                    outputValue = outputValue / 1000;
                    outputValue = outputValue.toFixed(fixedDigits) + "K";
                }
                return '';

            }
        }
    },

}
