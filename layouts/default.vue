<template>
  <div>
    <Navigation></Navigation>
    <nuxt/>
  </div>
</template>

<style lang="scss">
@import "../styles/normalize.scss";
@import "../styles/global.scss";
</style>


<script lang="ts">
import Navigation from "@/components/navigation/Navigation.vue";
import Vue from "vue";
export default { components: { Navigation } };
</script>
