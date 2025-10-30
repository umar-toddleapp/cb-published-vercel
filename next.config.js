const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    // Required for static export (CSR): Next.js Image Optimization API doesn't work without a server
    unoptimized: true,
  },

  webpack: config => {
    // Add aliases for submodule
    config.resolve.alias = {
      ...config.resolve.alias,
      "@/common-components": path.resolve(
        __dirname,
        "src/subModules/curriculum-blueprint-common-components/src"
      ),
    };

    return config;
  },
};

module.exports = nextConfig;
