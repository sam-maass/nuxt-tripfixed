<template>
  <div class="deal-card">{{deal.slug}}</div>
</template>

<style lang="scss" scoped>
.deal-card {
  background-color: #fafafa;
  height: 500px;
  margin:16px;
  
}
</style>


<script lang="ts">
import Vue from "vue";
export default {
  props: {
    deal: Object
  }
};
</script>
