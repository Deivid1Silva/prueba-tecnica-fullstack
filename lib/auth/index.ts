import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Detectamos si estamos en producción para configurar los orígenes permitidos
const isProd = process.env.NODE_ENV === "production";
const vercelUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : null;

export const auth = betterAuth({
    database: prismaAdapter(prisma, {
        provider: "postgresql",
    }),
    // Usamos la URL base de las variables de entorno o localhost
    baseURL: process.env.BETTER_AUTH_URL || "http://localhost:3000",
    
    // Solución al ERROR: Invalid origin
    // Permitimos explícitamente el dominio de producción y el actual de Vercel
    trustedOrigins: [
        "http://localhost:3000",
        "https://prueba-tecnica-fullstack-sable.vercel.app",
        vercelUrl as string,
    ].filter(Boolean),

    socialProviders: {
        github: {
            clientId: process.env.GITHUB_CLIENT_ID!,
            clientSecret: process.env.GITHUB_CLIENT_SECRET!,
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