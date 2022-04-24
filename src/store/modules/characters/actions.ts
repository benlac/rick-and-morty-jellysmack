import Api from '@/services/api';
import { Commit } from 'vuex';
import { Params } from '@/models/store';

export default {
  async fetchCharacters({ commit }: { commit: Commit }, params: Params | null) {
    commit('setCharacters', []);
    commit('setLoading', true);
    commit('setError', false);
    const api = new Api(`${process.env.VUE_APP_RICK_AND_MORTY_API}/character?`);
    const res = await api.get(params);
    if (!res.error) {
      console.log(res);
      commit('setCharacters', res.results);
      commit('setLoading', false);
      commit('setTotalPages', res.info.pages);
      if (res.info.next !== null) {
        const next = res.info.next.match(/\?page=(\d)/m)[1];
        commit('setNextPage', Number(next));
      }
      if (res.info.prev !== null) {
        const prev = res.info.prev.match(/\?page=(.*)/m)[1];
        commit('setPrevPage', Number(prev));
      }
      if (res.info.pages === 1) {
        commit('setCurrentPage', res.info.pages);
      }
    } else {
      commit('setCharacters', []);
      commit('setError', true);
    }
  },

  async fetchCurrentCharacter({ commit }: { commit: Commit }, payload: number) {
    commit('setCurrentCharacter', null);
    commit('setLoading', true);
    commit('setError', false);

    const api = new Api(`${process.env.VUE_APP_RICK_AND_MORTY_API}/character`);
    const res = await api.getById(payload);
    if (!res.error) {
      console.log(res);
      commit('setCurrentCharacter', res);
      commit('setLoading', false);
    } else {
      console.log('error', res);
      commit('setCurrentCharacter', {});
      commit('setError', true);
    }
  },
};
