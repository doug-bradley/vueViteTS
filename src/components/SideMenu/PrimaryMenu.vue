<template>
    <div class="mt-10">
        <div v-for="item in menuItems" :key="item.id"
            class="text-white text-sm font-normal transition-colors hover:bg-white hover:bg-opacity-5">
            <a v-if="!item.children" :href="item.link" class="flex flex-row gap-[14px] pl-5 py-[10px] cursor-pointer">
                    <Icon :icon="item.icon" />
                    <span>{{ item.title }}</span>
            </a>
            <div v-else class="flex flex-row gap-[14px] pl-5 py-[10px] cursor-pointer" @click="activeDropdownHandler(item.id)">
                    <Icon :icon="item.icon" />
                    <span>{{ item.title }}</span>
            </div>
            <!-- The dropdown menu -->
            <div v-if="item.children" class="flex flex-col w-full text-xs overflow-hidden"
                :class="{ 'collapsed': activeDropdown !== item.id, 'open': activeDropdown === item.id }">
                <a :href="subitem.link" v-for="subitem in item.children" :key="subitem.id"
                    class="pl-14 py-3 transition-colors hover:bg-slate-800 cursor-pointer">
                    {{ subitem.title }}
                </a>
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

const icons = [
    { name: 'dashboard', icon: '<svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.8 16.6402H1.68C1.3043 16.6402 1 16.3359 1 15.9602V12.2396C1 11.8639 1.3043 11.5596 1.68 11.5596H7.8C8.1757 11.5596 8.48 11.8639 8.48 12.2396V15.9602C8.48 16.3359 8.1757 16.6402 7.8 16.6402Z" stroke="white"/><path fill-rule="evenodd" clip-rule="evenodd" d="M7.8 9.46804H1.68C1.3043 9.46804 1 9.16374 1 8.78804V1.68C1 1.30464 1.3043 1 1.68 1H7.8C8.1757 1 8.48 1.30464 8.48 1.68V8.78804C8.48 9.16374 8.1757 9.46804 7.8 9.46804Z" stroke="white"/><path fill-rule="evenodd" clip-rule="evenodd" d="M17.3195 6.08086H11.1995C10.8238 6.08086 10.5195 5.77656 10.5195 5.40086V1.68024C10.5195 1.30454 10.8238 1.00024 11.1995 1.00024H17.3195C17.6952 1.00024 17.9995 1.30454 17.9995 1.68024V5.40086C17.9995 5.77656 17.6952 6.08086 17.3195 6.08086Z" stroke="white"/><path fill-rule="evenodd" clip-rule="evenodd" d="M17.3195 16.6402H11.1995C10.8238 16.6402 10.5195 16.3359 10.5195 15.9602V8.85212C10.5195 8.47676 10.8238 8.17212 11.1995 8.17212H17.3195C17.6952 8.17212 17.9995 8.47676 17.9995 8.85212V15.9602C17.9995 16.3359 17.6952 16.6402 17.3195 16.6402Z" stroke="white"/></svg>' },
    { name: 'approve', icon: '<svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.12526 11.425L6.20026 9.49998L5.55859 10.1417L8.12526 12.7083L13.6253 7.20832L12.9836 6.56665L8.12526 11.425Z" fill="white"/><path fill-rule="evenodd" clip-rule="evenodd" d="M18.0216 9.5C18.0216 14.1942 14.2138 18 9.51713 18C4.82047 18 1.0127 14.1942 1.0127 9.5C1.0127 4.80579 4.82047 1 9.51713 1C14.2138 1 18.0216 4.80579 18.0216 9.5Z" stroke="white"/></svg>' },
    { name: 'requests', icon: '<svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.0215 1V4.89583H17.0002" stroke="white" stroke-linejoin="round"/><path d="M3.25586 11.625V18H17.0005V4.89583L13.0218 1H3.25586V8.79167" stroke="white" stroke-linejoin="round"/><path d="M0 10.2083H9.40423" stroke="white"/><path d="M6 7L9 10L6 13" stroke="white" stroke-linecap="round" stroke-linejoin="round"/></svg>' },
    { name: 'quotes', icon: '<svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.543 1V4.47727H17.0221" stroke="white" stroke-linejoin="round"/><path fill-rule="evenodd" clip-rule="evenodd" d="M9.8418 4H1.01367V19H13.0199V7.375L9.8418 4Z" stroke="white" stroke-linejoin="round"/><path d="M9.67773 4.09082V7.56809H13.1568" stroke="white" stroke-linejoin="round"/><path d="M13.1565 16.4545H17.0221V4.47727L13.543 1H3.87891V4.09091" stroke="white" stroke-linejoin="round"/></svg>' },
    { name: 'po', icon: '<svg width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1 19H16V1H1V19Z" stroke="white" stroke-linejoin="round"/><path d="M4.5 8.5H12.5" stroke="white"/><path d="M4.5 4.5H7.5" stroke="white"/><path d="M4.5 11.5H12.5" stroke="white"/><path d="M4.5 14.5H12.5" stroke="white"/></svg>' },
    { name: 'payments', icon: '<svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.3425 7.97413C11.3425 7.1315 10.5256 6.44824 9.51714 6.44824C8.50927 6.44824 7.69238 7.1315 7.69238 7.97413C7.69238 8.81675 8.29865 9.50001 9.51714 9.50001C10.6976 9.50001 11.3425 10.1833 11.3425 11.0259C11.3425 11.8685 10.5256 12.5518 9.51714 12.5518C8.50927 12.5518 7.69238 11.8685 7.69238 11.0259C7.69238 11.8685 8.50927 12.5518 9.51714 12.5518C10.5256 12.5518 11.3425 11.8685 11.3425 11.0259C11.3425 10.1833 10.6976 9.50001 9.51714 9.50001C8.29865 9.50001 7.69238 8.81675 7.69238 7.97413C7.69238 7.1315 8.50927 6.44824 9.51714 6.44824C10.5256 6.44824 11.3425 7.1315 11.3425 7.97413Z" stroke="white"/><path fill-rule="evenodd" clip-rule="evenodd" d="M9.51705 6.14774V5.09937V6.14774Z" stroke="white"/><path fill-rule="evenodd" clip-rule="evenodd" d="M9.51705 13.9009V12.8525V13.9009Z" stroke="white"/><path fill-rule="evenodd" clip-rule="evenodd" d="M18.0216 9.5C18.0216 14.1942 14.2138 18 9.51713 18C4.82047 18 1.0127 14.1942 1.0127 9.5C1.0127 4.80579 4.82047 1 9.51713 1C14.2138 1 18.0216 4.80579 18.0216 9.5Z" stroke="white"/></svg>' },
]

