<template>
  <b-carousel
    id="carousel"
    controls
    indicators
    background="#ababab"
    img-width="1024"
    img-height="480"
    >
    <b-carousel-slide img-src="">
    </b-carousel-slide>
  </b-carousel>

</template>

<script>

export default {
  name: 'Carousel',
  props: {
    images: Array
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
