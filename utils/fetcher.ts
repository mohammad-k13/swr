import axios, { AxiosRequestConfig, Method, Axios, AxiosInstance } from "axios";
import { appAxios } from "./axios";

interface ISwrFetcher<B> {
      body: B;
      url: string;
      method: Method;
      asQueryParams: boolean;
}
export function swrFetcher<B, T>({ body, method, url, asQueryParams }: ISwrFetcher<B>): Promise<T> {
      const axiosMethod = method.toLowerCase() as keyof typeof Axios;
      const config: AxiosRequestConfig<B> = {};

      const response = (appAxios[axiosMethod] as AxiosInstance)<T>(url, config).then(({ data }) => data);
      return response;
}
