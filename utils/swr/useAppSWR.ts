import axios, { Method } from "axios";
import useSWR from "swr";
import { swrFetcher } from "../fetcher";

interface IUseAppSWR<T, B> {
      key: readonly [string, B] | null;
      method: Method;
      asQueryParams?: boolean;
      swrOptions?: Parameters<typeof useSWR<T, any>>[2];
}

export function useAppSWR<T = any, B = Record<string, any>>({
      key,
      method,
      swrOptions,
      asQueryParams = false,
}: IUseAppSWR<T, B>) {
      const fetcher = async (args: readonly [string, B]): Promise<T> => {
            const [_url, body] = args;
            return swrFetcher<B, T>({ url: _url, body, method, asQueryParams });
          };

      return useSWR<T>(key, fetcher, swrOptions);
}
