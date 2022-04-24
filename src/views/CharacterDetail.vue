<template>
  <div class="wrapper__details">
    <not-found v-if="error && !loading"></not-found>
    <base-spinner v-else-if="!character && loading && !error"></base-spinner>
    <character-info v-else :character="character"></character-info>
  </div>
</template>

<script setup lang="ts">
import CharacterInfo from '@/components/Character/CharacterInfo.vue';
import BaseSpinner from '@/components/UI/BaseSpinner.vue';
import NotFound from '@/views/NotFound.vue';
import { computed } from 'vue';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';
const route = useRoute();
const store = useStore();

const character = computed(() => store.state.charactersModule.currentCharacter);
const loading = computed(() => store.state.charactersModule.isLoading);
const error = computed(() => store.state.charactersModule.error);

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
