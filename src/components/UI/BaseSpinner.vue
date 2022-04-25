<template>
  <div class="spinner">
    <div class="spinner-item"></div>
    <div class="spinner-item"></div>
    <div class="spinner-item"></div>
  </div>
</template>

<style lang="scss" scoped>
.spinner {
  position: relative;
  width: 75px;
  height: 75px;
  transform: rotate(45deg);

  .spinner-item {
    position: absolute;
    width: calc(75px / 2.5);
    height: calc(75px / 2.5);
    border: 4px solid #1dafcb;
  }

  .spinner-item:nth-child(1) {
    top: 0;
    left: 0;
    animation: spinner3A 5000ms linear infinite;

    @keyframes spinner3A {
      0%,
      8.33%,
      16.66%,
      100% {
        transform: translate(0%, 0%);
      }

      24.99%,
      33.32%,
      41.65% {
        transform: translate(100%, 0%);
      }

      49.98%,
      58.31%,
      66.64% {
        transform: translate(100%, 100%);
      }

      74.97%,
      83.30%,
      91.63% {
        transform: translate(0%, 100%);
      }
    }
  }

  .spinner-item:nth-child(2) {
    top: 0;
    left: 38px;
    animation: spinner3B 5000ms linear infinite;

    @keyframes spinner3B {
      0%,
      8.33%,
      91.63%,
      100% {
        transform: translate(0%, 0%);
      }

      16.66%,
      24.99%,
      33.32% {
        transform: translate(0%, 100%);
      }

      41.65%,
      49.98%,
      58.31% {
        transform: translate(-100%, 100%);
      }

      66.64%,
      74.97%,
      83.30% {
        transform: translate(-100%, 0%);
      }
    }
  }

  .spinner-item:nth-child(3) {
    top: 38px;
    left: 38px;
    animation: spinner3C 5000ms linear infinite;

    @keyframes spinner3C {
      0%,
      83.30%,
      91.63%,
      100% {
        transform: translate(0, 0);
      }

      8.33%,
      16.66%,
      24.99% {
        transform: translate(-100%, 0);
      }

      33.32%,
      41.65%,
      49.98% {
        transform: translate(-100%, -100%);
      }

      58.31%,
      66.64%,
      74.97% {
        transform: translate(0, -100%);
      }
    }
  }
}
</style>
