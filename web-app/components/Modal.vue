<template>
  <div @keyup.esc="closeModal" class="global-modal" :class="{'global-modal-show': open}">
    <div @click="closeModal" class="overlay absolute w-100 h-100"></div>
    <div class="global-modal_contents modal-transition">
      <div class="global-modal-header">
        <span @click="closeModal" class="mobile-close"> X </span>
      </div>
      <div class="global-modal-body">
        <slot />
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
    },
    canClose: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    closeModal() {
      if (this.open && this.canClose) {
        this.$emit('update:open', false);
      }
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
