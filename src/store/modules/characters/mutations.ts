import { Character } from '../../../models/character';
import { Info, Params, State } from '@/models/store';

export default {
  setInitRequest(state: State) {
    state.isLoading = true;
    state.error = false;
  },
  setErrorRequest(state: State) {
    state.isLoading = false;
    state.error = true;
  },
  setLoading(state: State, payload: boolean) {
    state.isLoading = payload;
  },
  setCharacters(state: State, payload: Array<Character>) {
    state.characters = payload;
  },
  setCurrentCharacter(state: State, payload: Character) {
    state.currentCharacter = payload;
  },
  setFilters(state: State, payload: Params) {
    state.filters = payload;
  },
  setManagePagination(state: State, info: Info) {
    state.totalPages = info.pages;
    if (info.next !== null) {
      const next = info.next.match(/\?page=([0-9]+)/m);
      state.nextPage = Number(next && next[1]);
    }
    if (info!.prev !== null) {
      const prev = info.prev.match(/\?page=([0-9]+)/m);
      state.prevPage = Number(prev && prev[1]);
    }
    if (info.pages === 1) {
      state.currentPage = info.pages;
    }
  },
  setCurrentPage(state: State, payload: number) {
    state.currentPage = payload;
  },
};
