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
    :body='`The item "${items[itemToBeDeleted].title.text}" will be deleted. This action cannot be undone.`'
    accept-text="Delete"
    refuse-text="Cancel"
  />
</template>

<script>
import KModal from '@/components/KModal.vue';
import KItem from '@/components/KItem.vue';

import RestService from '../services/RestService';

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
        const regexp = new RegExp(searchText, 'igm')

        const arr = this.items.filter(({title: {text: title}, description}) => {
          return !!(regexp.test(title) || regexp.test((description)));
        });

        console.log(arr);

        return arr;
      }
    },
  },

  methods: {
    promptDeleteItem(id) {
      this.itemToBeDeleted = id;
      this.modal.displayed = true;
    },

    deleteItem(id) {
      RestService.delete(id);
    },
  },

  async beforeCreate() {
    try {
      this.items = await RestService.index('/data');
    } catch (e) {
      // TODO: Handle error
      console.log(e)
    }
  },
}
</script>

<style scoped lang="scss">
.k-items-container {
  display: inline-block;
  width: 600px;
  max-width: 90%;
}
</style>
