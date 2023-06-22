<template>
    <div id="components-sidemenu-layout" class="bg-primary">
        <slot name="dropdown"></slot>

        <div class="w-[194px] h-screen sticky top-0 left-0 overflow-y-scroll">
            <slot name="primary-menu"></slot>
            <slot name="analtyics-menu"></slot>
            <slot name="management-menu"></slot>
        </div>
    </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>