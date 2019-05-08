<template>
  <div class="footer">
    <div class="footer__row">
      <ul class="footer__list">
        <li class="footer__list-header">About Tripfixed</li>
        <li class="footer__list-item">
          <nuxt-link to="/about">What we do</nuxt-link>
        </li>
        <li class="footer__list-item">
          <nuxt-link to="/legal">Privacy Policy</nuxt-link>
        </li>
        <li class="footer__list-item">
          <nuxt-link to="/terms">Terms & Conditions</nuxt-link>
        </li>
      </ul>
      <ul class="footer__list">
        <li class="footer__list-header">Get Social</li>
        <li class="footer__list-item">
          <a href="https://twitter.com/tripfixed">Twitter</a>
        </li>
        <li class="footer__list-item">
          <a href="https://www.instagram.com/tripfixed/">Instagram</a>
        </li>
        <li class="footer__list-item">
          <a href="https://www.facebook.com/tripfixedcom/">Facebook</a>
        </li>
      </ul>
    </div>
    <div class="footer__row">
      <ul class="footer__list">
        <li class="footer__list-header">Themes</li>
        <li class="footer__list-item">Beach Destinations</li>
        <li class="footer__list-item">City Trips</li>
      </ul>
    </div>
    <div class="footer__row">
      <ul class="footer__list">
        <li class="footer__list-header">Country Pages</li>
        <li v-for="countryLink in countryLinks" class="footer__list-item">
          <a :href="'/'+ countryLink.slug">Flights from {{countryLink.name}}</a>
        </li>
      </ul>
    </div>
    <div class="footer__copyright">© Tripfixed.com</div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/colors.scss";
.footer {
  margin: $padding * 4 $padding;
  max-width: 1024px;
  display: grid;
  justify-items: center;
  @media (min-width: 1000px) {
    margin: $padding * 4 auto;
    grid-template-columns: 1fr 1fr 1fr;
  }
  gap: $padding;

  &__list {
    padding-bottom: $padding * 2;
    line-height: 1.33;
  }

  &__list-header {
    font-weight: bold;
    padding-bottom: $padding/2;
  }

  &__list-item {
    color: $gray;
    padding-left: $padding/2;
    &:hover {
      color: #445;
    }
  }
  &__copyright {
    grid-column: 1 / -1;
    color: $gray;
  }
}
</style>


<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data: function() {
    return {
      countryLinks: [
        { name: "Austria", slug: "from-Austria" },
        { name: "Austria", slug: "from-Austria" },
        { name: "Austria", slug: "from-Austria" },
        { name: "Austria", slug: "from-Austria" }
      ]
    };
  }
});
</script>
