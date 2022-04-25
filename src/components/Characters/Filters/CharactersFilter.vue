<template>
  <div class="wrapper__filters">
    <span v-for="el in status" :key="el.id" class="filters__radio">
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
  flex-wrap: wrap;
  margin: 1rem 0 4rem;

  .filters__radio {
    display: flex;
    justify-content: center;
    > label {
      cursor: pointer;
    }
    > input {
      cursor: pointer;
      margin-right: 0.6rem;
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      &:checked::after {
        transform: scale(1.6);
        width: 15px;
        height: 15px;
        border-radius: 15px;
        top: -2px;
        left: -1px;
        position: relative;
        background-color: #d3d955;
        content: '';
        display: inline-block;
        visibility: visible;
      }
      &::after {
        width: 15px;
        height: 15px;
        border-radius: 15px;
        top: -2px;
        left: -1px;
        position: relative;
        content: '';
        display: inline-block;
        visibility: visible;
        background: transparent;
        border: 2px solid #3f4558;
      }
    }
  }
  span {
    margin: 0 0.4rem;
  }
}
</style>
