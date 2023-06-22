<template>
    <Loader v-if="loading" />
    <div id="workcenter">
        <div class="flex flex-row items-center justify-between pb-5">
            <h2 class="text-[32px] font-light">{{ props.title }}</h2>
            <div v-if="props.toolbar" class="flex flex-row text-teal">
                <div
                    class="flex flex-row items-center ml-[40px] text-[16px] cursor-pointer">
                    <Icon :icon="plusIcon" class="mr-[8px]" />
                    New
                </div>

                <div
                    class="flex flex-row items-center ml-[40px] text-[16px] cursor-pointer">
                    <Icon :icon="filterIcon" class="mr-[8px]" />
                    <ColumnFilterButton :invoiceColumns="invoiceColumns" />
                </div>

                <div
                    class="flex flex-row items-center ml-[40px] text-[16px] cursor-pointer">
                    <Icon :icon="customizeIcon" class="mr-[8px]" />
                    <ColumnHideButton :invoiceColumns="invoiceColumns" />
                </div>

                <div class="flex flex-row items-center ml-[40px] text-[16px] cursor-pointer"
                    @click="exportExcel">
                    <Icon :icon="exportIcon" class="mr-[8px]" />
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
import Icon from '../Utility/Icon.vue';

const props = defineProps({
    title: {
        type: String
    },
    toolbar: {
        type: Boolean,
        default: true
    }
});

const plusIcon = '<svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M20.0457 10.5C20.0457 15.7468 15.7823 20 10.5229 20C5.26347 20 1 15.7468 1 10.5C1 5.25323 5.26347 1 10.5229 1C15.7823 1 20.0457 5.25323 20.0457 10.5Z" stroke="#008897"/><path d="M10.5418 14.818V6.18164" stroke="#008897" stroke-linecap="round"/><path d="M6.19531 10.5204H14.8525" stroke="#008897" stroke-linecap="round"/></svg>';
const filterIcon = '<svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.66602 2.33325H21.3327" stroke="#008897" stroke-miterlimit="10"/><path d="M0 2.33325H2.66667" stroke="#008897" stroke-miterlimit="10"/><path d="M18.666 9H21.3327" stroke="#008897" stroke-miterlimit="10"/><path d="M0 9H14.6667" stroke="#008897" stroke-miterlimit="10"/><path d="M10.666 15.6667H21.3327" stroke="#008897" stroke-miterlimit="10"/><path d="M0 15.6667H6.66667" stroke="#008897" stroke-miterlimit="10"/><path d="M4.66602 4.33325C5.77059 4.33325 6.66602 3.43782 6.66602 2.33325C6.66602 1.22868 5.77059 0.333252 4.66602 0.333252C3.56145 0.333252 2.66602 1.22868 2.66602 2.33325C2.66602 3.43782 3.56145 4.33325 4.66602 4.33325Z" stroke="#008897" stroke-miterlimit="10"/><path d="M16.666 11C17.7706 11 18.666 10.1046 18.666 9C18.666 7.89543 17.7706 7 16.666 7C15.5614 7 14.666 7.89543 14.666 9C14.666 10.1046 15.5614 11 16.666 11Z" stroke="#008897" stroke-miterlimit="10"/><path d="M8.66602 17.6667C9.77059 17.6667 10.666 16.7713 10.666 15.6667C10.666 14.5622 9.77059 13.6667 8.66602 13.6667C7.56145 13.6667 6.66602 14.5622 6.66602 15.6667C6.66602 16.7713 7.56145 17.6667 8.66602 17.6667Z" stroke="#008897" stroke-miterlimit="10"/></svg>';
const customizeIcon = '<svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 15.2222V1" stroke="#008897" stroke-linecap="round" stroke-linejoin="round"/><path d="M6.14258 15.2222V1" stroke="#008897" stroke-linecap="round" stroke-linejoin="round"/><path d="M11.1426 15.2222V1" stroke="#008897" stroke-linecap="round" stroke-linejoin="round"/><path d="M16.1426 15.2222V1" stroke="#008897" stroke-linecap="round" stroke-linejoin="round"/></svg>';
const exportIcon = '<svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg"><g style="mix-blend-mode:multiply"><path d="M18.6712 13.325C18.4282 13.325 18.2257 13.5217 18.2257 13.7647V17.1205H0.885319V13.7647C0.885319 13.5217 0.688598 13.325 0.445589 13.325C0.202581 13.325 0.00585938 13.5217 0.00585938 13.7647V17.5603C0.00585938 17.676 0.0521467 17.7917 0.13315 17.8727C0.214153 17.9537 0.329871 18 0.445589 18H18.6712C18.787 18 18.8969 17.9537 18.9837 17.8727C19.0647 17.7859 19.111 17.676 19.111 17.5603V13.7647C19.111 13.5217 18.9142 13.325 18.6712 13.325ZM9.24597 14.0771C9.32698 14.1581 9.4427 14.2044 9.55841 14.2044C9.67413 14.2044 9.78985 14.1581 9.87085 14.0771L15.2402 8.70781C15.4138 8.53423 15.4138 8.25651 15.2402 8.08293C15.0666 7.90935 14.7889 7.90935 14.6153 8.08293L9.99814 12.7001V0.43973C9.99814 0.196721 9.80142 0 9.55841 0C9.31541 0 9.1129 0.196721 9.1129 0.43973V12.6943L4.49573 8.07715C4.32216 7.90357 4.04443 7.90357 3.87085 8.07715C3.69728 8.25072 3.69728 8.52845 3.87085 8.70202L9.24019 14.0714L9.24597 14.0771Z" fill="#008897"/></g></svg>';

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
