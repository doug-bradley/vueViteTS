<template>
    {{ formattedDate }}
  </template>
  
  <script setup lang="ts">
  import { computed, inject } from "vue";
  
  interface IProps {
    Date: Date;
  }
  const props = defineProps<IProps>();
  const locale: string = inject("locale", navigator.language);
  
  const formattedDate = computed(() => {
    const date = new Date(props.Date);
  
    return new Intl.DateTimeFormat(locale).format(date);
  });
  </script>
  