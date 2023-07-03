<template>
    <div class="flex">
        <Skeleton :shape="'rectangle'" :style="{ width: '100%', height: '40px', }" />
    </div>
    <div class="flex">
        <Skeleton class="mt-3" :shape="'text'" :style="{ width: '100%' }" />
    </div>
</template>

<script setup lang="ts">
import { Skeleton } from '@progress/kendo-vue-indicators';

</script>    
