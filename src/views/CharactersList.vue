<template>
  <main class="wrapper__home">
    <characters-list-search></characters-list-search>
    <characters-list-filter></characters-list-filter>
    <not-found v-if="error">{{ error }}</not-found>
    <base-spinner
      v-else-if="!characters.length && loading && !error"
    ></base-spinner>
    <div v-else class="wrapper__cards">
      <characters-list-card
        v-for="character in characters"
        :key="character.id"
        :id="character.id"
        :name="character.name"
        :image="character.image"
      >
      </characters-list-card>
    </div>
  </main>
  <characters-list-pagination></characters-list-pagination>
</template>

<script setup lang="ts">
import CharactersListCard from '@/components/Characters/CharactersListCard.vue';
import CharactersListSearch from '@/components/Characters/Filters/CharactersListSearch.vue';
import CharactersListFilter from '@/components/Characters/Filters/CharactersListFilter.vue';
import BaseSpinner from '@/components/UI/BaseSpinner.vue';
import NotFound from '@/views/NotFound.vue';
import CharactersListPagination from '@/components/Characters/CharactersListPagination.vue';
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
store.dispatch('fetchCharacters');
const characters = computed(() => store.state.charactersModule.characters);
const loading = computed(() => store.state.charactersModule.isLoading);
const error = computed(() => store.state.charactersModule.error);
</script>

<style lang="scss" scoped>
.wrapper__home {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  width: 100%;

  .wrapper__cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style>
