<template>
  <div class="product-listing row">
    <div class="product-carousel col-md-6">
      
    </div>
    <div class="product-data col-md-6">
      
    </div>
  </div>
</template>

<script>

import { mapGetters } from 'vuex';

export default {
  name: 'ProductListing',
  props: {

  },
  computed: {
    
  },
  components: {
    Button
  },
  data() {
    return {
      data: [],
    }
  },
  created() {
    this.$store.dispatch('products/getProductListing');
  },
  methods: {
   
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
