import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Las URLs del proyecto se sirven con barra final: /control-de-accesos/
  trailingSlash: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
