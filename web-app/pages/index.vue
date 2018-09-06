<template>
  <div>
    <!-- <header>
      <div class="cover bg-left bg-center-l" style="background-image: url(http://mrmrs.github.io/photos/u/011.jpg)">
        <div class="bg-black-80 pv5 pv6-ns">
          <div class="tc-l ph3">
            <h1 class="f2 f1-l fw2 white-90 mb0 lh-title">This is your super impressive headline</h1>
            <h2 class="fw1 f3 white-80 mt3 mb4">Now a subheadline where explain your wonderful new startup even more</h2>
            <nuxt-link to="/signup" class="f6 no-underline grow dib v-mid bg-blue white ba b--blue ph3 pv2 mb3" href="/">
              Sign Up
            </nuxt-link>
          </div>
        </div>
      </div> 
    </header> -->
    <div class="mw8 center ph3">
      <section class="db flex-l vh-75 items-center">
        <div class="mw10 mw6-l pr4-l">
          <img src="https://picsum.photos/600/400?random"> 
        </div>
        <div class="tc tl-l pl4-l">
          <h3 class="db f3 fw6 mb1">alignment</h3>
          <p class="f5 db center lh-copy measure">
            The positioning of text within the page margins. Alignment can be flush left, flush right, justified, or centered. Flush left and flush right are sometimes referred to as left justified and right justified.
          </p>
          <a href="#" class="dib grow">
            Link
          </a>
        </div>
      </section>
    </div>
    <div class="db dt-ns mw8 center pv4 pv5-m pv6-ns ph3">
      <div class="db dtc-ns v-mid">
        <img src="https://picsum.photos/600/400?random" class="mw6-ns"> 
      </div>
      <div class="db dtc-ns v-mid pl4-ns">
        <p class="lh-copy">
          This text is vertically aligned middle, no matter what the height of the image is.
        </p>
      </div>
    </div>

    <article class="vh-75 dt w-100">
      <div class="dtc v-mid mid-gray ph3 ph4-l">
        <h1 class="f2 f2-m f-subheadline-l fw6 mt0 green">Welcome!</h1>
        <h3 class="f5 f4-m f2-l fw6">This is the Dark Matter website starter template.</h3> 
      </div>
    </article>
  </div>
</template>

<script>
export default {
  auth: false,
  authenticated: false,
  head() {
    return {
      title: 'Home'
    };
  },
  fetch({ redirect }) {
    // if (this.$auth.state.loggedIn) {
    //   return redirect('/tasks');
    // }
  }
};
</script>

<style scoped>
</style>
