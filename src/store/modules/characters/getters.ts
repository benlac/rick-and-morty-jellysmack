import { Character } from '../../../models/character';

interface AppState {
  characters: Array<Character>; // List of all characters for current page
  currentCharacter: Character;
}
export default {
  getCharacters(state: AppState) {
    return state.characters;
  },
  getCurrentCharacter(state: AppState) {
    return state.currentCharacter;
  },
};
