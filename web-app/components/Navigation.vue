<template>
  <div class="fixed w-100 bg-white navbar">
    <nav class="dt w-100 center pa3"> 
      <div class="dtc v-mid">
        <nuxt-link to="/home" 
                   class="dib w2 h2 v-mid grow primary dim">
          <feather-icon icon="align-justify" class="" />
        </nuxt-link>
      </div>
      <div class="dtc v-mid tr">
        <a @click="$store.dispatch('openMenu')" 
           class="sidebar-toggle dib w2 h2 v-mid gray dim">
           <img :src="`https://robohash.org/${encodeURI(user.email)}.png`" class="db br-100 w-100"/>
        </a>
      </div>
    </nav>
  </div>
</template>

<script>
import FeatherIcon from '~/components/FeatherIcon';

export default {
  computed: {
    user() {
      return this.$auth.state.user;
    }
  },
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
  // box-shadow: $box-shadow;
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
