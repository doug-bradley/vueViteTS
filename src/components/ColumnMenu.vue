<template>
    <div>
        <GridColumnMenuItemGroup>
            <GridColumnMenuItem :title="'Columns'" :icon-class="'k-i-columns'" @menuitemclick="onMenuItemClick" />
            <GridColumnMenuItemContent :show="columnsExpanded">
                <div class="k-column-list-wrapper">
                    <form @submit="onSubmit" @reset="onReset">
                        <div class="k-column-list">
                            <div :key="idx" class="k-column-list-item" v-for="(column, idx) in currentColumns">
                                <span>
                                    <input :id="'column-visiblity-show-' + idx"
                                        :class="'k-checkbox k-checkbox-md k-rounded-md'" :type="'checkbox'"
                                        :readOnly="true" :disabled="!column.hidden && oneVisibleColumn"
                                        :checked="!column.hidden" @click="onToggleColumn(idx)" />
                                    <label :for="'column-visiblity-show-' + idx" :class="'k-checkbox-label'"
                                        :style="{ userSelect: 'none' }">
                                        {{ column.title }} - {{ idx }}
                                    </label>
                                </span>
                            </div>
                        </div>
                        <div class="k-columnmenu-actions">
                            <kbutton type="reset">Reset</kbutton>
                            <kbutton :theme-color="'primary'">Save</kbutton>
                        </div>
                    </form>
                </div>
            </GridColumnMenuItemContent>
        </GridColumnMenuItemGroup>
    </div>
</template>
<script setup>
import { GridColumnMenuItemGroup, GridColumnMenuItemContent, GridColumnMenuItem } from "@progress/kendo-vue-grid";
import { Button } from "@progress/kendo-vue-buttons";
import { products } from "./products";

const props = defineProps({
    column: Object,
    columns: Array,
});

const currentColumns = ref([]);
const columnsExpanded = ref(false);
const filterExpanded = ref(false);

$data.currentColumns = props.columns;

const oneVisibleColumn = computed(() => {
    return $data.currentColumns.filter((c) => !c.hidden).length === 1;
});

const onToggleColumn = (id) => {
    currentColumns = currentColumns.map((column, idx) => {
        return idx === id ? { ...column, hidden: !column.hidden } : column;
    });
};

const onReset = (event) => {
    event.preventDefault();
    const allColumns = props.columns.map((col) => {
        return {
            ...col,
            hidden: false,
        };
    });

    currentColumns = allColumns;
    onSubmit();
};
const onSubmit = (event) => {
    if (event) {
        event.preventDefault();
    }
    $emit("columnssubmit", currentColumns);
    $emit("closemenu");
};

const onMenuItemClick = () => {
    const value = !$data.columnsExpanded;
    $data.columnsExpanded = value;
    $data.filterExpanded = value ? false : $data.filterExpanded;
};

</script>
