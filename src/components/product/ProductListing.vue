<template>
  <div class="product-listing row">
    <div class="product-carousel col-md-6">
      <product-carousel :images="images"></product-carousel>
      <product-information :info="productInfo"></product-information>
    </div>
    <div class="product-data col-md-6">
      <div class="product-info p-3">
        <span class="product-brand">{{brandInfo.name}}</span>
        <h1 class="product-title">{{productInfo.title}}</h1>
      </div>
      <product-variant :variants="variants" @variant="variant"></product-variant>
      <Button :classes="['btn-primary', 'btn-price']" >
        <span>Add to cart</span>
        <span>{{cartPrice}}</span>
      </Button>
    </div>
  </div>
</template>

<script>

import { mapGetters } from 'vuex';
import ProductCarousel from '../product/ProductCarousel.vue';
import ProductInformation from '../product/ProductInformation.vue';
import ProductVariant from '../product/ProductVariant.vue';
import Button from '../common/Button.vue';

export default {
  name: 'ProductListing',
  props: {

  },
  computed: {
    ...mapGetters('product', ['variants', 'images', 'productInfo', 'brandInfo']),
    ...mapGetters('cart', ['cartPrice'])
  },
  components: {
    Button,
    ProductCarousel,
    ProductInformation,
    ProductVariant
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
    variant(qty, id, price) {
      console.log(qty)
      if (qty === 0) {
        this.data.splice(this.data.findIndex((item) => item.id === id), 1);
      } else {
        if (this.data.findIndex((item) => item.id === id) === -1){
          this.data.push({ qty, id, price })
        } else {
          const findItem = this.data.find((item) => item.id === id);
          findItem.qty = qty;
        }
      }
      this.$store.commit('cart/setCartPrice', this.data);
    },
  }
}
</script>

<style lang="scss" scoped>
.product-listing {
  margin: 0 20px;
}
.product-info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.product-brand {
  color: #ababab;
  text-decoration: underline;
}
</style>
