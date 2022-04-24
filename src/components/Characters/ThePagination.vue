<template>
  <div class="pagination">
    <div
      v-if="displayPrev"
      @click="handlePagination('first')"
      class="pagniation__item"
    >
      First
    </div>
    <div
      v-if="displayPrev"
      @click="handlePagination('prev')"
      class="pagniation__item"
    >
      Prev
    </div>
    <div class="pagniation__item__current">{{ displayNav }}</div>
    <div
      v-if="displayNext"
      @click="handlePagination('next')"
      class="pagniation__item"
    >
      Next
    </div>
    <div
      v-if="displayNext"
      @click="handlePagination('last')"
      class="pagniation__item"
    >
      Last
    </div>
    <div class="pagniation__item">400 hits</div>
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
      store.commit('setFilters', {
        ...store.state.charactersModule.filters,
        page: 1,
      });
      store.commit('setCurrentPage', 1);
      store.dispatch('fetchCharacters', store.state.charactersModule.filters);
      break;
    case 'prev':
      store.commit('setFilters', {
        ...store.state.charactersModule.filters,
        page: store.state.charactersModule.prevPage,
      });
      store.commit(
        'setCurrentPage',
        store.state.charactersModule.currentPage - 1
      );
      store.dispatch('fetchCharacters', store.state.charactersModule.filters);
      break;
    case 'next':
      store.commit('setFilters', {
        ...store.state.charactersModule.filters,
        page: store.state.charactersModule.nextPage,
      });
      store.commit(
        'setCurrentPage',
        store.state.charactersModule.currentPage + 1
      );
      store.dispatch('fetchCharacters', store.state.charactersModule.filters);
      break;
    case 'last':
      store.commit('setFilters', {
        ...store.state.charactersModule.filters,
        page: store.state.charactersModule.totalPages,
      });
      store.commit('setCurrentPage', store.state.charactersModule.totalPages);
      store.dispatch('fetchCharacters', store.state.charactersModule.filters);
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

  .pagniation__item {
    color: #1baeca;
    font-weight: bold;
    font-size: 1.2em;
    cursor: pointer;
    padding: 1rem;
  }

  .pagniation__item__current {
    padding: 0px;
    width: 50px;
    height: 50px;
    line-height: 50px;
    border-radius: 50%;
    background: #1baeca;
    color: #fff;
    font-size: 1.2em;
    transition: 0.3s;
    font-weight: bold;
  }
}
</style>
