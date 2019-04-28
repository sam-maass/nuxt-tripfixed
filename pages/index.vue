<template>
  <div class="home">
    <Header></Header>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Header from "../components/home/header.vue";
export default Vue.extend({
  components: { Header },
  data: function() {
    return {
      test: "Sam"
    };
  }
});
</script>
