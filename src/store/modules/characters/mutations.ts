import { Character } from '../../../models/character';

interface State {
  characters: Array<Character>;
  currentCharacter: Character;
  isLoading: boolean;
}

interface Params {
  name: string;
  page: number;
  status: string;
}

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
};
