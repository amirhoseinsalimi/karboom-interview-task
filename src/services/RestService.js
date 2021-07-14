import axios from '../plugins/axios';
import Utils from './Utils';

export class RestService {
  async index() {
    try {
      const { data: items } = await axios.get('/data');

      // Calculate and store the biggest `id` number between fetched items
      Utils.storeBiggestItemId(items);

      // Store the information about the last item into the store
      Utils.storeLastItem(items[items.length - 1]);

      // **Important note:** Why are we storing the biggest `id` number
      // separated from the last item? Why not just consider the
      // last item has the biggest `id`?
      // **Answer:** Because in a real scenario (with a real back-end),
      // it's possible that the RESTful API returns data in a different
      // order; e.g. the reverse order. In that case, the last item
      // doesn't have the biggest `id` number. So we don't want to
      // rely on the RESTful API order, and it's wise to do the
      // calculation ourselves, no matter what's the last item's id is.

      return items;
    } catch (e) {
      // TODO: Handle error
    }
  }

  async create(newItem) {
    try {
      await axios.post('/data', newItem);
    } catch (e) {
      // TODO: Handle error
      console.log(e);
    }
  }

  async delete(id) {
    try {
      const { data } = await axios.delete(`/data/${id}`);

      return data;
    } catch (e) {
      // TODO: Handle error
    }
  }
}

// Singleton Pattern
export default new RestService();
