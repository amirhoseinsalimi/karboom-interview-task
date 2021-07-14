<template>
  <button
    :class="`k-button font--size-20 k-button--${size} ${disabled && 'disabled'}`"
    :style="{
      backgroundColor,
      color,
      borderRadius: circular && '50%',
      cursor: disabled ? 'initial' : 'pointer',
    }"
    @click="$emit('click')"
  >
    <slot></slot>

    <!--  Only render the `text` prop when no slots is specified  -->
    <span v-if="!$slots.default">
      {{ text }}
    </span>
  </button>
</template>

<script>
export default {
  name: 'KButton',

  emits: ['click'],

  props: {
    // Parent may pass the content through `text` prop
    // or through the slots for more complex content
    text: {
      type: String,
      required: false,
      default: '', // Setting the default value just for consistency
    },
    backgroundColor: {
      type: String,
      required: false,
      default: 'transparent',
    },
    color: {
      type: String,
      required: false,
      default: '',
    },
    size: {
      type: String,
      required: false,
      default: 'md',
      /**
       *
       * @param value - The size of the button
       * @returns {boolean}
       */
      validator: (value) => ['sm', 'md', 'lg'].includes(value),
    },
    circular: {
      type: Boolean,
      required: false,
      default: false,
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false,
    }
  },
}
</script>

<style scoped lang="scss">
@import "src/assets/scss/typography";

.k-button {
  border: {
    style: solid;
    radius: 0.6em;
    color: transparent;
  }
  padding: 1em;
  transition: transform 400ms;

  &.k-button--sm {
    transform: scale(0.7);
  }

  &.k-button--lg {
    transform: scale(1.2);
  }

  &:active, &:focus, &:focus-visible {
    box-shadow: none;
  }

  &.disabled {
    // `!important` flag to overwrite the inline style
    cursor: not-allowed !important;
  }
}
</style>
