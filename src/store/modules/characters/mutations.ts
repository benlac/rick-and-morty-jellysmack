import { Character } from '../../../models/character';
import { Params, State } from '@/models/store';

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
  setManagePagination(state: State, info: any) {
    state.totalPages = info.pages;
    if (info.next !== null) {
      const next = info.next.match(/\?page=([0-9]+)/m)[1];
      state.nextPage = Number(next);
    }
    if (info.prev !== null) {
      const prev = info.prev.match(/\?page=([0-9]+)/m)[1];
      state.prevPage = Number(prev);
    }
    if (info.pages === 1) {
      state.currentPage = info.pages;
    }
  },
  setCurrentPage(state: State, payload: number) {
    state.currentPage = payload;
  },
  setError(state: State, payload: boolean) {
    state.error = payload;
  },
};
