<template>
  <div class="fixed w-100 bg-white navbar">
    <nav class="dt w-100 mw8 center pa3"> 
      <div class="dtc v-mid">
        <nuxt-link :to="$auth.state.loggedIn ? '/profile' : '/'" 
                   class="dib w2 h2 v-mid grow primary dim">
          <!-- <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="link">
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2zM22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
          </svg> -->
          <feather-icon icon="book" class="" />
        </nuxt-link>
      </div>
      <div v-if="$auth.state.loggedIn" class="dtc v-mid tr">
        <a @click="$store.dispatch('openMenu')" 
           class="sidebar-toggle dib w2 h2 v-mid gray dim">
          <feather-icon icon="align-justify" class="" />          
        </a>
      </div>
      <div v-if="!$auth.state.loggedIn" class="dtc v-mid tr">
        <nuxt-link to="/signup" class="f6 fw4 no-underline dib ml2 pv2 ph3 bn near-black dim">
          Sign Up
        </nuxt-link> 
        <nuxt-link to="/login" class="f6 fw4 no-underline dib ml2 pv2 ph3 ba near-black dim">
          Sign In
        </nuxt-link> 
      </div>
    </nav>
  </div>
</template>

<script>
import FeatherIcon from '~/components/FeatherIcon';

export default {
  components: {
    FeatherIcon
  }
};
</script>

<style lang="scss" scoped>
@import '~assets/scss/vars';

.navbar {
  top: 0;
  left: 0;
  z-index: 100;
  box-shadow: $box-shadow;
}
.sidebar-toggle {
  outline: none;
  border: none;
  background: transparent;
}
.sidebar-toggle:hover {
  cursor: pointer;
}
</style>
