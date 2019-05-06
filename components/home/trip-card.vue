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
          <small>{{ priceRating(destination.trend, destination.price)}}</small>
        </span>
        <span class="trip-card__price-trend">
          <span>{{destination.trend}}%</span>
          <i v-if="destination.trend < -3" class="material-icons">trending_down</i>
          <i v-else-if="destination.trend > 3" class="material-icons">trending_up</i>
          <i v-else class="material-icons">trending_flat</i>
          <small class="trip-card__price-trend-small">&Oslash; {{destination.averagePrice}} EUR</small>
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
  width: 400px;
  margin: $padding * 2 0;
  color: #444;
  display: grid;
  padding: $padding * 2 $padding * 4;
  gap: $padding;
  grid-template-areas:
    "title title title"
    "budget dates dates"
    "main main main";
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

    padding-top: $padding;
    grid-area: main;
    display: grid;
    gap: $padding;
  }
  &__destination {
    display: grid;
    grid-template-columns: 24px 1fr 100px 100px;
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
      if (price > this.budget) return "trip-card__destination--inactive";
      if (trend > 3) {
        return "trip-card__destination--expensive";
      }
      if (trend < -3) {
        return "trip-card__destination--cheap";
      }
      return "";
    },
    priceRating(trend, price) {
      if (price > this.budget) return "too expensive";
      if (trend > 3) {
        return "bad price";
      }
      if (trend < -3) {
        return "good price";
      }
      return "normal price";
    }
  },
  data: function() {
    return {
      title: "Summer Weekend Trip",
      dates: "May-Aug 2019",
      budget: 120,
      destinations: [
        { name: "Barcelona", price: 40, trend: -12, averagePrice: 52 },
        { name: "Munich", price: 84, trend: 14, averagePrice: 52 },
        { name: "Rome", price: 94, trend: -2, averagePrice: 52 },
        { name: "Venice", price: 123, trend: 2, averagePrice: 52 }
      ]
    };
  }
});
</script>
