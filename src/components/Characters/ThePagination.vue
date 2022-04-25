<template>
  <div class="pagination">
    <button
      :disabled="!displayPrev"
      @click="handlePagination('first')"
      class="pagniation__item"
    >
      1
    </button>
    <button
      :disabled="!displayPrev"
      @click="handlePagination('prev')"
      class="pagniation__item"
    >
      prev
    </button>
    <div class="pagniation__item__current">{{ displayNav }}</div>
    <button
      :disabled="!displayNext"
      @click="handlePagination('next')"
      class="pagniation__item"
    >
      next
    </button>
    <button
      :disabled="!displayNext"
      @click="handlePagination('last')"
      class="pagniation__item"
    >
      {{ displayTotalPages }}
    </button>
  </div>
</template>

<script setup lang="ts">
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
        store.dispatch('fetchCharacters', store.state.charactersModule.filters);
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
        store.dispatch('fetchCharacters', store.state.charactersModule.filters);
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
        store.dispatch('fetchCharacters', store.state.charactersModule.filters);
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
        store.dispatch('fetchCharacters', store.state.charactersModule.filters);
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

  .pagniation__item {
    background: transparent;
    color: #fff;
    border: 1px solid grey;
    border-radius: 20px;
    padding: 0.4rem 1rem;
    cursor: pointer;
    transition: all 1s;
    margin: 0 0.4rem;

    &:hover {
      background: rgba(196, 196, 196, 0.174);
      box-shadow: inset 4px -4px 4px rgba(165, 165, 165, 0.548),
        inset -4px 4px 4px rgba(255, 255, 255, 0.548);
      backdrop-filter: blur(32.8px);
      transform: scale(1.1);
    }

    &:disabled {
      color: #dac8c8;
      cursor: not-allowed;
      &:hover {
        background-color: transparent;
        box-shadow: none;
        backdrop-filter: none;
        transform: none;
      }
    }
  }
}
</style>
