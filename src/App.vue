<script >
//RouterView is imported in main.js, so there's no need to import here
import AppHeader from './components/AppHeader.vue';
export default {
  name: 'App',
  components: { AppHeader },
};
</script>

<template>
  <app-header></app-header>
  <router-view></router-view>
</template>

<style></style>
