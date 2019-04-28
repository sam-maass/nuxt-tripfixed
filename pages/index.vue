<template>
  <div class="home">
    <Header></Header>
    <DestinationGroups></DestinationGroups>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Header from "../components/home/header.vue";
import DestinationGroups from "../components/home/destination-groups.vue";
export default Vue.extend({
  components: { Header, DestinationGroups },
  data: function() {
    return {
      test: "Sam"
    };
  }
});
</script>
