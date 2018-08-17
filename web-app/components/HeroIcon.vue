<template>
  <div v-html="iconPath"></div>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: true
    },
    isLarge: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    iconPath() {
      return require(`~/assets/svg/${
        this.isLarge ? 'heroicons-lg' : 'heroicons-sm'
      }/heroicon-${this.icon}-${this.isLarge ? 'lg' : 'sm'}.svg`);
    }
  }
};
</script>

<style lang="scss" scoped>
@import '~assets/scss/vars';
</style>
