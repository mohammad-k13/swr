import type { NextConfig } from "next";

const nextConfig: NextConfig = {
      /* config options here */
      reactStrictMode: false,
      images: {
            remotePatterns: [
                  {
                        hostname: "picsum.photos",
                  },
                  {
                        hostname: "loremflickr.com",
                  },
            ],
      },
};

export default nextConfig;
