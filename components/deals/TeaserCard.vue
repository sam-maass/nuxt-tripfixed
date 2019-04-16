<template>
  <nuxt-link :to="path">
    <div class="deal-card" :style="style">
      <div class="deal-card__content">
        <div class="deal-card__badge">
          <div class="deal-card__old-price">{{deal.priceLimit}} {{deal.currency}}</div>
          <div class="deal-card__price">{{deal.minPrice}} {{deal.currency}}</div>
        </div>
        <div class="deal-card__name-section">
          <div class="deal-card__title">{{deal.title}}</div>
          <div class="deal-card__subtitle">{{deal.subtitle}}</div>
        </div>
        <div class="deal-card__bottom-section">
          <div class="deal-card__bottom-item">
            <div class="deal-card__bottom-item-title">Availability</div>
            <div class="deal-card__bottom-item-value">{{availableString}}</div>
          </div>
          <div class="deal-card__bottom-item">
            <div class="deal-card__bottom-item-title">updated</div>
            <div class="deal-card__bottom-item-value">{{timeAgo}}</div>
          </div>
        </div>
      </div>
    </div>
  </nuxt-link>
</template>

<style lang="scss" scoped>
@import "@/styles/colors.scss";
.deal-card {
  width: 100%;
  max-width: 400px;
  background-size: cover;
  min-height: 200px;
  border-radius: 4px;
  color: $white;
  &__content {
    height: 200px;
    display: grid;
    background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5));
  }
  &__badge {
    letter-spacing: 0.05em;
    line-height: 1.6em;
    font-size: 0.8em;
    margin: 8px;
    padding: 2px 12px;
    font-weight: bold;
    border-radius: 8px;
    background-color: $orange;
    justify-self: right;
    align-self: start;
    text-align: center;
  }
  &__old-price {
    font-size: smaller;
    text-decoration: line-through;
  }
  &__name-section {
    margin-bottom: 8px;
    text-align: center;
  }
  &__title {
    font-family: "Comfortaa";
    font-style: normal;
    font-size: 24px;
    margin-bottom: 8px;
    letter-spacing: 0.1em;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  &__subtitle {
    font-size: 16px;

    letter-spacing: 0.05em;
    line-height: 1.6em;
  }
  &__bottom-section {
    letter-spacing: 0.05em;
    line-height: 1.6em;
    font-size: 0.8em;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding-bottom: 8px;
  }
  &__bottom-item {
    text-align: center;
  }
  &__bottom-item-value {
    font-weight: bold;
  }
}
</style>


<script>
import Vue from "vue";
import moment from "moment";
export default {
  computed: {
    style: function() {
      return `background-image: url(https://tripfixed.com/destination-images/header/${
        this.deal.destinations[0]
      }.jpg)`;
    },
    path: function() {
      return "/deals/" + this.deal.slug;
    },
    availableString: function() {
      return (
        moment(this.deal.firstDeparture).format("MMM YYYY") +
        " - " +
        moment(this.deal.lastReturn).format("MMM YYYY")
      );
    },
    timeAgo: function() {
      return moment(this.deal.updatedAt).fromNow();
    }
  },
  props: {
    deal: Object
  }
};
</script>

