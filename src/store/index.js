import { createStore } from 'vuex';

export default createStore({
  state: {
    searchText: '',
    biggestItemId: '',
  },
  mutations: {
    storeSearchText(state, text) {
      state.searchText = text;
    },

    changeBiggestItemId(state, id) {
      state.biggestItemId = +id;
    }
  },
  actions: {
  },
  modules: {
  },
});
