import axios from 'axios';

const jsonServerInstance = axios.create({ baseURL: 'http://localhost:3001' });

export default jsonServerInstance;
