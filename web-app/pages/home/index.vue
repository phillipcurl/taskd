<template>
  <!-- <app-masonry class="w-100 pa3 masonry"> -->
  <div class="w-100 pa3 masonry">
    <div class="masonry-sizer col-md-6"></div>
    <section class="flex flex-wrap stats-section">
      <div v-for="j in 4" :key="j + 10" class="w-25-l w-50-m w-100 stats-item">
        <article class="pa3 flex items-center">
          <div class="mr3 flex-grow-0">
            <h4 class="f6 fw4 ml0 mt0 mb1">Section {{ j }}</h4>
            <h5 class="f3 fw6 ml0 mv0">{{ j * 235.34}}</h5>
          </div>
          <trend
            :data="[0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0]"
            :gradient="['#6fa8dc', '#42b983', '#2c3e50']"
            auto-draw
            smooth>
          </trend>
          <!-- <feather-icon icon="activity" class="w2 h2 primary tc flex-grow-1 overflow-hidden" /> -->
        </article>
      </div>
    </section>
    <!-- <h1 class="mv0">Home</h1> -->
    <div class="w-100 flex flex-wrap items-stretch">
      <section class="w-75-l w-60-m w-100 h-100 flex flex-column">
        <div v-for="i in 2" :key="i" class="w-100 pa3">
          <widget-base class="pa3 h5">
            <h1 class="mv0 lh-title tc">Widget {{ i }}</h1>
          </widget-base>
        </div>
      </section>
      <section class="w-25-l w-40-m w-100 flex flex-column content-stretch">
        <div v-for="k in 3" :key="k + 30" class="w-100 pa3">
          <widget-base class="pa3">
            <h1 class="mv0 lh-title tc">Widget {{ k }}</h1>
          </widget-base>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import Trend from 'vuetrend';
import AppMasonry from '~/components/Masonry';
import WidgetBase from '~/components/WidgetBase.vue';
import FeatherIcon from '~/components/FeatherIcon.vue';

export default {
  layout: 'authenticated',
  head() {
    return {
      title: 'Home',
      script: [
        {
          src: 'https://unpkg.com/masonry-layout@4/dist/masonry.pkgd.min.js'
        }
      ]
    };
  },
  computed: {
    user() {
      return this.$auth.state.user;
    }
  },
  components: {
    Trend,
    AppMasonry,
    WidgetBase,
    FeatherIcon
  }
};
</script>

<style lang="scss" scoped>
.stats-item:not(:last-child) {
  @media screen and (min-width: 30em) {
    border-right: 1px solid rgba($color: #000000, $alpha: 0.1);
  }
}
</style>
