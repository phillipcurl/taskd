<template>
  <div class="relative dib dropdown">
    <button ref="dropdownButton"
            @click="dropdownClicked"
            class="no-underline input-reset pointer inline-flex items-center tc bg-white pa2" 
            :class="{'br2 b--black-10': outlined}"
            type="button">
      <feather-icon v-if="icon !== ''" 
                    :icon="icon" 
                    class="dib w1 h1" />
      <span v-if="text !== ''" class="f6 ml2">{{text}}</span>
    </button>
    <div ref="dropdownContent">
      <slot />
    </div>
  </div>
</template>

<script>
import FeatherIcon from '~/components/Icons/FeatherIcon.vue';

export default {
  props: {
    text: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    },
    outlined: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isOpen: false
    };
  },
  methods: {
    dropdownClicked() {
      console.log(this.$refs);
    }
  },
  components: {
    FeatherIcon
  }
};
</script>

<style lang="scss" scoped>
.dropdown {
}
</style>
