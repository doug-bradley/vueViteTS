import { SortDescriptor } from "@progress/kendo-data-query";
import { GridSortSettings } from "@progress/kendo-vue-grid";
import { ref, computed, reactive } from "vue";

export function useGridOptions(invoiceColumns: any) {

    const loader = ref(false);
    const skip = ref(0);
    const take = ref(10);
    const pageSizeValue = ref(10);
    
    // PAGING
    const pageableOptions = reactive({
        buttonCount: 5,
        info: true,
        type: 'numeric',
        pageSizes: [10, 15, 20, 'all'],
        pageSizeValue: pageSizeValue.value,
        previousNext: true,
        responsive: true,
    });

    const pageChangeHandler = (e: any) => {
        loader.value = true;
        setTimeout(() => {
            loader.value = false;            
            skip.value = e.page.skip;
            take.value = e.event.value === 'all' ? 1000 : e.page.take;    
            pageSizeValue.value = e.event.value;
        }, 100);
    };

    // COLUMN SORTING
    const sortable = computed<GridSortSettings>(() => {
        return {
            allowUnsort: true,
            mode: 'multiple',  // 'single' | 'multiple'
        };
    });
    const sortChangeHandler = (e: any) => {
        sort.value = e.sort;
    };
    const sort = ref<SortDescriptor[]>([
        { field: 'InvoiceID', dir: 'desc' },
    ]);

    // COLUMN REORDERING
    const columnReorder = (options: any) => {
        invoiceColumns.value = options.columns;
    };

    return {
        loader,
        skip,
        take,
        pageableOptions,
        pageChangeHandler,
        sortable,
        sortChangeHandler,
        sort,
        columnReorder,

    };
}
