<template>
  <nuxt-link :to="path">
    <div class="deal-card" :style="style">
      <div class="deal-card--content">
        <div class="deal-card--badge">
          <span class="deal-card--old-price">{{deal.priceLimit}} {{deal.currency}}</span>
          <br>
          <span class="deal-card--price">{{deal.minPrice}} {{deal.currency}}</span>
        </div>
        <div class="deal-card--name-section">
          <span class="deal-card--title">{{deal.title}}</span>
          <br>
          <span class="deal-card--subtitle">{{deal.subtitle}}</span>
        </div>
        <div class="deal-card--bottom-section">
          <div class="deal-card--bottom-item">
            <div class="deal-card--bottom-item-title">Availability</div>
            <div class="deal-card--bottom-item-value">{{availableString}}</div>
          </div>

          <div class="deal-card--bottom-item">
            <div class="deal-card--bottom-item-title">updated</div>
            <div class="deal-card--bottom-item-value">{{timeAgo}}</div>
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
  background-color: #fafafa;
  background-size: cover;
  min-height: 200px;
  color: $white;
  &--content {
    height: 200px;
    display: grid;
    background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5));
  }
  &--badge {
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
  &--old-price {
    font-size: smaller;
    text-decoration: line-through;
  }
  &--name-section {
    margin-bottom: 8px;
    justify-self: center;
    align-self: center;
    text-align: center;
  }
  &--title {
    font-family: "Comfortaa";
    font-style: normal;
    font-size: 24px;
    margin-bottom: 8px;
    letter-spacing: 0.1em;
    line-height: 1px;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  &--subtitle {
    font-size: 16px;
    font-style: normal;
    font-weight: normal;
    letter-spacing: 0.05em;
    line-height: 1.6em;
    color: #fafafa;
  }
  &--bottom-section {
    font-family: "Open Sans", sans-serif;
    font-style: normal;
    font-weight: normal;
    letter-spacing: 0.05em;
    line-height: 1.6em;
    color: #fafafa;
    font-size: 0.8em;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding-bottom: 8px;
  }
  &--bottom-item {
    text-align: center;
  }
  &--bottom-item-value {
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

