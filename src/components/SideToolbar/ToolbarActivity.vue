<template>
    <div class="card p-5 text-sm font-light">
        <h3 class="text-sm mb-5">{{ props.data.title }}</h3>


        <div v-for="(item, index) in orderedData" :key="item.id" :class="['py-5 border border-x-transparent border-b-transparent border-t-light-grey', index === props.data.details.length - 1 ? 'pb-0' : '']">
            <span class="inline-block border border-green-600 rounded-full py-1 px-2 mb-2">{{ item.status }}</span>

            <div class="font-normal mb-2">
                <span v-if="item.status === 'approval'">
                    Approved by {{ item.user }}
                </span>
                <span v-if="item.status === 'create'">
                    Created by {{ item.user }}
                </span>
            </div>
            
            <p class="text-medium-grey mb-0">{{ formatDate(item.date) }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, defineProps, computed } from 'vue';

const props = defineProps({
    data: {
        type: Object,
        required: true
    }
});

const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  };
  return new Intl.DateTimeFormat('en-US', options).format(date);
};

const arrayByDate = (array: any[]) => {
    return array.sort((a, b) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
}

const orderedData = computed(() => {
  const originalData = props.data.details;
  return arrayByDate(originalData);
});

</script>

<style scoped></style>