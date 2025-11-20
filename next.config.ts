import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Disable ESLint during builds for Docker/production
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Disable TypeScript errors during builds (optional - remove if you want type checking)
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;


