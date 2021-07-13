<template>
  <img
    :src="src"
    :alt="alt"
    class="k-item-image"
  />
</template>

<script>
export default {
  name: 'KItemImage',

  props: {
    src: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped lang="scss">
$size: 60px;

.k-item-image {
  border: {
    radius: 10px;
  };
  background: {
    color: #bbb;
  };
  width: $size;
  height: $size;
}
</style>
