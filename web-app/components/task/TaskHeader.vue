<template>
  <header class="flex items-center justify-between bb b--black-10 ph3 pv2">
    <button class="no-underline input-reset pointer inline-flex dim items-center tc bg-white br2 b--black-10 pa2" type="button">
      <feather-icon icon="check" class="dib w1 h1 green" />
      <span class="f6 ml2 pr2">Mark Complete</span>
    </button>
    <div>
      <button class="no-underline input-reset pointer inline-flex items-center tc bg-white bn pa2" 
              type="button"
              data-balloon="Add a Subtask"
              data-balloon-pos="down">
        <feather-icon icon="git-pull-request" class="dib w1 h1" />
      </button>
      <button @click="copyToClipboard"
              class="no-underline input-reset pointer inline-flex items-center tc bg-white bn pa2" 
              type="button"
              data-balloon="Copy Task URL"
              data-balloon-pos="down">
        <feather-icon icon="link" class="dib w1 h1" />
      </button>
      <button class="no-underline input-reset pointer inline-flex items-center tc bg-white bn pa2" 
              type="button"
              data-balloon="More actions"
              data-balloon-pos="down">
        <feather-icon icon="more-horizontal" class="dib w1 h1" />
      </button>
    </div>
  </header>
</template>

<script>
import FeatherIcon from '~/components/Icons/FeatherIcon.vue';

export default {
  props: ['task'],
  components: {
    FeatherIcon
  },
  methods: {
    copyToClipboard() {
      const el = document.createElement('textarea');
      const getUrl = window.location;
      const baseUrl =
        getUrl.protocol +
        '//' +
        getUrl.host +
        '/' +
        getUrl.pathname.split('/')[1];
      el.value = `${baseUrl}/${this.task.id}`;
      el.setAttribute('readonly', '');
      el.style.position = 'absolute';
      el.style.left = '-9999px';
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
      this.$toast.success('Copied to clipboard!', {
        duration: 2000
      });
    }
  }
};
</script>

<style>
</style>
