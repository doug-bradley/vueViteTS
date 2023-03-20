<template>
    <div class="card">
        <div class="ma-2">
            <Grid style="width: 1300px" :data-items="invoiceGrid" :columns="invoiceColumns" :skip="skip" :take="take"
                :total="count" :pageable="pageableOptions" @pagechange="pageChangeHandler" :sortable="sortable" :sort="sort"
                @sortchange="sortChangeHandler" :resizable="true" :reorderable="true" @columnreorder="columnReorder"
                :loader="loader">
                <GridToolbar class="d-flex justify-end">
                    <Button :icon="'plus-outline'">New {{ workcenterName }}</Button>
                    <ColumnFilterButton :invoiceColumns="invoiceColumns" />
                    <ColumnHideButton :invoiceColumns="invoiceColumns" />
                    <Button @click="exportExcel" :icon="'download'">Export</Button>
                </GridToolbar>

                <template v-slot:dateTemplate="{ props, listeners }">
                    <td>
                    <td>{{ dateFormatter.format(props.dataItem[props.field]) }}</td>
                    </td>
                </template>
            </Grid>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { Grid, GridColumnProps, GridToolbar } from '@progress/kendo-vue-grid';
import ColumnHideButton from './Grid/ColumnHideButton.vue';
import ColumnFilterButton from './Grid/ColumnFilterButton.vue';

import { saveExcel } from '@progress/kendo-vue-excel-export';
import { Button } from '@progress/kendo-vue-buttons';
import { orderBy } from '@progress/kendo-data-query';
import { slice } from 'lodash';

// composables
import { useDateFormatter } from '../composables/DateComposable';
import { useEngage } from '../composables/engageComposable';
import { useGridOptions } from './Grid/GridOptions';

import { Invoice } from '../models/data-contracts';

const authToken = 'YWEyYmIyYjAtNTI5NS00OWYxLWIxZDctMGE0OTRiZDM0NGQ40.XlnsraWiOQEljxwsVyI5M9f4TsM4qFJ60BYCG_ljCwV_Do5rwJFDTDE9F5JxSr29jUy4JmB-rM2pbCIGRi-9BbtcO2AUJZelB2GLcX1QxBWzjxCudqiQ_sEtGs490mQzN3FERm8-zv0dnCdrthanDJb_aq1gu-T-TVbF2DUbsync9ge0qdcCyqYr4qVz7pGPcFIulXno_L90lzTuy6oaMavRFbDLz6DVGHTyY9vNHDE1'
const workcenterName = 'Invoice';

const dateFormatter = useDateFormatter('en-US');

const odataURl = '$count=true&$select=InvoiceID,InvoiceRef,InvoiceDate,PostingDate,CurrentStateName&$expand=Supplier($select=Name),Employee($select=FirstName,LastName)';

const invoiceColumns = ref<GridColumnProps[]>([
    { field: 'InvoiceID', type: 'number', title: 'Invoice #', width: '100px', hidden: false },

    { field: 'InvoiceRef', type: 'string', title: 'Title', width: '200px', hidden: false },
    { field: 'Supplier.Name', type: 'string', title: 'Vendor', width: '150px', hidden: false },

    { field: 'InvoiceDate', type: 'date', title: 'Invoice date', width: '125px', cell: 'dateTemplate', hidden: false },
    { field: 'PostingDate', type: 'date', title: 'Posted date', width: '125px', cell: 'dateTemplate', hidden: false },

    // { field: 'Approvers', type: 'string', title: 'Current approver', width: '150px', hidden: false },
    // { field: 'ApprovalGroups', type: 'string', title: 'Approval group', width: '200px', hidden: false },

    { field: 'Employee.FirstName', type: 'string', title: 'Financial assistant', width: '150px', hidden: false },

    { field: 'CurrentStateName', type: 'string', title: 'Status', width: '100px', hidden: false },
    { field: 'TotalCostDisplay', type: 'string', title: 'Total', width: '100px', hidden: false }
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

// hide the scrollbars
:deep(.k-grid-content.k-virtual-content::-webkit-scrollbar) {
    width: 0 !important;
}

// remove header lines
:deep(.k-table-th) {
    border: 0px solid rgb(105, 7, 225);
    background-color: transparent;
}

// prevent wrapping of text in cells
:deep(.k-grid td) {
    white-space: nowrap;
    text-overflow: ellipsis;
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
    background-color: #EDEDED !important;
}





:deep(.k-table-row) {
    border-bottom: #008897;
}

// .k-grid {
//     // background-color: white;
//     border: 0px transparent rgb(225, 141, 7);
//     border-radius: 5px;
//     box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
//     font-family: 'Open Sans', sans-serif;
//     font-size: 14px;
//     line-height: 1.42857143;
//     padding: 20px;
//     // width: 100%;
//     // height: 100%;
// }

// :deep(.k-table-alt-row:hover) {
//     background-color: #656161;
// }
</style>
