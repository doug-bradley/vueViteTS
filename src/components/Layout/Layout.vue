<template>
    <div id="components-layout-layout" class="flex flex-col w-full h-screen overflow-y-scroll">
        <Nav></Nav>
        <div class="border flex flex-row h-full">
            <Layout>
                <template v-slot:dropdown>
                    <DropdownButton />
                </template>
                <template v-slot:primary-menu>
                    <PrimaryMenu @dropdownPrimaryL1="dropdownDataHandler" :dropdownData="dropdownData" />
                </template>
                <template v-slot:analtyics-menu>
                    <AnalyticsMenu />
                </template>
                <template v-slot:management-menu>
                    <ManagementMenu @dropdownManagementL1="dropdownDataHandler" @dropdownManagementL2="dropdownDataHandler" :dropdownData="dropdownData" />
                </template>
            </Layout>

            <div class="relative p-10 pt-4">
                <slot></slot> <!-- WorkcenterGrid goes in here -->
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Nav from '../Nav/Nav.vue';
import DropdownButton from '../SideMenu/DropdownButton.vue';
import Layout from '../SideMenu/Layout.vue';
import PrimaryMenu from '../SideMenu/PrimaryMenu.vue';
import AnalyticsMenu from '../SideMenu/AnalyticsMenu.vue';
import ManagementMenu from '../SideMenu/ManagementMenu.vue';

let dropdownData = ref({
    primary: {
        l1: null,
    },
    management: {
        l1: null,
        l2: null,
    },
});

const dropdownDataHandler = (data: any) => {
    // console.log(data)
    if(data.section === 'management'){
        if(data.level1){
            dropdownData.value.management.l1 = data.level1;
        }
        if(data.level2){
            dropdownData.value.management.l2 = data.level2;
        }
        // reset other dropdowns
        dropdownData.value.primary.l1 = null;
    }
    if(data.section === 'primary'){
        if(data.level1){
            dropdownData.value.primary.l1 = data.level1;
        }
        // reset other dropdowns
        dropdownData.value.management.l1 = null;
        dropdownData.value.management.l2 = null;
    }
    console.log(dropdownData.value);
}
</script>

<style scoped>
</style>