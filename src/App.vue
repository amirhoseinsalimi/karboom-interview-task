<template>
  <main class="main-page">
    <k-search-bar />
    <k-items-container />
  </main>
</template>

<script>
import KSearchBar from '@/components/KSearchBar.vue';
import KItemsContainer from '@/components/KItemsContainer.vue';

export default {
  name: 'App',

  data() {
    return {};
  },

  components: {
    KItemsContainer,
    KSearchBar,
  }
}
</script>

<style lang="scss">
#app {
  text-align: center;
  background: #F3F3F3;
}

.main-page {
  display: flex;
  flex-flow: column wrap;
  justify-content: flex-start;
  align-content: center;

  .k-search-bar {
    margin-bottom: 40px;
  }
}
</style>
