<template>
  <div class="navigation">
    <div
      class="navigation__pane"
      v-bind:class="{'navigation__pane--active':isPaneOpen}"
      v-touch:swipe.left="togglePane"
    >
      <h2>Navigation</h2>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
    </div>
    <div
      class="navigation__backdrop"
      v-bind:class="{'navigation__backdrop--active':isPaneOpen}"
      @click="togglePane"
    ></div>
    <nav class="navigation__bar">
      <i @click="togglePane" class="material-icons">menu</i>
      <span>Title</span>
      <i class="material-icons">person</i>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
.navigation {
  position: sticky;
  top: 0;
  &__bar {
    height: 64px;
    background: #fafafa;
    display: grid;
    grid-template-columns: 100px 1fr 100px;
    align-items: center;
    justify-items: center;
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
      0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  }
  &__pane {
    transition: transform 0.3s ease;
    z-index: 2;
    position: fixed;
    top: 0;
    bottom: 0;
    transform: translateX(-100%);
    width: 400px;
    max-width: 80vw;
    background: #fafafa;
    &--active {
      transform: translateX(0);
    }
  }
  &__backdrop {
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
    &--active {
      opacity: 1;
      visibility: visible;
    }
  }
}
</style>


<script lang="ts">
import Vue from "vue";
import Vue2TouchEvents from "vue2-touch-events";

Vue.use(Vue2TouchEvents);

export default Vue.extend({
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
  components: {}
});
</script>
