<template>
  <div class="k-item">
    <k-item-image
        src="https://source.unsplash.com/random"
        alt="img"
        class="k-item__image"
    />

    <div class="k-item__content">
      <k-item-content
          title="Title"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
      />
    </div>

    <div class="k-item__actions">

      <k-button class="font--size-20">
        Salam
      </k-button>
    </div>

    <div class="k-item__footer">
      <k-color-bar :color="color" class="mx-auto" />
    </div>
  </div>
</template>

<script>
import KColorBar from './KColorBar';
import KItemImage from './KItemImage';
import KItemContent from './KItemContent';
import KButton from './KButton';

import Utils from "../services/Utils";

export default {
  name: 'KItem',

  data() {
    return {
      color: Utils.generateRandomHexColor(),
    };
  },

  components: {
    KItemContent,
    KItemImage,
    KColorBar,
    KButton,
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
