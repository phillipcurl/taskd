<template>
  <div class="overflow-x-hidden bg-light-gray app">
    <div class="fixed bg-white sidebar-wrapper">
      <app-sidebar />
    </div>
    <div class="content-wrapper">
      <app-navigation/>
      <main>
        <nuxt/>
      </main>
      <app-footer/>
    </div>
    <apps-sidebar v-if="$auth.state.loggedIn"
                 title="Link Store"
                 width="300px"
                 position="right"
                 :is-open="sidebarOpen"
                 @close="$store.dispatch('closeMenu')">
      <header class="dt w-100 bb b--black-05 pb4 ph4">
        <nuxt-link to="/profile"  class="dtc w2 w3-ns v-mid">
          <img :src="`https://robohash.org/${encodeURI(user.email)}.png`" class="ba b--black-10 db br-100 w2 w3-ns h2 h3-ns"/>
        </nuxt-link>
        <div class="dtc v-mid pl3">
          <h1 class="f6 f5-ns fw6 lh-title black mv0 pb2">{{user.email}}</h1>
          <button @click="logout()" 
                  class="f6 button-reset bg-white ba b--black-10 dim pointer pv1 black-60" 
                  type="button">
            Logout
          </button>
        </div>
      </header>
      <ul class="list pv0 mv0 ph3">
        <li class="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30">Orange</li>
        <li class="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30">Apple</li>
        <li class="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30">Peach</li>
        <li class="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30">Grape</li>
        <li class="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30">Grapefruit</li>
        <li class="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30">Kiwi</li>
        <li class="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30">Orange</li>
        <li class="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30">Apple</li>
        <li class="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30">Peach</li>
        <li class="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30">Grape</li>
        <li class="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30">Grapefruit</li>
        <li class="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30">Kiwi</li>
        <li class="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30">Orange</li>
        <li class="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30">Apple</li>
        <li class="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30">Peach</li>
        <li class="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30">Grape</li>
        <li class="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30">Grapefruit</li>
        <li class="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30">Kiwi</li>
        <li class="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30">Orange</li>
        <li class="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30">Apple</li>
        <li class="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30">Peach</li>
        <li class="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30">Grape</li>
        <li class="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30">Grapefruit</li>
        <li class="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30">Kiwi</li>
      </ul>
    </apps-sidebar>
    <button @click="captureModalOpen = true"
            class="input-reset br-100 f3 fixed pointer bg-primary flex items-center justify-around white capture-fab">
      <feather-icon icon="plus" />
    </button>
    <capture-modal :open.sync="captureModalOpen" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import AppNavigation from '~/components/Navigation.vue';
import AppsSidebar from '~/components/Sidebar2/Sidebar.vue';
import AppSidebar from '~/components/Sidebar.vue';
import AppFooter from '~/components/Footer.vue';
import CaptureModal from '~/components/CaptureModal.vue';
import FeatherIcon from '~/components/Icons/FeatherIcon.vue';

export default {
  data() {
    return {
      captureModalOpen: false
    };
  },
  computed: {
    ...mapGetters({
      sidebarOpen: 'sidebarOpen'
    }),
    user() {
      return this.$auth.state.user;
    }
  },
  watch: {
    $route: function(value) {
      if (this.sidebarOpen) {
        this.$store.dispatch('closeMenu');
      }
    }
  },
  methods: {
    async logout() {
      try {
        await this.$auth.logout();
        this.$store.dispatch('closeMenu');
        this.$router.push({
          path: `/`
        });
      } catch (err) {
        alert('Error logging out :(');
      }
    }
  },
  components: {
    AppNavigation,
    AppsSidebar,
    AppSidebar,
    AppFooter,
    CaptureModal,
    FeatherIcon
  }
};
</script>

<style lang="scss" scoped>
@import '~assets/scss/vars';

.app {
  height: 100%;
  width: 100%;
}

.content-wrapper {
  /* padding-top: 66px;
  min-height: 85vh; */
  /* margin-left: 250px; */
  min-height: 100vh;
  width: calc(100vw - 200px);
  transform: translateX(200px);
  transition: transform 0.2s ease-out, width 0.2s ease-out;
  top: 0;

  @media screen and (max-width: 60em) and (min-width: 30em) {
    width: calc(100vw - 75px);
    transform: translateX(75px);
  }
  @media screen and (max-width: 30em) {
    width: 100%;
    transform: translateX(0);
  }

  main {
    min-height: 94vh;
    padding-top: 64px;
  }
}

.capture-fab {
  bottom: 20px;
  right: 20px;
  height: 50px;
  width: 50px;
  line-height: 50px;
  border: none;
  box-shadow: $box-shadow;

  span {
    width: 30px;
    height: 30px;
    line-height: 30px;
  }
}
</style>
