import axios from "axios";
import { toast } from "sonner";

export const appAxios = axios.create({
      baseURL: "https://687769d4dba809d901ef34eb.mockapi.io/",
      headers: {
            "Content-Type": "application/json",
      },
});

appAxios.interceptors.response.use(
      (response) => response,
      async (err) => {
            const errorMsg = err.response.message || "Something went wrong";
            toast.error(errorMsg);

            if(err.request) {
                  console.log('err.request', err.request);
                  toast.error("Faild to Fetch")
            }
      }
);
