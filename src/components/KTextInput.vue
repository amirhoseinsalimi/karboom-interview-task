<template>
  <label class="k-text-input">
    <span v-if="!hasSlot">
      {{ label }}
    </span>

    <span class="k-text-input__icon">
      <slot name="icon"></slot>
    </span>

    <input
      type="text"
      v-model="searchText"
      :placeholder="placeholder"
      :style="{
        paddingLeft: hasSlot ? '40px' : '',
      }"
    >
  </label>
</template>

<script>
export default {
  name: 'KTextInput',

  props: {
    placeholder: {
      type: String,
      required: false,
      default: '',
    },
    label: {
      type: String,
      required: false,
      default: '',
    }
  },

  data() {
    return {
      searchText: '',
    }
  },

  computed: {
    hasSlot() {
      return this.$slots.icon;
    }
  }
}
</script>

<style scoped lang="scss">
$border-radius: 30px;

.k-text-input {
  position: relative;

  input {
    width: 100%;
    background: #F0F0F0;
    padding: 14px;
    border: {
      style: solid;
      radius: $border-radius;
      color: transparent;
    }
    transition: border 400ms;

    &:focus, &:focus-visible {
      box-shadow: none;
      outline: none;
      border: {
        style: solid;
        color: #bbbbbb;
      }
    }
  }

  .k-text-input__icon {
    position: absolute;
    top: calc(50% - 15px);
    left: 10px;
  }
}
</style>
