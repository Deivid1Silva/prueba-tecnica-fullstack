import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
    // baseURL vacío para usar rutas relativas y evitar problemas de CORS
    baseURL: typeof window !== "undefined" ? window.location.origin : undefined,
});