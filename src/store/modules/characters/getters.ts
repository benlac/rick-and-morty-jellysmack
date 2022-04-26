import { State } from '@/models/store';

export default {
  getCharacters(state: State) {
    return state.characters;
  },
  getCurrentCharacter(state: State) {
    return state.currentCharacter;
  },
  getName(state: State) {
    return state.filters['name'] || '';
  },
  isTyping(state: State) {
    return state.filters['name'] || ''.length;
  },
  getValueFiltered(state: State) {
    return state.filters['status'];
  },
};
