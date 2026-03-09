/** @type {import('next').NextConfig} */
const nextConfig = {
  // Obligatorio para quitar el error 'Unexpected token export'
  transpilePackages: ["better-auth"],
  
  serverExternalPackages: ["@prisma/client", "better-auth"],
  
  experimental: {
    esmExternals: "loose",
  },

  typescript: {
    ignoreBuildErrors: true,
  },
  
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;