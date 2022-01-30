<template>
  <div id="app">
    <product-listing></product-listing>
  </div>
</template>

<script>
import ProductListing from '../src/components/product/ProductListing.vue';

export default {
  name: 'App',
  components: {
    ProductListing
  }
}
</script>

<style lang="scss">
@import "./styles/all.scss";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
