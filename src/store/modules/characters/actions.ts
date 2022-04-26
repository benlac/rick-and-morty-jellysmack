import Api from '@/services/api';
import { Commit } from 'vuex';
import { State } from '@/models/store';

export default {
  async fetchCharacters({ commit, state }: { commit: Commit; state: State }) {
    commit('setCharacters', []);
    commit('setInitRequest');
    const api = new Api(`${process.env.VUE_APP_RICK_AND_MORTY_API}/character?`);
    const res = await api.get(state.filters);
    if (!res.error) {
      commit('setCharacters', res.results);
      commit('setLoading', false);
      commit('setManagePagination', res.info);
    } else {
      commit('setCharacters', []);
      commit('setErrorRequest');
    }
  },

  async fetchCurrentCharacter({ commit }: { commit: Commit }, payload: number) {
    commit('setCurrentCharacter', null);
    commit('setInitRequest');
    const api = new Api(`${process.env.VUE_APP_RICK_AND_MORTY_API}/character`);
    const res = await api.getById(payload);
    if (!res.error) {
      commit('setCurrentCharacter', res);
      commit('setLoading', false);
    } else {
      commit('setCurrentCharacter', {});
      commit('setErrorRequest');
    }
  },
};
