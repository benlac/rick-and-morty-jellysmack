<template>
  <div class="wrapper__input">
    <button class="wrapper__input__search">
      <img
        src="@/assets/img/search.svg"
        alt="search icon"
        width="20"
        @click="setSearchValue"
      />
    </button>
    <input
      type="text"
      placeholder="Search for a characters..."
      :value="message"
      @input="updateMessage"
      @keyup.enter="setSearchValue"
    />
    <button class="wrapper__input__reset">
      <img
        v-if="isTyping"
        src="@/assets/img/cross.png"
        width="40"
        height="40"
        alt="cross icon"
        @click="clearFilters"
      />
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

let message = computed(() => store.getters.getName);

function updateMessage(e: Event) {
  store.commit('setFilters', {
    ...store.state.charactersModule.filters,
    name: (e.target as HTMLInputElement).value,
  });
}

const isTyping = computed(() => store.getters.isTyping);

function setSearchValue() {
  let newObj = { ...store.state.charactersModule.filters };
  delete newObj.page;
  store.commit('setCurrentPage', 1);
  store.commit('setFilters', {
    ...newObj,
  });
  store.dispatch('fetchCharacters');
}

function clearFilters() {
  store.commit('setFilters', {});
  store.dispatch('fetchCharacters');
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/vars.scss';
.wrapper__input {
  display: flex;
  width: 20%;
  margin: 2rem auto 1rem auto;
  position: relative;

  .wrapper__input__search {
    position: absolute;
    background: transparent;
    outline: none;
    border: none;
    bottom: 20%;
    z-index: 1;
    left: 2%;
    cursor: pointer;
  }

  .wrapper__input__reset {
    position: absolute;
    outline: none;
    background: transparent;
    border: none;
    top: 6%;
    z-index: 1;
    right: 1%;
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

    &:focus {
      color: #c7c7c7;
    }
  }
}

@media #{$medium-down} {
  .wrapper__input {
    width: 45%;
  }
}

@media #{$small-down} {
  .wrapper__input {
    width: 85%;
  }
}
</style>
