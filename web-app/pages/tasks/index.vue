<template>
  <div class="pa3">
    <h1 class="mt0 mb3 lh-title">Tasks</h1>
    <div v-for="task in allTasks" :key="task.id">
      {{task.title}}
    </div>
  </div>
</template>

<script>
import allTasks from '~/apollo/queries/allTasks';

export default {
  layout: 'authenticated',
  computed: {
    user() {
      return this.$auth.state.user;
    }
  },
  apollo: {
    allTasks: {
      query: allTasks
      // variables () {
      //   return {
      //     myVar: this.myVar
      //   }
      // }
    }
  },
  methods: {
    async logout() {
      try {
        await this.$auth.logout();
        // this.$router.push({
        //   path: `/`
        // });
      } catch (err) {
        alert('Error logging out :(');
      }
    }
  }
};
</script>

<style>
</style>
