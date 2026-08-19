import type { NextConfig } from "next";

const r2Domain = process.env.NEXT_PUBLIC_R2_ASSET_URL
  ? new URL(process.env.NEXT_PUBLIC_R2_ASSET_URL).hostname
  : "";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.ctfassets.net" },
      ...(r2Domain ? [{ protocol: "https" as const, hostname: r2Domain }] : []),
    ],
  },
  // Optimize build performance and memory usage
  experimental: {
    // Reduce memory usage during build
    workerThreads: false,
    // Optimize bundle size
    optimizePackageImports: ['react-icons', 'framer-motion'],
  },
  // Reduce build memory usage
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Optimize client-side bundle
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          default: {
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true,
          },
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            priority: -10,
            chunks: 'all',
          },
        },
      };
    }
    return config;
  },
  output: "standalone",
};

export default nextConfig;
