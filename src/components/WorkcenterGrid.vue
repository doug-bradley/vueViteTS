<template>
    <Loader v-if="loading" />
    <div id="workcenter">
        <div class="flex flex-row items-center justify-between py-5">
            <h2 class="text-[32px] font-light">{{ props.title }}</h2>
            <div v-if="props.toolbar" class="flex flex-row text-teal">
                <div
                    class="flex flex-row items-center ml-[40px] text-[16px] cursor-pointer transition-colors hover:text-blue-400">
                    <!-- <span class="k-icon k-i-plus-outline mr-[8px]"></span> -->
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6 mr-[8px]">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    New
                </div>
                <div
                    class="flex flex-row items-center ml-[40px] text-[16px] cursor-pointer transition-colors hover:text-blue-400">
                    <!-- <span class="k-icon k-i-filter mr-[8px]"></span> -->
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6 mr-[8px]">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
                    </svg>

                    <ColumnFilterButton :invoiceColumns="invoiceColumns" />
                </div>
                <div
                    class="flex flex-row items-center ml-[40px] text-[16px] cursor-pointer transition-colors hover:text-blue-400">
                    <!-- <span class="k-icon k-i-cog mr-[8px]"></span> -->
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6 mr-[8px]">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                    <ColumnHideButton :invoiceColumns="invoiceColumns" />
                </div>
                <div class="flex flex-row items-center ml-[40px] text-[16px] cursor-pointer transition-colors hover:text-blue-400"
                    @click="exportExcel">
                    <!-- <span class="k-icon k-i-download mr-[8px]"></span> -->
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6 mr-[8px]">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                    </svg>

                    Export
                </div>
            </div>
        </div>

        <div class="card">
            <div class="ma-2">
                <Grid :data-items="invoiceGrid" :columns="invoiceColumns" :skip="skip" :take="take" :total="count"
                    :pageable="pageableOptions" @pagechange="pageChangeHandler" :sortable="sortable" :sort="sort"
                    @sortchange="sortChangeHandler" :resizable="true" :reorderable="true" @columnreorder="columnReorder"
                    :loader="loader" class="rounded-md">
                    <template v-slot:dateTemplate="{ props, listeners }">
                        <td>{{ dateFormatter.format(props.dataItem[props.field]) }}</td>
                    </template>

                    <template v-slot:titleTemplate="{ props, listeners }">
                        <td>
                            <span class="text-teal font-semibold">{{ props.dataItem[props.field] }}</span>
                        </td>
                    </template>

                    <template v-slot:statusTemplate="{ props, listeners }">
                        <td>
                            <span :class="
                                props.dataItem[props.field] === 'Cost allocation approval' ? 'text-pink-500'
                                    : props.dataItem[props.field] === 'Create' ? 'text-blue-500'
                                        : props.dataItem[props.field] === 'Closing' ? 'text-orange-500'
                                            : props.dataItem[props.field] === 'Closed' ? 'text-red-500'
                                                : props.dataItem[props.field] === 'Approval' ? 'text-green-500'
                                                    : ''
                            ">
                                {{ props.dataItem[props.field] }}
                            </span>
                            <!-- Cost allocation Approval - pink
                                Create - blue
                                Closing - orange
                                Closed - red
                                Approval - green -->
                        </td>
                    </template>

                    <template v-slot:attachmentTemplate="{ props, listeners }">
                        <td>
                            <a href="#" class="text-blue-500">{{ Math.floor(Math.random() * (3 - 1 + 1) + 1) }}</a>
                        </td>
                    </template>

                    <template v-slot:actionTemplate="{ props, listeners }">
                        <td>
                            <RowEditButton :invoiceColumns="invoiceColumns" />
                        </td>
                    </template>
                </Grid>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { Grid, GridColumnProps, GridToolbar } from '@progress/kendo-vue-grid';
import ColumnHideButton from './Grid/ColumnHideButton.vue';
import ColumnFilterButton from './Grid/ColumnFilterButton.vue';
import RowEditButton from './Grid/RowEditButton.vue';

import { saveExcel } from '@progress/kendo-vue-excel-export';
import { Button } from '@progress/kendo-vue-buttons';
import { orderBy } from '@progress/kendo-data-query';
import { slice } from 'lodash';

// icons from heroIcons, copy svg and use in dom or as needed (https://heroicons.com/)

// composables
import { useDateFormatter } from '../composables/DateComposable';
import { useEngage } from '../composables/engageComposable';
import { useGridOptions } from './Grid/GridOptions';

import { Invoice } from '../models/data-contracts';
import Loader from '../Utility/Loader.vue';

const props = defineProps({
    title: {
        type: String
    },
    toolbar: {
        type: Boolean,
        default: true
    }
});

const authToken = 'YWEyYmIyYjAtNTI5NS00OWYxLWIxZDctMGE0OTRiZDM0NGQ40.XlnsraWiOQEljxwsVyI5M9f4TsM4qFJ60BYCG_ljCwV_Do5rwJFDTDE9F5JxSr29jUy4JmB-rM2pbCIGRi-9BbtcO2AUJZelB2GLcX1QxBWzjxCudqiQ_sEtGs490mQzN3FERm8-zv0dnCdrthanDJb_aq1gu-T-TVbF2DUbsync9ge0qdcCyqYr4qVz7pGPcFIulXno_L90lzTuy6oaMavRFbDLz6DVGHTyY9vNHDE1'
const workcenterName = 'Invoice';

