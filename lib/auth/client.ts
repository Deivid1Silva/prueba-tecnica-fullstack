import { createAuthClient } from "better-auth/react";

// El cliente no necesita la definición de 'user' aquí, 
// solo necesita saber dónde está la API.
export const authClient = createAuthClient({
    // Al dejar baseURL vacío, usa la ruta relativa del dominio actual
    baseURL: typeof window !== "undefined" ? window.location.origin : undefined,
});