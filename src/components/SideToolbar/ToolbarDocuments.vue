<template>
    <div class="card p-5 text-sm font-light">
        <h3 class="text-sm mb-5">{{ props.data.title }}</h3>

        <div class="flex flex-row items-center justify-center gap-2 p-2 border border-dashed border-teal mb-5 rounded-lg cursor-pointer">
            <Icon :icon="addFileIcon" />
            <p class="m-0">Drag and drop or <span class="text-teal">browse your files</span></p>
        </div>

        <div v-for="(item, index) in props.data.details" :key="item.id" :class="['flex', 'flex-row', 'items-center', 'justify-between', index === props.data.details.length - 1 ? 'mb-0' : 'mb-5']">

            <div class="flex flex-row items-center gap-2">
                <div class="relative">
                <Icon :icon="fileIcon" />
                <span class="absolute right-1 top-[6px] text-[6px] text-white font-medium">{{ getFileExtension(item.file) }}</span>
                </div>
                <a :href="item.link" class="text-teal font-medium">{{ excludeExtension(item.file) }}</a>
            </div>
            <Icon :icon="deleteIcon" class="cursor-pointer" @click="deleteFileHandler" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, defineProps } from 'vue';
import Icon from '../../Utility/Icon.vue';

const props = defineProps({
    data: {
        type: Object,
        required: true
    }
});

const fileIcon = '<svg width="23" height="27" viewBox="0 0 23 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.9672 11.8998H19.8521V6.72651L12.2947 0H4.04464C1.81823 0 0 1.84134 0 4.09603V22.904C0 25.1649 1.81823 27 4.04464 27H15.8075C18.0401 27 19.8521 25.1587 19.8521 22.904V21.0063H21.9672C22.5362 21.0063 23.0062 20.5365 23.0062 19.9541V12.9457C23.0062 12.3695 22.5424 11.8935 21.9672 11.8935V11.8998ZM18.6771 22.904C18.6771 24.5073 17.3907 25.81 15.8075 25.81H4.04464C2.46141 25.81 1.17505 24.5073 1.17505 22.904V4.09603C1.17505 2.49269 2.46141 1.18998 4.04464 1.18998H10.7548V6.71399C10.7548 7.6785 11.534 8.46764 12.4864 8.46764C12.4864 8.46764 18.4915 8.53653 18.6771 8.46764V11.8998H4.94757C4.3786 11.8998 3.90858 12.3695 3.90858 12.952V19.9603C3.90858 20.5365 4.37241 21.0125 4.94757 21.0125H18.6771V22.9102V22.904Z" fill="#FF1E1E"/></svg>';
const addFileIcon = '<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.5439 0.955627V1.86587H1.77957C1.53684 1.86587 1.33745 1.94389 1.18141 2.09993C1.02537 2.25597 0.94735 2.45536 0.94735 2.69809V16.0396C0.94735 16.2823 1.02537 16.4817 1.18141 16.6378C1.33745 16.7938 1.53684 16.8718 1.77957 16.8718H15.1211C15.3638 16.8718 15.5632 16.7938 15.7193 16.6378C15.8753 16.4817 15.9533 16.2823 15.9533 16.0396V7.3013H16.8636V16.0396C16.8636 16.5077 16.6945 16.9152 16.3564 17.2619C16.0183 17.6087 15.6066 17.7821 15.1211 17.7821H1.77957C1.29411 17.7821 0.882333 17.6087 0.544243 17.2619C0.206154 16.9152 0.0371094 16.5077 0.0371094 16.0396V2.69809C0.0371094 2.21263 0.206154 1.80085 0.544243 1.46276C0.882333 1.12467 1.29411 0.955627 1.77957 0.955627H10.5439ZM15.5632 0.149414V2.25597H17.6698V3.16621H15.5632V5.29877H14.653V3.16621H12.5464V2.25597H14.653V0.149414H15.5632ZM3.99015 14.0891H13.0926L10.2838 10.3441L7.60511 13.673L5.88865 11.6965L3.99015 14.0891ZM0.94735 1.86587V16.8718V1.86587Z" fill="#008897"/></svg>';
const deleteIcon = '<svg width="13" height="15" viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.152344 1.99023H12.4267" stroke="#008897" stroke-miterlimit="10" stroke-linecap="round"/><path d="M1.07422 1.99023L1.95491 14.278C1.97639 14.5994 2.24642 14.8474 2.56556 14.8474H10.0161C10.3383 14.8474 10.6053 14.5994 10.6268 14.278L11.5074 1.99023" stroke="#008897" stroke-miterlimit="10"/><path d="M3.83594 1.98908V0.764589C3.83594 0.427854 4.11211 0.152344 4.44966 0.152344H8.13197C8.46952 0.152344 8.74569 0.427854 8.74569 0.764589V1.98908" stroke="#008897" stroke-miterlimit="10"/><path d="M6.29102 13.0098V3.82617" stroke="#008897" stroke-miterlimit="10" stroke-linecap="round"/><path d="M8.4375 13.0098L9.05122 3.82617" stroke="#008897" stroke-miterlimit="10" stroke-linecap="round"/><path d="M4.14302 13.0098L3.5293 3.82617" stroke="#008897" stroke-miterlimit="10" stroke-linecap="round"/></svg>';

const getFileExtension = (file: String) => {
    // const file = props.data.details[0].file;
    const fileExtension = file.split('.').pop();

    return fileExtension;
}

const excludeExtension = (file: String) => {
    const fileExtension = getFileExtension(file);
    const fileName = file.replace(`.${fileExtension}`, '');

    return fileName;
}

const deleteFileHandler = (file: String) => {
    console.log('delete file')
}

</script>

<style scoped></style>