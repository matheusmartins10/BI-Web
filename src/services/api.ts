import axios from 'axios';

const api = axios.create({
  baseURL: 'https://bisoluction.herokuapp.com',
});

export default api;
