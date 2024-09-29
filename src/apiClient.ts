// src/apiClient.ts
import axios from 'axios';
import API_BASE_URL from './apiConfig';
console.log('Backend URL:', process.env.REACT_APP_BACKEND_URL);
const apiClient = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
});

apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default apiClient;
