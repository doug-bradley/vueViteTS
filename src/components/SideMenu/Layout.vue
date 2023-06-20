<template>
    <div id="components-sidemenu-layout" class="bg-primary h-full">
        <div class="w-[194px] h-full overflow-y-scroll">
            <slot name="dropdown"></slot>
            <slot name="primary-menu"></slot>
            <slot name="analtyics-menu"></slot>
            <slot name="management-menu"></slot>
        </div>
    </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>