import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

const instance = axios.create({
  baseURL: '',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    'X-API-KEY': process.env.REACT_APP_API_KEY,
  },
});

instance.interceptors.request.use(
  (config: AxiosRequestConfig): AxiosRequestConfig => config,
  (error: AxiosError): Promise<AxiosError> => Promise.reject(error)
);

const successHandler = (response: AxiosResponse): AxiosResponse => response;

const errorHandler = (error: AxiosError): Promise<AxiosError> =>
  Promise.reject(error);

instance.interceptors.response.use(successHandler, errorHandler);

export default instance;
