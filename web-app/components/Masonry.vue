<template>
  <div class="masonry" ref="masonry">
    <slot />
  </div>
</template>

<script>
// import Masonry from 'masonry-layout';

export default {
  mounted() {
    this.$nextTick(() => {
      new Masonry(this.$refs.masonry, {
        itemSelector: '.masonry-item',
        columnWidth: '.masonry-sizer',
        percentPosition: true
      });
    });
  }
};
</script>

<style lang="scss" scoped>
</style>
