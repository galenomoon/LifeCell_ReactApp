import axios from 'axios'

const api_client = axios.create({
  baseURL: process.env.REACT_APP_API_ENDPOINT,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

api_client.interceptors.request.use(config => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config
})

export default api_client;