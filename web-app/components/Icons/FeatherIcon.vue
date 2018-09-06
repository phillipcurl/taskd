<template>
  <span v-html="iconPath"></span>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: true
    }
  },
  computed: {
    iconPath() {
      return require(`~/assets/svg/feather/${this.icon}.svg`);
    }
  }
};
</script>

<style lang="scss" scoped>
@import '~assets/scss/vars';
</style>
