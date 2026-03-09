import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const auth = betterAuth({
    database: prismaAdapter(prisma, {
        provider: "postgresql",
    }),
    
    // Si estamos en Vercel, usamos su variable automática, si no, localhost
    baseURL: process.env.BETTER_AUTH_URL || (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000"),
    
    advanced: {
        useSecureCookies: process.env.NODE_ENV === "production",
    },

    // Esto permite que las URLs de previsualización de Vercel funcionen sin CORS
    trustedOrigins: [
        "http://localhost:3000",
        "https://prueba-tecnica-fullstack-sable.vercel.app",
        process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "",
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