<template>
  <div class="destinations">
    <h2 class="destinations__title">Favorite Vacation Destinations</h2>
    <p
      class="destinations__explanation"
    >Find your favorite destinations all in one place. Whether you are planning a city trip or a beach holiday. We check thousands of flights every day to keep you up-to-date.</p>
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
  padding: $padding * 2;
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
