/** @type {import('next').NextConfig} */
const nextConfig = {
  serverExternalPackages: ["@prisma/client", "better-auth"],
  
  // Forzamos a que las librerías se comporten bien con ESM
  transpilePackages: ["better-auth"],

  typescript: {
    ignoreBuildErrors: true,
  },
  
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;