import type { NextConfig } from "next";
import { basePath } from './lib/constants';

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  output: "export",
  images: { unoptimized: true },
  basePath: basePath
};

export default nextConfig;
