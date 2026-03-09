import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const auth = betterAuth({
    database: prismaAdapter(prisma, {
        provider: "postgresql",
    }),
    // Asegúrate de que apunte a la URL de producción o localhost según el entorno
    baseURL: process.env.BETTER_AUTH_URL || "http://localhost:3000",
    
    // AGREGA ESTO: Permite que Better Auth acepte peticiones de tu dominio en Vercel
    trustedOrigins: [
        "https://prueba-tecnica-fullstack-sable.vercel.app",
        "http://localhost:3000"
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