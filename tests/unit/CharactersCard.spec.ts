import { shallowMount } from '@vue/test-utils';
import CharactersCard from '../../src/components/Characters/CharactersCard.vue';

interface CharacterCard {
  id: number;
  name: string;
  image: string;
}

describe('CharacterCard', () => {
  test('renders with props', () => {
    const name = 'unit-test-character';
    const character: CharacterCard = {
      name,
      id: 1,
      image: 'test.png',
    };

    const wrapper = shallowMount(CharactersCard, {
      propsData: character,
    });

    expect(wrapper.text()).toContain(name);
  });
});