const menuItems = ref([
    { id: 1, title: 'Dashboard', icon: icons[0].icon, link: '/dashboard', children: null },
    { id: 2, title: 'Approve', icon: icons[1].icon, link: '/approve', children: null },
    {
        id: 3, title: 'Requests', icon: icons[2].icon, link: '/Request', children: [
            { id: 1, title: 'Purchase', link: '/Request/Index/1' },
            { id: 2, title: 'Expense', link: '/Request/Index/10' },
            { id: 3, title: 'Leave', link: '/Request/Index/20' },
            { id: 4, title: 'Travel', link: '/Request/Index/30' },
            { id: 5, title: 'Capex purchase', link: '/Request/Index/40' },
            { id: 6, title: 'Time capture', link: '/Request/Index/50' },
            { id: 7, title: 'Cash advance', link: '/Request/Index/60' },
            { id: 8, title: 'Pending items', link: '/RequestItemPool' },
        ]
    },
    {
        id: 4, title: 'Quotes', icon: icons[3].icon, link: '/Quotes', children: [
            { id: 1, title: 'Create', link: '/Quote/Index/71' },
            { id: 2, title: 'Quoting', link: '/Quote/Index/70' },
            { id: 3, title: 'Quoted', link: '/Quote/Index/79' },
        ]
    },
    {
        id: 5, title: 'Purchase orders', icon: icons[4].icon, link: '/PO', children: [
            { id: 1, title: 'Create', link: '/PO/CreatePOIndex' },
            { id: 2, title: 'Pending', link: '/PO/Index/55' },
            { id: 3, title: 'Open', link: '/PO/Index/56' },
            { id: 4, title: 'Revising', link: '/PO/Index/58' },
        ]
    },
    {
        id: 6, title: 'Payments', icon: icons[5].icon, link: '/payments', children: [
            { id: 1, title: 'Proforma', link: '/ProformaInvoice' },
            { id: 2, title: 'Invoice', link: '/Invoice' },
        ]
    },
])

const activeDropdown = ref()
const activeDropdownHandler = (id: number) => {
    if (activeDropdown.value === id) {
        activeDropdown.value = null
    } else {
        activeDropdown.value = id
    }
    // send dropdown value to parent component
    emits('dropdownPrimaryL1', {'section': 'primary', 'level1': activeDropdown.value}) 
}

// define emit events
const emits = defineEmits(['dropdownPrimaryL1', 'dropdownManagementL1', 'dropdownManagementL2'])


watch(props, (newProps, oldProps) => {
  // Perform actions when dropdownData prop changes
  if(newProps.dropdownData.primary.l1){
    activeDropdown.value = newProps.dropdownData.primary.l1
  }
  if(!newProps.dropdownData.primary.l1){
    activeDropdown.value = null
  }
});

</script>

<style scoped>
.open {
    max-height: 250px;
    /* Set a large enough value */
    transition: max-height 1s ease;
}

.collapsed {
    max-height: 0;
}
</style>
