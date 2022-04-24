<template>
  <div class="wrapper__details">
    <base-spinner v-if="!character && loading && !errorMessage"></base-spinner>
    <not-found v-else-if="!character && errorMessage"></not-found>
    <character-info v-else :character="character"></character-info>
  </div>
</template>

<script setup lang="ts">
import CharacterInfo from '@/components/Character/CharacterInfo.vue';
import BaseSpinner from '@/components/UI/BaseSpinner.vue';
import NotFound from '@/components/UI/NotFound.vue';
import { computed } from 'vue';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';
const route = useRoute();
const store = useStore();

const character = computed(() => store.state.charactersModule.currentCharacter);
const loading = computed(() => store.state.charactersModule.isLoading);
const errorMessage = computed(() => store.state.charactersModule.error);
console.log(store.state.charactersModule.error);
store.dispatch('fetchCurrentCharacter', route.params.id);
</script>

<style lang="scss" scoped>
.wrapper__details {
  width: 100%;
  display: flex;
  margin: auto;
  justify-content: center;
  align-items: center;
}
</style>
