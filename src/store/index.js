import { createStore } from 'vuex';

export default createStore({
  state: {
    searchText: '',
    biggestItemId: '',
    filteredItems: [],
    lastItem: {},
  },
  getters: {
    isResultsEmpty(state) {
      // This means the user has searched for something
      // and got no results. So, he should be able to add
      // a new item now.
      return state.searchText && !state.filteredItems.length;
    }
  },
  mutations: {
    storeSearchText(state, text) {
      state.searchText = text;
    },

    changeBiggestItemId(state, id) {
      state.biggestItemId = +id;
    },

    changeFilteredItems(state, items) {
      state.filteredItems = items;
    },

    storeLastItem(state, item) {
      state.lastItem = item;
    }
  },
  actions: {
  },
  modules: {
  },
});
