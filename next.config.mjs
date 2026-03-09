/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["better-auth"],
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  env: {
    NEXT_PUBLIC_BETTER_AUTH_URL: process.env.NEXT_PUBLIC_BETTER_AUTH_URL,
  },
};

export default nextConfig;