<template>
  <div class="tracking-section">
    <div class="tracking-section__static">
      <div class="tracking-section__content">
        <h2 class="tracking-section__title">Get updates for tracked destinations</h2>
        <p
          class="tracking-section__text"
        >Create your own holiday bucketlist and then fly when it's the cheapest. We search the internet several times a day for the lowest-price flights and let you know when it's the right time. Simply add destinations to your wishlist, select time periods that suit you and you will automatically receive a notification when the flights are the most affordable. Holiday planning simply couldn't be easier.</p>
      </div>
      <div class="tracking-section__image">
        <img src="@/assets/pricing-card.svg">
      </div>
      <NewBargains/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/colors.scss";
.tracking-section {
  padding: $padding * 8 $padding;
  min-height: 200px;
  background: #2c3e50; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to top,
    #4ca1af,
    #2c3e50
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to top,
    #4ca1af,
    #2c3e50
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  color: $white;
  &__static {
    display: grid;
    justify-items: center;
    grid-template-columns: 100%;
    @media (min-width: 1000px) {
      grid-template-columns: 7fr 5fr;
    }
  }
  &__content {
    text-align: center;
    padding: $padding * 2;
  }
  &__text {
    max-width: 70ch;
    line-height: 1.33;
  }
  &__image {
    display: grid;
    justify-content: center;
    align-content: center;
  }
}
</style>


<script lang="ts">
import NewBargains from "@/components/home/new-bargains.vue";
import Vue from "vue";
export default Vue.extend({
  components: { NewBargains }
});
</script>
