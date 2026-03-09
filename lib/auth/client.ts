import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
    // Prioridad: Variable -> URL actual del navegador -> Fallback seguro
    baseURL: process.env.NEXT_PUBLIC_BETTER_AUTH_URL || 
             (typeof window !== "undefined" ? window.location.origin : "https://prueba-tecnica-fullstack-sable.vercel.app"),
    user: {
        additionalFields: {
            role: {
                type: "string",
            },
        },
    },
});