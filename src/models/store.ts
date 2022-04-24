import { Character } from './character';

export interface Params {
  name: string;
  page: number;
  status: string;
}

export interface State {
  characters: Array<Character>;
  currentCharacter: Character;
  isLoading: boolean;
  filters: Params;
  currentPage: number;
  totalPages: number;
  nextPage: number | null;
  prevPage: number | null;
}
