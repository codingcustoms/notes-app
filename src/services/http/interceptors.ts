import { AUTH_TOKEN_KEY } from '@/constants';
// import { useAuthStore } from '@/store';
import { AxiosInstance } from 'axios';
// import { signOut } from 'next-auth/react';
import { LocalStorageService } from '../localStorage';

// Add a request interceptor
export const requestInterceptor = (instance: AxiosInstance) => {
  instance.interceptors.request.use(
    function (config) {
      // Do something before request is sent
      const token = LocalStorageService.getItem(AUTH_TOKEN_KEY);

      if (
        token &&
        typeof token === 'string' &&
        !config['headers']['Authorization']
      )
        config['headers']['Authorization'] = `Bearer ${token}`;

      return config;
    },
    function (error) {
      // Do something with request error
      return Promise.reject(error);
    }
  );
};

// Add a response interceptor
export const responseInterceptor = (instance: AxiosInstance) => {
  instance.interceptors.response.use(
    function (response) {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      return response;
    },
    function (error) {
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error

      // if response is 401 reset user data and reroute to sign in
      if (error.statusCode === 401) {
        // useAuthStore.getState().resetUserDetails();
        LocalStorageService.removeItem(AUTH_TOKEN_KEY);
        // signOut();
        window.location.href = '/';
      }

      return Promise.reject(error);
    }
  );
};
