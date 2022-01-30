<template>
  <div class="product-variant">
    <div class="product-variant-columns">
      <div>Quantity</div>
      <div>Variant</div>
      <div>Price</div>
      <div>MSRP</div>
      <div>Stock</div>
    </div>
    <product-variant-item
      :variant="item" 
      v-for="(item, index) in variants"
      v-on="$listeners"
      :key="index">
    </product-variant-item>
  </div>
</template>

<script>
import ProductVariantItem from '../product/ProductVariantItem.vue';

export default {
  name: 'ProductVariant',
  props: {
    variants: Array
  },
  components: {
    ProductVariantItem
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>

.product-variant-columns {
  display: grid;
  grid-template-columns: 4fr 3fr 3fr 1fr 1fr;
  grid-template-rows: 1fr;
  position: relative;
}

</style>
