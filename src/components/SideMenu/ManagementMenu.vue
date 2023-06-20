<template>
    <div class="mt-5">
        <h2 class="text-gray-400 mb-2 border border-x-0 border-b-0 border-t-gray-500 pt-4 pl-3 w-11/12 ml-2 uppercase">Management</h2>
        <div v-for="item in menuItems" :key="item.id"
            class="text-white text-sm font-normal transition-colors hover:bg-white hover:bg-opacity-5">

            <a v-if="!item.children" :href="item.link" class="flex flex-row gap-[14px] pl-5 py-[10px] cursor-pointer">
                <span>{{ item.title }}</span>
            </a>
            <div v-else class="flex flex-row gap-[14px] pl-5 py-[10px] cursor-pointer" @click="activeDropdownHandler(item.id)">
                <span>{{ item.title }}</span>
            </div>

            <!-- The dropdown menu -->
            <div v-if="item.children" class="flex flex-col w-full text-xs overflow-hidden"
                :class="{ 'collapsed': activeDropdown !== item.id, 'open': activeDropdown === item.id }">
                <div v-for="subitem in item.children" :key="subitem.id">
                    <!-- level: 1 -->
                    <a v-if="!subitem.children" :href="subitem.link" class="flex flex-row pl-8 py-[10px] transition-colors hover:bg-slate-800 cursor-pointer">
                        <span>{{ subitem.title }}</span>
                    </a>
                    <div v-else class="flex flex-row pl-8 py-[10px] transition-colors hover:bg-slate-800 cursor-pointer" @click="activeDropdownLevel2Handler(subitem.id)">
                        <Icon :icon="iconCaretRight" :class="{ active: activeDropdownLevel2 === subitem.id }" />
                        <span>{{ subitem.title }}</span>
                    </div>
                    <!-- level: 2-->
                    <div v-if="subitem.children" class="flex flex-col w-full text-xs overflow-hidden"
                        :class="{ 'collapsed': activeDropdownLevel2 !== subitem.id, 'open': activeDropdownLevel2 === subitem.id }">
                        <div v-for="sub2item in subitem.children" :key="sub2item.id">
                            <a :href="sub2item.link" class="flex flex-row pl-12 py-[10px] transition-colors hover:bg-slate-800 cursor-pointer">
                                {{ sub2item.title }}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, defineEmits, watch } from 'vue';
import Icon from '../../Utility/Icon.vue';

// Declare the props object to access the dropdownData prop
const props = defineProps({
  dropdownData: {
    type: Object,
    default: null,
  },
});

const iconCaretRight = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>'

