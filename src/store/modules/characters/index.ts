import mutations from './mutations';
import actions from './actions';
import getters from './getters';

export default {
  state() {
    return {
      characters: [],
      currentCharacter: null,
      isLoading: false,
    };
  },
  mutations,
  actions,
  getters,
};
