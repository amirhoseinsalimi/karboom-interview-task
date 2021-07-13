<template>
  <div class="k-color-bar">
    <div class="k-color-bar__inner" :style="{ background: color }"></div>
  </div>
</template>

<script>
export default {
  name: 'KColorBar',

  props: {
    color: {
      type: String,
      required: true,
      /**
       *
       * @param {string} value
       * @returns {boolean|*}
       *
       * @example #123
       * @example #1234 (Last character for transparency)
       * @example #123456
       * @example #12345678 (Two last characters for transparency)
       */
      validator: (value) => [4, 5, 7, 9].includes(value.length) && value.startsWith('#'),
    }
  },
}
</script>

<style scoped lang="scss">
.k-color-bar {
  & > .k-color-bar__inner {
    width: 100%; // Take the entire space of the parent
    max-width: 500px;
    height: 8px;
    border: {
      radius: 5px;
    }
  }
}
</style>
