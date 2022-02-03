/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/ban-types */
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { EnumAuthAction } from '../../redux/Auth/constant';
import Store from '../../redux/store';

export const useToken = () => {
  const token: string | null = localStorage.getItem('token');
  return token || '';
};

const API_URL = 'https://prohop-express.herokuapp.com/api';
const token = window.localStorage.getItem('token');

const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: token ? `Bearer ${useToken().replaceAll('"', '')}` : '',
  },
});

axiosInstance.interceptors.response.use(
  (res: AxiosResponse) => {
    return res;
  },
  error => {
    const status = error.response ? error.response.status : 500;
    if (status && status === 500) {
      localStorage.clear();
      Store.dispatch({ type: EnumAuthAction.USER_LOGOUT });
    }
    return Promise.reject(error);
  },
);

class Api {
  static async post<T>(
    pathName: string,
    data: T,
    config: Object = {},
  ): Promise<AxiosResponse> {
    return axiosInstance.post(pathName, data, config);
  }

  static async delate(
    pathName: string,
    config: AxiosRequestConfig = {},
  ): Promise<AxiosResponse> {
    return axiosInstance.delete(pathName, config);
  }

  static async update<T>(
    pathName: string,
    data: T,
    config: AxiosRequestConfig = {},
  ): Promise<AxiosResponse> {
    return axiosInstance.put(pathName, data, config);
  }

  static async get(
    pathName: string,
    config: AxiosRequestConfig = {},
  ): Promise<AxiosResponse> {
    return axiosInstance.get(pathName, config);
  }
}

export default Api;
