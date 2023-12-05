import axios from 'axios';

const jsonServerInstance = axios.create({ baseURL: 'http://localhost:3000' });

export default jsonServerInstance;
