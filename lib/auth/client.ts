import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
    // IMPORTANTE: Al dejarlo vacío o usar la URL actual, evitamos el error de CORS
    // porque el origen y el destino serán siempre el mismo.
    baseURL: typeof window !== "undefined" ? window.location.origin : process.env.NEXT_PUBLIC_BETTER_AUTH_URL,
    user: {
        additionalFields: {
            role: {
                type: "string",
            },
        },
    },
});