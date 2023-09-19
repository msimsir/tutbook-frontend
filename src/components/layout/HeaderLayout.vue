<script setup lang="ts">
import { RouterLink } from 'vue-router';
import IconTutBook from './../icons/IconTutBook.vue';
</script>
<template>
  <header>
    <IconTutBook :style="{ width: 24, height: 24 }" />
    <div class="links-wrapper">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </div>
    <div class="login-wrapper">
      <RouterLink to="/login">Login</RouterLink>
    </div>
  </header>
</template>

<style lang="scss">
@use '../../assets/variables';
header {
  width: 100%;
  height: 48px;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 32px;
  padding-right: 32px;
  background: rgba(149, 173, 190, 0.5);
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.25);
  @mixin navlinks {
    & > a {
      text-decoration: none;
      &:visited {
        color: inherit;
      }
      &:active,
      &:hover {
        color: variables.$light-gray-color;
      }
    }
  }
  & > .links-wrapper {
    width: 100%;
    height: 100%;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    @include navlinks;
  }
  & > .login-wrapper {
    @include navlinks;
  }
}
</style>
