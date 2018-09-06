<template>
  <aside class="fixed bg-white sidebar">
    <header v-if="user" class="fixed flex items-center sidebar-header">
      <nuxt-link to="/home" class="db link no-underline pv2 ph3 dim">
        <h2 class="f4 lh-title mv0 ttu primary">Home</h2>
      </nuxt-link> 
    </header>
    <section class="ph3 sidebar-content">
      <div class="mb3">
        <h3 class="f6 tracked mt0 mb2 lh-title ttu sidebar-content--heading">Tasks</h3>
        <nuxt-link to="/tasks/overview" class="db f5 f6-m tc-m link no-underline pv2 ph1 text-light bl bt-none bw2 bw0-m b--transparent dim">
          <feather-icon icon="home" class="w1 w2-m h1 h2-m dib sidebar-content--link-icon" />
          <span class="ml2 ml0-m sidebar-content--link-text">Overview</span>
        </nuxt-link> 
        <nuxt-link to="/tasks/upcoming" class="db f5 f6-m tc-m link no-underline pv2 ph3 ph1-m text-light bl bw2 b--transparent dim">
          <feather-icon icon="home" class="w1 w2-m h1 h2-m dib sidebar-content--link-icon" />
          <span class="ml2 ml0-m sidebar-content--link-text">Upcoming</span>
        </nuxt-link>
        <nuxt-link to="/tasks" exact class="db f5 f6-m tc-m link no-underline pv2 ph3 ph1-m text-light bl bw2 b--transparent dim">
          <feather-icon icon="home" class="w1 w2-m h1 h2-m dib sidebar-content--link-icon" />
          <span class="ml2 ml0-m sidebar-content--link-text">View All</span>
        </nuxt-link>
        <!-- <nuxt-link to="/tasks" class="db f5 link no-underline pv2 ph3 text-light dim">
          Tasks
        </nuxt-link> -->
      </div>
      <div class="mb3">
        <h3 class="f5 mt0 mb2 ph3 lh-title ttu sidebar-content--heading">Categories</h3>
        <nuxt-link to="/tasks" class="db f5 link no-underline pv2 ph3 text-light dim">
          Tasks
        </nuxt-link> 
        <nuxt-link to="/tasks" class="db f5 link no-underline pv2 ph3 text-light dim">
          Tasks
        </nuxt-link>
        <nuxt-link to="/tasks" class="db f5 link no-underline pv2 ph3 text-light dim">
          Tasks
        </nuxt-link>
        <nuxt-link to="/tasks" class="db f5 link no-underline pv2 ph3 text-light dim">
          Tasks
        </nuxt-link>
      </div>
      <div>
        <h3 class="f5 mt0 mb2 ph3 lh-title ttu sidebar-content--heading">Tags</h3>
        <nuxt-link to="/tasks" class="db bl f5 link no-underline pv2 ph3 text-light dim">
          Tasks
        </nuxt-link> 
        <nuxt-link to="/tasks" class="db f5 link no-underline pv2 ph3 text-light dim">
          Tasks
        </nuxt-link>
        <nuxt-link to="/tasks" class="db f5 link no-underline pv2 ph3 text-light dim">
          Tasks
        </nuxt-link>
        <nuxt-link to="/tasks" class="db f5 link no-underline pv2 ph3 text-light dim">
          Tasks
        </nuxt-link>
      </div>
    </section>
    <footer class="absolute sidebar-footer w-100">
      footer
    </footer>
  </aside>
</template>

<script>
import FeatherIcon from '~/components/Icons/FeatherIcon.vue';

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

.sidebar {
  z-index: 1000;
  width: 200px;
  height: 100vh;
  top: 0;
  left: 0;
  // overflow-y: auto;

  @media screen and (max-width: 60em) and (min-width: 30em) {
    width: 75px;
  }
  @media screen and (max-width: 30em) {
    transform: translateX(-200px);
  }

  &-header {
    height: 56px;
  }

  &-content {
    overflow-y: auto;
    margin-top: 56px;
    height: calc(100vh - 106px);
    // padding-bottom: 56px;

    .nuxt-link-active {
      border-color: $primary-color;

      h3 {
        border-color: inherit;
      }
    }

    &--heading {
      @media screen and (max-width: 60em) and (min-width: 30em) {
        display: none;
      }
    }

    &--link {
      &-icon {
      }

      // &-text {
      //   @media screen and (max-width: 60em) and (min-width: 30em) {
      //     display: none;
      //   }
      // }
    }
  }

  &-footer {
    height: 50px;
    bottom: 0;
    left: 0;
    // flex-grow: 0;
  }
}
</style>
