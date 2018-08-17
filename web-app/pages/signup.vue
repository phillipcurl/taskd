<template>
  <article class="vh-75 dt w-100">
    <div class="dtc v-mid">
      <form @submit.prevent="formSubmit" class="bg-white box-shadow border-accent pa3 pa4-l measure center">
        <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
          <legend class="f3 fw6 ph0 mh0">Sign Up</legend>
          <div class="mt3">
            <label class="db fw6 lh-copy f6" for="email">Email</label>
            <input v-model="email" 
                  class="pa2 input-reset ba bg-transparent w-100" 
                  type="email" 
                  name="email" 
                  id="email"
                  required
                  autofocus>
          </div>
          <div class="mv3">
            <label class="db fw6 lh-copy f6" for="password">Password</label>
            <input v-model="password" 
                  class="b pa2 input-reset ba bg-transparent w-100" 
                  type="password" 
                  name="password" 
                  id="password"
                  required>
          </div>
          <label class="pa0 ma0 lh-copy f6 pointer"><input type="checkbox"> Remember me</label>
        </fieldset>
        <div v-if="hasError" class="mb3 pa3 bg-washed-red lh-title">
          <span class="f6">{{ error }}</span>
        </div>
        <div class="">
          <button class="b ph3 pv2 input-reset button-reset ba b--black bg-transparent grow pointer f6 dib" 
                  type="submit">
            Sign Up
          </button>
        </div>
        <div class="lh-copy mt3">
          <nuxt-link to="/login" class="f6 link dim black dib">
            Already have an account? Sign in
          </nuxt-link>
          <!-- <a href="#0" class="f6 link dim black db">Forgot your password?</a> -->
        </div>
      </form>
    </div>
  </article>
</template>

<script>
export default {
  auth: false,
  data() {
    return {
      isLoading: false,
      formSubmitted: false,
      hasError: false,
      error: '',
      email: '',
      password: ''
    };
  },
  methods: {
    async formSubmit() {
      this.isLoading = true;
      this.hasError = false;
      this.formSubmitted = true;
      try {
        await this.$auth.signup(this.email, this.password);
        this.hasError = false;
        this.$router.push({
          path: `/profile`
        });
      } catch (err) {
        this.error = err.graphQLErrors[0].message;
        this.hasError = true;
      }
      this.formSubmitted = false;
      this.isLoading = false;
    }
  }
};
</script>

<style>
</style>
