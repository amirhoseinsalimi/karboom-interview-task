import axios from 'axios';

axios.defaults.headers.common = {
  'Content-Type': 'application-json',
  Accept: 'application-json',
};

export default axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
});
