import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

const instance = axios.create({
  baseURL: 'https://api.chimoney.io/v0.2/',
  withCredentials: true,
  headers: { 'Content-Type': 'application/json' },
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
