/** @type {import('next').NextConfig} */
const nextConfig = {
  // Eliminado transpilePackages para evitar el conflicto con serverExternalPackages
  
  serverExternalPackages: ["@prisma/client", "better-auth"],

  typescript: {
    ignoreBuildErrors: true,
  },
  
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;