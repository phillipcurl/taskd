<template>
  <div class="pv4 ph2 ph3-m ph4-l">
    <h1 class="mt0 mb3 lh-title pl2">Tasks</h1>
    <section class="flex flex-wrap justify-between">
      <article v-for="task in allTasks" 
              :key="task.id"
              class="w-33-l w-50-m w-100 pa2 mb2">
        <task-card :task="task" />
        <!-- <nuxt-link :to="`/tasks/${task.id}`" class="db link mb3">
          {{task.title}}
        </nuxt-link> -->
      </article>
    </section>
  </div>
</template>

<script>
import allTasks from '~/apollo/queries/allTasks';
import TaskCard from '~/components/task/TaskCard.vue';

export default {
  authenticated: true,
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
      } catch (err) {
        alert('Error logging out :(');
      }
    }
  },
  components: {
    TaskCard
  }
};
</script>

<style>
</style>
