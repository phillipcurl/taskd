<template>
  <form @submit.prevent="formSubmit" class="">
    <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
      <div class="mt3">
        <label class="db fw6 lh-copy f6" for="email">Task</label>
        <input v-model="taskTitle" 
              class="pa2 input-reset ba bg-transparent w-100" 
              type="text" 
              name="task-title" 
              id="task-title"
              required
              autofocus>
      </div>
    </fieldset>
    <div v-if="hasError" class="mb3 pa3 bg-washed-red lh-title">
      <span class="f6">{{ error }}</span>
    </div>
    <div class="">
      <button class="b ph3 pv2 input-reset button-reset ba b--black bg-transparent grow pointer f6 dib" 
              type="submit">
        Save
      </button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      isLoading: false,
      formSubmitted: false,
      hasError: false,
      error: '',
      taskTitle: ''
    };
  },
  methods: {
    async formSubmit() {
      this.isLoading = true;
      await this.$store.dispatch('tasks/captureTask', this.taskTitle);
      this.isLoading = false;
    }
  }
};
</script>

<style>
</style>
