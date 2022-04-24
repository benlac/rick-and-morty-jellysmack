<template>
  <div class="wrapper__character">
    <div class="wrapper__character__left">
      <img
        class="wrapper__character__left__img"
        :src="character.image"
        alt=""
      />
    </div>
    <div class="wrapper__character__right">
      <div>
        <h2>{{ character.name }}</h2>
        <p>{{ episodes }}</p>
      </div>
      <div class="wrapper__character__block">
        <div>
          <h2>STATUS</h2>
          <p>{{ character.status }}</p>
        </div>
        <div>
          <h2>GENDER</h2>
          <p>{{ character.gender }}</p>
        </div>
        <div>
          <h2>SPECIES</h2>
          <p>{{ character.species }}</p>
        </div>
      </div>
      <div class="wrapper__character__block">
        <div>
          <h2>ORIGIN</h2>
          <p>{{ character.origin.name }}</p>
        </div>
        <div>
          <h2>LOCATION</h2>
          <p>{{ character.location.name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Character } from '../../models/character';
// eslint-disable-next-line
const props = defineProps<{ character: Character }>();

const episodes = `Present in ${props.character.episode.length} episodes`;
console.log('props', props);
</script>

<style lang="scss">
.wrapper__character {
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;

  h2 {
    font-family: 'Lilita One', cursive;
  }

  p {
    font-family: 'Inter', sans-serif;
  }

  .wrapper__character__left {
    width: 30%;

    .wrapper__character__left__img {
      width: 300px;
      height: 300px;
      border-radius: 50%;
      fill: transparent;
      object-fit: cover;
    }
  }

  .wrapper__character__block {
    display: flex;

    div {
      margin: 0 2rem;
    }
  }
}
</style>
