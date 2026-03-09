/** @type {import('next').NextConfig} */
const nextConfig = {
  serverExternalPackages: ["@prisma/client", "better-auth"],
  
  experimental: {
    esmExternals: false, // Esto soluciona el error de SyntaxError: Unexpected token 'export'
  },

  typescript: {
    ignoreBuildErrors: true,
  },
  
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;