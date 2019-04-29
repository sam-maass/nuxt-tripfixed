<template>
  <div class="home">
    <Header/>
    <DestinationGroups/>
    <TrackingSection/>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Header from "../components/home/header.vue";
import DestinationGroups from "../components/home/destination-groups.vue";
import TrackingSection from "../components/home/tracking-section.vue";
export default Vue.extend({
  components: { Header, DestinationGroups, TrackingSection },
  data: function() {
    return {
      test: "Sam"
    };
  }
});
</script>
