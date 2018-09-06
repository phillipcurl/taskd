<template>
  <div @keyup.esc="closeModal" class="global-modal" :class="{'global-modal-show': open}">
    <div @click="closeModal" class="overlay absolute w-100 h-100"></div>
    <div class="global-modal_contents modal-transition">
      <div class="global-modal-header">
        <span @click="closeModal" class="mobile-close"> X </span>
      </div>
      <div class="global-modal-body">
        <div style="width: 400px; height: 400px;" class="bg-white box-shadow border-accent pa3 pa4-l measure center">
          <div v-if="isLoading">LOADING</div>
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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    open: {
      type: Boolean,
      required: true
    }
    // canClose: {
    //   type: Boolean,
    //   default: true
    // }
  },
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
    closeModal() {
      // if (this.open && this.canClose) {
      if (this.open) {
        this.$emit('update:open', false);
      }
    },
    async formSubmit() {
      this.isLoading = true;
      await this.$store.dispatch('tasks/captureTask', this.taskTitle);
      this.isLoading = false;
      this.$router.push({
        path: `/tasks`
      });
      this.$emit('update:open', false);
    }
  }
};
</script>

<style scoped>
.overlay {
  top: 0;
  left: 0;
  z-index: 499;
  background-color: rgba(0, 0, 0, 0.7);
}

.global-modal {
  visibility: hidden;
}

.global-modal_contents {
  width: 50%;
  position: fixed;
  left: 42%;
  margin-left: -16%;
  top: 15%;
  z-index: 500;
  /* min-height: 450px; */
}
.global-modal-header .mobile-close {
  display: none;
}
.global-modal-body {
  width: 100%;
}
.global-modal_close {
  position: absolute;
  right: 2rem;
  top: 2rem;
  text-decoration: none;
  display: none;
}

.global-modal-show {
  visibility: visible;
}

.global-modal-transition {
  transform: scale(0.7);
  opacity: 0;
  transition: all 0.25s;
}

.global-modal-show .global-modal-transition {
  transform: scale(1);
  opacity: 1;
}

@media (max-width: 1139px) {
  .global-modal:after {
    clear: both;
    content: '';
    display: table;
  }
}
@media (max-width: 767px) {
  .global-modal_contents {
    top: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    margin: 0;
  }
  .global-modal-header .mobile-close {
    display: block;
    position: absolute;
    right: 10px;
    top: 10px;
    cursor: pointer;
  }
  .global-modal_close {
    display: block;
  }

  .global-modal-transition {
    transform: translateX(-0) translateY(150%);
  }
}
</style>
