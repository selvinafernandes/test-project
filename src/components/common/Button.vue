<template>
  <button
    v-bind="$attrs"
    :v-on="$listeners"
    @click="$emit('click', $event)"
    :type="type" 
    class="button btn"
    :disabled="disabled"
    :class="classes"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    type: {
      type: String,
      default: "button"
    },
    classes: {
      type: Array
    },
    disabled: {
      type: Boolean
    },
    size: {
      type: String
    },
    icon: {
      type: String
    },
  },
}
</script>
<style lang="scss" scoped>

</style>