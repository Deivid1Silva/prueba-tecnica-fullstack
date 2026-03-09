import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const auth = betterAuth({
    database: prismaAdapter(prisma, {
        provider: "postgresql",
    }),
    // URL base de producción (configurada en Vercel)
    baseURL: process.env.BETTER_AUTH_URL || "http://localhost:3000",
    
    // Configuración de seguridad para Vercel
    advanced: {
        useSecureCookies: process.env.NODE_ENV === "production",
    },

    // Orígenes permitidos para evitar el error 403
    trustedOrigins: [
        "http://localhost:3000",
        "https://prueba-tecnica-fullstack-sable.vercel.app"
    ],

    socialProviders: {
        github: {
            clientId: process.env.GITHUB_CLIENT_ID!,
            clientSecret: process.env.GITHUB_CLIENT_SECRET!,
        },
    },
    // Sincronización con tu modelo de Prisma
    user: {
        additionalFields: {
            role: {
                type: "string",
                defaultValue: "ADMIN",
            },
            phone: {
                type: "string",
                required: false,
            }
        },
    },
});