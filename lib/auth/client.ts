import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
    // Detecta automáticamente si está en Vercel o local
    baseURL: typeof window !== "undefined" ? window.location.origin : process.env.NEXT_PUBLIC_BETTER_AUTH_URL,
    user: {
        additionalFields: {
            role: {
                type: "string",
            },
        },
    },
});