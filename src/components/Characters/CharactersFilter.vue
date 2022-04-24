<template>
  <div class="wrapper__filters">
    <span v-for="el in status" :key="el" class="Filters_radio">
      <input
        type="radio"
        name="status"
        :id="el.id"
        @change="setFilter(el.value)"
      />
      <label :for="el.id">{{ el.id }}</label>
    </span>
  </div>
</template>

<script setup lang="ts">
import { useStore } from 'vuex';

const store = useStore();
const status = [
  { id: 'Alive', value: 'Alive' },
  { id: 'Dead', value: 'dead' },
  { id: 'Unknown', value: 'unknown' },
  { id: 'All', value: '' },
];

function setFilter(status: string) {
  let newObj = { ...store.state.charactersModule.filters };
  delete newObj.page;
  store.commit('setCurrentPage', 1);
  store.commit('setFilters', {
    ...newObj,
    status,
  });
  store.dispatch('fetchCharacters', store.state.charactersModule.filters);
}
</script>

<style lang="scss" scoped>
.wrapper__filters {
  display: flex;
  justify-content: center;

  span {
    margin: 0 0.4rem;
  }
}
</style>
