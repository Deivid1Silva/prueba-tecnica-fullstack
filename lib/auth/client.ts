import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
    // Usamos ruta relativa para que funcione tanto en local como en Vercel sin fallos
    baseURL: typeof window !== "undefined" ? window.location.origin : undefined,
    user: {
        additionalFields: {
            role: {
                type: "string",
            },
        },
    },
});