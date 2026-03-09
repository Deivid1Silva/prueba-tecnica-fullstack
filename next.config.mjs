/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["better-auth"],

  serverExternalPackages: ["@prisma/client", "better-auth"],

  typescript: {
    ignoreBuildErrors: true,
  },

  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;