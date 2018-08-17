<template>
  <aside class="flex flex-column justify-between h-100 w-100 overflow-hidden sidebar">
    <header v-if="user" class="flex items-center pa3 sidebar-header">
      <nuxt-link to="/profile"  class="w2 w3-ns v-mid">
        <img :src="`https://robohash.org/${encodeURI(user.email)}.png`" class="db br-100 w-100"/>
      </nuxt-link>
      <div class="v-mid pl3">
        <h3 class="f6 fw6 lh-title black mv0 pb2" style="word-wrap: break-word;">{{user.email.substring(0, 15)}}</h3>
        <button @click="logout()" 
                class="f6 button-reset bg-white ba b--black-10 dim pointer pv1 black-60" 
                type="button">
          Logout
        </button>
      </div>
    </header>
    <section class="flex flex-column justify-center sidebar-content h-100">
      <nuxt-link to="/home" class="db f5 link no-underline pv2 ph3 black-30 dim">
        Home
      </nuxt-link> 
      <div class="mb3">
        <h3 class="f5 mt0 mb2 ph3 lh-title ttu black-50">Section One</h3>
        <nuxt-link to="/tasks" class="db f5 link no-underline pv2 ph3 black-30 dim">
          Tasks
        </nuxt-link> 
        <nuxt-link to="/tasks" class="db f5 link no-underline pv2 ph3 black-30 dim">
          Tasks
        </nuxt-link>
        <nuxt-link to="/tasks" class="db f5 link no-underline pv2 ph3 black-30 dim">
          Tasks
        </nuxt-link>
        <nuxt-link to="/tasks" class="db f5 link no-underline pv2 ph3 black-30 dim">
          Tasks
        </nuxt-link>
      </div>
      <div>
        <h3 class="f5 mt0 mb2 ph3 lh-title ttu black-50">Section One</h3>
        <nuxt-link to="/tasks" class="db f5 link no-underline pv2 ph3 black-30 dim">
          Tasks
        </nuxt-link> 
        <nuxt-link to="/tasks" class="db f5 link no-underline pv2 ph3 black-30 dim">
          Tasks
        </nuxt-link>
        <nuxt-link to="/tasks" class="db f5 link no-underline pv2 ph3 black-30 dim">
          Tasks
        </nuxt-link>
        <nuxt-link to="/tasks" class="db f5 link no-underline pv2 ph3 black-30 dim">
          Tasks
        </nuxt-link>
      </div>
    </section>
    <footer class="sidebar-footer">
      footer
    </footer>
  </aside>
</template>

<script>
import FeatherIcon from '~/components/FeatherIcon.vue';

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
.sidebar {
  z-index: 1000;

  &-header {
    flex-grow: 0;
  }

  &-content {
    flex-grow: 1;
  }

  &-footer {
    flex-grow: 0;
  }
}
</style>
