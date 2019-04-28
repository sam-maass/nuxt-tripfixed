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
  background: $orange;
  color: $white;
  display: grid;
  align-items: center;
  justify-items: center;
  text-align: center;
  padding: $padding * 4 $padding * 2;
  &__title {
    font-family: "Comfortaa", sans-serif;
    padding-bottom: $padding/2;
    font-size: 24px;
  }
  &__subtitle {
    font-family: "Comfortaa", sans-serif;
    padding-bottom: $padding;
    font-size: 18px;
  }
  &__search {
    border: 1px solid $white;
    text-align: center;
    color: $white;
    padding: 8px 16px;
    margin: 16px;
    border-radius: 12px;
    background-color: $orange-light;
    font-size: 24px;
  }
}
</style>


<script lang="ts">
import Vue from "vue";
export default Vue.extend({});
</script>

