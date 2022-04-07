import axios from 'axios';

const api = axios.create({
  baseURL: 'https://hackpi.herokuapp.com/'
});

export default api;
