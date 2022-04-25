<template>
  <router-link :to="{ name: 'details', params: { id } }">
    <div class="card">
      <img class="card__img" :src="image" :alt="`picture of ${name}`" />
      <p class="card__read__more">Read more about this character</p>
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
  image: string;
}>();
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
}
.card {
  width: 300px;
  height: 270px;
  border-radius: 27px;
  margin: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  overflow: hidden;
  box-shadow: 0 0 5px 0 hsla(0, 0%, 47.1%, 0.3);
  transition-duration: 0.3s;
  position: relative;
  background: #000;

  .card__read__more {
    display: none;
    position: absolute;
    top: 37%;
    border: 50%;
    bottom: 50%;
    color: #fff;
    text-decoration: underline;
    font-size: 0.8em;
  }
  &:hover {
    transform: scale(1.02);
    box-shadow: 0 10px 20px 0 hsla(0, 0%, 47.1%, 0.3);
    .card__img {
      opacity: 0.5;
    }

    .card__read__more {
      display: block;
    }
  }
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
    background: #fff;

    .card__text {
      color: #44281d;
      font-family: 'Lilita One', cursive;
      font-size: 1.6em;
    }
  }
}
</style>
