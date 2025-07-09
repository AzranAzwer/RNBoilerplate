import {AxiosRequestConfig, AxiosStatic} from 'axios';
import Config from 'react-native-config';

const setBaseUrl = (config: AxiosRequestConfig) => {
  config.baseURL = Config.RN_URL_API_PORTAL;
};

const SetupAxios = (axios: AxiosStatic) => {
  axios.interceptors.request.use(
    async config => {
      const _exception = config.url?.split(':')[0];
      const isToken = _exception === 'https' ? false : true;
      if (isToken) {
        setBaseUrl(config);
      }
      return config;
    },
    err => Promise.reject(err),
  );

  axios.interceptors.response.use;
};

export default SetupAxios;
