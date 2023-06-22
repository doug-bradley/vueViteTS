<template>
    <div id="toolbar-actions" class="flex flex-row gap-2 justify-end items-center mt-14">
        <div
            class="flex flex-row items-center ml-[40px] text-[16px] cursor-pointer text-teal"
            @click="newHandler">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-6 h-6 mr-[8px]">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
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
</template>

<script setup lang="ts">
import { Button } from '@progress/kendo-vue-buttons';
import Icon from '../../Utility/Icon.vue';

const elipsIcon = '<svg width="19" height="5" viewBox="0 0 19 5" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="2.5" cy="2.5" r="2.5" fill="#008897"/><circle cx="9.5" cy="2.5" r="2.5" fill="#008897"/><circle cx="16.5" cy="2.5" r="2.5" fill="#008897"/></svg>';

const drawerHandler = () => {
    console.log('drawer');
}

const newHandler = () => {
    console.log('new');
}

const cancelHandler = () => {
    console.log('cancel');
}

const saveHandler = () => {
    console.log('save');
}
</script>

<style scoped></style>