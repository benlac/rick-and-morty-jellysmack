<template>
  <div class="wrapper__home">
    <characters-list></characters-list>
  </div>
</template>

<script setup lang="ts">
import CharactersList from '../components/Characters/CharactersList.vue';

import { useStore } from 'vuex';

const store = useStore();
store.dispatch('fetchCharacters');
</script>

<style lang="scss" scoped>
.wrapper__home {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  width: 100%;
}
</style>
