<script setup>
import Header from './components/Header.vue';
import { RouterView } from 'vue-router';

</script>

<template>

<Header></Header>

<div class="content">
  <RouterView />
</div>

</template>

<style scoped>

.content {
    margin: 30px;
  }

</style>
