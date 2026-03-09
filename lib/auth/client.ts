import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
    // Al usar cadena vacía o undefined, Better Auth usa la ruta relativa /api/auth
    // Esto evita errores de "localhost" en producción
    baseURL: typeof window !== "undefined" ? window.location.origin : undefined,
    user: {
        additionalFields: {
            role: {
                type: "string",
            },
        },
    },
});