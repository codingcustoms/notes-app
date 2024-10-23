// import { newAbortSignal } from '@/lib/utils';
import axios, {
  AxiosHeaders,
  AxiosHeaderValue,
  AxiosInstance,
  HeadersDefaults,
} from 'axios';
import { requestInterceptor, responseInterceptor } from './interceptors';

export class HttpService {
  #BASE_URL = import.meta.env.VITE_SERVER_URL;
  #API_VERSION = '';
  #DEFAULT_TIMEOUT = 30000;
  #DEFAULT_ABORT_TIMEOUT = this.#DEFAULT_TIMEOUT;
  #instance: AxiosInstance;

  constructor() {
    this.#instance = axios.create({
      baseURL: `${this.#BASE_URL}${this.#API_VERSION}`,
      timeout: this.#DEFAULT_TIMEOUT,
      headers: this.getHeaders(),
    });

    requestInterceptor(this.#instance);
    responseInterceptor(this.#instance);
  }

  getHeaders(options?: AxiosHeaders) {
    let headers: AxiosHeaders = {} as AxiosHeaders;

    if (options) {
      headers = options!;
    }

    if (!headers['Content-Type']) {
      headers['Content-Type'] = 'application/json';
    }

    // prevent axios from caching the API data
    headers['Cache-Control'] = 'no-cache';
    return headers;
  }

  setBaseURL(url = this.#BASE_URL, apiVersion = this.#API_VERSION) {
    this.#instance.defaults.baseURL = `${url}${apiVersion}`;
  }

  setTimeout(timeout = this.#DEFAULT_TIMEOUT) {
    this.#instance.defaults.timeout = timeout;
  }

  setAbortTimeout(timeout = this.#DEFAULT_ABORT_TIMEOUT) {
    this.#DEFAULT_ABORT_TIMEOUT = timeout;
  }

  setHeaders(headers?: HeadersDefaults & { [key: string]: AxiosHeaderValue }) {
    this.#instance.defaults.headers = headers!;
  }

  async POST({ url, data, params, configs }: TMutationRequest) {
    return this.#instance.post(url, data, {
      params,
      headers: this.getHeaders(),
      //   signal: newAbortSignal(this.#DEFAULT_ABORT_TIMEOUT),
      ...configs,
    });
  }

  async GET({ url, params, configs }: TQueryRequest) {
    return this.#instance.get(url, {
      params,
      headers: this.getHeaders(),
      //   signal: newAbortSignal(this.#DEFAULT_ABORT_TIMEOUT),
      ...configs,
    });
  }

  async PUT({ url, data, params, configs }: TMutationRequest) {
    return this.#instance.put(url, data, {
      params,
      headers: this.getHeaders(),
      //   signal: newAbortSignal(this.#DEFAULT_ABORT_TIMEOUT),
      ...configs,
    });
  }

  async PATCH({ url, data, params, configs }: TMutationRequest) {
    return this.#instance.patch(url, data, {
      params,
      headers: this.getHeaders(),
      //   signal: newAbortSignal(this.#DEFAULT_ABORT_TIMEOUT),
      ...configs,
    });
  }

  async DELETE({ url, params, configs }: TQueryRequest) {
    return this.#instance.delete(url, {
      params,
      headers: this.getHeaders(),
      //   signal: newAbortSignal(this.#DEFAULT_ABORT_TIMEOUT),
      ...configs,
    });
  }
}
