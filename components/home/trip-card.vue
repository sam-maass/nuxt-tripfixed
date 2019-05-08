<template>
  <div class="trip-card">
    <div class="trip-card__title">{{ title }}</div>
    <div class="trip-card__budget">
      <i class="material-icons trip-card__icon">attach_money</i>
      max. {{ budget }} EUR
    </div>
    <div class="trip-card__dates">
      <i class="material-icons trip-card__icon">date_range</i>
      {{ dates }}
    </div>
    <ul class="trip-card__destinations">
      <li
        class="trip-card__destination"
        :class="getRowColorClass(destination.trend, destination.price)"
        v-for="destination in destinations"
      >
        <i class="material-icons">compare_arrows</i>
        <span>
          {{destination.name}}
          <br>
          <small>Spain</small>
        </span>
        <span class="trip-card__price">
          {{destination.price}} EUR
          <br>
          <small>&Oslash; {{destination.averagePrice}} EUR</small>
        </span>
        <span class="trip-card__price-trend">
          <span>{{destination.trend}}%</span>
          <i v-if="destination.trend < -3" class="material-icons">trending_down</i>
          <i v-else-if="destination.trend > 3" class="material-icons">trending_up</i>
          <i v-else class="material-icons">trending_flat</i>
          <small
            class="trip-card__price-trend-small"
          >{{ priceRating(destination.trend, destination.price)}}</small>
        </span>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/colors.scss";
.trip-card {
  text-align: left;
  background: $white;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  border-radius: 8px;
  width: 600px;
  max-width: 90vw;
  box-sizing: border-box;
  margin: $padding * 2 0;
  color: #444;
  padding: $padding $padding * 2;
  display: grid;

  gap: $padding;
  grid-template-areas:
    "title title title"
    "budget dates dates"
    "main main main";
  @media (min-width: 1024px) {
    padding: $padding * 2 $padding * 4;
  }
  &__title {
    grid-area: title;
    font-weight: bold;
    justify-self: center;
    font-family: "Comfortaa";
    font-size: 1.3em;
  }
  &__icon {
    color: #bbb;
  }
  &__budget {
    justify-self: left;
    grid-area: budget;
    display: grid;
    align-items: center;
    grid-template-columns: 24px 1fr;
    gap: 8px;
  }
  &__dates {
    justify-self: right;
    grid-area: dates;
    display: grid;
    align-items: center;
    grid-template-columns: 24px 1fr;
    gap: 8px;
  }
  &__destinations {
    border-top: 1px solid #ddd;

    padding-top: $padding * 1.5;
    grid-area: main;
    display: grid;
    gap: $padding;
  }
  &__destination {
    display: grid;
    grid-template-columns:
      24px minmax(max-content, 1fr) minmax(max-content, 1fr)
      minmax(max-content, 1fr);
    gap: $padding;
    text-align: left;
    align-items: center;
    align-content: center;
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
    grid-template-columns: 1fr 24px;
    gap: 0 4px;
    align-items: center;
    justify-self: right;
    justify-items: right;
  }
  &__price-trend-small {
    grid-column: 1/-1;
  }
  &__price {
    justify-items: center;
  }
}
</style>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  methods: {
    getRowColorClass(trend, price) {
      if (price > this.$props.budget) return "trip-card__destination--inactive";
      if (trend > 3) {
        return "trip-card__destination--expensive";
      }
      if (trend < -3) {
        return "trip-card__destination--cheap";
      }
      return "";
    },
    priceRating(trend, price) {
      if (price > this.$props.budget) return "too expensive";
      if (trend > 3) {
        return "bad price";
      }
      if (trend < -3) {
        return "good price";
      }
      return "normal price";
    }
  },
  props: {
    title: String,
    dates: String,
    budget: Number,
    destinations: Array
  }
});
</script>
