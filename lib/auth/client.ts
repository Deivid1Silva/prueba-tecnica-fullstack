import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
    // Si la variable de Vercel falla, intentará usar la ruta relativa /api/auth
    baseURL: process.env.NEXT_PUBLIC_BETTER_AUTH_URL || window.location.origin,
    user: {
        additionalFields: {
            role: { type: "string" },
        },
    },
});