<template>
  <div class="home">
    <Header/>
    <DestinationGroups/>
    <TrackingSection/>
    <SignupSection/>
    <Footer/>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Header from "../components/home/header.vue";
import Footer from "../components/home/footer.vue";
import DestinationGroups from "../components/home/destination-groups.vue";
import TrackingSection from "../components/home/tracking-section.vue";
import SignupSection from "../components/home/signup-section.vue";
export default Vue.extend({
  head() {
    return {
      title: "Tripfixed",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Plan Trips - Track Flight Prices - Find Travel Bargains"
        }
      ]
    };
  },
  components: {
    Header,
    DestinationGroups,
    TrackingSection,
    SignupSection,
    Footer
  }
});
</script>
