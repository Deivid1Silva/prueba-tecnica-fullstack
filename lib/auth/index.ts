import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const auth = betterAuth({
    database: prismaAdapter(prisma, {
        provider: "postgresql",
    }),
    // En el servidor sí usamos la variable de entorno
    baseURL: process.env.BETTER_AUTH_URL || "http://localhost:3000",
    
    // Permitimos que confíe en el proxy de Vercel
    advanced: {
        useSecureCookies: process.env.NODE_ENV === "production",
    },

    trustedOrigins: [
        "http://localhost:3000",
        "https://prueba-tecnica-fullstack-sable.vercel.app",
    ],

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