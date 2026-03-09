import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
    // Prioridad 1: Variable de Vercel
    // Prioridad 2: Localhost (solo si la variable no existe)
    baseURL: process.env.NEXT_PUBLIC_BETTER_AUTH_URL || "http://localhost:3000",
    user: {
        additionalFields: {
            role: {
                type: "string",
            },
        },
    },
});