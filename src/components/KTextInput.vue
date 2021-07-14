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
      v-model="text"
      :placeholder="placeholder"
      :style="{
        paddingLeft: hasSlot ? '40px' : '',
      }"
      @input="$emit('input', text)"
      @keyup.enter="$emit('enterkey')"
    >
  </label>
</template>

<script>
import EventBus from './../event-bus';

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

  // This component is a general purpose component, so it should not mutate the
  // state directly. Instead, it should emit the data to the parent, and then
  // the parent decides what to do with the event: e.g. mutate the state.
  emits: ['input', 'enterkey'],

  data() {
    return {
      text: '',
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
