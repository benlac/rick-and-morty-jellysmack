<template>
  <the-header></the-header>
  <router-view></router-view>
</template>

<script setup lang="ts">
import TheHeader from './components/layout/TheHeader.vue';
</script>

<style lang="scss">
@import '@/assets/styles/index.scss';
</style>
