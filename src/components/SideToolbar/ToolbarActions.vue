<template>
    <div id="toolbar-actions" class="flex flex-row gap-2 justify-end items-center mt-16">
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
</template>

<script setup lang="ts">
import { Button } from '@progress/kendo-vue-buttons';
import Icon from '../../Utility/Icon.vue';

const elipsIcon = '<svg width="19" height="5" viewBox="0 0 19 5" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="2.5" cy="2.5" r="2.5" fill="#008897"/><circle cx="9.5" cy="2.5" r="2.5" fill="#008897"/><circle cx="16.5" cy="2.5" r="2.5" fill="#008897"/></svg>';
const plusIcon = '<svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M20.0457 10.5C20.0457 15.7468 15.7823 20 10.5229 20C5.26347 20 1 15.7468 1 10.5C1 5.25323 5.26347 1 10.5229 1C15.7823 1 20.0457 5.25323 20.0457 10.5Z" stroke="#008897"/><path d="M10.5418 14.818V6.18164" stroke="#008897" stroke-linecap="round"/><path d="M6.19531 10.5204H14.8525" stroke="#008897" stroke-linecap="round"/></svg>';

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