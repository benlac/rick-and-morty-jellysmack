<template>
  <main class="wrapper__home">
    <characters-wrapper-filters></characters-wrapper-filters>
    <characters-list></characters-list>
  </main>
  <the-pagination></the-pagination>
</template>

<script setup lang="ts">
import CharactersWrapperFilters from '../components/Characters/CharactersWrapperFilters.vue';
import CharactersList from '../components/Characters/CharactersList.vue';
import ThePagination from '../components/Characters/ThePagination.vue';

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
