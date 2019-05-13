<template>
  <div class="signup-section">
    <div class="signup-section__content">
      <h2 class="signup-section__title">Pay less for your next flight</h2>
      <p class="signup-section__text">
        <b>Never again miss a bargain flight.</b> With tripfixed you get a steady flow of flight deals and get notified as soon as we find new oportunities. Our algorithms make sure that we crawl the internet multiple times a day and
        <b>our mission is to make affordable travel plans as easy as possible</b>. Join us on our journey to and sign up for free flight price updates.
      </p>
    </div>
    <a href="https://www.tripfixed.com/login">
      <div class="button button--primary">Sign up today</div>
    </a>
  </div>
</template>

<style lang="scss">
@import "@/styles/shared/button.scss";
@import "@/styles/colors.scss";
.signup-section {
  padding: 128px 16px;
  display: grid;
  justify-items: center;
  &__content {
    text-align: center;
    padding: 32px;
  }
  &__text {
    color: $lightGray;
    max-width: 70ch;
    line-height: 1.33;
  }
}
</style>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({});
</script>
