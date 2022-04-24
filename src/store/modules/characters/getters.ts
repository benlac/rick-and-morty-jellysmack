import { State } from '@/models/store';

export default {
  getCharacters(state: State) {
    return state.characters;
  },
  getCurrentCharacter(state: State) {
    return state.currentCharacter;
  },
};
