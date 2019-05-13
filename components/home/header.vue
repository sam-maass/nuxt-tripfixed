<template>
  <div class="header">
    <nav class="header__nav">
      <div class="header__icon"></div>
      <div class="header__nav-buttons">
        <a href="https://tripfixed.com/deals" class="header__button">Deals</a>
        <a href="https://tripfixed.com/login" class="header__button">
          <i class="material-icons">person</i> Login
        </a>
      </div>
    </nav>

    <h1 class="header__title">Create Your Travel Wishlist</h1>
    <h2 class="header__subtitle">Plan Trips - Track Prices - Find Bargains</h2>
    <div class="header__card">
      <TripCard
        v-bind="exampleTrips[currentExampleTripIndex]"
        class="header__trip-card"
        :class="{'header__trip-card--fade': isTripCardChanging}"
      />
      <div
        class="header__claim"
        :class="{'header__claim--fade': isTripCardChanging}"
      >{{exampleTrips[currentExampleTripIndex].claim}}</div>
      <div class="progress-circles">
        <div
          class="progress-circles__dot"
          :class="{'progress-circles__dot--active': currentExampleTripIndex ===0 }"
        >&#11044;</div>
        <div
          class="progress-circles__dot"
          :class="{'progress-circles__dot--active': currentExampleTripIndex ===1 }"
        >&#11044;</div>
        <div
          class="progress-circles__dot"
          :class="{'progress-circles__dot--active': currentExampleTripIndex ===2 }"
        >&#11044;</div>
      </div>

      <a href="https://www.tripfixed.com/deals">
        <div class="button button--ghost">Plan your next trip</div>
      </a>
    </div>
  </div>
</template>

<style lang="scss">
@import "@/styles/colors.scss";
@import "@/styles/shared/button.scss";
.header {
  background: $cinder; /* fallback for old browsers */
  background-color: -webkit-linear-gradient(
    to top,
    $vikingBlue,
    $cinder
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to top,
    $vikingBlue,
    $cinder
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  color: $white;
  display: grid;
  grid-template-columns: 100%;
  align-items: center;
  justify-items: center;
  text-align: center;

  padding: 132px 16px 64px;

  &__claim {
    padding-bottom: $padding;
    opacity: 1;
    &--fade {
      transition: opacity 1s ease;
      opacity: 0;
    }
  }

  &__nav-buttons {
    grid-area: login;
    display: grid;
    grid-auto-flow: column;
    justify-self: right;
    align-items: center;
    gap: $padding;
  }

  &__nav {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    max-width: 80vw;
    margin: auto;
    display: grid;
    grid-template-areas: "logo login";
    text-align: left;
    align-items: center;
  }

  &__button {
    display: grid;
    grid-auto-flow: column;
    gap: $padding/2;
    align-items: center;
    justify-self: right;
    padding: $padding/2;
    cursor: pointer;
    border-radius: 4px;
    &:hover {
      transition: background-color 300ms;
      background: rgba(255, 255, 255, 0.3);
    }
  }

  &__icon {
    grid-area: logo;
    justify-self: left;
    width: 100px;
    height: 24px;
    margin: $padding;
    background-image: url(~assets/logo.svg);
    background-size: contain;
    background-repeat: no-repeat;
    @media (min-width: 1024px) {
      width: 150px;
      height: 32px;
    }
  }
  &__title {
    font-family: "Comfortaa", sans-serif;
    padding-bottom: $padding/2;
    font-size: 24px;
  }
  &__subtitle {
    /* font-family: "Comfortaa", sans-serif; */
    padding-bottom: $padding;
    font-size: 18px;
  }
  &__search {
    border: 1px solid $white;
    text-align: center;
    color: $white;
    padding: $padding/2 $padding;
    margin: 16px;
    border-radius: 12px;
    background-color: rgba(255, 255, 255, 0.2);
    font-size: 24px;
    outline: none;
    &:hover {
      background: rgba(255, 255, 255, 0.3);
    }
  }

  &__trip-card {
    @keyframes fadeIn {
      0% {
        opacity: 0;
        transform: translateX(200px) scale(0.95);
      }
      100% {
        opacity: 1s;
        transform: translateX(0px) scale(1);
      }
    }
    animation: fadeIn 750ms ease;
    animation-fill-mode: both;
    &--fade {
      @keyframes fadeOut {
        0% {
          opacity: 1;
          transform: translateX(0px) scale(1);
        }
        100% {
          opacity: 0;
          transform: translateX(-200px) scale(0.95);
        }
      }
      animation: fadeOut 750ms ease;
      animation-fill-mode: both;
    }
  }
  .progress-circles {
    display: grid;
    grid-template-columns: 20px 20px 20px;
    justify-content: center;
    font-size: 6px;
    color: rgba(255, 255, 255, 0.3);
    &__dot--active {
      transition: all 500ms ease;
      color: rgba(255, 255, 255, 1);
      text-shadow: 0px 0px 4px #fff;
    }
  }
}
</style>


<script lang="ts">
import Vue from "vue";
import TripCard from "@/components/home/trip-card.vue";
import { setInterval } from "timers";
export default Vue.extend({
  components: { TripCard },
  mounted() {
    setInterval(this.togggleTripCard, 8000);
  },
  methods: {
    togggleTripCard() {
      this.isTripCardChanging = true;
      setTimeout(() => {
        const maxIndex = this.exampleTrips.length;
        const nextIndex = (this.currentExampleTripIndex + 1) % maxIndex;
        this.currentExampleTripIndex = nextIndex;
        this.isTripCardChanging = false;
      }, 800);
    }
  },
  data: function() {
    return {
      isTripCardChanging: false,
      currentExampleTripIndex: 0,
      exampleTrips: [
        {
          title: "Summer Weekend Trip",
          dates: "May-Aug 2019",
          budget: 120,
          claim: "Lists: Track flight prices to all your destinations",
          destinations: [
            { name: "Barcelona", price: 40, trend: -12, averagePrice: 52 },
            { name: "Munich", price: 84, trend: 14, averagePrice: 52 },
            { name: "Rome", price: 94, trend: -2, averagePrice: 52 },
            { name: "Venice", price: 123, trend: 2, averagePrice: 52 }
          ]
        },
        {
          title: "🏖 Asia Trip",
          dates: "Jan-Dec 2019",
          budget: 500,
          claim: "Price History: We show you what a reasonable price is",

          destinations: [
            { name: "Bali", price: 491, trend: -12, averagePrice: 590 },
            { name: "Singapore", price: 401, trend: 14, averagePrice: 480 },
            { name: "Hong Kong", price: 423, trend: -2, averagePrice: 420 },
            { name: "Bangkok", price: 276, trend: 2, averagePrice: 360 }
          ]
        },
        {
          title: "US Trip",
          dates: "September 2019",
          budget: 120,
          claim:
            "Notifications: Never miss when flights to your destinations goes on sale",

          destinations: [
            { name: "New York", price: 240, trend: -12, averagePrice: 280 },
            { name: "Boston", price: 296, trend: 14, averagePrice: 330 },
            { name: "Los Angeles", price: 307, trend: -2, averagePrice: 370 },
            { name: "San Francisco", price: 235, trend: 2, averagePrice: 280 }
          ]
        }
      ]
    };
  }
});
</script>

