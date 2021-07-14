<template>
  <div class="k-search-bar">
    <k-text-input
      placeholder="Search something..."
      @input="saveTextInStore"
    >
      <template v-slot:icon>
        <img src="@/assets/svgs/search.svg" alt="Search icon" />
      </template>
    </k-text-input>

    <k-button
        :circular="true"
        backgroundColor="#F0F0F0"
        size="sm"
        :disabled="false"
    >
      <img src="@/assets/svgs/plus.svg" alt="Search icon" />
    </k-button>
  </div>
</template>

<script>
import KTextInput from '@/components/KTextInput.vue';
import KButton from "@/components/KButton.vue";

export default {
  name: 'KSearchBar',

  components: {
    KTextInput,
    KButton,
  },

  methods: {
    saveTextInStore(text) {
      this.$store.commit('storeSearchText', text);
    }
  }
}
</script>

<style scoped lang="scss">
.k-search-bar {
  background: #DCE2E8;
  border: {
    radius: 8px;
  }
  padding: 2px 10px;
  width: 600px;
  max-width: 90%;
  display: inline-flex;
  flex-flow: row-reverse wrap;
  justify-content: space-around;
  align-items: center;

  .k-text-input {
    flex-grow: 1;
  }
}
</style>
