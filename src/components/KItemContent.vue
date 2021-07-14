<template>
  <div class="k-item-content">
    <h4 class="k-item-content__title">
      {{ title }}
    </h4>
    <p class="k-item-content__description">
      <span>
        {{ description }}
      </span>
    </p>
  </div>
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
.k-item-content {
  display: flex;
  flex-flow: column wrap;
  text-align: right;
  align-items: flex-end;

  .k-item-content__title {
    font: {
      weight: bold;
    }
  }

  .k-item-content__description {
    color: #aaa;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 300px;
  }
}
</style>
