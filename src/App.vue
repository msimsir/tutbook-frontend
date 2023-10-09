<script setup lang="ts">
import { RouterView, useRoute } from 'vue-router';

import { computed, ref, watchEffect } from 'vue';
import HeaderLayout from './components/layout/HeaderLayout.vue';
import { profileLocalStorage } from './constants';
import { useAuth } from './composables/useAuth';
import router from './router';
const location = useRoute();
const isAuthenticated = computed<boolean>(() => (useAuth(profileLocalStorage) ? true : false));
const isWithHeader = ref<boolean>(true);
watchEffect(() => {
  if (isAuthenticated.value) {
    router.push({ name: 'dashboard' });
  }
});

watchEffect(() => {
  if (location.path === '/login' || location.path === '/register') {
    isWithHeader.value = false;
  } else {
    isWithHeader.value = true;
  }
});
</script>

<template>
  <HeaderLayout v-if="isWithHeader" />
  <RouterView />
</template>

<style lang="scss"></style>
