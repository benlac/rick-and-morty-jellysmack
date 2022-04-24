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
  error: boolean;
}

export interface Info {
  count: number;
  next: string | null;
  pages: number;
  prev: string | null;
}
