<template>
  <div v-if="user">
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
        this.$auth.logout();
        // this.$router.push({
        //   path: `/login`
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
