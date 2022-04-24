<template>
  <base-spinner v-if="!characters.length && loading && !error"></base-spinner>
  <div v-else class="wrapper__cards">
    <characters-card
      v-for="character in characters"
      :key="character.id"
      :id="character.id"
      :name="character.name"
      :image="character.image"
    >
    </characters-card>
  </div>
  <not-found v-if="error">{{ error }}</not-found>
</template>

<script setup lang="ts">
import CharactersCard from '@/components/Characters/CharactersCard';
import BaseSpinner from '@/components/UI/BaseSpinner.vue';
import NotFound from '@/views/NotFound.vue';
import { useStore } from 'vuex';
import { computed } from 'vue';

const store = useStore();
const characters = computed(() => store.state.charactersModule.characters);
const loading = computed(() => store.state.charactersModule.isLoading);
const error = computed(() => store.state.charactersModule.error);
</script>

<style lang="scss" scoped>
.wrapper__cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
