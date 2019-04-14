<template>
  <nuxt-link :to="'/deals/'+deal.slug">
    <div class="deal-card">
      <h2>{{deal.title}}</h2>
      <h3>{{deal.subtitel}}</h3>
    </div>
  </nuxt-link>
</template>

<style lang="scss" scoped>
.deal-card {
  background-color: #fafafa;
  height: 500px;
  margin: 16px;
}
</style>


<script lang="ts">
import Vue from "vue";
export default {
  computed: {
    path: function() {
      return "/deals/" + this.deal.slug;
    }
  },
  props: {
    deal: Object
  }
};
</script>
