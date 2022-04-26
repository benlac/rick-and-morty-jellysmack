<template>
  <div class="pagination">
    <base-button
      :disabled="!displayPrev"
      @click="handlePagination('first')"
      class="pagniation__item"
    >
      1
    </base-button>
    <base-button
      :disabled="!displayPrev"
      @click="handlePagination('prev')"
      class="pagniation__item"
    >
      prev
    </base-button>
    <div class="pagniation__item__current">{{ displayNav }}</div>
    <base-button
      :disabled="!displayNext"
      @click="handlePagination('next')"
      class="pagniation__item"
    >
      next
    </base-button>
    <base-button
      :disabled="!displayNext"
      @click="handlePagination('last')"
      class="pagniation__item"
    >
      {{ displayTotalPages }}
    </base-button>
  </div>
</template>

<script setup lang="ts">
import BaseButton from '@/components/UI/BaseButton.vue';
import { useStore } from 'vuex';
import { computed } from 'vue';

const store = useStore();

const displayNav = computed(
  () =>
    `${store.state.charactersModule.currentPage}/${store.state.charactersModule.totalPages}`
);

const displayTotalPages = computed(
  () => store.state.charactersModule.totalPages
);

const displayPrev = computed(
  () =>
    store.state.charactersModule.currentPage > 1 &&
    !store.state.charactersModule.isLoading
);

const displayNext = computed(
  () =>
    store.state.charactersModule.currentPage <
      store.state.charactersModule.totalPages &&
    !store.state.charactersModule.isLoading
);

function handlePagination(action: string) {
  switch (action) {
    case 'first':
      if (store.state.charactersModule.currentPage !== 1) {
        store.commit('setFilters', {
          ...store.state.charactersModule.filters,
          page: 1,
        });
        store.commit('setCurrentPage', 1);
        store.dispatch('fetchCharacters');
      }
      break;
    case 'prev':
      if (store.state.charactersModule.currentPage !== 1) {
        store.commit('setFilters', {
          ...store.state.charactersModule.filters,
          page: store.state.charactersModule.prevPage,
        });
        store.commit(
          'setCurrentPage',
          store.state.charactersModule.currentPage - 1
        );
        store.dispatch('fetchCharacters');
      }
      break;
    case 'next':
      if (
        store.state.charactersModule.currentPage <
        store.state.charactersModule.totalPages
      ) {
        store.commit('setFilters', {
          ...store.state.charactersModule.filters,
          page: store.state.charactersModule.nextPage,
        });
        store.commit(
          'setCurrentPage',
          store.state.charactersModule.currentPage + 1
        );
        store.dispatch('fetchCharacters');
      }
      break;
    case 'last':
      if (
        store.state.charactersModule.currentPage <
        store.state.charactersModule.totalPages
      ) {
        store.commit('setFilters', {
          ...store.state.charactersModule.filters,
          page: store.state.charactersModule.totalPages,
        });
        store.commit('setCurrentPage', store.state.charactersModule.totalPages);
        store.dispatch('fetchCharacters');
      }
      break;
    default:
      throw new Error(`The action doesn't exist: ${action} `);
  }
}
</script>

<style lang="scss" scoped>
.pagination {
  display: flex;
  justify-content: center;
  margin: 2rem;
  text-align: center;
  align-items: center;
  > button {
    margin: 0 0.4rem;
  }
}
</style>
