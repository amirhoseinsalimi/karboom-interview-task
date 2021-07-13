<template>
  <h4 class="k-item-content__title">
    {{ title }}
  </h4>
  <p class="k-item-content__title">
    {{ description }}
  </p>
</template>

<script>
export default {
  name: 'KItemContent',

  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    }
  }
}
</script>

<style scoped lang="scss">
* {
  display: inline-block;
}

.k-item-content__title {
  font: {
    weight: bold;
  }
}

.k-item-content__description {
  color: #aaa;
}
</style>
