import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [new URL('https://slp9dd7tn1.ufs.sh/**')],
  },
};

export default nextConfig;
