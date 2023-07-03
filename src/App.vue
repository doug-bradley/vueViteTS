<template>
  <Layout>
    <InvoiceWorkCenter title="Invoices" :toolbar="true" />
    <Review />
  </Layout>
</template>

<script setup lang="ts">
import '@progress/kendo-theme-default/dist/all.scss';
import InvoiceWorkCenter from './components/WorkcenterGrid/Invoice/WorkcenterGrid.vue';
import Layout from './components/Layout/Layout.vue'
import Review from './components/Request/Review.vue';
</script>

<style>
body {
  background-color: #F5F5F5;
}
</style>
