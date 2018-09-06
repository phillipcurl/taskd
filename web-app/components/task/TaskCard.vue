<template>
  <widget-base class="h-100 flex flex-column">
    <div class="flex-grow-0 pa2 bb b--black-10">
      <h6 class="mv0 lh-title">Header</h6>
    </div>
    <div class="flex-grow-1 pa2">
      <h2 class="mv0 lh-title">{{task.title}}</h2>
    </div>
    <div class="flex-grow-0 pa2 bt b--black-10">
      <nuxt-link :to="`/tasks/${task.id}`" class="link primary">
        <feather-icon icon="link" class="w1 h1 dib" />
        View Task
      </nuxt-link>
    </div>
  </widget-base>
</template>

<script>
import WidgetBase from '~/components/WidgetBase.vue';
import FeatherIcon from '~/components/Icons/FeatherIcon.vue';

export default {
  props: ['task'],
  components: {
    WidgetBase,
    FeatherIcon
  }
};
</script>

<style>
</style>
