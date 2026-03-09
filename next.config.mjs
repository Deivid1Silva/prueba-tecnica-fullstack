/** @type {import('next').NextConfig} */
const nextConfig = {
  // ELIMINADO: transpilePackages: ["better-auth"], 
  // Esto causaba el conflicto con serverExternalPackages

  serverExternalPackages: ["@prisma/client", "better-auth"],

  typescript: {
    ignoreBuildErrors: true,
  },
  
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;