<template>
    <Card>
        <Grid class="pa-12" 
            :data-items="result" 
            :columns="computedColumns" 
            :skip="skip" 
            :take="take" 
            :total="total"

            :pageable="pageableOptions" 
            @pagechange="pageChangeHandler" 

            :sortable="sortable" 
            :sort="sort"
            @sortchange="sortChangeHandler" 

            :resizable="true" 

            :reorderable="true" 

            @columnreorder="columnReorder"

            :loader="loader"
            >

            <GridToolbar class="d-flex justify-end">

                <span class="export-buttons">

                    <!-- // filter -->
                    <Button fill-mode="'clear'">
                        <div class="d-flex align-center pr-4">
                            <SvgIcon :icon="filterIcon" :theme-color="'primary'" />
                            <p class="header-link">Filter</p>
                        </div>
                    </Button>

                    <!-- // customize -->
                    <!-- <Button fill-mode="'clear'">
                        <div class="d-flex align-center pr-4">
                            <SvgIcon :icon="columnsIcon" :theme-color="'primary'" />
                            <p class="header-link">Customize</p>
                        </div>
                        </Button> -->

                    <DropDownButton :item-render="'itemRender'" :items="computedColumns" @blur="onBlur"
                        @itemclick="onItemClick" @focus="onFocus">
                        <div class="d-flex align-center pr-4">
                            <SvgIcon :icon="columnsIcon" :theme-color="'primary'" />
                            <p class="header-link">Customize</p>
                        </div>
                        <template v-slot:itemRender="{ props }">
                            <div class="ma-0 k-link k-menu-link">
                                <Checkbox :checked="!props.item.hidden" @change="onToggleColumn(props.item)"></Checkbox>
                                <p class="header-link">{{ props.item.title }}</p>
                            </div>
                        </template>
                    </DropDownButton>

                    <!-- SECOND SOLUTION FROM KENDO UI -->
                    <DropDownButton 
                        :items="invoiceColumns" 
                        :text="'Customize'"
                        :text-field="'title'" 
                        :item-render="'itemRender'" 
                        :opened="opened" 
                        @click="onClick"
                        @blur="onClose"
                        >
                        <template v-slot:itemRender="{ props }">
                            <div class="k-link k-menu-link">
                                <Checkbox :checked="!props.item.hidden" />
                                {{ props.item.title }}
                            </div>
                        </template>
                    </DropDownButton>

                    <!-- @itemclick="onItemClick" -->
                        
    <!-- :items="settings"
      :icon="'cog'"
      :opened="opened"
      :text="'User Settings'"
      @click="onClick"
      @blur="onClose" -->
                    <!-- // export -->
                    <Button fill-mode="'clear'">
                        <div class="d-flex align-center pr-4">
                            <SvgIcon :icon="downloadIcon" :theme-color="'primary'" />
                            <p class="header-link">Export</p>
                        </div>
                    </Button>

                    <!-- <Button style="width: 100px; height: 40px;" :theme-color="'primary'" @click="exportExcel">
                            New
                        </Button> -->
                </span>

            </GridToolbar>

            <template v-slot:myHeaderTemplate="{ props }">
                <a class="k-link" @click="props.onClick">
                    <span class="grid-header-text">
                        {{ props.title }}
                    </span>
                    <span class="k-icon k-i-sort-desc pl-2 grid-header-icon" />

                    {{ props.children }}
                </a>
            </template>
            <template v-slot:dateTemplate="{ props }">
                <td>
                    <DateCell :field="props.field" :data-item="props.dataItem"></DateCell>
                </td>
            </template>
            <template v-slot:dateTemplate2="{ props }">
                <td>
                    <DateCell :field="props.field" :data-item="props.dataItem"></DateCell>
                </td>
            </template>
        </Grid>

</Card>
</template>

<script setup>
import { Card } from '@progress/kendo-vue-layout';
import { Grid, GridToolbar } from '@progress/kendo-vue-grid';
import { Button, DropDownButton } from '@progress/kendo-vue-buttons';
import { saveExcel } from '@progress/kendo-vue-excel-export';
import { orderBy } from '@progress/kendo-data-query';
import { Checkbox } from "@progress/kendo-vue-inputs";

