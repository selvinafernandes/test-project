<template>
  <div class="accordion" role="tablist">
    <b-card no-body class="mb-1">
      <b-button block v-b-toggle.accordion-1 variant="info">Information</b-button>
      <b-collapse id="accordion-1" collapsed accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>{{info.description}}</b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'ProductInformation',
  props: {
    info: Object
  },
}
</script>
<style lang="scss" scoped>

</style>