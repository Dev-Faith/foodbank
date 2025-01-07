import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.mp3$/, // Matches .mp3 files
      use: {
        loader: "file-loader",
        options: {
          publicPath: "/_next/static/media/", // Path for serving files
          outputPath: "static/media/", // Path for storing files
          name: "[name].[ext]", // File naming convention
        },
      },
    });
    return config; // Return the modified config
  },
};

export default nextConfig;
