import mutations from './mutations';
import actions from './actions';
import getters from './getters';

export default {
  state() {
    return {
      characters: [],
      currentCharacter: null,
      filters: {},
      currentPage: 1,
      totalPages: 0,
      nextPage: null,
      prevPage: null,
      isLoading: false,
      error: false,
    };
  },
  mutations,
  actions,
  getters,
};
