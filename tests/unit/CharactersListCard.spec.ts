import { shallowMount } from '@vue/test-utils';
import CharactersListCard from '../../src/components/Characters/CharactersListCard.vue';

interface CharacterListCard {
  id: number;
  name: string;
  image: string;
}

describe('CharacterListCard', () => {
  test('renders with props', () => {
    const name = 'unit-test-character';
    const character: CharacterListCard = {
      name,
      id: 1,
      image: 'test.png',
    };

    const wrapper = shallowMount(CharactersListCard, {
      propsData: character,
    });

    expect(wrapper.text()).toContain(name);
  });
});