import { ref, computed } from 'vue';
import { slice, map } from 'lodash';

import invoices from '../data/invoice-index.json';
import DateCell from '../grid/DateCell.vue';

import { SvgIcon } from "@progress/kendo-vue-common";

import { filterIcon, downloadIcon, columnsIcon } from "@progress/kendo-svg-icons";

// COLUMN DEFINITIONS
const invoiceColumns = ref([
    { field: 'InvoiceID', title: 'Invoice #', width: '100px', hidden: false },
    { field: 'InvoiceRef', title: 'Title', width: '200px', hidden: false },
    { field: 'SupplierName', title: 'Vendor', width: '150px', hidden: false },

    { field: 'InvoiceDate', title: 'Invoice date', width: '125px', cell: 'dateTemplate', hidden: false },
    { field: 'SubmittedDate', title: 'Posted date', width: '125px', cell: 'dateTemplate2', hidden: false },

    { field: 'Approvers', title: 'Current approver', width: '150px', hidden: false },
    { field: 'ApprovalGroups', title: 'Approval group', width: '200px', hidden: false },

    { field: 'ProcessorName', title: 'Financial assistant', width: '150px', hidden: false },

    { field: 'CurrentStateName', title: 'Status', width: '100px', hidden: false },
    { field: 'TotalCostDisplay', title: 'Total', width: '100px', hidden: false }
]);

const computedColumns = computed(() => {
    return map(invoiceColumns.value, (column) => {
        return {
            ...column,
            headerCell: 'myHeaderTemplate',
        };
    });
});

// COLUMN SORTING
const sortChangeHandler = (e) => {
    sort.value = e.sort;
};
const sortable = computed(() => {
    return {
        allowUnsort: true,
        mode: 'multiple',  // 'single' | 'multiple'
    };
});
const sort = ref([
    { field: 'InvoiceID', dir: 'desc' },
]);

// COLUMN REORDERING
const columnReorder = (options) => {
    invoiceColumns.value = options.columns;
};

// PAGING
const pageableOptions = {
    buttonCount: 5,
    info: true,
    type: 'numeric',
    pageSizes: true,
    pageSizeValue: 10,
    previousNext: true,
    responsive: true,
};

const pageChangeHandler = (e) => {
    loader.value = true;
    // The idea behind using the following setTimeout method is to
    // demonstrate how we can show a loader while fetching data.
    // In a real-life scenarios with remote data binding, the 'loader'
    // property should be updated before making a server request
    // and after the request completes.
    setTimeout(() => {
        loader.value = false;
        skip.value = e.page.skip;
        take.value = e.page.take;
    }, 500);
};

// EXPORT TO EXCEL
const exportExcel = () => {
    saveExcel({
        data: result.value,
        fileName: 'Employees',
        columns: invoiceColumns,
    });
};

const loader = ref(false);
const skip = ref(0);
const take = ref(10);

// DATA
const result = computed(() => {
    return slice(orderBy(invoices.data, sort.value), skip.value, take.value + skip.value);
});
const total = computed(() => {
    return invoices?.data ? invoices.data.length : 0;
});

const onToggleColumn = (e) => {
    e.preventDefault();
    const column = invoiceColumns.value.find((c) => c.field === e.target.value);
    column.hidden = !e.target.checked;
};

</script>

<style>
/* // hide the scrollbars */
.k-grid-content.k-virtual-content::-webkit-scrollbar {
    width: 0 !important
}

/* // prevent the cell contents from wrapping */
div.k-grid-container>div>div.k-grid-table-wrap>table>tbody>tr>td {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.header-link {
    margin-left: 10px;
    margin-right: 10px;
    color: #008897;
    font-size: 16px;
    font-weight: 600;
    font-family: 'Open Sans', sans-serif;
    font-style: normal;
}

.grid-header-icon {
    color: #008897;
    font-size: 12px;
}

.grid-header-text {
    font-family: 'Open Sans', sans-serif;
    font-size: 13px;
    font-weight: 400;
}

.k-pager-numbers .k-link,
.k-pager-numbers .k-link:link {
    color: black;
}
</style>