import { auth } from "@/lib/auth";
import { toNextJsHandler } from "better-auth/next-js";

// Exportamos directamente el handler. 
// toNextJsHandler ya detecta si es Pages Router o App Router internamente.
export default toNextJsHandler(auth);