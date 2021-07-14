<template>
  <div class="k-items-container">
    <k-item
      v-for="{
        id,
        title: { text: title },
        description,
        img: src,
        color
      } of filteredItems"
      :key="`${id}-${title}`"
      :id="+id"
      :title="title"
      :description="description"
      :src="src"
      alt="lorem ipsum"
      :color="color"
      @delete="promptDeleteItem(id)"
    />
  </div>

  <k-modal
    v-if="modal.displayed"
    @accept="deleteItem(itemToBeDeleted)"
    @refuse="modal.displayed = false"
    header="Are you sure?"
    :body='`The item "${itemToBeDeletedTitle}" will be deleted. This action cannot be undone.`'
    accept-text="Delete"
    refuse-text="Cancel"
  />
</template>

<script>
import KModal from '@/components/KModal.vue';
import KItem from '@/components/KItem.vue';

import RestService from '../services/RestService';
import Utils from '../services/Utils';
import EventBus from './../event-bus';

export default {
  name: 'KItemsContainer',

  components: { KItem, KModal },

  data() {
    return {
      items: [],
      modal: {
        displayed: false,
        header: '',
        body: '',
      },
      itemToBeDeleted: 0,
    }
  },

  computed: {
    filteredItems() {
      const searchText = this.$store.state.searchText;

      if (!searchText) {
        return this.items;
      } else {
        return Utils.filterItems(this.items, searchText);
      }
    },

    itemToBeDeletedTitle() {
      return this.items.find(({ id }) => this.itemToBeDeleted === id).title.text
    }
  },

  methods: {
    async fetchItems() {
      try {
        this.items = await RestService.index();
      } catch (e) {
        // TODO: Handle error
        console.log(e)
      }
    },

    promptDeleteItem(id) {
      this.itemToBeDeleted = id;
      this.modal.displayed = true;
    },

    async deleteItem(id) {
      await RestService.delete(id);
      this.items = await RestService.index();
      this.modal.displayed = false;
    },
  },

  async created() {
    await this.fetchItems();

    EventBus.on('re-fetch-items', async () => {
      await this.fetchItems();
    });
  },
}
</script>

<style scoped lang="scss">
.k-items-container {
  display: inline-block;
  width: 50em;
  max-width: 90%;
}
</style>
