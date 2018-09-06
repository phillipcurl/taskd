<template>
  <nav class="fixed w-100 flex items-center justify-between bg-white navbar pa2">
    <nuxt-link to="/home" 
               class="primary dim flex-grow-0" style="width: 27px;">
      <feather-icon icon="menu" class="" />
    </nuxt-link>
    <div class="ph3 dib-ns dn tc flex-grow-1">
      <h6 class="mv0 lh-title">Active Task</h6>
    </div>
    <div class="flex-grow-1 flex items-center justify-end">
      <input v-model="search" 
            class="f6 pv1 ph2 br2 input-reset ba bg-near-white b--near-white w-100 mv0 mr3" 
            type="text" 
            name="search"
            placeholder="Search for tasks..."
            style="width: 200px;"
            id="search">
      <nuxt-link to="/home" 
                 class="dn db-ns gray dim mr3" style="width: 27px;">
        <feather-icon icon="help-circle" class="" />
      </nuxt-link>
      <a @click="$store.dispatch('openMenu')" 
          class="sidebar-toggle gray dim relative" style="width: 40px;">
          <span class="f6 tc absolute ba br-100 bg-red white" style="top: -5px; right: -5px; width: 25px; height: 25px; line-height: 12px; padding: 5px;">3</span>
          <img src="/icon.png" class="db br-100 w-100"/>
          <!-- <img :src="`https://robohash.org/${encodeURI(user.email)}.png`" class="db br-100 w-100"/> -->
      </a>
    </div>
  </nav>
</template>

<script>
import FeatherIcon from '~/components/Icons/FeatherIcon';

export default {
  data() {
    return {
      search: ''
    };
  },
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
  position: fixed;
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
