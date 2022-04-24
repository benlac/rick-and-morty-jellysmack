import { Character } from '../../../models/character';
import { Params, State } from '@/models/store';

export default {
  setCharacters(state: State, payload: Array<Character>) {
    state.characters = payload;
  },
  setCurrentCharacter(state: State, payload: Character) {
    state.currentCharacter = payload;
  },
  setLoading(state: State, payload: boolean) {
    state.isLoading = payload;
  },
  setFilters(state: State, payload: Params) {
    state.filters = payload;
  },
  setNextPage(state: State, payload: number | null) {
    state.nextPage = payload;
  },
  setPrevPage(state: State, payload: number | null) {
    state.prevPage = payload;
  },
  setTotalPages(state: State, payload: number) {
    state.totalPages = payload;
  },
  setCurrentPage(state: State, payload: number) {
    state.currentPage = payload;
  },
};
