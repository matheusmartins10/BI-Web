import axios from 'axios';

const api = axios.create({
  baseURL: 'https://bisolucoes.herokuapp.com',
});

export default api;
