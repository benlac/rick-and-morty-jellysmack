<template>
  <div class="pagination">
    <button
      v-if="displayPrev"
      @click="handlePagination('first')"
      class="pagniation__item"
    >
      &#60;&#60;
    </button>
    <button
      v-if="displayPrev"
      @click="handlePagination('prev')"
      class="pagniation__item"
    >
      &#60;
    </button>
    <div class="pagniation__item__current">{{ displayNav }}</div>
    <button
      v-if="displayNext"
      @click="handlePagination('next')"
      class="pagniation__item"
    >
      &#62;
    </button>
    <button
      v-if="displayNext"
      @click="handlePagination('last')"
      class="pagniation__item"
    >
      &#62; &#62;
    </button>
  </div>
  <div>400 hits</div>
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
  background: #f0f0f0;
  height: 30px;
  align-items: center;
  border-radius: 17px;

  .pagniation__item {
    color: #1baeca;
    font-weight: bold;
    font-size: 0.8em;
    color: #9b9b9b;
    cursor: pointer;
    // padding: 1rem;
    background: transparent;
    border: none;
  }

  .pagniation__item__current {
    padding: 0px;
    // width: 50px;
    // height: 50px;
    // line-height: 50px;
    // border-radius: 50%;
    background: #3fb3ca;
    color: #fff;
    font-size: 0.8em;
  }
}
</style>
