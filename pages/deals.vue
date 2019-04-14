<template>
  <div class="deals">
    <h1>Deals</h1>
    <ul>
      <li :key="deal.slug" v-for="deal in deals">
        <TeaserCard v-bind:deal="deal"></TeaserCard>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import axios from "axios";
import TeaserCard from "../components/deals/TeaserCard.vue";
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
