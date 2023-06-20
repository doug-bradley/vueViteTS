<template>
    <div class="icon" v-html="icon"></div>
  </template>
  
  <script lang="ts">
  export default {
    props: {
      icon: {
        type: String,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  .icon {
    display: inline-block;
    vertical-align: middle;
  }
  </style>