const dateFormatter = useDateFormatter('en-US');

const odataURl = '$count=true&$select=InvoiceID,InvoiceRef,InvoiceDate,PostingDate,CurrentStateName&$expand=Supplier($select=Name),Employee($select=FirstName,LastName)';

const invoiceColumns = ref<GridColumnProps[]>([
    { field: 'InvoiceID', type: 'number', title: 'Invoice #', hidden: false },

    { field: 'InvoiceRef', type: 'string', title: 'Title', cell: 'titleTemplate', hidden: false },
    { field: 'CurrentStateName', type: 'string', title: 'Status', cell: 'statusTemplate', hidden: false },

    { field: 'InvoiceDate', type: 'date', title: 'Invoice date', cell: 'dateTemplate', hidden: false },
    { field: 'PostingDate', type: 'date', title: 'Posted date', cell: 'dateTemplate', hidden: false },

    { field: 'Supplier.Name', type: 'string', title: 'Vendor', hidden: false },

    // { field: 'Approvers', type: 'string', title: 'Current approver', width: '150px', hidden: false },
    // { field: 'ApprovalGroups', type: 'string', title: 'Approval group', width: '200px', hidden: false },

    { field: 'Employee.FirstName', type: 'string', title: 'Financial assistant', hidden: false },
    { field: 'TotalCostDisplay', type: 'string', title: 'Total', hidden: false },

    { field: 'Attachments', type: 'string', title: 'Attachments', cell: 'attachmentTemplate', hidden: false },
    { field: 'Action', type: 'string', title: 'Action', cell: 'actionTemplate', hidden: false }
]);

const { loader,
    skip,
    take,
    pageableOptions,
    pageChangeHandler,
    sortable,
    sortChangeHandler,
    sort,
    columnReorder } = useGridOptions(invoiceColumns);


const { data, error, loading, count } = useEngage<Invoice>(ref(`/api/Invoices?${odataURl}`), authToken);

const invoiceGrid = computed(() => {
    return slice(orderBy(data.value, sort.value), skip.value, take.value + skip.value);
});
const exportExcel = () => {
    saveExcel({
        data: invoiceGrid.value,
        fileName: "Invoices.xlsx",
        columns: invoiceColumns.value
    });
}
</script>

<style scoped lang="scss">
$linkcolour: #008897;

// set the button styles
:deep(.k-button) {
    color: $linkcolour;
    background-color: transparent;
    border-width: 0;
}


:deep(.k-button:hover) {
    color: darken($linkcolour, 5%);
    background-color: lighten($linkcolour, 60%);
    transition: 0.7s;
}

// set grid table to 100% width
:deep(.k-grid-header-wrap table),
:deep(.k-grid-table-wrap table) {
    width: 100% !important;
}

// hide the scrollbars
:deep(.k-grid-content.k-virtual-content::-webkit-scrollbar) {
    width: 0 !important;
}

:deep(.k-table-md) {
    font-size: 13px;
}

// remove header lines
:deep(.k-table-th) {
    border: 0px solid rgb(105, 7, 225);
    background-color: transparent;
}

// set entire grid default text color
:deep(.k-grid-header) {
    color: #545454 !important;
}

// prevent wrapping of text in cells
:deep(.k-grid td) {
    white-space: nowrap;
    text-overflow: ellipsis;
    padding: 16px;
}

// remove table cell divider lines
:deep(.k-table-td) {
    border: none;
}

// remove altenating row colors
:deep(.k-table-alt-row) {
    background: transparent !important;
}

// force hover color on all rows
:deep(.k-grid .k-table-tbody > .k-table-alt-row:not(.k-detail-row):hover, .k-grid .k-table-tbody > .k-table-alt-row:not(.k-detail-row).k-hover) {
    background-color: #FAFAFA !important;
}

:deep(.k-grid-table-wrap .k-table-row) {
    outline: 1px solid #eee;
    color: #333;
}

/* Custom styles for the pager */
:deep(.k-pager) {
    padding-block: 22px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    color: #333;
}

:deep(.k-pager > .k-pager-numbers-wrap) {
    margin: 0 4px;
    padding: 4px 8px;
    order: 2;
}

:deep(.k-pager > .k-pager-numbers-wrap .k-pager-numbers-wrap) {
    margin: 0 27px
}

:deep(.k-pager-numbers-wrap > .k-pager-numbers .k-button) {
    padding: 13px 16px;
    color: $linkcolour;
}

:deep(.k-pager-numbers-wrap > .k-pager-numbers .k-button.k-selected) {
    outline: 1px solid $linkcolour !important;
    border-radius: 3px;
}

:deep(.k-pager-nav:not(.k-pager-first):not(.k-pager-last)) {
    outline: 1px solid $linkcolour !important;
    padding: 13px;
    border-radius: 3px;
    color: $linkcolour;
}

:deep(.k-pager-info) {
    flex: 0;
}

:deep(.k-pager-sizes) {
    display: flex;
    flex-direction: row-reverse;
    gap: 16px;
}

:deep(.k-pager-sizes .k-dropdownlist) {
    padding: 7px;
    background-color: transparent;
    background-image: none;
    color: $linkcolour;
}

:deep(.k-pager-sizes .k-input-inner) {
    min-width: 33px;
}</style>
