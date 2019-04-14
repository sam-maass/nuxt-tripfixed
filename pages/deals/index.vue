<template>
  <div class="deals">
    <ul class="deals--list">
      <li :key="deal.slug" v-for="deal in deals">
        <TeaserCard v-bind:deal="deal"></TeaserCard>
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
.deals {
  margin: 16px;
  &--list {
    max-width: 1400px;
    margin: auto;
    margin-top: 8px;
    display: grid;
    grid-gap: 16px;
    grid-template-columns: repeat(auto-fill, minmax(auto, 400px));
    justify-content: center;
  }
}
</style>


<script lang="ts">
import Vue from "vue";
import axios from "axios";
import TeaserCard from "@/components/deals/TeaserCard.vue";
export default {
  components: { TeaserCard },
  data: function() {
    return {
      deals: []
    };
  },
  asyncData({ params }) {
    return axios.get(`https://api.tripfixed.com/deals`).then(res => {
      return { deals: res.data };
    });
  }
};
</script>
