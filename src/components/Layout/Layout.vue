<template>
    <div class="flex flex-col w-full h-screen overflow-y-scroll">
        <Nav></Nav>
        <div class="border flex flex-row h-full">
            <div class="bg-primary h-full">
                <div class="w-[194px]">
                    <!-- custom dropdown button -->
                    <div class="btn-dropdown">
                        <div class="flex flex-row items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6 mr-[8px]">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            New request
                        </div>
                        <div class="flex flex-col justify-center ml-2 pl-3 border-l-[1px] border-white border-opacity-50">
                            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 1L5 5L1 1" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            <div class="p-10">
                <slot></slot> <!-- WorkcenterGrid goes in here -->
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import Nav from '../Nav/Nav.vue';

</script>

<style scoped>
.btn-dropdown{
    @apply flex flex-row justify-between mx-auto bg-secondary text-white rounded-md px-2 w-[159px] h-[40px] mt-8 text-[13px] cursor-pointer shadow-none transition-shadow hover:shadow-lg;
}
</style>