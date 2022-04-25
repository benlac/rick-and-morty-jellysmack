<template>
  <button class="base__button">
    <slot></slot>
  </button>
</template>

<style scoped lang="scss">
.base__button {
  background: transparent;
  color: #fff;
  border: 1px solid grey;
  border-radius: 20px;
  padding: 0.4rem 1rem;
  cursor: pointer;
  transition: all 1s;

  &:hover {
    background: rgba(196, 196, 196, 0.174);
    box-shadow: inset 4px -4px 4px rgba(165, 165, 165, 0.548),
      inset -4px 4px 4px rgba(255, 255, 255, 0.548);
    backdrop-filter: blur(32.8px);
    transform: scale(1.1);
  }
  &:disabled {
    color: #dac8c8;
    cursor: not-allowed;
    &:hover {
      background-color: transparent;
      box-shadow: none;
      backdrop-filter: none;
      transform: none;
    }
  }
}
</style>
