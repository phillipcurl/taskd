<template>
  <div class="app">
    <div class="fixed w-100 bg-white navbar">
      <nav class="dt w-100 center pa3"> 
        <div class="dtc v-mid">
          <nuxt-link to="/" 
                     class="dib w2 h2 v-mid grow primary dim">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="link">
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2zM22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
            </svg>
          </nuxt-link>
        </div>
        <div class="dtc v-mid tr">
          <nuxt-link to="/signup" class="f6 fw4 no-underline dib ml2 pv2 ph3 bn near-black dim">
            Sign Up
          </nuxt-link> 
          <nuxt-link to="/login" class="f6 fw4 no-underline dib ml2 pv2 ph3 ba near-black dim">
            Sign In
          </nuxt-link> 
        </div>
      </nav>
    </div>
    <main>
      <nuxt/>
    </main>
    <app-footer/>
  </div>
</template>

<script>
import AppFooter from '~/components/Footer.vue';
import FeatherIcon from '~/components/Icons/FeatherIcon';

export default {
  fetch({ redirect }) {
    if (this.$auth.state.loggedIn) {
      return redirect('/tasks');
    }
  },
  components: {
    AppFooter,
    FeatherIcon
  }
};
</script>

<style scoped>
main {
  padding-top: 66px;
  min-height: 85vh;
}
</style>
