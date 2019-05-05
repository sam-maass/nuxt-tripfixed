<template>
  <div class="trip-card">
    <div class="trip-card__title">{{ title }}</div>
    <div class="trip-card__budget">< {{ budget }} EUR</div>
    <div class="trip-card__dates">{{ dates }}</div>
    <ul class="trip-card__destinations">
      <li
        class="trip-card__destination"
        :class="getRowColorClass(destination.trend, destination.price)"
        v-for="destination in destinations"
      >
        <span>{{destination.name}}</span>

        <span class="trip-card__price-trend">
          <i v-if="destination.trend < -3" class="material-icons">trending_down</i>
          <i v-else-if="destination.trend > 3" class="material-icons">trending_up</i>
          <i v-else class="material-icons">trending_flat</i>
          {{destination.trend}}%
        </span>
        <span>{{destination.price}} EUR</span>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/colors.scss";
.trip-card {
  text-align: left;
  box-sizing: border-box;
  background: $white;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  width: 400px;
  margin-top: $padding * 4;
  color: #444;
  display: grid;
  padding: $padding;
  grid-template-areas:
    "title budget dates"
    "main main main";
  &__title {
    grid-area: title;
    font-weight: bold;
  }
  &__budget {
    grid-area: budget;
  }
  &__dates {
    grid-area: dates;
  }
  &__destinations {
    padding-top: 2 * $padding;
    grid-area: main;
    display: grid;
    gap: $padding;
  }
  &__destination {
    display: grid;
    grid-template-columns: 1fr 100px 100px;
    gap: $padding;
    text-align: left;
    align-items: center;
    &--cheap {
      color: green;
      font-weight: bold;
    }
    &--expensive {
      color: red;
    }
    &--inactive {
      color: #aaa;
    }
  }
  &__price-trend {
    display: grid;
    grid-template-columns: 24px 1fr;
    gap: 4px;
    align-items: center;
  }
}
</style>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  methods: {
    getRowColorClass(trend, price) {
      if (price > this.budget) return "trip-card__destination--inactive";
      if (trend > 3) {
        return "trip-card__destination--expensive";
      }
      if (trend < -3) {
        return "trip-card__destination--cheap";
      }
      return "";
    }
  },
  data: function() {
    return {
      title: "Summer Weekend Trip",
      dates: "May-Aug",
      budget: 120,
      destinations: [
        { name: "Barcelona", price: 40, trend: -12 },
        { name: "Munich", price: 84, trend: 14 },
        { name: "Rome", price: 94, trend: -2 },
        { name: "Venice", price: 123, trend: 2 }
      ]
    };
  }
});
</script>
