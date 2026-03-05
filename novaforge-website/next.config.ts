import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Remove output: "export" to support API routes
  // output: "export",
  // distDir: "dist",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  trailingSlash: true,
};

export default nextConfig;
