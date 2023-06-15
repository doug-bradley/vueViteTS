<script setup lang="ts">
import '@progress/kendo-theme-default/dist/all.scss';
import FraxionGrid from './components/WorkcenterGrid.vue'
import Nav from './components/Nav/Nav.vue'
import Layout from './components/Layout/Layout.vue'

</script>

<template>
  <Layout>
    <FraxionGrid title="Invoices" />
  </Layout>
  <!-- <div class="mx-auto max-w-[1300px] w-10/12">
    <Nav></Nav>
    
  </div> -->
</template>

<style>
body {
  background-color: #F5F5F5;
}
</style>
