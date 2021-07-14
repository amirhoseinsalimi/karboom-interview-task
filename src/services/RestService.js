import axios from '../plugins/axios';
import Utils from './Utils';

export class RestService {
  async index() {
    try {
      const { data: items } = await axios.get('/data');

      Utils.storeBiggestItemId(items);

      return items;
    } catch (e) {
      // TODO: Handle error
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
