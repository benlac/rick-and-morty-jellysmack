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
      <div class="wrapper__character__right__name">
        <base-button @click="goToHome"> Back </base-button>
        <h2 class="wrapper__character__right__name__title">
          {{ character.name }}
        </h2>
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
        <div v-if="character.type.length">
          <h2>TYPE</h2>
          <p>{{ character.type }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Character } from '@/models/character';
import { useRouter } from 'vue-router';
import BaseButton from '@/components/UI/BaseButton.vue';

const router = useRouter();
// eslint-disable-next-line
const props = defineProps<{ character: Character }>();

const episodes = `Present in ${props.character.episode.length} ${
  props.character.episode.length < 2 ? 'episode' : 'episodes'
}`;

function goToHome() {
  router.go(-1);
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/vars.scss';

.wrapper__character {
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
  padding-bottom: 2rem;

  p {
    font-family: 'Inter', sans-serif;
  }

  .wrapper__character__right__name {
    margin: 0 2rem;

    .wrapper__character__right__name__title {
      font-size: 2.2em;
    }
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

@media #{$medium-down} {
  .wrapper__character {
    .wrapper__character__left {
      width: 50%;
    }
  }
}

@media #{$small-down} {
  .wrapper__character {
    flex-direction: column;
    .wrapper__character__left {
      width: auto;
      .wrapper__character__left__img {
        width: 270px;
        height: 270px;
      }
    }
    .wrapper__character__right {
      .wrapper__character__right__name {
        margin-top: 1rem;
        text-align: center;
      }
      .wrapper__character__block {
        flex-direction: column;
        text-align: center;
      }
    }
  }
}
</style>
