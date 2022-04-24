import Api from '../../../services/api';

interface Params {
  name: string;
  page: number;
  status: string;
}

export default {
  async fetchCharacters({ commit }: any, params: Params | null) {
    commit('setCharacters', []);
    commit('setLoading', true);
    const api = new Api(`${process.env.VUE_APP_RICK_AND_MORTY_API}/character?`);
    const res = await api.get(params);
    if (!res.error) {
      console.log(res);
      commit('setCharacters', res.results);
      commit('setLoading', false);
    } else {
      commit('setCharacters', []);
      commit('setError', res.error);
    }
  },

  async fetchCurrentCharacter({ commit }: any, payload: number) {
    commit('setCurrentCharacter', null);
    commit('setLoading', true);

    const api = new Api(`${process.env.VUE_APP_RICK_AND_MORTY_API}/character`);
    const res = await api.getById(payload);

    if (res) {
      console.log(res);
      commit('setCurrentCharacter', res);
      commit('setLoading', false);
    } else {
      console.warn('err');
    }
  },
};
