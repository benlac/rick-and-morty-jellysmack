<template>
  <router-link :to="{ name: 'details', params: { id } }">
    <div class="card">
      <img class="card__img" :src="image" alt="" />

      <div class="card__wrapper__text">
        <p class="card__text">{{ name }}</p>
      </div>
    </div>
  </router-link>
</template>

<script setup lang="ts">
// eslint-disable-next-line
const props = defineProps<{
  id: number;
  name: string;
  image: {
    type: string;
    default: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg';
  };
}>();
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
}
.card {
  width: 300px;
  height: 270px;
  background: #ffffff;
  border-radius: 27px;
  margin: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  // site

  overflow: hidden;

  border-radius: 25px;
  box-shadow: 0 0 5px 0 hsla(0, 0%, 47.1%, 0.3);
  transition-duration: 0.3s;
  position: relative;
  &:hover {
    transform: scale(1.02);
    box-shadow: 0 10px 20px 0 hsla(0, 0%, 47.1%, 0.3);

    .card__img {
      transform: translatey(-10px) translatex(-5px) scale(1.05);
      transition: 0.3s;
      margin-top: -20px;
    }
    .card__wrapper__text {
      height: 45%;
    }
  }
  // site
  .card__img {
    height: 70%;
    width: 100%;
    object-fit: cover;
    border-top-left-radius: 27px;
    border-top-right-radius: 27px;
  }

  .card__wrapper__text {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .card__text {
      color: #44281d;
      font-family: 'Lilita One', cursive;
      font-size: 1.6em;
    }
  }
}
</style>
