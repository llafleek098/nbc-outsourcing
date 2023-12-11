import axios from 'axios';

const jsonServerInstance = axios.create({
  baseURL: process.env.REACT_APP_JSON_SERVER_API_URL
});

export default jsonServerInstance;
