<template>
  <b-carousel
    id="carousel"
    controls
    indicators
    background="#ababab"
    img-width="1024"
    img-height="480"
    class="product-carousel"
    >
    <b-carousel-slide v-for="(image,index) in images" :key="index" :img-src="image.big">
    </b-carousel-slide>
  </b-carousel>

</template>

<script>

export default {
  name: 'ProductCarousel',
  props: {
    images: Array
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>