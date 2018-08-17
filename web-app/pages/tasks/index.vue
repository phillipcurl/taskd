<template>
  <div>
    <h1>Tasks</h1>
    <h1>{{user.email}}</h1>
    <button @click="logout">logout</button>
  </div>
</template>

<script>
export default {
  layout: 'authenticated',
  computed: {
    user() {
      return this.$auth.state.user;
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
