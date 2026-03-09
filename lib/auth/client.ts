import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
    // Asegúrate de que apunte a tu URL base
    baseURL: process.env.NEXT_PUBLIC_BETTER_AUTH_URL || "http://localhost:3000",
    // EXTENDEMOS LOS TIPOS DEL USUARIO AQUÍ:
    user: {
        additionalFields: {
            role: {
                type: "string",
            },
        },
    },
});