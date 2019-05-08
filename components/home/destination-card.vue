<template>
  <div class="destination-card" :style="getImageUrl()">
    <div class="destination-card__backdrop">
      <div class="destination-card__title-box">
        <div class="destination-card__title">{{ title }}</div>
        <div class="destination-card__subtitle">{{subtitle}}</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/colors.scss";
.destination-card {
  height: 250px;
  max-height: calc(80vw / 1.66);
  width: 500px;
  max-width: 80vw;
  background-color: red;
  border-radius: 8px;
  background-size: cover;
  background-position: 50% 50%;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  &__backdrop {
    height: 100%;
    border-radius: 8px;
    background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5));
    display: grid;
    align-items: center;
    justify-items: center;
  }
  &__title-box {
    color: $white;
    border-radius: 2px;
    border: 1px solid $white;
    padding: $padding;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.4);
  }
  &__title {
    text-transform: uppercase;
    font-weight: bold;
    padding-bottom: $padding/2;
  }
}
</style>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    image: String,
    title: String,
    subtitle: String
  },
  methods: {
    getImageUrl() {
      return `background-image: url(https://tripfixed.com/destination-images/header/${
        this.image
      }.jpg)`;
    }
  }
});
</script>
