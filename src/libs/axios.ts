import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Axios = axios.create({
  // baseURL: process.env.API_URL,
  baseURL: 'http://192.168.1.67:4000',
  // baseURL: 'https://instagram-clone-5a27.onrender.com',
});

Axios.interceptors.request.use(
  async config => {
    const origin = config.baseURL;
    const allowedOrigins = ['https://instagram-clone-5a27.onrender.com'];
    const access_token = await AsyncStorage.getItem('access_token');
    const token = `Bearer ${access_token}`;

    if (allowedOrigins.includes(origin as string)) {
      config.headers.authorization = token;
    }

    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

export default Axios;
