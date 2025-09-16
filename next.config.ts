import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['www.staradvertiser.com'], // allow this domain
  }
  /* config options here */
};

export default nextConfig;

