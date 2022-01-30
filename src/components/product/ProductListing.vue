<template>
  <div class="product-listing row">
    <div class="product-carousel col-md-6">
      <product-carousel :images="images"></product-carousel>
      <product-information :info="productInfo"></product-information>
    </div>
    <div class="product-data col-md-6">
      <Button :classes="['btn-primary', 'btn-price']" >
        <span>Add to cart</span>
        <span></span>
      </Button>
    </div>
  </div>
</template>

<script>

import { mapGetters } from 'vuex';
import ProductCarousel from '../product/ProductCarousel.vue';
import ProductInformation from '../product/ProductInformation.vue';
import Button from '../common/Button.vue';

export default {
  name: 'ProductListing',
  props: {

  },
  computed: {
    ...mapGetters('product', ['variants', 'images', 'productInfo', 'brandInfo']),
  },
  components: {
    Button,
    ProductCarousel,
    ProductInformation
  },
  data() {
    return {
      data: [],
    }
  },
  created() {
    this.$store.dispatch('product/getProductListing');
  },
  methods: {
   
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.product-listing {
  margin: 0 20px;
}
</style>
