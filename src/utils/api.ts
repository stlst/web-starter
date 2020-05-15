import axios from 'axios';

const Api = axios.create({
  timeout: 20000,
  headers: {}
});

export default Api;
