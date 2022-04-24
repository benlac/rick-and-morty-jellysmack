<template>
  <the-header></the-header>
  <router-view></router-view>
</template>

<script setup lang="ts">
import TheHeader from './components/layout/TheHeader.vue';
</script>

<style lang="scss">
@import './assets/styles/vars.scss';
@import './assets/styles/reset.css';
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@700&family=Lilita+One&display=swap');

#app {
  font-family: 'Inter', sans-serif;
  // font-family: 'Lilita One', cursive;
  background: rgb(31, 32, 56);
  background: -moz-linear-gradient(
    90deg,
    rgba(31, 32, 56, 1) 0%,
    rgba(7, 8, 36, 1) 20%,
    rgba(17, 13, 50, 1) 40%,
    rgba(30, 31, 52, 1) 60%,
    rgba(30, 31, 53, 1) 80%,
    rgba(37, 34, 69, 1) 100%
  );
  background: -webkit-linear-gradient(
    90deg,
    rgba(31, 32, 56, 1) 0%,
    rgba(7, 8, 36, 1) 20%,
    rgba(17, 13, 50, 1) 40%,
    rgba(30, 31, 52, 1) 60%,
    rgba(30, 31, 53, 1) 80%,
    rgba(37, 34, 69, 1) 100%
  );
  background: linear-gradient(
    90deg,
    rgba(31, 32, 56, 1) 0%,
    rgba(7, 8, 36, 1) 20%,
    rgba(17, 13, 50, 1) 40%,
    rgba(30, 31, 52, 1) 60%,
    rgba(30, 31, 53, 1) 80%,
    rgba(37, 34, 69, 1) 100%
  );
  color: #fff;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:before {
    @keyframes move {
      0% {
        transform: rotate(0deg) translate(-165px) rotate(0deg);
      }
      100% {
        transform: rotate(360deg) translate(-165px) rotate(-360deg);
      }
    }
    animation: move 6s linear infinite;
    filter: blur(168px);
    content: '';
    width: 70vmax;
    height: 70vmax;
    position: absolute;
    left: -20vmin;
    top: -20vmin;
    background: rgb(255, 255, 255);
    background: -moz-linear-gradient(
      319deg,
      rgba(255, 255, 255, 1) 0%,
      rgba(191, 37, 37, 1) 41%,
      rgba(168, 18, 18, 1) 60%,
      rgba(255, 255, 255, 1) 100%
    );
    background: -webkit-linear-gradient(
      319deg,
      rgba(255, 255, 255, 1) 0%,
      rgba(191, 37, 37, 1) 41%,
      rgba(168, 18, 18, 1) 60%,
      rgba(255, 255, 255, 1) 100%
    );
    background: linear-gradient(
      319deg,
      rgba(255, 255, 255, 1) 0%,
      rgba(191, 37, 37, 1) 41%,
      rgba(168, 18, 18, 1) 60%,
      rgba(255, 255, 255, 1) 100%
    );
    pointer-events: none;
    width: 20vmin;
    height: 20vmin;
    left: auto;
    right: 30vmin;
    top: auto;
    bottom: 0;
    transform-origin: 20% 20%;
    box-shadow: 25px -22px 183px 79px #fff;
    transform: rotateZ(160deg);
  }
}
</style>
