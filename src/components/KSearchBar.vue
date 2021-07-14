<template>
  <div class="k-search-bar">
    <k-text-input
      placeholder="Search something..."
      @input="saveTextInStore"
      @enterkey="createItem"
    >
      <template v-slot:icon>
        <img src="@/assets/svgs/search.svg" alt="Search icon" />
      </template>
    </k-text-input>

    <k-button
        :circular="true"
        backgroundColor="#F0F0F0"
        size="sm"
        :disabled="!$store.getters.isResultsEmpty"
        @click="createItem"
    >
      <img src="@/assets/svgs/plus.svg" alt="Search icon" />
    </k-button>
  </div>
</template>

<script>
import KTextInput from '@/components/KTextInput.vue';
import KButton from '@/components/KButton.vue';

import RestService from '../services/RestService';
import Utils from '../services/Utils';
import EventBus from './../event-bus';

export default {
  name: 'KSearchBar',

  components: {
    KTextInput,
    KButton,
  },

  methods: {
    saveTextInStore(text) {
      this.$store.commit('storeSearchText', text);
    },

    async createItem() {
      // Send the request only if the `isResultsEmpty`
      if (this.$store.getters.isResultsEmpty) {
        const newItem = {
          id: ++this.$store.state.biggestItemId,
          title: {
            text: this.$store.state.searchText,
          },
          description: this.$store.state.lastItem.description,
          img: this.$store.state.lastItem.img,
          color: Utils.generateRandomHexColor(),
        };

        await RestService.create(newItem);

        // Clear the text input
        this.saveTextInStore('');
        EventBus.emit('clear-input');

        // Emit an event on EventBus
        EventBus.emit('re-fetch-items');
      }
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
