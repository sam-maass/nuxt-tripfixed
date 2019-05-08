<template>
  <div class="destinations">
    <h2 class="destinations__title">Explore Trip Destinations</h2>
    <p
      class="destinations__explanation"
    >Not sure where to go yet? Choose from our trip categories and find out where flights are cheapest. Still uncertain? Simply add several destinations to your wish list and you will always keep an eye on the best fares to your travel destinations. Set your travel budget and the dates you can travel on and the vacation planning will be almost automatic.</p>
    <ul class="destinations__list">
      <li>
        <DestinationCard
          image="CUN"
          title="Beach Breaks"
          subtitle="Endless Shorebreak from 399 EUR"
        />
      </li>
      <li>
        <DestinationCard
          image="YYZ"
          title="City Trips"
          subtitle="Stunning Architecture from 69 EUR"
        />
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
@import "@/styles/colors.scss";
.destinations {
  display: grid;
  justify-items: center;
  align-items: center;
  padding: $padding * 8 $padding;
  text-align: center;
  &__explanation {
    max-width: 70ch;
    line-height: 1.33;
    color: #667;
  }
  &__list {
    padding: $padding;
    display: grid;
    gap: $padding;
    grid-auto-flow: column;
    max-width: 90vw;
    overflow: scroll;
    overflow-y: hidden;
    @media (min-width: 1000px) {
      overflow: hidden;
    }
  }
}
</style>

<script lang="ts">
import Vue from "vue";
import DestinationCard from "@/components/home/destination-card.vue";
export default Vue.extend({
  components: { DestinationCard }
});
</script>
