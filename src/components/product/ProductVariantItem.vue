<template>
  <div class="product-variant-item">
    <div class="product-variant-add">
      <button
        type="button"
        class="btn"
        @click="addQuantity"
      >
        <b-icon icon="plus"></b-icon>
      </button>
      <input type="text" 
        placeholder="0" 
        :value="variantQuantity"
        @input="$emit('input', $event.target.value, variant.id, variant.price)"
        />
      <button
        type="button"
        class="btn"
        @click="removeQuantity"
      >
        <b-icon icon="dash"></b-icon>
      </button>
    </div>
    <div class="">{{ variant.options[0].value }}</div>
    <div class="">{{ variant.price }}</div>
    <div>{{ variant.msrp }}</div>
    <div class="">
      <b-icon v-if="variant.inventory > 0" icon="check"></b-icon>
      <b-icon v-else icon="check"></b-icon>
    </div>
  </div>
</template>
<script>
export default {
  name: "ProductVariantItem",
  props: {
    variant: {
      type: Object,
    },
  },
  components: {},
  data() {
    return {
      data: {},
      variantQuantity: 0,
    };
  },
  created() {},
  methods: {
    addQuantity() {
      this.variantQuantity = this.variantQuantity + 1;
      this.$emit('variant', this.variantQuantity, this.variant.id, this.variant.price);
    },
    removeQuantity() {
      if (this.variantQuantity === 0) {
        return;
      }
      this.variantQuantity = this.variantQuantity - 1;
      this.$emit('variant', this.variantQuantity, this.variant.id, this.variant.price);

    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.product-variant-item {
  display: grid;
  grid-template-columns: 4fr 3fr 3fr 1fr 1fr;
  position: relative;
}

.product-variant-add {
  display: flex;
  justify-content: center;
  align-items: center;
}

.product-variant-add input {
  width: 50px;
}
</style>
