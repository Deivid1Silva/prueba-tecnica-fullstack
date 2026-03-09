import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Determinamos la URL base de forma segura para el Build de Vercel
const getBaseUrl = () => {
  if (process.env.BETTER_AUTH_URL) return process.env.BETTER_AUTH_URL;
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  // Cambia esto por tu dominio real de Vercel para mayor seguridad durante el build
  return "https://prueba-tecnica-fullstack-sable.vercel.app";
};

export const auth = betterAuth({
    database: prismaAdapter(prisma, {
        provider: "postgresql",
    }),
    
    // Forzamos una URL absoluta para que el build no falle
    baseURL: getBaseUrl(),
    
    advanced: {
        useSecureCookies: process.env.NODE_ENV === "production",
    },

    trustedOrigins: [
        "http://localhost:3000",
        "https://prueba-tecnica-fullstack-sable.vercel.app"
    ],

    socialProviders: {
        github: {
            clientId: process.env.GITHUB_CLIENT_ID || "dummy_id",
            clientSecret: process.env.GITHUB_CLIENT_SECRET || "dummy_secret",
        },
    },
    user: {
        additionalFields: {
            role: {
                type: "string",
                defaultValue: "ADMIN",
            },
        },
    },
});