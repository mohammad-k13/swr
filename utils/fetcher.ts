import axios, { AxiosRequestConfig, Method } from "axios";
import { appAxios } from "./axios";

interface ISwrFetcher<B, T> {
      body: B;
      url: string;
      method: Method;
      asQueryParams: boolean;
}
export function swrFetcher<B, T>({ body, method, url, asQueryParams }: ISwrFetcher<B, T>): Promise<T> {
      const axiosMethod = method.toLowerCase() as keyof typeof axios;
      const config: AxiosRequestConfig<B> = {}; //

      const response = appAxios['get'](url, config).then(res => res.data as T);
      return response
}
