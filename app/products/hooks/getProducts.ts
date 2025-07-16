import { cacheKeys } from "@/utils/swr/cachekeys";
import { useAppSWR } from "@/utils/swr/useAppSWR";

export interface IProduct {
      Name: string;
      Price: string;
      Banner: string;
      description: string;
      Image1: string;
      Image2: string;
      Image3: string;
      id: string;
}

export function getProducts() {
      const key = cacheKeys.get_products();
      return useAppSWR<IProduct[], null>({ key, method: "GET" });
}
