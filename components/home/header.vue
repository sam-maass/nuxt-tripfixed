<template>
  <div class="header">
    <nav class="header__nav">
      <div class="header__icon"></div>
      <a href="https://tripfixed.com/login" class="header__button">
        <i class="material-icons">person</i> Login
      </a>
    </nav>

    <h1 class="header__title">Discover Cheap Flights</h1>
    <h2 class="header__subtitle">Track Prices - Find Bargains - Relax</h2>
    <input type="text" class="header__search">
    <div class="header__info">Find departing from Europe</div>
  </div>
</template>

<style lang="scss">
@import "@/styles/colors.scss";
.header {
  background: #130f27; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to top,
    #48b1bf,
    #130f27
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to top,
    #48b1bf,
    #130f27
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  color: $white;
  display: grid;
  align-items: center;
  justify-items: center;
  text-align: center;
  padding: $padding * 12 $padding;

  &__nav {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    display: grid;
    grid-template-areas: "logo login";
    text-align: left;
    align-items: center;
  }

  &__button {
    grid-area: login;
    display: grid;
    grid-auto-flow: column;
    gap: $padding/2;
    align-items: center;
    justify-self: right;
    padding: $padding/2;
    cursor: pointer;
    font-weight: bold;
    border-radius: 4px;
    margin: $padding;
    &:hover {
      transition: background-color 300ms;
      background: rgba(255, 255, 255, 0.3);
    }
  }

  &__icon {
    grid-area: logo;
    justify-self: left;
    width: 150px;
    height: 32px;
    margin: $padding * 2;
    background-image: url(~assets/logo.svg);
    background-size: contain;
    background-repeat: no-repeat;
  }
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
    &:hover {
      background: rgba(255, 255, 255, 0.3);
    }
  }
}
</style>


<script lang="ts">
import Vue from "vue";
export default Vue.extend({});
</script>

