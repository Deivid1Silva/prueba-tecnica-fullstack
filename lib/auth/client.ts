import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
    // Al no definir baseURL, el cliente usará automáticamente 
    // la ruta relativa /api/auth del dominio donde esté corriendo.
});