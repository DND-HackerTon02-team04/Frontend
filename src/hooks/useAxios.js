import useAsyncFn from './useAsyncFn';
import axios from 'axios';

const BASE_URL = 'https://wxij8f3k9f.execute-api.ap-northeast-2.amazonaws.com/';

axios.defaults.baseURL = BASE_URL;

const useAxios = (url, initialOptions = {}, deps = []) => useAsyncFn(
  (options = {}) => axios({
    url: options.url || url,
    ...initialOptions,
    ...options
  }).then(res => res.data), [...deps, initialOptions]);

axios.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    return Promise.reject(error);
  });

axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    return Promise.reject(error);
  });

export default useAxios;
