<template>
  <div class="app">
    <app-navigation />
    <main>
      <nuxt/>
    </main>
    <app-footer/>
  </div>
</template>

<script>
import AppNavigation from '~/components/Navigation.vue';
import AppFooter from '~/components/Footer.vue';

export default {
  components: {
    AppNavigation,
    AppFooter
  }
};
</script>

<style scoped>
main {
  padding-top: 66px;
  min-height: 85vh;
}
</style>
