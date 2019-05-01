<template>
  <div class="header">
    <h1 class="header__title">Discover Cheap Flights</h1>
    <h2 class="header__subtitle">Track Prices - Find Bargains - Relax</h2>
    <input type="text" class="header__search">
    <div class="header__info">Find departing from Europe</div>
  </div>
</template>

<style lang="scss">
@import "@/styles/colors.scss";
.header {
  background: #0f2027; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to top,
    #2c5364,
    #203a43,
    #0f2027
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to top,
    #2c5364,
    #203a43,
    #0f2027
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  color: $white;
  display: grid;
  align-items: center;
  justify-items: center;
  text-align: center;
  padding: $padding * 8 $padding;
  &__title {
    font-family: "Comfortaa", sans-serif;
    padding-bottom: $padding/2;
    font-size: 24px;
  }
  &__subtitle {
    /* font-family: "Comfortaa", sans-serif; */
    padding-bottom: $padding;
    font-size: 18px;
  }
  &__search {
    border: 1px solid $white;
    text-align: center;
    color: $white;
    padding: $padding/2 $padding;
    margin: 16px;
    border-radius: 12px;
    background-color: rgba(255, 255, 255, 0.2);
    font-size: 24px;
    outline: none;
  }
}
</style>


<script lang="ts">
import Vue from "vue";
export default Vue.extend({});
</script>

