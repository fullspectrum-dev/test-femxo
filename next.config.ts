import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  distDir: process.env.NEXT_DIST_DIR || ".next",
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    resolveAlias:
      process.env.NODE_ENV === "production"
        ? {
            "@/features/auth/services/demo-auth":
              "./src/features/auth/services/demo-auth-disabled.ts",
          }
        : {},
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;