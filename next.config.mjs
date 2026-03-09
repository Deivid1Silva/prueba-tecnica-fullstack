/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["better-auth"],

  experimental: {
    serverComponentsExternalPackages: ["@prisma/client"],
  },

  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;