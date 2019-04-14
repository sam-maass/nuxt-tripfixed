<template>
  <div class="home">
    <h1>Hello world!{{test}}</h1>
    <nuxt-link to="/deals">Deals</nuxt-link>
    <a href="/deals">Deals</a>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data: function() {
    return {
      test: "Sam"
    };
  }
});
</script>
