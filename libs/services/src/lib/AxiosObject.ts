import axios, { AxiosInstance } from 'axios';
import { useDispatch } from 'react-redux';
import { webStore, clearState } from '@full-stack-challenge/store';

const AxiosObject: AxiosInstance = axios.create();

// Uncomment below line in development
// AxiosObject.defaults.baseURL = import.meta.env.VITE_API_URL;
AxiosObject.defaults.baseURL = process.env.VITE_API_URL;

AxiosObject.defaults.headers.common = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
};

AxiosObject.interceptors.request.use(
  async function (config) {
    const state = webStore.getState();
    const accessToken = state?.auth.token;
    config.headers['Authorization'] = `Bearer ${accessToken}`;
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

AxiosObject.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.message.includes('500')) {
      console.log('server error!');
    } else if (error.message.includes('403')) {
      const dispatch = useDispatch();
      dispatch(clearState());
    }
    return Promise.reject(error);
  }
);

export default AxiosObject;
