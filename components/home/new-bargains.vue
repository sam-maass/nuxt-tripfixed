<template>
  <div class="new-bargains">
    <h2 @click="addNewBargain">Bargains we found recently</h2>
    <ul class="new-bargains__list" :class="{'new-bargains__list--reloading':isAddingListItem}">
      <li v-for="bargain in newBargains" class="new-bargains__list-item">
        <span class="new-bargains__list-column">
          Fly from
          <b>{{ bargain.from }}</b>
        </span>
        <span class="new-bargains__list-column">
          to
          <b>{{ bargain.to }}</b>
        </span>
        <span class="new-bargains__list-column">with {{ bargain.airline }}</span>
        <span class="new-bargains__list-column">from {{ bargain.price }} {{ bargain.currency }}</span>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/colors.scss";
.new-bargains {
  grid-column: 1/-1;
  padding: $padding * 2;
  justify-self: center;
  justify-content: center;
  text-align: center;
  &__list {
    padding: $padding * 2;
    &--reloading > li:first-of-type {
      @keyframes goDown {
        0% {
          opacity: 1;
          margin-top: 0px;
        }
        100% {
          opacity: 1;
          margin-top: 40px;
          background-color: rgba(255, 255, 255, 0);
        }
      }
      @keyframes fadeIn {
        0% {
          opacity: 0;
          margin-top: 0px;
          background-color: rgba(255, 255, 255, 0.3);
        }
        100% {
          opacity: 1;
          margin-top: 0px;
          background-color: rgba(255, 255, 255, 0);
        }
      }
      animation: goDown 1s, fadeIn 1s 1s;
      animation-fill-mode: forwards;
    }
    &--reloading > li:last-of-type {
      @keyframes fadeOut {
        0% {
          opacity: 1;
        }
        100% {
          opacity: 0;
        }
      }
      animation: fadeOut 1s;
      animation-fill-mode: backwards;
    }
  }
  &__list-item {
    box-sizing: border-box;
    display: grid;
    width: 100vw;
    max-width: 600px;
    grid-template-columns: repeat(4, 1fr);
    gap: $padding;
    grid-auto-flow: column;
    line-height: 1.5;
    padding: $padding/2 0;
    border-bottom: 1px dashed rgba(255, 255, 255, 0.3);
    &:last-of-type {
      border: none;
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
      this.isAddingListItem = true;
      setTimeout(() => {
        let nextBargains = this.newBargains.slice(0, -1);
        let newBargain = this.newBargains[this.newBargains.length - 1];
        this.newBargains = [newBargain, ...nextBargains];
        setTimeout(() => {
          this.isAddingListItem = false;
        }, 1000);
      }, 1000);
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
          currency: "EUR"
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
