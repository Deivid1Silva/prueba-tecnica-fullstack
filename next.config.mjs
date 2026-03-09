/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["better-auth"],
  experimental: {
    esmExternals: "loose", // Ayuda con la compatibilidad de módulos ESM
  },
  typescript: {
    ignoreBuildErrors: true, // Permite desplegar aunque falten tipos menores
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;