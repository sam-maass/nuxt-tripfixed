<template>
  <div class="new-bargains">
    <h2 @click="addNewBargain">Start with these fresh bargains</h2>
    <ul class="new-bargains__list">
      <li
        v-for="bargain in newBargains"
        class="new-bargains__list-item"
        :class="{'new-bargains__list-item--fadeIn':bargain.state === 'fadeIn', 'new-bargains__list-item--fadeOut':bargain.state === 'fadeOut'} "
      >
        <span class="new-bargains__list-column">
          <b>{{ bargain.from }}</b>
        </span>
        <span class="new-bargains__list-column">
          to
          <b>{{ bargain.to }}</b>
        </span>
        <span class="new-bargains__airline-column">with {{ bargain.airline }}</span>
        <span class="new-bargains__price-column">from {{ bargain.price }} {{ bargain.currency }}</span>
      </li>
    </ul>
    <a href="https://www.tripfixed.com/deals">
      <div class="button button--ghost">More Deals</div>
    </a>
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/colors.scss";
@import "@/styles/shared/button.scss";

.new-bargains {
  grid-column: 1/-1;
  padding: $padding * 4 0 0 0;
  justify-self: center;
  justify-content: center;
  text-align: center;
  &__list {
    padding: $padding * 2 0 0 0;
    height: 200px;
  }
  &__airline-column {
    @media (max-width: 1000px) {
      display: none;
    }
  }
  &__price-column {
    justify-self: right;
  }
  &__list-item {
    box-sizing: border-box;
    display: grid;
    width: 100%;
    max-width: 600px;
    grid-template-columns: repeat(3, 1fr);
    @media (min-width: 1000px) {
      grid-template-columns: repeat(4, 1fr);
    }
    gap: $padding;
    grid-auto-flow: column;
    line-height: 1.5;
    padding: $padding/2 0;
    border-top: 1px dashed rgba(255, 255, 255, 0.3);
    &:first-of-type {
      border: none;
    }
    &--fadeIn {
      & + .new-bargains__list-item {
        border-top: none;
      }
      opacity: 0;
      max-height: 0;
      margin: 0;
      padding: 0;
      border-bottom: 1px dashed rgba(255, 255, 255, 0);
      @keyframes goDown {
        0% {
          max-height: 0;
          padding: 0;
        }
        100% {
          max-height: 41px;
          padding: $padding/2 0;
          background-color: rgba(255, 255, 255, 0);
        }
      }
      @keyframes fadeIn {
        0% {
          opacity: 0;
          margin-top: 0px;
          background-color: rgba(255, 255, 255, 0.2);
          border-bottom: 1px dashed rgba(255, 255, 255, 0);
        }
        100% {
          opacity: 1;
          margin-top: 0px;
          background-color: rgba(255, 255, 255, 0);
          border-bottom: 1px dashed rgba(255, 255, 255, 0.3);
        }
      }
      animation: goDown 1s 0.3s, fadeIn 1s 0.7s;
      animation-fill-mode: forwards;
    }
    &--fadeOut {
      @keyframes fadeOut {
        0% {
          opacity: 1;
          max-height: 40px;
        }
        100% {
          opacity: 0;
          max-height: 0;
        }
      }
      animation: fadeOut 0.5s;
      animation-fill-mode: forwards;
    }
  }
}
</style>

<script lang="ts">
import Vue from "vue";
import { setTimeout } from "timers";
export default Vue.extend({
  methods: {
    addNewBargain: function() {
      let newBargain = { ...this.newBargains[this.newBargains.length - 1] };
      let nextBargains = [newBargain, ...this.newBargains];
      nextBargains[nextBargains.length - 1].state = "fadeOut";
      nextBargains[0].state = "fadeIn";
      this.newBargains = nextBargains;
      setTimeout(() => {
        this.newBargains = this.newBargains
          .map(b => {
            return { ...b, state: "" };
          })
          .slice(0, -1);
      }, 3000);
    }
  },
  mounted() {
    window.setInterval(() => {
      this.addNewBargain();
    }, 5000);
  },

  data: function() {
    return {
      isAddingListItem: false,
      newBargains: [
        {
          from: "Frankfurt",
          to: "Hongkong",
          airline: "Lufthansa",
          price: "344",
          currency: "EUR",
          state: ""
        },
        {
          from: "Paris",
          to: "Chicago",
          airline: "American",
          price: "249",
          currency: "EUR"
        },
        {
          from: "Berlin",
          to: "Bali",
          airline: "Qatar",
          price: "409",
          currency: "EUR"
        },
        {
          from: "Frankfurt",
          to: "Hongkong",
          airline: "Lufthansa",
          price: "344",
          currency: "EUR"
        }
      ]
    };
  }
});
</script>
