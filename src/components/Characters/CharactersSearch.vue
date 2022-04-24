<template>
  <div class="wrapper__input">
    <img
      class="wrapper__input__search"
      src="@/assets/img/search.svg"
      alt=""
      width="20"
      @click="setSearchValue"
    />
    <input
      type="text"
      placeholder="Search for a characters..."
      v-model.trim="value"
    />
  </div>
  <!-- <button @click="setSearchValue">submit</button> -->
  <button @click="clearFilters">Clear filters</button>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const value = ref<string>('');

function setSearchValue() {
  let newObj = { ...store.state.charactersModule.filters };
  delete newObj.page;
  store.commit('setCurrentPage', 1);
  store.commit('setFilters', {
    ...newObj,
    name: value.value,
  });
  store.dispatch('fetchCharacters', store.state.charactersModule.filters);
}

function clearFilters() {
  value.value = '';
  store.commit('setFilters', {});
  store.dispatch('fetchCharacters');
}
</script>

<style lang="scss" scoped>
.wrapper__input {
  margin-top: 2rem;
  display: flex;
  width: 20%;
  margin: 2rem auto;
  position: relative;

  .wrapper__input__search {
    position: absolute;
    bottom: 30%;
    z-index: 1;
    left: 4%;
    cursor: pointer;
  }

  input {
    width: 80%;
    outline: none;
    border: none;
    border: 1px solid rgba(255, 255, 255, 0.2);
    padding: 8px 10px;
    padding-left: 40px;
    border-radius: 30px;
    color: #fff;
    font-size: 16px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
    height: 30px;
    background: rgba(196, 196, 196, 0.174);
    box-shadow: inset 4px -4px 4px rgba(165, 165, 165, 0.548),
      inset -4px 4px 4px rgba(255, 255, 255, 0.548);
    backdrop-filter: blur(32.8px);
  }
}
</style>