const menuItems = ref([
    { id: 1, title: 'Vendor', link: '#', children: [
        { id: 1, title: 'Process', link: '/Supplier/Index/81' },
        { id: 2, title: 'Processing', link: '/Supplier/Index/80' },
        { id: 3, title: 'Vendor', link: '/Supplier/Index/29' },
    ]},
    { id: 2, title: 'Employee', link: '#', children: [
        { id: 1, title: 'Employee', link: '/Employee' },
        { id: 2, title: 'Administrative role', link: '/EmployeeRole' },
        { id: 3, title: 'Process role', link: '/ProcessRole' },
        { id: 4, title: 'Service role', link: '/ServiceRole' },
        { id: 5, title: 'Invitation', link: '/Invitation' },
    ]},
    { id: 3, title: 'Administer', link: '#', children: [
        { id: 1, title: 'My organization', link: '/Tenant/Edit/71' },
        { id: 2, title: 'Organization', link: '#', children: [
            { id: 1, title: 'Companies', link: '/Company' },
            { id: 2, title: 'Curency', link: '/Currency' },
            { id: 3, title: 'Tax rate', link: '/TaxRate' },
            { id: 4, title: 'Location', link: '/Location' },
            { id: 5, title: 'Lookup', link: '/Lookup' },
            { id: 6, title: 'Custom field', link: 'CustomField' },
            { id: 7, title: 'Templates', link: 'Report' },
        ]},
        { id: 3, title: 'Cost allocation', link: '#', children: [
            { id: 1, title: 'Segment', link: '/GLSegmentName' },
            { id: 2, title: 'Structure', link: 'GLCodeMask' },
        ]},
        { id: 4, title: 'Budget setup', link: '#', children:[
            { id: 1, title: 'Financial year', link: '/FinancialYear' },
            { id: 2, title: 'Budget', link: '/Budget' },
            { id: 3, title: 'Budget field', link: '/BudgetField' },
        ]},
        { id: 5, title: 'Workflow setup', link: '#', children: [
            { id: 1, title: 'Approval', link: '/Approval' },
            { id: 2, title: 'Cost allocation approval', link: '/CAApproval' },
            { id: 3, title: 'Close policy', link: '/RequestType/Edit' },
        ]},
        { id: 6, title: 'Alert policy', link: '#', children: [
            { id: 1, title: 'Budget', link: '/AlertPolicy/Index/1' },
            { id: 2, title: 'Compliance', link: '/AlertPolicy/Index/2' },
            { id: 3, title: 'Risk', link: '/AlertPolicy/Index/3' },
            { id: 4, title: 'Time', link: '/AlertPolicy/Index/4' },
            { id: 5, title: 'Variance', link: '/AlertPolicy/Index/5' },
            { id: 6, title: 'Action', link: '/AlertPolicy/Index/6' },
        ]},
        { id: 7, title: 'Import', link: 'xxx', children: [
            { id: 1, title: 'Company', link: '/Import/Index/7' },
            { id: 2, title: 'Vendor', link: '/Import/Index/1' },
            { id: 3, title: 'Lookup', link: '/Import/Index/6' },
            { id: 4, title: 'Cost allocation segment', link: '/Import/Index/2' },
            { id: 5, title: 'Cost allocation segment', link: '/Import/Index/3' },
            { id: 6, title: 'Budget', link: '/Import/Index/4' },
            { id: 7, title: 'Actual spend', link: '/Import/Index/8' },
            { id: 8, title: 'Request', link: '/Import/Index/101' },
        ]},
        { id: 8, title: 'Export', link: '#', children: [
            { id: 1, title: 'Purchase', link: '/Export/Index/1' },
            { id: 2, title: 'Expense', link: '/Export/Index/10' },
            { id: 3, title: 'Leave', link: '/Export/Index/20' },
            { id: 4, title: 'Travel', link: '/Export/Index/30' },
            { id: 5, title: 'Capex purchase', link: '/Export/Index/40' },
            { id: 6, title: 'Time Capture', link: '/Export/Index/50' },
            { id: 7, title: 'Cash advance', link: '/Export/Index/60' },
            { id: 8, title: 'Purchase order', link: '/Export/Index/-2' },
            { id: 9, title: 'Invoice', link: '/Export/Index/1000' },
        ]},
    ]},
    { id: 4, title: 'Search', link: '#', children: [
        { id: 1, title: 'Request', link: '/SearchRequestSearch' },
        { id: 2, title: 'Purchase order', link: '/Search/POSearch' },
        { id: 3, title: 'Invoice', link: '/Search/InvoiceSearch' },
        { id: 4, title: 'Vendor', link: '/Search/SupplierSearch' },
    ]},
])

const activeDropdown = ref()
const activeDropdownLevel2 = ref()

const activeDropdownHandler = (id: number) => {
    if (activeDropdown.value === id) {
        activeDropdown.value = null
        activeDropdownLevel2.value = null
    } else {
        activeDropdown.value = id
    }
    // send dropdown values to parent component
    emits('dropdownManagementL1', {'section': 'management', 'level1': activeDropdown.value})
    emits('dropdownManagementL2', {'section': 'management', 'level2': activeDropdownLevel2.value})
    
}
const activeDropdownLevel2Handler = (id: number) => {
    if (activeDropdownLevel2.value === id) {
        activeDropdownLevel2.value = null
    } else {
        activeDropdownLevel2.value = id
    }
    // send dropdown values to parent component
    emits('dropdownManagementL1', {'section': 'management', 'level1': activeDropdown.value})
    emits('dropdownManagementL2', {'section': 'management', 'level2': activeDropdownLevel2.value})
}

// define emit events
const emits = defineEmits(['dropdownPrimaryL1', 'dropdownManagementL1', 'dropdownManagementL2'])

watch(props, (newProps, oldProps) => {
  // Perform actions when dropdownData prop changes
  if(newProps.dropdownData.management.l1){
    activeDropdown.value = newProps.dropdownData.management.l1
  }
  if(newProps.dropdownData.management.l2){
    activeDropdownLevel2.value = newProps.dropdownData.management.l2
  }
  if(!newProps.dropdownData.management.l1){
    activeDropdown.value = null
  }
  if(!newProps.dropdownData.management.l2){
    activeDropdownLevel2.value = null
  }
});

</script>

<style scoped>
.open {
    max-height: 700px;
    /* Set a large enough value */
    transition: max-height 1s ease;
}

.collapsed {
    max-height: 0;
}

:deep(.icon svg){
    width: 12px;
    height: 12px;
    margin-right: 5px;
    @apply transition-all
}

:deep(.icon.active svg){
    @apply transform rotate-90
}
</style>
