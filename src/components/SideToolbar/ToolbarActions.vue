<template>
    <div id="toolbar-actions" class="flex flex-row gap-2 justify-end items-center mt-14">
        <div
            class="flex flex-row items-center ml-[40px] text-[16px] cursor-pointer text-teal"
            @click="newHandler">
            <Icon :icon="plusIcon" class="mr-[8px]" />
            New
        </div>

        <div class="flex flex-row gap-2">
            <Button :theme-color="'primary'" :fill-mode="'outline'" theme="primary" type="button" :size="null" :class="'btn'" @click="cancelHandler">Cancel</Button>
            <Button :theme-color="'primary'" type="button" :size="null" :class="'btn'" @click="saveHandler">Save</Button>
        </div>

        <div class="cursor-pointer" @click="drawerHandler">
            <Icon :icon="elipsIcon" />
        </div>
    </div>

    <!-- Drawer -->
    <Drawer :width="650" :expanded="expanded" position="end" :mode="'overlay'" :items="items" :item="'CustomItem'"
        @overlayclick="drawerHandler" @select="handleSelect">
        <template v-slot:CustomItem="{ props }">
            <div class="flex flex-row justify-between p-6">
                <TabStrip :selected="tabSelected" @select="onTabSelect" class="border">
                    <TabStripTab v-for="(tab, index) in tabs" :key="index" :title="tab.title">
                    <template v-slot:default>
                        <div v-if="tab.content === 'budget'">
                            <Budget />
                        </div>
                        <div v-if="tab.content === 'supplier'">
                            <Supplier />
                        </div>
                        <div v-if="tab.content === 'employee'">
                            <Employee />
                        </div>
                        <!-- <div v-if="tab.content === 'historical'">HISTORICAL</div>
                        <div v-if="tab.content === 'approvalGroup'">APPROVAL GROUP</div> -->
                    </template>
                    </TabStripTab>
                </TabStrip>
                <Icon :icon="closeIcon" class="mt-2 cursor-pointer" :style="{'height': 'min-content'}" @click="drawerHandler" />
            </div>
            <!-- <BudgetDrawer style="position: relative;" @close="handleClick" :componentKey="componentKey"></BudgetDrawer> -->
        </template>
    </Drawer>
    <!--  -->
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Button } from '@progress/kendo-vue-buttons';
import Icon from '../../Utility/Icon.vue';
import { Drawer } from '@progress/kendo-vue-layout';
import { TabStrip, TabStripTab } from '@progress/kendo-vue-layout';
import Budget from './Tabs/Budget.vue';
import Supplier from './Tabs/Supplier.vue';
import Employee from './Tabs/Employee.vue';

const elipsIcon = '<svg width="19" height="5" viewBox="0 0 19 5" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="2.5" cy="2.5" r="2.5" fill="#008897"/><circle cx="9.5" cy="2.5" r="2.5" fill="#008897"/><circle cx="16.5" cy="2.5" r="2.5" fill="#008897"/></svg>';
const plusIcon = '<svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M20.0457 10.5C20.0457 15.7468 15.7823 20 10.5229 20C5.26347 20 1 15.7468 1 10.5C1 5.25323 5.26347 1 10.5229 1C15.7823 1 20.0457 5.25323 20.0457 10.5Z" stroke="#008897"/><path d="M10.5418 14.818V6.18164" stroke="#008897" stroke-linecap="round"/><path d="M6.19531 10.5204H14.8525" stroke="#008897" stroke-linecap="round"/></svg>';
const closeIcon = '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path id="close" d="M16 1.61143L14.3886 0L8 6.38857L1.61143 0L0 1.61143L6.38857 8L0 14.3886L1.61143 16L8 9.61143L14.3886 16L16 14.3886L9.61143 8L16 1.61143Z" fill="#008897"/></svg>';


// ---- DRAWER
const items = [{ text: "ingore", icon: "dummy", selected: true, }];

const expanded = ref(false);
const selectedId = ref(null);
const position = ref(true);
const componentKey = ref(0);

const drawerHandler = () => {
    console.log('drawerHandler');
    componentKey.value++;
    expanded.value = !expanded.value;
}
const handleSelect = (ev: any) => {
    selectedId.value = ev.itemIndex;
    expanded.value = false;
};

// ---- TABS
const tabSelected = ref(0);
const tabs = ref([
    { title: 'Budget', content: 'budget' },
    { title: 'Supplier', content: 'supplier' },
    { title: 'Employee', content: 'employee' },
]);
const onTabSelect = (ev: any) => {
    tabSelected.value = ev.selected;
};

const newHandler = () => {
    console.log('new');
}

const cancelHandler = () => {
    console.log('cancel');
}

const saveHandler = () => {
    console.log('save');
}

// ----- TABS DATA
const supplierTabData = ref({
    section: 'supplier',
    data: {
        supplier: 'Supplier 1',
        supplierAddress: 'Supplier 1 Address',
        supplierContact: 'Supplier 1 Contact',
        supplierEmail: 'Supplier 1 Email',
        supplierPhone: 'Supplier 1 Phone',
    },
})
const employeeTabData = ref({
    section: 'employee',
    data: {
        employee: 'Employee 1',
        employeeAddress: 'Employee 1 Address',
        employeeContact: 'Employee 1 Contact',
        employeeEmail: 'Employee 1 Email',
        employeePhone: 'Employee 1 Phone',
    },
})
</script>

<style scoped>
 :deep(.k-drawer-items ul.k-tabstrip-items){
    @apply flex flex-row;
}
:deep(.k-drawer-items ul.k-tabstrip-items li){
    @apply text-medium-grey font-light
}
:deep(.k-drawer-items ul.k-tabstrip-items li.k-active){
    @apply border-x-0 border-t-0 border-b-[1px] border-teal text-teal font-normal
}

:deep(.k-tabstrip){
    @apply flex-1;
}
:deep(.k-tabstrip .k-content > div){
    @apply w-full;
}
:deep(.k-tabstrip div.k-active){
    @apply border-0
}
</style>