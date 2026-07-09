import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: process.env.GITHUB_ACTIONS ? "/portfolio" : "",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
