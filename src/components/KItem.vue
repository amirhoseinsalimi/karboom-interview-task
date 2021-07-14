<template>
  <div class="k-item">
    <k-item-image
      :src="src"
      :alt="alt"
      class="k-item__image"
    />

    <div class="k-item__content">
      <k-item-content
        :title="title"
        :description="description"
      />
    </div>

    <div class="k-item__actions">
      <k-button
        :circular="true"
        backgroundColor="transparent"
        :size="deleteButtonSize"
        @mouseenter="changeButtonSizeTo('md')"
        @mouseleave="changeButtonSizeTo('sm')"
        @click="$emit('delete', id)"
      >
        <img src="@/assets/svgs/bin.svg" alt="Search icon"/>
      </k-button>
    </div>

    <div class="k-item__footer">
      <k-color-bar :color="color" class="mx-auto"/>
    </div>
  </div>
</template>

<script>
import KColorBar from './KColorBar';
import KItemImage from './KItemImage';
import KItemContent from './KItemContent';
import KButton from './KButton';

export default {
  name: 'KItem',

  props: {
    id: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    src: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
  },

  emits: ['delete'],

  data() {
    return {
      deleteButtonSize: 'sm'
    };
  },

  components: {
    KItemContent,
    KItemImage,
    KColorBar,
    KButton,
  },

  methods: {
    changeButtonSizeTo(size) {
      this.deleteButtonSize = size;
    }
  },
}
</script>

<style scoped lang="scss">
.k-item {
  margin-bottom: 20px;

  & > * {
    margin: 4px;
  }

  display: flex;
  flex-flow: row-reverse wrap;
  justify-content: flex-start;
  background: {
    color: #ECE9F3;
  };
  border: {
    radius: 8px;
  }
  padding: 4px;

  & > .k-item__content {
    flex-shrink: 8;
    flex-grow: 8;
    display: flex;
    flex-flow: column wrap;
    justify-content: flex-end;
  }

  & > .k-item__footer {
    width: 100%;
  }
}
</style>
