<template>
  <div class="k-items-container">
    <k-item v-for="item of 2" :key="item">
      {{ item }}
    </k-item>
  </div>
</template>

<script>
import KItem from './KItem';

export default {
  name: 'KItemsContainer',

  components: { KItem }
}
</script>

<style scoped lang="scss">
.k-items-container {
  display: inline-block;
  width: 600px;
  max-width: 90%;
}
</style>
