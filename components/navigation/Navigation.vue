<template>
  <div class="navigation">
    <div
      class="navigation--pane"
      v-bind:class="{'navigation--pane__active':isPaneOpen}"
      v-touch:swipe.left="togglePane"
    >asf</div>
    <div
      class="navigation--backdrop"
      v-bind:class="{'navigation--backdrop__active':isPaneOpen}"
      @click="togglePane"
    ></div>
    <nav class="navigation--bar">
      <MenuIcon :size="32" @click="togglePane"/>asd
      <LoginIcon :size="32"/>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
.navigation {
  position: sticky;
  top: 0;
  &--bar {
    height: 64px;
    background: #fafafa;
    display: grid;
    grid-template-columns: 100px 1fr 100px;
    align-items: center;
    justify-items: center;
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
      0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  }
  &--pane {
    transition: transform 0.3s ease;
    z-index: 2;
    position: fixed;
    top: 0;
    bottom: 0;
    transform: translateX(-100%);
    width: 400px;
    max-width: 80vw;
    background: #fafafa;
    &__active {
      transform: translateX(0);
    }
  }
  &--backdrop {
    z-index: 1;
    opacity: 0;
    visibility: hidden;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    transition: opacity 0.3s ease;
    &__active {
      opacity: 1;
      visibility: visible;
    }
  }
}
</style>


<script>
import MenuIcon from "vue-material-design-icons/Menu.vue";
import LoginIcon from "vue-material-design-icons/AccountOutline.vue";
import Vue from "vue";
import Vue2TouchEvents from "vue2-touch-events";

Vue.use(Vue2TouchEvents);

export default {
  data: function() {
    return {
      isPaneOpen: false
    };
  },
  methods: {
    togglePane() {
      this.isPaneOpen = !this.isPaneOpen;
    }
  },
  components: {
    MenuIcon,
    LoginIcon
  }
};
</script>
