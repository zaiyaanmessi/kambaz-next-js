import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,  // Add this line
  },
  typescript: {
    ignoreBuildErrors: true,  // Add this line too
  },
};

export default nextConfig;