import axios from 'axios';
import {
  getAuthFromLocalStorage,
  setAuthFromLocalStorage,
} from '../utils/tokenHandler';
import { useRouter } from '../hooks/common/useRouter';

const BACKEND_URL = process.env.REACT_APP_SERVER_URL;

const clearAuthToken = () => {
  setAuthFromLocalStorage({ email: '', token: '' });
};

const client = axios.create({
  baseURL: BACKEND_URL,
  headers: {
    'Content-Type': 'application/json',
    witCredentials: true,
  },
});

client.interceptors.request.use((config) => {
  const auth = getAuthFromLocalStorage();

  if (auth && auth.token) {
    config.headers.Authorization = `Bearer ${auth.token}`;
  }
  return config;
});

client.interceptors.response.use(
  (response) => response,
  (error) => {
    const { routeTo } = useRouter();

    if (error.response?.status === 401) {
      clearAuthToken();
      routeTo('/signin');
    }
    return Promise.reject(error);
  },
);

export default client;
